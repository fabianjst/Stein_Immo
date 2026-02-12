import React from 'react';
import './Legal.css';

const Privacy = () => {
    return (
        <div className="page-legal">
            <div className="container">
                <h1>Datenschutzerklärung</h1>
                <div className="legal-content">
                    <h2>1. Datenschutz auf einen Blick</h2>
                    <h3>Allgemeine Hinweise</h3>
                    <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.</p>

                    <h3>Verantwortliche Stelle</h3>
                    <p>
                        Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br /><br />
                        <strong>Stefan Alex Stein Immobilien</strong><br />
                        Am Hintzenböhl 48<br />
                        55545 Bad Kreuznach<br />
                        Telefon: +49 671 840 850<br />
                        E-Mail: info@stein-immo.de
                    </p>

                    <h3>Datenschutzbeauftragter</h3>
                    <p>
                        Wir haben einen Datenschutzbeauftragten bestellt:<br /><br />
                        Stefan Alex Stein<br />
                        Friedhofstr. 11<br />
                        55411 Bingen<br />
                        Tel. +49 671 840 850
                    </p>

                    <h2>2. Soziale Medien</h2>
                    <h3>Facebook, Instagram und LinkedIn</h3>
                    <p>
                        Auf dieser Website sind Verlinkungen zu unseren Auftritten in den sozialen Netzwerken Facebook, Instagram und LinkedIn eingebunden.
                        Durch das Klicken auf die entsprechenden Symbole/Links werden Sie auf unsere Profilseiten bei den jeweiligen Netzwerken weitergeleitet.
                        Dabei werden keine Daten automatisch beim Besuch unserer Seite an die Netzwerke übertragen.
                    </p>

                    {/* Further privacy text would go here - simplified for this implementation */}
                    <h2>3. Datenerfassung auf unserer Website</h2>
                    <h3>Kontaktformular</h3>
                    <p>Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.</p>
                </div>
            </div>
        </div>
    );
};

export default Privacy;
