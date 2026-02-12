import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-page">
            <div className="contact-header">
                <div className="container">
                    <h1>Kontakt</h1>
                    <p>Wir freuen uns auf Ihre Nachricht oder Ihren Anruf.</p>
                </div>
            </div>

            <div className="container contact-content">
                <div className="contact-grid">
                    <div className="contact-info-card">
                        <h2>Kontaktdaten</h2>
                        <div className="info-item">
                            <MapPin className="icon" />
                            <div>
                                <h3>Anschrift</h3>
                                <p>Stefan Alex Stein Immobilien<br />Am Hintzenböhl 48<br />55545 Bad Kreuznach</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <Phone className="icon" />
                            <div>
                                <h3>Telefon</h3>
                                <p><a href="tel:+49671840850">+49 671 840 850</a></p>
                            </div>
                        </div>
                        <div className="info-item">
                            <Mail className="icon" />
                            <div>
                                <h3>E-Mail</h3>
                                <p><a href="mailto:info@stein-immo.de">info@stein-immo.de</a></p>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-card">
                        <h2>Nachricht senden</h2>
                        <form className="contact-form">
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" name="name" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">E-Mail</label>
                                <input type="email" id="email" name="email" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Telefon (optional)</label>
                                <input type="tel" id="phone" name="phone" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Nachricht</label>
                                <textarea id="message" name="message" rows="5" required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Absenden</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
