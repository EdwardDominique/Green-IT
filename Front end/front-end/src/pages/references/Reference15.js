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
                <a href="https://www.archimag.com/demat-cloud/2022/12/21/green-it-ecoresponsabilite-api-encouragee-nouveau-label-api-green-score" target="_blank" rel="noopener noreferrer" className="site-link-button">Visiter le site</a>
            </div>
            <h1> Green IT : l'écoresponsabilité des APIs encouragée par le nouveau label API Green Score</h1>
            <section id="article-section">
                <h1>Introduction</h1>
                <p>L'accélération de la transition numérique a conduit à une prolifération des APIs (Interfaces de programmation d'application) dans divers secteurs, mais leur création et utilisation ont un impact environnemental significatif. Les APIs sont gourmandes en énergie, contribuant ainsi à la pollution numérique et aux émissions de gaz à effet de serre. Cependant, un collectif nommé API Thinking a réagi en lançant le label "API Green Score". Cet outil vise à valoriser les APIs qui adoptent des pratiques numériquement responsables, offrant ainsi une solution pour réduire l'empreinte environnementale de l'informatique.</p>
            </section>
            <section id="article-section">
                <h1>Le Principe du Label "API Green Score"</h1>
                <p>Le label "API Green Score" est une certification qui encourage les développeurs d'API à prendre en compte l'impact environnemental de leurs interfaces. Il a été développé par le collectif API Thinking en collaboration avec des entreprises telles que la SNCF, L’Oréal et Enedis. Pour obtenir cette certification, les APIs doivent satisfaire à des critères répartis en 7 domaines, notamment le cycle de vie des APIs, l'échange de données, l'architecture, les infrastructures, et la communication. Les améliorations proposées incluent la désaffection des APIs inutilisées, l'optimisation des requêtes pour limiter les informations renvoyées, et l'évaluation de la consommation d'énergie de l'API. Le label attribue un score vert à chaque API certifiée, ce qui permet aux utilisateurs de choisir des APIs respectueuses de l'environnement.</p>
            </section>
            <section id="article-section">
                <h1>Conclusion</h1>
                <p>Le label "API Green Score" offre une réponse proactive à la problématique de la pollution numérique engendrée par les APIs. Il incite les acteurs de l'informatique à adopter des pratiques plus écoresponsables, contribuant ainsi à réduire l'impact environnemental du secteur. En sensibilisant les développeurs et les utilisateurs d'API à ces enjeux, le label favorise un comportement plus durable dans la conception et l'utilisation des APIs. En somme, il s'agit d'une initiative importante pour promouvoir la conscience environnementale au sein de l'industrie numérique.</p>
            </section>
        </div>
    );
}

export default Reference1;
