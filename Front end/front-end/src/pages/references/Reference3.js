import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Reference.css';

function Reference3() {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1); // navigate back by 1 in the history stack
    };

    return (
        <div className="article-page">
            <div className="header-buttons">
                <button className="back-button" onClick={handleBack}>Retour</button>
                <a href="" className="site-link-button">Visiter le site</a>
            </div>
            <h1>Ceci est la ref 3</h1>
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

export default Reference3;
