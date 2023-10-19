import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Reference.css';

function Reference4() {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1); // navigate back by 1 in the history stack
    };

    return (
        <div className="article-page">
            <div className="header-buttons">
                <button className="back-button" onClick={handleBack}>Retour</button>
                <a href="https://www.ibm.com/blog/green-coding/" target="_blank" rel="noopener noreferrer" className="site-link-button">Visiter le site</a>
            </div>
            <h1>Le Green Coding : Vers une Informatique Plus Durable</h1>
            <section id="article-section">
                <h1>1. Qu'est-ce que le Green Coding?</h1>
                <p>Le green coding est une approche éco-responsable en informatique qui vise à minimiser l'énergie nécessaire pour exécuter des lignes de code. Cela soutient les objectifs de durabilité des entreprises tout en réduisant leur empreinte carbone.</p>
            </section>
            <section id="article-section">
                <h1>2. Des logiciels plus durables</h1>
                <p>L'approche du "lean coding" est au cœur de cette démarche. Elle vise à :</p>
                <ul>
                    <li>Réduire la taille des fichiers, améliorant ainsi la vitesse et l'expérience utilisateur.</li>
                    <li>Limiter le "code bloat", ou code superflu, souvent dû à l'utilisation excessive de librairies open-source.</li>
                </ul>
            </section>
            <section id="article-section">
                <h1>3. Mise en œuvre du Green Coding</h1>
                <p>L'adoption du green coding nécessite des changements structurels et culturels :</p>
                <ul>
                    <li>Changements structurels :</li>
                    <ul>
                        <li>Utilisation de processeurs multi-cœurs pour augmenter l'efficacité énergétique.</li>
                        <li>Optimalisation de l'infrastructure IT à travers des outils modernes.</li>
                        <li>Adoption des microservices pour des applications plus efficientes.</li>
                        <li>Préférer le DevOps basé sur le cloud pour réduire la consommation énergétique.</li>
                    </ul>
                    <li>Changements culturels :</li>
                    <ul>
                        <li>Sensibilisation et engagement de la direction et des employés.</li>
                        <li>Encouragement à l'innovation et à la recherche de solutions éco-responsables.</li>
                        <li>Concentration sur les résultats et anticipation des défis.</li>
                    </ul>
                </ul>
            </section>
            <section id="article-section">
                <h1>4. Avantages du Green Coding</h1>
                <p>Les bénéfices du green coding s'étendent au-delà de la simple réduction de la consommation énergétique :</p>
                <ul>
                    <li>Réduction des coûts énergétiques.</li>
                    <li>Accélération de la progression vers des objectifs de durabilité.</li>
                    <li>Augmentation potentielle des bénéfices.</li>
                    <li>Amélioration de la discipline de développement.</li>
                </ul>
            </section>
            <section id="article-section">
                <h1>5. Conclusion</h1>
                <p>En conclusion, le green coding offre une opportunité pour les entreprises de combiner innovation technologique et responsabilité environnementale. Adopter ces pratiques n'est pas seulement bon pour la planète, mais aussi pour l'efficacité et la rentabilité des organisations.</p>
            </section>
        </div>
    );
}

export default Reference4;
