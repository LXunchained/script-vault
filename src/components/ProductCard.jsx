import { ArrowRight, BookOpen, Share2, Command, Check } from 'lucide-react';

import { Link } from 'react-router-dom';

const icons = {
    BookOpen: BookOpen,
    Share2: Share2,
    Command: Command
};

const ProductCard = ({ product }) => {
    const Icon = icons[product.icon] || Command;

    return (
        <Link to={`/product/${product.id}`} className="card product-card flex flex-col h-full bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-violet-500/50 transition-all duration-300 group cursor-pointer block">
            <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-slate-800 rounded-lg group-hover:bg-violet-500/10 group-hover:text-violet-400 transition-colors">
                        <Icon size={24} />
                    </div>
                    {product.badge && (
                        <span className="px-3 py-1 text-xs font-semibold bg-violet-500/10 text-violet-400 rounded-full border border-violet-500/20">
                            {product.badge}
                        </span>
                    )}
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-violet-400 transition-colors">
                    {product.title}
                </h3>

                <p className="text-slate-400 text-sm mb-6 leading-relaxed flex-1">
                    {product.shortDescription || product.description}
                </p>

                <div className="space-y-3 mb-6">
                    {product.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-slate-300">
                            <Check size={16} className="text-violet-500" />
                            <span>{feature}</span>
                        </div>
                    ))}
                    {product.features.length > 3 && (
                        <div className="text-xs text-slate-500 pl-6">
                            + {product.features.length - 3} more features
                        </div>
                    )}
                </div>

                <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-800">
                    <div className="flex flex-col">
                        <span className="text-xs text-slate-500">Starting at</span>
                        <span className="text-2xl font-bold text-white">${product.price}</span>
                    </div>
                    <span className="btn btn-primary text-sm group-hover:scale-105 transition-transform flex items-center text-white bg-violet-600 hover:bg-violet-500 px-4 py-2 rounded-lg font-medium">
                        View Details <ArrowRight size={16} className="ml-2" />
                    </span>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
