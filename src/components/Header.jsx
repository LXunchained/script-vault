import { Landmark, ShoppingBag, Github, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import VaultSwitcher from './VaultSwitcher';
import { useLanguage } from '../contexts/LanguageContext';

const Header = () => {
    const { t, language, toggleLanguage } = useLanguage();

    return (
        <header className="navbar">
            <div className="navbar-inner">
                {/* Logo */}
                <Link to="/" className="navbar-logo">
                    <div className="navbar-logo-icon">
                        <Landmark className="text-amber-500 w-5 h-5" />
                    </div>
                    <span className="navbar-logo-text">
                        Richesse Souveraine
                    </span>
                </Link>

                {/* Nav links — hidden on mobile */}
                <nav className="navbar-nav hide-mobile">
                    <Link to="/" className="nav-link">{t('header.products')}</Link>
                    <Link to="/features" className="nav-link">{t('header.features')}</Link>
                    <Link to="/pricing" className="nav-link">{t('header.pricing')}</Link>
                </nav>

                {/* Actions */}
                <div className="navbar-actions">
                    <button
                        onClick={toggleLanguage}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-slate-300 hover:text-white text-xs font-bold uppercase"
                    >
                        <Globe size={14} />
                        {language === 'fr' ? 'EN' : 'FR'}
                    </button>

                    <VaultSwitcher />

                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-slate-400 hover:text-white transition-colors hide-mobile"
                    >
                        <Github size={18} />
                    </a>

                    <button className="btn btn-primary text-sm px-5 py-2.5 rounded-xl">
                        {t('header.getStarted')}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
