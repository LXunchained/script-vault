import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';

const fadeInUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };
const stagger  = { animate: { transition: { staggerChildren: 0.1 } } };

const articles = [
    {
        tag: "Fiscalite Expat",
        title: "Comment rompre son domicile fiscal francais en partant a l'etranger",
        desc: "Les 3 criteres que l'administration fiscale francaise utilise pour determiner votre residence — et comment les satisfaire legalement.",
        readTime: "8 min",
        slug: "#blog",
        color: "amber",
    },
    {
        tag: "Investissement",
        title: "Pourquoi Interactive Brokers est la reference pour les investisseurs expatries",
        desc: "Frais, marches accessibles, fiscalite, securite : comparatif complet pour les francophones investissant depuis l'etranger.",
        readTime: "6 min",
        slug: "#blog",
        color: "emerald",
    },
    {
        tag: "Banking Offshore",
        title: "Les 4 meilleurs comptes bancaires pour expatries en 2025",
        desc: "Wise, Revolut, Xapo, N26 : lequel choisir selon ton pays de destination, ton niveau de patrimoine et tes usages.",
        readTime: "10 min",
        slug: "#blog",
        color: "violet",
    },
];

const colorBadge = {
    amber:   "bg-amber-500/10 text-amber-400 border-amber-500/20",
    emerald: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    violet:  "bg-violet-500/10 text-violet-400 border-violet-500/20",
};

export default function Blog() {
    return (
        <section id="blog" className="py-24 relative z-10">
            <div className="section-container">
                <motion.div initial="initial" animate="animate" variants={stagger}>
                    <motion.div variants={fadeInUp} className="flex items-end justify-between mb-12">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs text-violet-400 font-bold uppercase tracking-widest mb-4">
                                <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" />
                                Strategies & Analyses
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter">
                                Le <span className="text-violet-400">Blog</span>
                            </h2>
                        </div>
                        <a href="#newsletter"
                            className="hidden md:flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
                            Tout voir <ArrowRight size={16} />
                        </a>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {articles.map((a) => (
                            <motion.a key={a.title} variants={fadeInUp} href={a.slug}
                                className="group rounded-2xl border border-white/8 bg-white/[0.02] p-7 flex flex-col gap-4 hover:border-white/15 hover:-translate-y-1 transition-all duration-300">
                                <div className="flex items-center justify-between">
                                    <span className={`px-3 py-1 rounded-full text-xs font-bold border ${colorBadge[a.color]}`}>
                                        {a.tag}
                                    </span>
                                    <span className="flex items-center gap-1 text-xs text-slate-600">
                                        <Clock size={12} /> {a.readTime}
                                    </span>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-white font-bold leading-snug mb-2 group-hover:text-amber-400 transition-colors">
                                        {a.title}
                                    </h3>
                                    <p className="text-slate-500 text-sm leading-relaxed">{a.desc}</p>
                                </div>
                                <span className="text-xs text-slate-500 group-hover:text-slate-300 transition-colors flex items-center gap-1">
                                    Lire la suite <ArrowRight size={12} />
                                </span>
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
