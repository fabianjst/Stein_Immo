import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Maximize, Bed, Bath } from 'lucide-react';
import { Link } from 'react-router-dom';
import './PropertyCard.css';

const PropertyCard = ({ property }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = (e) => {
        e.preventDefault();
        setCurrentImageIndex((prev) => (prev + 1) % property.images.length);
    };

    const prevImage = (e) => {
        e.preventDefault();
        setCurrentImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length);
    };

    return (
        <div className="property-card">
            <div className="property-image-container">
                <img
                    src={property.images[currentImageIndex]}
                    alt={property.title}
                    className="property-main-image"
                />
                <div className="property-status">{property.status}</div>

                {property.images.length > 1 && (
                    <>
                        <button className="img-nav-btn prev" onClick={prevImage}><ChevronLeft size={24} /></button>
                        <button className="img-nav-btn next" onClick={nextImage}><ChevronRight size={24} /></button>
                    </>
                )}

                <div className="image-dots">
                    {property.images.map((_, idx) => (
                        <span
                            key={idx}
                            className={`dot ${idx === currentImageIndex ? 'active' : ''}`}
                        ></span>
                    ))}
                </div>
            </div>

            <div className="property-details">
                <h3 className="property-title">{property.title}</h3>
                <p className="property-location"><MapPin size={16} /> {property.location}</p>

                <div className="property-features">
                    <div className="feature"><Maximize size={16} /> {property.size} m²</div>
                    <div className="feature"><Bed size={16} /> {property.rooms} Zi.</div>
                    <div className="feature"><Bath size={16} /> {property.baths} Bad</div>
                </div>

                <div className="property-footer">
                    <div className="property-price">{property.price}</div>
                    <Link to="/kontakt" className="btn-contact-gold">Kontakt aufnehmen</Link>
                </div>
            </div>
        </div>
    );
};

export default PropertyCard;
