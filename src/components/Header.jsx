import { Zap, ShoppingBag, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="navbar w-full fixed top-0 left-0 right-0 py-4 px-6 flex justify-between items-center z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/5">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="flex items-center gap-2 group">
                    <div className="p-2 bg-violet-500/10 rounded-lg group-hover:bg-violet-500/20 transition-colors">
                        <Zap className="text-violet-500 w-6 h-6" />
                    </div>
                    <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                        ScriptVault
                    </span>
                </Link>

                <nav className="flex items-center gap-8 hidden md:flex">
                    <Link to="/" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
                        Products
                    </Link>
                    <Link to="/features" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
                        Features
                    </Link>
                    <Link to="/pricing" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
                        Pricing
                    </Link>
                </nav>

                <div className="flex items-center gap-4">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 text-slate-400 hover:text-white transition-colors">
                        <Github size={20} />
                    </a>
                    <button className="relative p-2 text-slate-400 hover:text-white transition-colors">
                        <ShoppingBag size={20} />
                        <span className="absolute top-0 right-0 w-2 h-2 bg-violet-500 rounded-full"></span>
                    </button>
                    <button className="hidden sm:flex btn btn-primary text-sm px-4 py-2 rounded-lg bg-violet-600 hover:bg-violet-700 text-white font-medium transition-colors">
                        Get Started
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
