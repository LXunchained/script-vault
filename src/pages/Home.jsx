import { ArrowRight, Code, Zap } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const Home = () => {
    return (
        <div className="min-h-screen bg-slate-900 text-white font-sans antialiased overflow-hidden selection:bg-violet-500/30">
            {/* Hero Section */}
            <section className="relative pt-32 pb-24 px-6 container mx-auto text-center flex flex-col items-center">
                <div className="absolute inset-x-0 -top-32 h-64 bg-gradient-to-b from-violet-500/10 to-transparent blur-3xl opacity-50 z-[-1]" />

                <div className="mb-6 flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700/50 text-xs text-slate-400 font-medium animate-fade-in">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Available for instant download
                </div>

                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-br from-white via-slate-200 to-slate-500 animate-fade-in delay-100 drop-shadow-sm">
                    Automate Your Empire.
                </h1>

                <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in delay-200">
                    Professional-grade scripts and tools designed to scale your KDP publishing, social media marketing, and digital operations.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-300">
                    <button className="btn btn-primary bg-violet-600 hover:bg-violet-500 text-white px-8 py-4 rounded-xl font-semibold shadow-lg shadow-violet-500/25 transition-all hover:scale-105 active:scale-95 flex items-center gap-2">
                        Browse Tools <Code size={20} />
                    </button>
                    <button className="btn btn-secondary bg-slate-800 hover:bg-slate-700 text-slate-200 px-8 py-4 rounded-xl font-semibold border border-slate-700 hover:border-slate-600 transition-all hover:scale-105 active:scale-95 flex items-center gap-2">
                        Learn More <ArrowRight size={20} />
                    </button>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-12 border-y border-slate-800 bg-slate-900/50 backdrop-blur-sm">
                <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {[
                        { label: 'Downloads', value: '15k+' },
                        { label: 'Active Users', value: '8.2k' },
                        { label: 'Efficiency Boost', value: '300%' },
                        { label: 'Support', value: '24/7' },
                    ].map((stat, i) => (
                        <div key={i} className="flex flex-col gap-1">
                            <span className="text-3xl font-bold text-white tracking-tighter">{stat.value}</span>
                            <span className="text-sm text-slate-500 font-medium uppercase tracking-wider">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Products Grid */}
            <section className="py-24 container mx-auto px-6" id="products">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Tools</h2>
                        <p className="text-slate-400 max-w-xl">
                            Hand-crafted automation scripts to replace manual grunt work. Built for creators by creators.
                        </p>
                    </div>
                    <button className="text-violet-400 hover:text-violet-300 font-medium flex items-center gap-2 transition-colors hidden md:flex">
                        View All <ArrowRight size={16} />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </section>

            {/* Footer CTA */}
            <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800">
                <div className="container mx-auto px-6 text-center">
                    <div className="max-w-3xl mx-auto bg-slate-900 border border-slate-800 rounded-3xl p-12 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full bg-grid-slate-800/[0.05] [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] pointer-events-none" />
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-violet-500/10 blur-[100px] rounded-full pointer-events-none" />

                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 relative z-10">
                            Ready to 10x your output?
                        </h2>
                        <p className="text-slate-400 text-lg mb-8 relative z-10">
                            Join hundreds of creators using our tools to build their digital empire.
                        </p>
                        <button className="relative z-10 btn btn-primary bg-white text-slate-950 hover:bg-slate-200 px-8 py-4 rounded-xl font-bold transition-all hover:scale-105 active:scale-95 shadow-xl shadow-white/5">
                            get_access_now() <Zap size={18} className="ml-2 inline-block text-violet-600" />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
