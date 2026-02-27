import { ExternalLink, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import links from '../data/affiliateLinks.json';
import { useLanguage } from '../contexts/LanguageContext';

const LinkHub = () => {
    const { t } = useLanguage();
    // Show highlighted items first, up to 6
    const displayLinks = [...links]
        .sort((a, b) => (b.isHighlighted ? 1 : 0) - (a.isHighlighted ? 1 : 0))
        .slice(0, 6);

    return (
        <section className="relative z-10" style={{ padding: '3rem 0' }}>
            <div className="section-container">
                {/* Section header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
                    <div style={{
                        padding: '0.5rem',
                        background: 'rgba(245,158,11,0.15)',
                        borderRadius: '0.5rem',
                        display: 'flex'
                    }}>
                        <Zap size={18} color="#fbbf24" />
                    </div>
                    <h2 style={{
                        fontSize: '1.25rem',
                        fontWeight: 900,
                        color: '#fff',
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase',
                        margin: 0
                    }}>{t('home.hub.title')}</h2>
                </div>

                {/* Responsive grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                    gap: '1.25rem'
                }}>
                    {displayLinks.map((link, idx) => (
                        <motion.a
                            key={link.id}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ y: -3, scale: 1.02 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.07 }}
                            style={{
                                position: 'relative',
                                overflow: 'hidden',
                                padding: '1.25rem',
                                borderRadius: '1.25rem',
                                background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.07) 100%)',
                                border: link.isHighlighted
                                    ? '1px solid rgba(245,158,11,0.5)'
                                    : '1px solid rgba(255,255,255,0.08)',
                                boxShadow: link.isHighlighted
                                    ? '0 8px 32px rgba(245,158,11,0.08)'
                                    : 'none',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                gap: '0.75rem',
                                textDecoration: 'none',
                                transition: 'border-color 0.2s, box-shadow 0.2s, transform 0.2s',
                                cursor: 'pointer'
                            }}
                        >
                            {/* Highlighted badge */}
                            {link.isHighlighted && (
                                <div style={{
                                    position: 'absolute',
                                    top: '0.6rem',
                                    right: '0.6rem',
                                    padding: '0.1rem 0.5rem',
                                    borderRadius: '9999px',
                                    background: '#f59e0b',
                                    fontSize: '0.6rem',
                                    fontWeight: 900,
                                    color: '#0f172a',
                                    letterSpacing: '0.1em',
                                    textTransform: 'uppercase',
                                    zIndex: 10
                                }}>★</div>
                            )}

                            {/* Icon + text */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', minWidth: 0, flex: 1 }}>
                                <span style={{ fontSize: '1.75rem', flexShrink: 0, lineHeight: 1 }}>
                                    {link.icon}
                                </span>
                                <div style={{ minWidth: 0 }}>
                                    <span style={{
                                        display: 'block',
                                        fontSize: '0.6rem',
                                        fontWeight: 800,
                                        letterSpacing: '0.15em',
                                        textTransform: 'uppercase',
                                        color: '#f59e0b',
                                        marginBottom: '0.2rem'
                                    }}>{link.category}</span>
                                    <h3 style={{
                                        margin: 0,
                                        fontSize: '0.875rem',
                                        fontWeight: 700,
                                        color: '#fff',
                                        lineHeight: 1.3,
                                        overflow: 'hidden',
                                        display: '-webkit-box',
                                        WebkitLineClamp: 2,
                                        WebkitBoxOrient: 'vertical'
                                    }}>{link.title}</h3>
                                    <p style={{
                                        margin: '0.2rem 0 0',
                                        fontSize: '0.7rem',
                                        color: '#64748b',
                                        fontWeight: 500,
                                        overflow: 'hidden',
                                        whiteSpace: 'nowrap',
                                        textOverflow: 'ellipsis'
                                    }}>{link.subtitle}</p>
                                </div>
                            </div>

                            {/* Arrow */}
                            <div style={{
                                flexShrink: 0,
                                padding: '0.6rem',
                                borderRadius: '0.75rem',
                                background: 'rgba(255,255,255,0.05)',
                                color: '#64748b',
                                display: 'flex'
                            }}>
                                <ExternalLink size={16} />
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LinkHub;
