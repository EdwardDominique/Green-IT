import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Reference.css';

function Reference18() {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1); // navigate back by 1 in the history stack
    };

    return (
        <div className="article-page">
            <div className="header-buttons">
                <button className="back-button" onClick={handleBack}>Retour</button>
                <a href="https://www.greenit.fr/wp-content/uploads/2019/10/2019-10-GREENIT-etude_EENM-rapport-accessible.VF_.pdf" target="_blank" rel="noopener noreferrer" className="site-link-button">Visiter le site</a>
            </div>
            <h1>Green Planning Systems for Self-Consumption of Renewable Energy</h1>
            <section id="article-section">
                <h1>Principaux indicateurs environnementaux</h1>
                <p>L'étude prend en compte plusieurs indicateurs environnementaux pour évaluer l'impact environnemental du numérique. Ces indicateurs comprennent la fabrication des équipements des utilisateurs et la production d'électricité, identifiées comme les principales sources d'impact.</p>
            </section>
            <section id="article-section">
                <h1>Stratégies pour réduire l'empreinte environnementale</h1>
                <p>Pour atténuer l'impact environnemental du numérique, plusieurs mesures sont recommandées. Celles-ci incluent notamment prolonger la durée de vie des appareils en mettant en place des garanties plus longues, promouvoir la réutilisation et décourager certains modèles d'abonnement. De plus, augmenter le taux de collecte des déchets électroniques grâce à des systèmes de dépôt et encourager les pratiques d'écoconception peuvent réduire considérablement l'empreinte environnementale.</p>
            </section>
            <section id="article-section">
                <h1>Comparaison avec d'autres secteurs</h1>
                <p>Comparée à d'autres secteurs, la fabrication des équipements des utilisateurs contribue de manière significative à l'empreinte environnementale du numérique. En mettant en œuvre les mesures recommandées, telles que réduire le nombre d'appareils connectés et augmenter leur durée de vie, il est possible de réaliser une réduction substantielle de l'impact environnemental du numérique d'ici 2030.</p>
            </section>
            <section id="article-section">
                <h1>Conclusion</h1>
                <p>La conclusion de l'étude souligne l'importance de mettre en place des mesures concrètes pour réduire l'empreinte environnementale du numérique. Les préconisations proposées peuvent permettre une réduction de l'empreinte par utilisateur de 27% à 52% entre 2010 et 2025. Cependant, ces mesures ne suffisent pas à atteindre le facteur 4 nécessaire pour un développement durable. Il est donc nécessaire de changer de modèle et de basculer vers une sobriété des usages numériques ainsi qu'une écoconception radicale des services numériques. En adoptant cette posture de sobriété, le numérique peut devenir un outil efficace au service de la résilience de l'humanité face à l'effondrement en cours.</p>
            </section>
        </div>
    );
}

export default Reference18;