import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Reference.css';

function Reference1() {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1); // navigate back by 1 in the history stack
    };

    return (
        <div className="article-page">
            <div className="header-buttons">
                <button className="back-button" onClick={handleBack}>Retour</button>
                <a href="https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/tech-forward/making-software-and-data-architectures-more-sustainable" target="_blank" rel="noopener noreferrer" className="site-link-button">Visiter le site</a>
            </div>
            <h1>Making software and data architectures more sustainable</h1>
            <section id="article-section">
                <h1>section 1</h1>
                <p>du texte</p>
            </section>
            <section id="article-section">
                <h1>section 2</h1>
                <p>du texte</p>
            </section>
            <section id="article-section">
                <h1>section 3</h1>
                <p>du texte</p>
            </section>
        </div>
    );
}

export default Reference1;
