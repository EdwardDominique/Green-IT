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
                <a href="https://www.itforbusiness.fr/telecom-sudparis-forme-les-ingenieurs-green-it-de-demain-55345" target="_blank" rel="noopener noreferrer" className="site-link-button">Visiter le site</a>
            </div>
            <h1>Telecom SudParis lance un programme de formation pour former les ingénieurs du Green IT</h1>
            <section id="article-section">
                <h1>Telecom SudParis forme les ingénieurs du Green IT</h1>
                <p>L'article présente l'initiative de Telecom SudParis pour former les ingénieurs spécialisés dans les technologies vertes. L'école a lancé un programme de formation appelé "Green IT" qui vise à sensibiliser les étudiants à l'importance de concevoir des solutions informatiques durables.</p>
            </section>
            <section id="article-section">
                <h1>Contenu du programme Green IT</h1>
                <p>Les étudiants apprennent à concevoir des centres de données économes en énergie, à gérer efficacement l'énergie et à réduire l'empreinte carbone des infrastructures informatiques. Le programme vise à répondre à la demande croissante de professionnels qualifiés dans le domaine de l'informatique verte.</p>
            </section>
            <section id="article-section">
                <h1>Objectifs et impacts attendus</h1>
                <p>L'école espère former une nouvelle génération d'ingénieurs capables de concevoir des solutions technologiques respectueuses de l'environnement et de réduire l'impact environnemental des technologies de l'information.</p>
            </section>
        </div>
    );
}

export default Reference1;
