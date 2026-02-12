import React from 'react';
import { Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import { Users, BookOpen, Briefcase, User } from 'lucide-react';
import './About.css';

const About = () => {
    const location = useLocation();

    const isActive = (path) => location.pathname.includes(path) ? 'active' : '';

    return (
        <div className="page-about">
            <div className="about-header">
                <div className="container">
                    <h1>Ihr Immobilienpartner in Bad Kreuznach und Umgebung</h1>
                    <div className="about-nav">
                        <Link to="/unternehmen/leistungen" className={`about-nav-btn ${isActive('leistungen')}`}>
                            <Briefcase size={18} /> Leistungen
                        </Link>
                        <Link to="/unternehmen/ueber-uns" className={`about-nav-btn ${isActive('ueber-uns')}`}>
                            <BookOpen size={18} /> Über uns
                        </Link>
                        <Link to="/unternehmen/team" className={`about-nav-btn ${isActive('team')}`}>
                            <Users size={18} /> Unser Team
                        </Link>
                    </div>
                </div>
            </div>

            <div className="container about-content">
                <Routes>
                    <Route path="/" element={<Navigate to="/unternehmen/ueber-uns" replace />} />

                    <Route path="ueber-uns" element={<AboutSection />} />
                    <Route path="team" element={<TeamSection />} />
                    <Route path="leistungen" element={<ServicesSection />} />
                </Routes>
            </div>
        </div>
    );
};

const AboutSection = () => (
    <div className="content-section fade-in">
        <h2>Über uns</h2>
        <div className="about-text-block">
            <p>
                Seit 1996 sind wir als familiengeführtes Immobilienunternehmen erfolgreich am Markt tätig.
                In dieser Zeit haben wir mehr als 700 Immobilien verkauft und unsere Kompetenz sowie Marktkenntnis kontinuierlich ausgebaut.
                Unser Anspruch ist es, Eigentümer und Interessenten gleichermaßen professionell, transparent und zuverlässig zu begleiten.
            </p>

            <div className="ceo-section">
                <div className="ceo-image">
                    <img src={`${import.meta.env.BASE_URL}img/stefan-profile.jpg`} alt="Stefan Alex Stein" />
                </div>
                <div className="ceo-text">
                    <h3>Stefan Alex Stein</h3>
                    <p>
                        Ich, Stefan Alex Stein, führe das Unternehmen gemeinsam mit einem gut ausgebildeten und engagierten 6-köpfigen Team.
                        Durch eine effiziente Vorgehensweise, fundierte Beratung und strukturierte Vermarktungsprozesse erzielen wir optimale Ergebnisse für unsere Kunden.
                        Dabei legen wir großen Wert auf persönliche Betreuung, kurze Kommunikationswege und eine partnerschaftliche Zusammenarbeit –
                        denn Kundennähe und Vertrauen stehen bei uns an erster Stelle.
                    </p>
                    <p className="signature">Wir würden uns freuen, Sie schon bald kennenzulernen.</p>
                </div>
            </div>
        </div>
    </div>
);

const TeamSection = () => {
    const teamMembers = [
        { name: "Mitarbeiter 1", role: "Immobilienmakler" },
        { name: "Mitarbeiter 2", role: "Immobilienmakler" },
        { name: "Mitarbeiter 3", role: "Assistenz" },
        { name: "Mitarbeiter 4", role: "Vertrieb" },
        { name: "Mitarbeiter 5", role: "Vertrieb" },
        { name: "Mitarbeiter 6", role: "Backoffice" },
    ];

    return (
        <div className="content-section fade-in">
            <h2>Unser Team</h2>
            <p className="text-center mb-40">Unser 6-köpfiges Team steht Ihnen mit Rat und Tat zur Seite.</p>
            <div className="team-grid">
                {teamMembers.map((member, idx) => (
                    <div key={idx} className="team-card">
                        <div className="team-image-placeholder">
                            <User size={64} className="placeholder-icon" />
                        </div>
                        <h3>{member.name}</h3>
                        <span>{member.role}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

const ServicesSection = () => (
    <div className="content-section fade-in">
        <h2>Unsere Leistungen</h2>
        <div className="services-list-detailed">
            <div className="service-item-detail">
                <h3>Verkauf</h3>
                <ul>
                    <li>Marktwertermittlung</li>
                    <li>Erstellung hochwertiger Exposés</li>
                    <li>Professionelle Fotografie</li>
                    <li>Besichtigungsmanagement</li>
                    <li>Verkaufsverhandlungen</li>
                    <li>Vorbereitung Notartermin</li>
                </ul>
            </div>
            <div className="service-item-detail">
                <h3>Vermietung</h3>
                <ul>
                    <li>Mietpreisermittlung</li>
                    <li>Bonitätsprüfung</li>
                    <li>Mietvertragserstellung</li>
                    <li>Wohnungsübergabe</li>
                </ul>
            </div>
            <div className="service-item-detail">
                <h3>Beratung</h3>
                <ul>
                    <li>Immobilienbewertung</li>
                    <li>Finanzierungsvermittlung</li>
                    <li>Energieausweis</li>
                    <li>Grundrissoptimierung</li>
                </ul>
            </div>
        </div>
    </div>
);

export default About;
