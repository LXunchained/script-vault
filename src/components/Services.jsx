import { motion } from 'framer-motion';
import { Calendar, BarChart2, Globe2, CheckCircle2 } from 'lucide-react';

const fadeInUp = { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 } };
const stagger = { animate: { transition: { staggerChildren: 0.1 } } };

const services = [
    {
        icon: BarChart2,
        color: "amber",
        title: "Audit Patrimonial",
        price: "150 \u20ac",
        duration: "1h",
        desc: "Analyse complete de votre situation financiere, bancaire et fiscale. Identification des optimisations prioritaires.",
        bullets: [
            "Bilan patrimonial complet",
            "Analyse fiscale expat",
            "Plan action personnalise",
        ],
    },
    {
        icon: Globe2,
        color: "emerald",
        title: "Setup Expatrie Complet",
        price: "750 \u20ac",
        duration: "Package",
        desc: "Accompagnement cle en main pour votre vie financiere a l'international : banques, fiscalite, investissements.",
        bullets: [
            "Ouverture comptes offshore",
            "Structure fiscale optimale",
            "Portefeuille investissement initial",
        ],
        highlighted: true,
    },
    {
        icon: Calendar,
        color: "violet",
        title: "Accompagnement Mensuel",
        price: "300 \u20ac/mois",
        duration: "Mensuel",
        desc: "Suivi regulier de votre patrimoine, acces prioritaire, revision de strategie chaque mois.",
        bullets: [
            "2 calls/mois",
            "Acces Telegram prive",
            "Revue de portefeuille mensuelle",
        ],
    },
];

const colorMap = {
    amber: { badge: "bg-amber-500/10 text-amber-400 border-amber-500/20", icon: "text-amber-400", check: "text-amber-400", btn: "bg-amber-500 hover:bg-amber-400 text-slate-950" },
    emerald: { badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20", icon: "text-emerald-400", check: "text-emerald-400", btn: "bg-emerald-500 hover:bg-emerald-400 text-slate-950" },
    violet: { badge: "bg-violet-500/10 text-violet-400 border-violet-500/20", icon: "text-violet-400", check: "text-violet-400", btn: "bg-violet-500 hover:bg-violet-400 text-white" },
};

const CALENDLY = "https://richesse-souveraine.com";

export default function Services() {
    return (
        <section id="services" className="py-24 relative z-10">
            <div className="section-container">
                <motion.div initial="initial" animate="animate" variants={stagger}
                    className="text-center mb-16">
                    <motion.div variants={fadeInUp}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs text-amber-400 font-bold uppercase tracking-widest mb-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                        Travaille avec moi
                    </motion.div>
                    <motion.h2 variants={fadeInUp}
                        className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tighter">
                        Services <span className="text-amber-400">Patrimoine</span>
                    </motion.h2>
                    <motion.p variants={fadeInUp} className="text-slate-400 max-w-xl mx-auto">
                        Accompagnement personnalise pour expatries et investisseurs francophones.
                    </motion.p>
                </motion.div>

                <motion.div initial="initial" animate="animate" variants={stagger}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {services.map((s) => {
                        const c = colorMap[s.color];
                        const Icon = s.icon;
                        return (
                            <motion.div key={s.title} variants={fadeInUp}
                                className={`relative rounded-2xl border p-8 flex flex-col gap-5 transition-all duration-300 hover:-translate-y-1 ${s.highlighted
                                        ? "bg-gradient-to-b from-amber-500/[0.07] to-transparent border-amber-500/30"
                                        : "bg-white/[0.02] border-white/8 hover:border-white/15"
                                    }`}>
                                {s.highlighted && (
                                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-amber-500 text-slate-950 text-xs font-black rounded-full uppercase tracking-widest">
                                        Recommande
                                    </span>
                                )}
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${c.badge} border`}>
                                    <Icon size={22} className={c.icon} />
                                </div>
                                <div>
                                    <div className="flex items-baseline gap-2 mb-1">
                                        <span className="text-2xl font-black text-white">{s.price}</span>
                                        <span className="text-slate-500 text-sm">{s.duration}</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-2">{s.title}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
                                </div>
                                <ul className="space-y-2 flex-1">
                                    {s.bullets.map((b) => (
                                        <li key={b} className="flex items-start gap-2 text-sm text-slate-300">
                                            <CheckCircle2 size={15} className={`${c.check} mt-0.5 flex-shrink-0`} />
                                            {b}
                                        </li>
                                    ))}
                                </ul>
                                <a href={CALENDLY} target="_blank" rel="noopener noreferrer"
                                    className={`w-full text-center py-3 rounded-xl text-sm font-bold transition-all duration-200 ${c.btn}`}>
                                    Reserver un appel
                                </a>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
