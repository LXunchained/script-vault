import { ArrowRight, BookOpen, Share2, Command, Check, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const icons = {
    BookOpen: BookOpen,
    Share2: Share2,
    Command: Command
};

const ProductCard = ({ product }) => {
    const Icon = icons[product.icon] || Command;

    return (
        <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="h-full"
        >
            <Link to={`/product/${product.id}`} className="group relative flex flex-col h-full bg-[#0f172a]/40 backdrop-blur-md border border-white/5 rounded-3xl overflow-hidden hover:border-emerald-500/30 transition-all duration-500 cursor-pointer block shadow-xl hover:shadow-emerald-500/10">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="p-8 flex-1 flex flex-col relative z-10">
                    <div className="flex justify-between items-start mb-6">
                        <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-emerald-500/20 group-hover:text-emerald-400 transition-all duration-500 group-hover:scale-110">
                            <Icon size={28} />
                        </div>
                        {product.badge && (
                            <span className="px-4 py-1.5 text-[10px] font-black uppercase tracking-widest bg-emerald-500/20 text-emerald-400 rounded-full border border-emerald-500/30 animate-pulse-slow">
                                {product.badge}
                            </span>
                        )}
                    </div>

                    <h3 className="text-2xl font-black text-white mb-3 group-hover:text-emerald-400 transition-colors tracking-tight">
                        {product.title}
                    </h3>

                    <p className="text-slate-400 text-sm mb-8 leading-relaxed flex-1 font-light">
                        {product.shortDescription || product.description}
                    </p>

                    <div className="space-y-4 mb-8">
                        {product.features.slice(0, 3).map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-3 text-sm text-slate-300 font-medium">
                                <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center">
                                    <Check size={12} className="text-emerald-500" />
                                </div>
                                <span>{feature}</span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-auto flex items-center justify-between pt-6 border-t border-white/5">
                        <div className="flex flex-col">
                            <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Investissement</span>
                            <span className="text-3xl font-black text-white">{product.price}€</span>
                        </div>
                        <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500 group-hover:translate-x-1">
                            <ArrowRight size={20} />
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};

export default ProductCard;
