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
                <a href="https://www.itprotoday.com/cloud-computing-and-edge-computing/ibm-cloud-carbon-calculator-aims-aid-enterprise-sustainability" target="_blank" rel="noopener noreferrer" className="site-link-button">Visiter le site</a>
            </div>
            <h1>IBM Cloud Carbon Calculator Aims to Aid Enterprise Sustainability Efforts</h1>
            <section id="article-section">
                <h1>Introduction</h1>
                <p>L'article commence par une introduction à l'IBM Cloud Carbon Calculator. Il explique comment cet outil a pour objectif d'aider les entreprises à mesurer et à réduire leur empreinte carbone dans le cadre de leurs opérations cloud. Il met en avant l'importance de la durabilité pour les entreprises à l'ère de la technologie.</p>
            </section>
            <section id="article-section">
                <h1>Fonctionnalités et avantages de l'outil </h1>
                <p>La deuxième section se penche sur les fonctionnalités clés de l'IBM Cloud Carbon Calculator. L'article décrit comment l'outil permet aux entreprises de suivre et de calculer précisément leur consommation d'énergie et leurs émissions de carbone associées à leur utilisation des services cloud d'IBM. Il met également en évidence les avantages potentiels, notamment la réduction des coûts et l'alignement avec les objectifs de durabilité.</p>
            </section>
            <section id="article-section">
                <h1>Impact sur la durabilité des entreprises</h1>
                <p>La dernière section de l'article explore l'impact attendu de l'IBM Cloud Carbon Calculator sur la durabilité des entreprises. Il évoque comment l'outil peut contribuer à la prise de décisions plus éclairées en matière de cloud, favorisant ainsi des pratiques plus respectueuses de l'environnement. Cette section conclut sur l'idée que l'adoption de telles technologies peut jouer un rôle essentiel dans l'effort global de réduction des émissions de carbone.</p>
            </section>
        </div>
    );
}

export default Reference1;
