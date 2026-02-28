import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, Download } from 'lucide-react';

const BEEHIIV_URL = "https://embeds.beehiiv.com/subscribe";
const GUIDE_URL = "https://richesse-souveraine.com/guide.html";

export default function Newsletter() {
    const [email, setEmail] = useState("");
    const [sent, setSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        window.open(`${BEEHIIV_URL}?email=${encodeURIComponent(email)}`, "_blank");
        setSent(true);
    };

    return (
        <section id="newsletter" className="py-24 relative z-10">
            <div className="section-container">
                <div className="relative rounded-3xl border border-amber-500/20 bg-gradient-to-br from-amber-500/[0.06] via-transparent to-violet-500/[0.04] p-12 md:p-16 overflow-hidden">
                    <div className="absolute -top-20 -right-20 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

                    <div className="relative flex flex-col md:flex-row gap-12 items-center">
                        <div className="flex-1">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs text-amber-400 font-bold uppercase tracking-widest mb-5">
                                <Mail size={12} /> La Lettre Souveraine
                            </div>
                            <h2 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tighter">
                                Strategies <span className="text-amber-400">patrimoine</span><br />chaque semaine
                            </h2>
                            <p className="text-slate-400 mb-6 leading-relaxed">
                                Optimisation fiscale, investissement international, setup expatrie — directement dans ta boite mail. Gratuit.
                            </p>
                            <a href={GUIDE_URL} target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-slate-300 hover:text-white hover:border-white/20 transition-all mb-2">
                                <Download size={15} className="text-amber-400" />
                                Guide gratuit : <strong className="text-white ml-1">Relocation Financiere</strong>
                            </a>
                        </div>

                        <div className="flex-1 w-full max-w-md">
                            {!sent ? (
                                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                                    <input
                                        type="email"
                                        required
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        placeholder="ton@email.com"
                                        className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-amber-500/50 transition-all text-sm"
                                    />
                                    <button type="submit"
                                        className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition-all duration-200">
                                        Rejoindre la lettre <ArrowRight size={16} />
                                    </button>
                                    <p className="text-xs text-slate-600 text-center">No spam. Desabonnement en 1 clic.</p>
                                </form>
                            ) : (
                                <div className="text-center py-8">
                                    <div className="w-16 h-16 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mx-auto mb-4">
                                        <Mail size={28} className="text-amber-400" />
                                    </div>
                                    <h3 className="text-white font-bold text-lg mb-2">Bienvenue dans la lettre !</h3>
                                    <p className="text-slate-400 text-sm">Verifie ta boite mail pour confirmer.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
