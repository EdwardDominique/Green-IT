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
                <a href="https://www.nature.com/articles/s41598-023-27703-3" target="_blank" rel="noopener noreferrer" className="site-link-button">Visiter le site</a>
            </div>
            <h1>A sustainable and secure load management model for green cloud data centres</h1>
            <section id="article-section">
                <h1>Introduction</h1>
                <p>L'article débute en expliquant que la demande croissante de ressources cloud et une gestion inefficace de la charge mettent en péril la durabilité des CDC, entraînant une consommation énergétique élevée, des conflits de ressources, des émissions de carbone excessives et des menaces pour la sécurité. Pour remédier à ces problèmes, les auteurs proposent un modèle novateur de gestion de charge durable et sécurisé, appelé le modèle SaS-LM. Ce modèle a pour objectif d'améliorer la sécurité pour les utilisateurs tout en garantissant la durabilité des CDC en estimant et en réservant les ressources nécessaires et en ajustant dynamiquement la charge pour maximiser la sécurité et la durabilité.</p>
            </section>
            <section id="article-section">
                <h1>Background and discussion</h1>
                <p>La section "Background and discussion" discute des approches existantes dans le domaine de la gestion des ressources cloud et de l'analyse des charges de travail. Plusieurs méthodes utilisant des approches métaheuristiques et des algorithmes d'apprentissage automatique ont été proposées pour la provision de ressources cloud. Ces méthodes visent à optimiser l'efficacité énergétique des centres de données, à réduire la consommation d'énergie et les émissions de carbone, et à améliorer la sécurité.

Parmi les approches précédentes, certaines ont utilisé des techniques de prédiction en ligne pour anticiper la charge future sur les machines virtuelles (VM) et ont proposé des mécanismes de migration pour gérer les surcharges. D'autres ont exploré l'optimisation de la distribution de ressources physiques, la gestion de l'élasticité des ressources, la consolidation des VM, la sécurité des charges de travail, et la minimisation de la consommation d'énergie.

L'article souligne que la plupart des travaux antérieurs se sont concentrés sur l'efficacité énergétique sans tenir compte de l'empreinte carbone, de l'efficacité de l'utilisation de l'énergie, et n'ont pas abordé la sécurité des charges de travail. En revanche, le modèle SaS-LM proposé dans l'article prend en compte ces multiples objectifs liés à la durabilité des centres de données cloud (CDC) tout en assurant la sécurité en temps réel des applications des utilisateurs. Le modèle utilise un algorithme d'optimisation DPBHO pour apprendre les modèles d'utilisation des ressources avec précision, optimise la gestion des VM en fonction de plusieurs objectifs, et favorise l'utilisation d'une alimentation électrique verte tout en répondant aux contraintes de qualité de service (QoS).

En fin de compte, le modèle SaS-LM est comparé en détail avec les approches de pointe pour mettre en évidence ses avantages en termes de durabilité des CDC, de sécurité des applications et d'efficacité énergétique</p>
            </section>
            <section id="article-section">
                <h1>Conclusion</h1>
                <p>La conclusion de l'article présente le modèle SaS-LM, qui vise à offrir une solution pareto-optimale pour la gestion sécurisée et durable de la charge de travail dans un environnement cloud respectueux de l'environnement. Le modèle intègre un nouvel algorithme d'optimisation évolutionnaire DPBHO pour l'estimation de l'utilisation des ressources basée sur un réseau neuronal. De plus, il propose un placement en temps réel et une gestion de VM multi-objectifs pour répondre aux besoins à la fois de l'utilisateur et du fournisseur de services cloud. Les résultats obtenus montrent une réduction significative des attaques de sécurité, des émissions de carbone et de la consommation d'énergie, ainsi qu'une amélioration de l'utilisation des ressources et du PUE (Power Usage Effectiveness). Le modèle SaS-LM se révèle supérieur aux approches existantes, bien qu'un compromis soit observé entre la durabilité et la sécurité.

Dans le futur, le modèle proposé pourrait être étendu en priorisant les objectifs en fonction des besoins dynamiques, en ajoutant des objectifs tels que la confiance et un schéma d'allocation de VM basé sur la fiabilité.</p>
            </section>
        </div>
    );
}

export default Reference1;
