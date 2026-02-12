import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Calendar } from 'lucide-react';
import { newsData } from '../data/newsData';
import './News.css';

const News = () => {
    return (
        <div className="page-news">
            <div className="news-header">
                <div className="container">
                    <h1>Aktuelles</h1>
                    <p>Neuigkeiten aus der Immobilienwelt und von Stein Immobilien</p>
                </div>
            </div>

            <div className="container news-page-content">
                <div className="news-grid">
                    {newsData.map(item => (
                        <div key={item.id} className="news-card">
                            <div className="news-image">
                                <img src={item.image} alt={item.title} />
                                <span className="news-category">{item.category}</span>
                            </div>
                            <div className="news-content">
                                <div className="news-meta">
                                    <Calendar size={14} />
                                    <span className="news-date">{item.date}</span>
                                </div>
                                <h3>{item.title}</h3>
                                <p>{item.excerpt}</p>
                                <Link to="#" className="read-more-btn">
                                    Beitrag lesen <ChevronRight size={16} />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default News;
