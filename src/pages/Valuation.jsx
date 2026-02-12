import React, { useState } from 'react';
import { Home, Building, Factory, Trees, Check, ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Valuation.css';

const Valuation = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        type: '',
        size: '',
        rooms: '',
        contact: { name: '', email: '', phone: '' }
    });

    const handleTypeSelect = (type) => {
        setFormData({ ...formData, type });
        setStep(2);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleContactChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, contact: { ...formData.contact, [name]: value } });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStep(4);
        // Here you would typically send the data to a backend
        console.log("Valuation requested:", formData);
    };

    return (
        <div className="page-valuation">
            <div className="valuation-header">
                <div className="container">
                    <h1>Marktwertermittlung</h1>
                    <p>Finden Sie heraus, was Ihre Immobilie aktuell wert ist.</p>
                </div>
            </div>

            <div className="container valuation-content">
                <div className="valuation-card">
                    {step === 1 && (
                        <div className="step-container fade-in">
                            <h2>Um welche Immobilie handelt es sich?</h2>
                            <div className="property-types-grid">
                                <button className="type-card" onClick={() => handleTypeSelect('Haus')}>
                                    <Home size={48} />
                                    <span>Haus</span>
                                </button>
                                <button className="type-card" onClick={() => handleTypeSelect('Wohnung')}>
                                    <Building size={48} />
                                    <span>Wohnung</span>
                                </button>
                                <button className="type-card" onClick={() => handleTypeSelect('Gewerbe')}>
                                    <Factory size={48} />
                                    <span>Gewerbe</span>
                                </button>
                                <button className="type-card" onClick={() => handleTypeSelect('Grundstück')}>
                                    <Trees size={48} />
                                    <span>Grundstück</span>
                                </button>
                            </div>
                        </div>
                    )}

                    {step === 2 && (
                        <div className="step-container fade-in">
                            <h2>Details zur Immobilie</h2>
                            <div className="form-group">
                                <label>Wohnfläche (m²)</label>
                                <input
                                    type="number"
                                    name="size"
                                    value={formData.size}
                                    onChange={handleInputChange}
                                    placeholder="z.B. 140"
                                />
                            </div>
                            <div className="form-group">
                                <label>Zimmer</label>
                                <input
                                    type="number"
                                    name="rooms"
                                    value={formData.rooms}
                                    onChange={handleInputChange}
                                    placeholder="z.B. 4"
                                />
                            </div>
                            <div className="step-buttons">
                                <button className="btn-back" onClick={() => setStep(1)}><ArrowLeft size={16} /> Zurück</button>
                                <button className="btn-primary" onClick={() => setStep(3)}>Weiter <ArrowRight size={16} /></button>
                            </div>
                        </div>
                    )}

                    {step === 3 && (
                        <form onSubmit={handleSubmit} className="step-container fade-in">
                            <h2>Ihre Kontaktdaten</h2>
                            <p>Wir senden Ihnen die Auswertung per E-Mail zu.</p>
                            <div className="form-group">
                                <label>Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.contact.name}
                                    onChange={handleContactChange}
                                    required
                                    placeholder="Ihr Name"
                                />
                            </div>
                            <div className="form-group">
                                <label>E-Mail</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.contact.email}
                                    onChange={handleContactChange}
                                    required
                                    placeholder="ihre@email.de"
                                />
                            </div>
                            <div className="form-group">
                                <label>Telefon (optional)</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.contact.phone}
                                    onChange={handleContactChange}
                                    placeholder="Für Rückfragen"
                                />
                            </div>
                            <div className="step-buttons">
                                <button type="button" className="btn-back" onClick={() => setStep(2)}><ArrowLeft size={16} /> Zurück</button>
                                <button type="submit" className="btn-primary">Anfrage senden</button>
                            </div>
                        </form>
                    )}

                    {step === 4 && (
                        <div className="step-container fade-in text-center">
                            <div className="success-icon">
                                <Check size={64} />
                            </div>
                            <h2>Vielen Dank!</h2>
                            <p>Wir haben Ihre Anfrage erhalten. Einer unserer Experten wird sich in Kürze mit einer ersten Einschätzung bei Ihnen melden.</p>
                            <Link to="/" className="btn-outline">Zurück zur Startseite</Link>
                        </div>
                    )}

                    {step < 4 && (
                        <div className="progress-bar">
                            <div className="progress-fill" style={{ width: `${step * 33.3}%` }}></div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Valuation;
