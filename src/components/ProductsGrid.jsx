import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ShoppingBag, BookOpen, Laptop, TrendingUp, Search } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import products from '../data/affiliateLinks.json';

const categories = [
    { id: 'all', labelKey: 'home.products.cat.all', icon: ShoppingBag },
    { id: 'tech', labelKey: 'home.products.cat.tech', icon: Laptop },
    { id: 'finance', labelKey: 'home.products.cat.finance', icon: TrendingUp },
    { id: 'books', labelKey: 'home.products.cat.books', icon: BookOpen },
];

// Extract ASIN from Amazon URL for cover lookup
const getAmazonCoverUrl = (url) => {
    if (!url) return null;
    const match = url.match(/\/dp\/([A-Z0-9]{10})/);
    if (!match) return null;
    const asin = match[1];
    // Use Amazon's SL500 image CDN via Open Library fallback
    return `https://m.media-amazon.com/images/I/51${asin.slice(0, 5)}.jpg`;
};

// Build a reliable cover image URL using Open Library ISBN API
const getOpenLibraryCover = (url) => {
    if (!url) return null;
    const match = url.match(/\/dp\/([A-Z0-9]{10})/);
    if (!match) return null;
    const asin = match[1];
    return `https://covers.openlibrary.org/b/isbn/${asin}-M.jpg`;
};

function ProductCard({ product, idx }) {
    const [imgError, setImgError] = useState(false);
    const [imgSrc, setImgSrc] = useState(
        product.coverUrl ||
        `https://covers.openlibrary.org/b/isbn/${product.isbn || ''}-L.jpg`
    );

    const handleImgError = () => {
        // Fallback chain: placeholder gradient
        setImgError(true);
    };

    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.25, delay: Math.min(idx * 0.04, 0.3) }}
        >
            <a
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className="product-card"
            >
                {/* Book Cover Image */}
                {!imgError && product.isbn ? (
                    <img
                        src={imgSrc}
                        alt={product.title}
                        className="product-card-cover"
                        onError={handleImgError}
                        loading="lazy"
                    />
                ) : (
                    <div className="product-card-cover-placeholder">
                        <span className="text-4xl">{product.icon || '📖'}</span>
                    </div>
                )}

                {/* Hover arrow */}
                <div className="product-card-arrow">
                    <ExternalLink size={14} />
                </div>

                {/* Body */}
                <div className="product-card-body">
                    <span className="product-card-badge">{product.category}</span>
                    <h3 className="product-card-title">{product.title}</h3>
                    <p className="product-card-sub">{product.subtitle}</p>
                </div>
            </a>
        </motion.div>
    );
}

const ProductsGrid = () => {
    const { t } = useLanguage();
    const [filter, setFilter] = useState('all');
    const [search, setSearch] = useState('');

    const filteredProducts = products.filter(p => {
        const matchesFilter = filter === 'all' || p.category === filter;
        const matchesSearch =
            p.title.toLowerCase().includes(search.toLowerCase()) ||
            (p.subtitle || '').toLowerCase().includes(search.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    return (
        <section className="py-24 relative z-10">
            <div className="section-container">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-3 tracking-tighter">
                            {t('home.products.title')}
                        </h2>
                        <p className="text-slate-400 text-base leading-relaxed">
                            {t('home.products.desc')} <span className="text-amber-400 font-medium">{t('home.products.descHighlight')}</span>
                        </p>
                    </div>

                    {/* Search */}
                    <div className="relative group flex-shrink-0">
                        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-amber-500 transition-colors" size={16} />
                        <input
                            type="text"
                            placeholder="Search..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="bg-white/5 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-amber-500/50 focus:bg-white/[0.07] transition-all min-w-[200px]"
                        />
                    </div>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap gap-2.5 mb-10">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setFilter(cat.id)}
                            className={`flex items-center gap-2 px-5 py-2 rounded-full border text-xs font-black uppercase tracking-widest transition-all duration-200 ${filter === cat.id
                                    ? 'bg-amber-500 border-amber-500 text-slate-950 shadow-lg shadow-amber-500/25'
                                    : 'bg-white/4 border-white/10 text-slate-400 hover:border-white/20 hover:text-white hover:bg-white/8'
                                }`}
                        >
                            <cat.icon size={14} />
                            {t(cat.labelKey)}
                        </button>
                    ))}
                </div>

                <motion.div layout className="products-grid">
                    <AnimatePresence mode="popLayout">
                        {filteredProducts.map((product, idx) => (
                            <ProductCard key={product.id} product={product} idx={idx} />
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredProducts.length === 0 && (
                    <div className="py-20 text-center">
                        <p className="text-slate-500">Aucun résultat pour votre recherche.</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProductsGrid;
