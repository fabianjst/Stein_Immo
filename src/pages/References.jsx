import React from 'react';
import { MapPin, CheckCircle } from 'lucide-react';
import './References.css';

const References = () => {
    const soldProperties = [
        {
            id: 1,
            title: "Einfamilienhaus mit großem Garten",
            location: "Bad Kreuznach - Nord",
            price: "VERKAUFT",
            image: `${import.meta.env.BASE_URL}img/house-modern.webp`
        },
        {
            id: 2,
            title: "Moderne 3-Zimmer-Wohnung",
            location: "Rüdesheim",
            price: "VERKAUFT",
            image: `${import.meta.env.BASE_URL}img/hero-modern.webp`
        },
        {
            id: 3,
            title: "Baugrundstück in Bestlage",
            location: "Bad Münster am Stein",
            price: "VERKAUFT",
            image: `${import.meta.env.BASE_URL}img/house-modern.webp`
        },
        {
            id: 4,
            title: "Mehrfamilienhaus (Kapitalanlage)",
            location: "Bingen am Rhein",
            price: "VERKAUFT",
            image: `${import.meta.env.BASE_URL}img/hero-modern.webp`
        }
    ];

    return (
        <div className="page-references">
            <div className="references-header">
                <div className="container">
                    <h1>Erfolgreich vermitteln in Bad Kreuznach und Umgebung</h1>
                    <p>Eine Auswahl unserer erfolgreich vermittelten Immobilien.</p>
                </div>
            </div>

            <div className="container references-content">
                <h2 className="section-title text-center">
                    Erfolgreich vermittelte Immobilien in<br className="desktop-break" />Bad Kreuznach und Umgebung
                </h2>

                <div className="references-grid">
                    {soldProperties.map(prop => (
                        <div key={prop.id} className="reference-card">
                            <div className="reference-image">
                                <img src={prop.image} alt={prop.title} />
                                <div className="sold-badge"><CheckCircle size={16} /> Erfolgreich vermittelt</div>
                            </div>
                            <div className="reference-details">
                                <h3>{prop.title}</h3>
                                <p className="reference-location"><MapPin size={14} /> {prop.location}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default References;
