import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { ArrowLeft, Check, Terminal, Cpu, HelpCircle, Shield, Download } from 'lucide-react';
import { useState } from 'react';

const ProductDetails = () => {
    const { id } = useParams();
    const product = products.find(p => p.id === id);
    const [email, setEmail] = useState('');
    const [showModal, setShowModal] = useState(false);

    if (!product) {
        return (
            <div className="min-h-screen bg-slate-900 flex items-center justify-center text-white">
                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-4">Product Not Found</h2>
                    <Link to="/" className="text-violet-400 hover:text-violet-300 flex items-center gap-2 justify-center">
                        <ArrowLeft size={20} /> Back to Shop
                    </Link>
                </div>
            </div>
        );
    }

    const handlePurchase = (e) => {
        e.preventDefault();
        // Here you would integrate Stripe or another payment processor
        alert(`Thank you for your interest! We've logged your request for ${email}. You will be redirected to the payment gateway shortly.`);
        setShowModal(false);
        setEmail('');
    };

    return (
        <div className="min-h-screen bg-slate-900 text-white font-sans antialiased pb-24">
            {/* Nav Back */}
            <div className="container mx-auto px-6 py-8">
                <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                    <ArrowLeft size={18} /> Back to Products
                </Link>
            </div>

            {/* Hero Section */}
            <section className="container mx-auto px-6 mb-16">
                <div className="flex flex-col lg:flex-row gap-12 items-start">
                    <div className="flex-1">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="px-3 py-1 bg-violet-500/10 text-violet-400 rounded-full text-sm font-semibold border border-violet-500/20">
                                {product.badge}
                            </span>
                            <span className="flex items-center gap-1 text-slate-400 text-sm">
                                <Shield size={14} /> Verified & Secure
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                            {product.title}
                        </h1>

                        <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                            {product.description}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 items-center">
                            <button
                                onClick={() => setShowModal(true)}
                                className="w-full sm:w-auto btn btn-primary bg-violet-600 hover:bg-violet-500 text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-violet-500/25 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
                            >
                                Get Access Now <Download size={20} />
                            </button>
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold">${product.price}</span>
                                <span className="text-xs text-slate-500">One-time payment. Lifetime updates.</span>
                            </div>
                        </div>
                    </div>

                    {/* Technical Specs Card */}
                    <div className="w-full lg:w-1/3 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6">
                        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                            <Terminal size={20} className="text-violet-400" /> Technical Specs
                        </h3>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center py-2 border-b border-slate-700/50">
                                <span className="text-slate-400 text-sm">Language</span>
                                <span className="font-mono text-sm">{product.specs.language}</span>
                            </div>
                            <div className="flex justify-between items-center py-2 border-b border-slate-700/50">
                                <span className="text-slate-400 text-sm">OS Support</span>
                                <span className="font-mono text-sm text-right">{product.specs.os}</span>
                            </div>
                            <div className="flex justify-between items-start py-2">
                                <span className="text-slate-400 text-sm">Requirements</span>
                                <span className="font-mono text-sm text-right max-w-[150px]">{product.specs.requirements}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="container mx-auto px-6 mb-24">
                <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
                    <Cpu size={24} className="text-violet-500" /> Key Features
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {product.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-4 p-6 bg-slate-900 border border-slate-800 rounded-xl hover:border-violet-500/30 transition-colors">
                            <div className="mt-1 p-2 bg-violet-500/10 rounded-lg text-violet-400">
                                <Check size={18} />
                            </div>
                            <div>
                                <h4 className="font-semibold text-white mb-2">{feature}</h4>
                                <p className="text-sm text-slate-400">Engineered for performance and reliability designed specifically for scale.</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* FAQ Section */}
            <section className="container mx-auto px-6 max-w-4xl">
                <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
                    <HelpCircle size={24} className="text-violet-500" /> Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                    {product.faq.map((item, i) => (
                        <div key={i} className="bg-slate-800/30 border border-slate-800 rounded-xl p-6">
                            <h3 className="font-semibold text-white mb-2">{item.q}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">{item.a}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Purchase Modal */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
                    <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-md p-8 shadow-2xl relative">
                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-4 right-4 text-slate-500 hover:text-white"
                        >
                            ✕
                        </button>

                        <h3 className="text-2xl font-bold mb-2">Secure Checkout</h3>
                        <p className="text-slate-400 mb-6 text-sm">
                            Enter your email to receive the download link and license key for <span className="text-violet-400">{product.title}</span>.
                        </p>

                        <form onSubmit={handlePurchase} className="space-y-4">
                            <div>
                                <label className="block text-xs font-semibold text-slate-500 uppercase mb-2">Email Address</label>
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all"
                                    placeholder="you@example.com"
                                />
                            </div>

                            <div className="pt-4">
                                <button type="submit" className="w-full btn btn-primary bg-violet-600 hover:bg-violet-500 text-white px-6 py-3 rounded-lg font-bold">
                                    Proceed to Payment
                                </button>
                                <p className="text-center text-xs text-slate-600 mt-4">
                                    Payments are secured by Stripe. SSH encrypted.
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductDetails;
