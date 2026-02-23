import { motion } from 'framer-motion';
import { ArrowRight, Code, Zap, CheckCircle, Globe, ShieldCheck } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import LinkHub from '../components/LinkHub';


const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } }
};

const Home = () => {
    return (
        <div className="min-h-screen bg-[#020617] text-white font-sans antialiased overflow-hidden selection:bg-emerald-500/30">
            {/* Background Blob Effects */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-emerald-500/5 rounded-full blur-[120px] animate-pulse-slow" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-emerald-600/5 rounded-full blur-[120px] animate-pulse-slow delay-700" />
            </div>

            {/* Hero Section */}
            <motion.section
                initial="initial"
                animate="animate"
                variants={staggerContainer}
                className="relative pt-32 pb-24 px-6 container mx-auto text-center flex flex-col items-center z-10"
            >
                <motion.div variants={fadeInUp} className="mb-6 flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-400 font-bold uppercase tracking-widest animate-glow">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Bâtissez votre souveraineté financière
                </motion.div>

                <motion.h1 variants={fadeInUp} className="text-6xl md:text-8xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-emerald-500 leading-[1.1]">
                    Richesse <br className="hidden md:block" /> Souveraine
                </motion.h1>

                <motion.p variants={fadeInUp} className="text-lg md:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
                    Outils d'automatisation de niveau professionnel conçus pour scaler votre édition KDP, votre marketing sur les réseaux sociaux et vos opérations numériques.
                </motion.p>

                <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6 justify-center">
                    <button className="btn btn-primary bg-emerald-600 hover:bg-emerald-500 text-white px-10 py-5 rounded-2xl font-bold shadow-2xl shadow-emerald-500/20 transition-all hover:scale-105 active:scale-95 flex items-center gap-3 text-lg">
                        Parcourir les Outils <Code size={22} />
                    </button>
                    <button className="btn btn-secondary bg-white/5 hover:bg-white/10 text-white px-10 py-5 rounded-2xl font-bold border border-white/10 transition-all hover:scale-105 active:scale-95 flex items-center gap-3 text-lg backdrop-blur-md">
                        En savoir plus <ArrowRight size={22} />
                    </button>
                </motion.div>
            </motion.section>

            {/* Stats / Trust Section */}
            <section className="py-20 relative z-10 border-y border-white/5 bg-white/[0.02] backdrop-blur-sm">
                <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                    {[
                        { label: 'Téléchargements', value: '15k+', icon: Globe },
                        { label: 'Clients Actifs', value: '8.2k', icon: CheckCircle },
                        { label: 'Efficacité', value: '+300%', icon: Zap },
                        { label: 'Sécurité', value: 'Enterprise', icon: ShieldCheck },
                    ].map((stat, i) => (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            key={i}
                            className="flex flex-col items-center gap-2 group"
                        >
                            <stat.icon size={20} className="text-emerald-500 mb-2 group-hover:scale-110 transition-transform" />
                            <span className="text-4xl font-black text-white tracking-tighter">{stat.value}</span>
                            <span className="text-xs text-slate-500 font-bold uppercase tracking-[0.2em]">{stat.label}</span>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Link Hub / Affiliate Deals */}
            <LinkHub />


            {/* Products Grid */}
            <section className="py-32 container mx-auto px-6 relative z-10" id="products">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">Outils Vedettes</h2>
                        <p className="text-slate-400 max-w-xl text-lg font-light">
                            Scripts d'automatisation faits main pour remplacer le travail manuel ingrat. <span className="text-emerald-400 font-medium">Libérez votre temps.</span>
                        </p>
                    </div>
                    <button className="group text-emerald-400 hover:text-emerald-300 font-bold flex items-center gap-2 transition-all uppercase tracking-widest text-sm">
                        Tout voir <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {products.map((product, idx) => (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            key={product.id}
                        >
                            <ProductCard product={product} />
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-40 relative z-10 overflow-hidden">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-5xl mx-auto bg-gradient-to-br from-emerald-600/20 via-slate-900/40 to-slate-900/60 border border-emerald-500/20 rounded-[3rem] p-16 text-center relative overflow-hidden group hover:border-emerald-500/40 transition-all duration-500 shadow-3xl"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-emerald-500/20 transition-all" />

                        <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-tight relative z-10">
                            Prêt à décupler <br /> vos revenus ?
                        </h2>
                        <p className="text-slate-300 text-xl mb-12 relative z-10 font-light max-w-2xl mx-auto">
                            Rejoignez des centaines de créateurs qui utilisent nos outils pour bâtir leur empire numérique sans effort manuel.
                        </p>
                        <button className="relative z-10 btn btn-primary bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-12 py-5 rounded-2xl font-black transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-emerald-500/20 text-lg uppercase tracking-tight">
                            Commencer l'aventure <Zap size={20} className="ml-2 inline-block" />
                        </button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;
