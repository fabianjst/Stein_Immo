import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';
import './Selling.css';

const Selling = () => {
    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const faqs = [
        {
            question: "Welche Unterlagen benötige ich für den Verkauf?",
            answer: "Für den Immobilienverkauf sind unter anderem ein aktueller Grundbuchauszug, Flurkarte, Baupläne, Energieausweis und ggf. Teilungserklärung wichtig. Wir unterstützen Sie gerne bei der Beschaffung."
        },
        {
            question: "Wie ermitteln Sie den Wert meiner Immobilie?",
            answer: "Wir nutzen professionelle Bewertungsverfahren und berücksichtigen die aktuelle Marktlage, Lage der Immobilie, Zustand und Ausstattung, um einen realistischen Verkaufspreis zu ermitteln."
        },
        {
            question: "Wie lange dauert der Verkauf im Durchschnitt?",
            answer: "Die Verkaufsdauer variiert je nach Immobilientyp und Lage. Durch unsere strukturierte Vorgehensweise und große Kartei finden wir oft schon nach wenigen Wochen den passenden Käufer."
        },
        {
            question: "Fallen für mich als Verkäufer Kosten an?",
            answer: "Die Maklerprovision wird in der Regel geteilt. Gerne beraten wir Sie persönlich zu den genauen Konditionen und unserem Leistungsumfang."
        }
    ];

    return (
        <div className="page-selling">
            <div className="selling-hero">
                <div className="container">
                    <h1>Ihr Weg zum Erfolg</h1>
                    <p>Wir begleiten Sie professionell beim Verkauf Ihrer Immobilie.</p>
                    <Link to="/kontakt" className="btn-primary">Jetzt Beratungstermin vereinbaren</Link>
                </div>
            </div>

            <div className="container selling-content">
                <div className="selling-intro">
                    <div className="intro-text">
                        <h2>Für Verkäufer in Bad Kreuznach</h2>
                        <p>
                            Ein Immobilienverkauf ist Vertrauenssache. Mit unserer langjährigen Erfahrung und Marktkenntnis
                            sorgen wir für einen reibungslosen Ablauf und das bestmögliche Ergebnis.
                        </p>
                        <ul className="selling-benefits">
                            <li><Check className="check-icon" size={20} /> Professionelle Immobilienbewertung</li>
                            <li><Check className="check-icon" size={20} /> Hochwertiges Exposé und Fotografie</li>
                            <li><Check className="check-icon" size={20} /> Durchführung von Besichtigungen</li>
                            <li><Check className="check-icon" size={20} /> Bonitätsprüfung der Interessenten</li>
                            <li><Check className="check-icon" size={20} /> Begleitung bis zum Notartermin</li>
                        </ul>
                    </div>
                    <div className="intro-image">
                        <img src="/img/happy-couple.jpg" alt="Zufriedene Verkäufer" />
                    </div>
                </div>

                <div className="faq-section">
                    <h2 className="text-center">Häufige Fragen zum Immobilienverkauf</h2>
                    <div className="faq-list">
                        {faqs.map((faq, index) => (
                            <div key={index} className="faq-item">
                                <button className="faq-question" onClick={() => toggleFaq(index)}>
                                    {faq.question}
                                    {openFaq === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                </button>
                                <div className={`faq-answer ${openFaq === index ? 'open' : ''}`}>
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Selling;
