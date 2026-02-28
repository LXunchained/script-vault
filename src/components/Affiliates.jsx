import { motion } from 'framer-motion';
import { ExternalLink, TrendingUp, Shield, Globe2, Zap } from 'lucide-react';

const fadeInUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };
const stagger = { animate: { transition: { staggerChildren: 0.08 } } };

const partners = [
    {
        name: "Interactive Brokers",
        tag: "Investissement",
        icon: TrendingUp,
        color: "amber",
        desc: "La plateforme prefere des expats. Acces global, frais ultra-bas, marches mondiaux.",
        url: "https://ibkr.com/referral/louis624",
        cta: "Ouvrir un compte",
    },
    {
        name: "Wise",
        tag: "Banking",
        icon: Globe2,
        color: "emerald",
        desc: "Transferts internationaux sans frais caches. Compte multi-devises pour expatries.",
        url: "https://wise.com/invite/ahpc/louish756",
        cta: "Creer un compte",
    },
    {
        name: "Xapo Bank",
        tag: "Bitcoin Bank",
        icon: Shield,
        color: "orange",
        desc: "La seule banque souveraine qui combine Bitcoin et USD. Basee a Gibraltar.",
        url: "https://www.xapo.com",
        cta: "Decouvrir Xapo",
    },
    {
        name: "Revolut",
        tag: "Neobanque",
        icon: Zap,
        color: "violet",
        desc: "Compte bancaire global, trading crypto et actions, assurance voyage incluse.",
        url: "https://revolut.com/referral",
        cta: "Ouvrir gratuitement",
    },
];

const colorMap = {
    amber: "from-amber-500/[0.08] border-amber-500/20 text-amber-400",
    emerald: "from-emerald-500/[0.08] border-emerald-500/20 text-emerald-400",
    orange: "from-orange-500/[0.08] border-orange-500/20 text-orange-400",
    violet: "from-violet-500/[0.08] border-violet-500/20 text-violet-400",
};

export default function Affiliates() {
    return (
        <section id="outils" className="py-24 relative z-10">
            <div className="section-container">
                <motion.div initial="initial" animate="animate" variants={stagger}>
                    <motion.div variants={fadeInUp} className="text-center mb-14">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-400 font-bold uppercase tracking-widest mb-4">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            Mes outils recommandes
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tighter">
                            Outils que j&apos;utilise <span className="text-emerald-400">personnellement</span>
                        </h2>
                        <p className="text-slate-400 max-w-xl mx-auto text-sm">
                            Selection rigoureuse de plateformes pour expatries et investisseurs. Liens affilies — je touche une commission si vous vous inscrivez, sans cout supplementaire pour vous.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {partners.map((p) => {
                            const Icon = p.icon;
                            const c = colorMap[p.color];
                            return (
                                <motion.a
                                    key={p.name}
                                    variants={fadeInUp}
                                    href={p.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`group relative rounded-2xl border bg-gradient-to-b p-6 flex flex-col gap-4 hover:-translate-y-1 transition-all duration-300 ${c}`}>
                                    <div className="flex items-start justify-between">
                                        <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                                            <Icon size={20} className={c.split(" ").pop()} />
                                        </div>
                                        <ExternalLink size={14} className="text-slate-600 group-hover:text-slate-400 transition-colors" />
                                    </div>
                                    <div>
                                        <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">{p.tag}</span>
                                        <h3 className="text-white font-bold text-base mt-0.5">{p.name}</h3>
                                        <p className="text-slate-400 text-xs mt-1.5 leading-relaxed">{p.desc}</p>
                                    </div>
                                    <span className="mt-auto text-xs font-bold text-current group-hover:underline">
                                        {p.cta} &rarr;
                                    </span>
                                </motion.a>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
