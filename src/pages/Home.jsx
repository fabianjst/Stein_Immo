import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home as HomeIcon, Key, TrendingUp } from 'lucide-react';
import './Home.css';
import { newsData } from '../data/newsData';

const Home = () => {
    return (
        <div className="page-home">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-overlay"></div>
                <div className="hero-image"></div>
                <div className="container hero-content">
                    <h1 className="hero-title fade-in">
                        Eine Immobilie – der <strong>Grund<span style={{ color: 'var(--color-accent)' }}>stein</span></strong> für Ihre Zukunft
                    </h1>
                    <p className="hero-subtitle fade-in">
                        Wir verbinden hochwertige Immobilien mit individueller Beratung – für Ergebnisse, die genau zu Ihnen passen.
                    </p>
                    <div className="hero-buttons fade-in">
                        <Link to="/angebote" className="btn-primary">Immobilie kaufen</Link>
                        <Link to="/verkauf" className="btn-outline">Immobilie verkaufen</Link>
                    </div>
                </div>
            </section>

            {/* Welcome / Agent Section */}
            <section className="section welcome-section">
                <div className="container welcome-container">
                    <div className="welcome-text">
                        <h2>Erfolg ist planbar!</h2>
                        <p>
                            Seit 1996 entwickeln wir durchdachte Konzepte für den erfolgreichen Verkauf und die Vermittlung von Wohn- und Gewerbeimmobilien.
                        </p>
                        <p>
                            Ob Wohnung, Haus oder Grundstück – Immobilien Stein steht für maßgeschneiderte Strategien, klare Kommunikation und verbindliche Ergebnisse. Fairness, Diskretion und Zuverlässigkeit sind für uns keine Versprechen, sondern Grundsatz. Dafür stehe ich, Stefan Alex Stein, mit meinem Namen.
                        </p>
                        <img src="/img/unterschrift-stefan-alex-stein.png" alt="Unterschrift Stefan Alex Stein" className="signature-image" />
                        <br />
                        <Link to="/unternehmen/ueber-uns" className="text-link">Mehr über uns erfahren <ChevronRight size={16} /></Link>
                    </div>
                    <div className="welcome-image-wrapper">
                        <img src="/img/stefan-profile.jpg" alt="Stefan Alex Stein" className="welcome-image" />
                        <div className="image-caption">
                            Das Immobilienmakler-Team von<br /><strong>Stefan Alex Stein</strong>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="section services-section bg-light">
                <div className="container">
                    <h2 className="section-title text-center">Unsere Leistungen</h2>
                    <div className="services-grid">
                        <div className="service-card">
                            <div className="service-image">
                                <img src="/img/house-modern.webp" alt="Immobilie kaufen" />
                            </div>
                            <div className="service-content">
                                <HomeIcon className="service-icon" size={32} />
                                <h3>Kaufen</h3>
                                <p>Finden Sie Ihr neues Zuhause oder die perfekte Kapitalanlage in unserem Portfolio.</p>
                                <Link to="/angebote" className="btn-text">Angebote ansehen</Link>
                            </div>
                        </div>

                        <div className="service-card">
                            <div className="service-image">
                                <img src="/img/happy-couple.jpg" alt="Immobilie verkaufen" />
                            </div>
                            <div className="service-content">
                                <Key className="service-icon" size={32} />
                                <h3>Verkaufen</h3>
                                <p>Nutzen Sie unsere Expertise für den bestmöglichen Verkaufserfolg Ihrer Immobilie.</p>
                                <Link to="/verkauf" className="btn-text">Verkauf starten</Link>
                            </div>
                        </div>

                        <div className="service-card">
                            <div className="service-image">
                                <img src="/img/hero-modern.webp" alt="Wertermittlung" /> {/* Placeholder/Reused as Bild A was missing */}
                            </div>
                            <div className="service-content">
                                <TrendingUp className="service-icon" size={32} />
                                <h3>Wertermittlung</h3>
                                <p>Was ist Ihre Immobilie wert? Nutzen Sie unser kostenloses Online-Tool für eine erste Einschätzung.</p>
                                <Link to="/wertermittlung" className="btn-text">Wert ermitteln</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Valuation Teaser */}
            <section className="section valuation-teaser">
                <div className="container">
                    <div className="valuation-box">
                        <div className="valuation-text">
                            <h2>Kostenlose Immobilienbewertung</h2>
                            <p>Erhalten Sie in wenigen Minuten eine erste Marktwertschätzung für Ihre Immobilie.</p>
                        </div>
                        <Link to="/wertermittlung" className="btn-primary">Jetzt bewerten</Link>
                    </div>
                </div>
            </section>

            {/* Awards / Trust Section */}
            <section className="section awards-section">
                <div className="container">
                    <h2 className="section-title text-center">Ausgezeichnete Qualität</h2>
                    <div className="awards-scroll-container">
                        <div className="awards-track">
                            <img src="/img/award-mitgliedschaft-2025.png" alt="Mitgliedschaft 2025" />
                            <img src="/img/award-fcs-2021.png" alt="Top Immobilienmakler 2021" />
                            <img src="/img/award-is24-2021.png" alt="Premium Partner 2021" />
                            <img src="/img/award-immobilie1.jpg" alt="Immobilie1 Siegel" />
                            <img src="/img/award-customer-satisfaction.png" alt="Kundenzufriedenheit" />
                            <img src="/img/logo-ivd.jpg" alt="IVD Logo" />
                        </div>
                        <div className="scroll-hint-left"></div>
                        <div className="scroll-hint-right"></div>
                    </div>
                </div>
            </section>
            {/* News Section */}
            <section className="section news-section">
                <div className="container">
                    <h2 className="section-title text-center">Aktuelles aus der Immobilienwelt</h2>
                    <div className="news-grid">
                        {newsData.slice(0, 3).map(item => (
                            <div key={item.id} className="news-card">
                                <div className="news-image">
                                    <img src={item.image} alt={item.title} />
                                    <span className="news-category">{item.category}</span>
                                </div>
                                <div className="news-content">
                                    <span className="news-date">{item.date}</span>
                                    <h3>{item.title}</h3>
                                    <p>{item.excerpt}</p>
                                    <Link to="#" className="text-link">Weiterlesen <ChevronRight size={16} /></Link>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center" style={{ marginTop: '40px' }}>
                        <Link to="/aktuelles" className="btn-primary">Alle Neuigkeiten ansehen</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
