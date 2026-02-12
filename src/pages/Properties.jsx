import React from 'react';
import PropertyCard from '../components/PropertyCard';
import { Link } from 'react-router-dom';
import './Properties.css';

const Properties = () => {
    // Dummy data
    const properties = [
        {
            id: 1,
            title: "Modernes Einfamilienhaus in ruhiger Lage",
            location: "Bad Kreuznach - Süd",
            size: 145,
            rooms: 5,
            baths: 2,
            price: "495.000 €",
            status: "Kaufen",
            images: [`${import.meta.env.BASE_URL}img/house-modern.webp`, `${import.meta.env.BASE_URL}img/hero-modern.webp`]
        },
        {
            id: 2,
            title: "Exklusive Eigentumswohnung mit Weitblick",
            location: "Bingen am Rhein",
            size: 85,
            rooms: 3,
            baths: 1,
            price: "320.000 €",
            status: "Kaufen",
            images: [`${import.meta.env.BASE_URL}img/hero-modern.webp`, `${import.meta.env.BASE_URL}img/house-modern.webp`]
        },
        {
            id: 3,
            title: "Kapitalanlage: Mehrfamilienhaus",
            location: "Bad Kreuznach - Zentrum",
            size: 280,
            rooms: 12,
            baths: 4,
            price: "850.000 €",
            status: "Kaufen",
            images: [`${import.meta.env.BASE_URL}img/house-modern.webp`]
        }
    ];

    return (
        <div className="page-properties">
            <div className="properties-header">
                <div className="container">
                    <h1>Aktuelle Immobilienangebote</h1>
                    <p>Entdecken Sie unser vielfältiges Portfolio an ausgewählten Immobilien.</p>
                </div>
            </div>

            <div className="container properties-content">
                <div className="properties-grid">
                    {properties.map(prop => (
                        <PropertyCard key={prop.id} property={prop} />
                    ))}
                </div>
            </div>

            <section className="section next-property-teaser">
                <div className="container text-center">
                    <h2>Vielleicht ist Ihre Immobilie die Nächste?</h2>
                    <p>Sie denken über einen Verkauf nach? Wir suchen ständig neue Objekte für unsere vorgemerkten Kunden.</p>
                    <div className="teaser-buttons">
                        <Link to="/wertermittlung" className="btn-primary">Kostenlose Bewertung</Link>
                        <Link to="/verkauf" className="btn-outline">Verkauf starten</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Properties;
