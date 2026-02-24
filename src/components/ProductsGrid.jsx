import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ShoppingBag, BookOpen, Laptop, TrendingUp, Search, Filter } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import products from '../data/affiliateLinks.json';

const categories = [
    { id: 'all', labelKey: 'home.products.cat.all', icon: ShoppingBag },
    { id: 'tech', labelKey: 'home.products.cat.tech', icon: Laptop },
    { id: 'finance', labelKey: 'home.products.cat.finance', icon: TrendingUp },
    { id: 'books', labelKey: 'home.products.cat.books', icon: BookOpen }
];

const ProductsGrid = () => {
    const { t } = useLanguage();
    const [filter, setFilter] = useState('all');
    const [search, setSearch] = useState('');

    const filteredProducts = products.filter(p => {
        const matchesFilter = filter === 'all' || p.category === filter;
        const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase()) ||
            p.subtitle.toLowerCase().includes(search.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    return (
        <section className="py-24 container mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
                <div className="max-w-xl">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tighter uppercase">
                        {t('home.products.title')}
                    </h2>
                    <p className="text-slate-400 text-lg font-light leading-relaxed">
                        {t('home.products.desc')} <span className="text-amber-500 font-medium">{t('home.products.descHighlight')}</span>
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                    {/* Search Bar */}
                    <div className="relative group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-amber-500 transition-colors" size={18} />
                        <input
                            type="text"
                            placeholder="Search arsenal..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="bg-white/5 border border-white/10 rounded-2xl py-3 pl-12 pr-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-amber-500/50 focus:bg-white/[0.08] transition-all min-w-[260px]"
                        />
                    </div>
                </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 mb-12">
                {categories.map((cat) => (
                    <button
                        key={cat.id}
                        onClick={() => setFilter(cat.id)}
                        className={`flex items-center gap-2 px-6 py-2.5 rounded-full border transition-all duration-300 ${filter === cat.id
                            ? 'bg-amber-500 border-amber-500 text-slate-950 font-bold shadow-lg shadow-amber-500/20'
                            : 'bg-white/5 border-white/10 text-slate-400 hover:border-white/20 hover:bg-white/10'
                            }`}
                    >
                        <cat.icon size={16} />
                        <span className="text-xs uppercase tracking-widest font-black">{t(cat.labelKey)}</span>
                    </button>
                ))}
            </div>

            <motion.div
                layout
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
                <AnimatePresence mode="popLayout">
                    {filteredProducts.map((product, idx) => (
                        <motion.div
                            key={product.id}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3, delay: idx * 0.05 }}
                        >
                            <a
                                href={product.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative block p-8 rounded-[2rem] bg-gradient-to-br from-white/[0.03] to-white/[0.08] border border-white/10 hover:border-amber-500/40 transition-all h-full overflow-hidden"
                            >
                                {/* Glow Effect */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-amber-500/10 transition-all" />

                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="p-3 bg-amber-500/10 rounded-2xl group-hover:scale-110 transition-transform text-2xl">
                                            {product.icon || '🛍️'}
                                        </div>
                                        <div className="p-2 bg-white/5 rounded-xl group-hover:bg-amber-500 group-hover:text-slate-950 text-slate-500 transition-all">
                                            <ExternalLink size={16} />
                                        </div>
                                    </div>

                                    <div className="mt-auto">
                                        <span className="inline-block px-3 py-1 bg-white/5 rounded-lg text-[10px] font-black tracking-widest uppercase text-amber-500 mb-3">
                                            {product.category}
                                        </span>
                                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-200 transition-colors line-clamp-2">
                                            {product.title}
                                        </h3>
                                        <p className="text-sm text-slate-400 font-light line-clamp-2 italic">
                                            {product.subtitle}
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {filteredProducts.length === 0 && (
                <div className="py-20 text-center">
                    <p className="text-slate-500 text-lg">No items found matching your filter/search.</p>
                </div>
            )}
        </section>
    );
};

export default ProductsGrid;
