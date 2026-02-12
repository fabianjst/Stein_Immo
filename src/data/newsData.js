const baseUrl = import.meta.env.BASE_URL;

export const newsData = [
    {
        id: 1,
        title: "Neues Gebäudeenergiegesetz: Was Eigentümer wissen müssen",
        date: "10. Februar 2026",
        excerpt: "Ein Überblick über die aktuellen Anforderungen an Heizungstausch und energetische Sanierung.",
        image: `${baseUrl}img/gesetz.jpg`,
        category: "Recht & Gesetz"
    },
    {
        id: 2,
        title: "Wohnen im Wandel: Der Trend zu mehr Wohnfläche",
        date: "28. Januar 2026",
        excerpt: "Warum der Wunsch nach mehr Platz und zusätzlichen Zimmern für Home-Office ungebrochen ist.",
        image: `${baseUrl}img/immobiliengroesse-und-wachstum.webp`,
        category: "Markttrends"
    },
    {
        id: 3,
        title: "Marktbericht: Immobilienpreise in der Region",
        date: "15. Januar 2026",
        excerpt: "Aktuelle Entwicklungen und Prognosen für den Immobilienmarkt in Bad Kreuznach und Umgebung.",
        image: `${baseUrl}img/immobilien-markttrend.webp`,
        category: "Marktbericht"
    },
    {
        id: 4,
        title: "Herbstzeit ist Eigentumszeit",
        date: "05. November 2025",
        excerpt: "Warum der Herbst eine ideale Jahreszeit für den Immobilienkauf und -verkauf sein kann.",
        image: `${baseUrl}img/herbst.jpg`,
        category: "Ratgeber"
    },
    {
        id: 5,
        title: "Sicherheit: So schützen Sie Ihr Eigenheim",
        date: "20. Oktober 2025",
        excerpt: "Tipps und Maßnahmen für mehr Einbruchschutz und ein sicheres Gefühl in den eigenen vier Wänden.",
        image: `${baseUrl}img/sicherheit.jpg`,
        category: "Sicherheit"
    },
    {
        id: 6,
        title: "Digitalisierung im Immobilienverkauf",
        date: "10. Oktober 2025",
        excerpt: "Wie moderne Technologien und digitale Prozesse die Vermarktung Ihrer Immobilie unterstützen.",
        image: `${baseUrl}img/statistik-laptop.jpg`,
        category: "Innovation"
    }
];
