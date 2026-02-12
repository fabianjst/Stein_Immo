import React from 'react';
import './Legal.css';

const Impressum = () => {
    return (
        <div className="page-legal">
            <div className="container">
                <h1>Impressum</h1>
                <div className="legal-content">
                    <h2>Angaben gemäß § 5 TMG</h2>
                    <p>
                        Stefan Alex Stein Immobilien<br />
                        Am Hintzenböhl 48<br />
                        55545 Bad Kreuznach
                    </p>

                    <h2>Kontakt</h2>
                    <p>
                        Telefon: +49 671 840 850<br />
                        E-Mail: info@stein-immo.de
                    </p>

                    <h2>Umsatzsteuer-ID</h2>
                    <p>
                        Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                        [DE-Nummer hier einfügen]
                    </p>

                    <h2>Aufsichtsbehörde</h2>
                    <p>
                        Gewerbeerlaubnis nach §34c GewO erteilt durch das Ordnungsamt der Stadtverwaltung Bad Kreuznach,<br />
                        Kornmarkt 5, 55543 Bad Kreuznach.<br />
                        Tel. +49 671 800-0<br />
                        E-Mail: stadtverwaltung@bad-kreuznach.de
                    </p>

                    <h2>Streitschlichtung</h2>
                    <p>
                        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr.<br />
                        Unsere E-Mail-Adresse finden Sie oben im Impressum.
                    </p>
                    <p>
                        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Impressum;
