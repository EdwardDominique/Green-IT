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
                <a href="https://d-nb.info/1161801782/34" target="_blank" rel="noopener noreferrer" className="site-link-button">Visiter le site</a>
            </div>
            <h1>Resource-aware Programming in a High-level Language</h1>
            <section id="article-section">
                <h1>Introduction</h1>
                <p>L'article discute des tendances à long terme en matière de matériel informatique et des défis liés à la consommation d'énergie. Il mentionne que les architectures informatiques ont suivi une formule commune depuis des décennies, mais que cette tendance atteindra bientôt ses limites. La puissance électrique est un facteur limitant pour le calcul, en raison de sa limitation en tant que ressource. Les auteurs expliquent que la consommation d'énergie d'une puce est déterminée par la puissance dynamique (due aux commutations des transistors) et la puissance statique (due aux fuites indépendantes de l'activité). Ils évoquent diverses méthodes pour réduire la consommation d'énergie, notamment l'utilisation de moins de transistors, la réduction de la taille des transistors, la diminution de la tension, la réduction de la fréquence de commutation, et la réduction de l'activité de commutation.

Les auteurs se réfèrent à la loi de Moore qui prévoit une augmentation constante de la puissance de calcul grâce à la réduction de la taille des transistors. Ils mentionnent également la "Dennard scaling", qui stipule que la densité de puissance reste constante lorsque la taille des transistors est réduite, permettant ainsi d'augmenter la fréquence d'horloge sans augmenter la consommation d'énergie. Cependant, ils signalent que cette tendance ne peut pas durer éternellement et que de nouvelles approches seront nécessaires pour relever les défis futurs en matière de matériel informatique.

En fin de compte, l'article souligne que l'augmentation continue de la vitesse matérielle a rendu les logiciels de plus en plus rapides au fil des décennies, mais que des solutions alternatives doivent être envisagées pour surmonter les limites actuelles de la consommation d'énergie et de la puissance de calcul.</p>
            </section>
            <section id="article-section">
                <h1>La sensibilisation à l'énergie</h1>
                <p>L'article aborde la préoccupation croissante de la consommation d'énergie, en mettant en évidence la complexité de la gestion de l'énergie pour divers composants, tels que le CPU, la mémoire, le refroidissement, les disques, le réseau, et d'autres éléments. Les supercalculateurs et les appareils mobiles illustrent cette complexité, où il est difficile d'optimiser les performances tout en respectant un budget énergétique donné.

Pour les smartphones, l'architecture big.LITTLE d'ARM, qui combine des cœurs lents et rapides sur la même puce, est un exemple de la tendance à l'hétérogénéité. Cependant, la gestion des ressources actuelle est souvent naïve, avec soit les cœurs lents, soit les cœurs rapides actifs, mais rarement les deux en même temps.

Le défi consiste à développer des indicateurs sur la consommation d'énergie que les applications peuvent fournir, puis à déterminer comment le gestionnaire de ressources doit équilibrer les performances et la consommation d'énergie. Les limites de la consommation d'énergie sont généralement définies par le système plutôt que par les applications, avec les utilisateurs de smartphones ou les administrateurs de supercalculateurs prenant des décisions en ce qui concerne les modes de consommation d'énergie.</p>
            </section>
            <section id="article-section">
                <h1>Conclusion</h1>
                <p>En conclusion, cette section finale de la thèse présente un résumé des principales réalisations du travail et souligne également certaines erreurs de conception en rétrospective. Le cadre de programmation consciente des ressources présenté dans la thèse visait à améliorer l'efficacité, l'utilisation des ressources et la vitesse des applications en permettant aux applications de fournir des informations sur leur comportement à un système de gestion des ressources.

Cependant, des constatations ont montré que la réinvasion était souvent plus importante que l'invasion, car elle permettait une plus grande dynamique dans la gestion des ressources. Il est suggéré qu'une conception plus simple et plus sûre aurait consisté à fournir une seule méthode d'invasion avec une fermeture pour l'exécution à l'intérieur de la nouvelle revendication.

Cette réflexion en rétrospective met en avant l'importance de repenser les choix de conception dans le développement de cadres de programmation consciente des ressources. Elle souligne également la nécessité de promouvoir des approches plus intuitives et plus flexibles pour la gestion des ressources au sein des applications.</p>
            </section>
        </div>
    );
}

export default Reference1;
