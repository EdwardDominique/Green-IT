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
                <h1>Introduction</h1>
                <p>L'article met en avant l'importance croissante de rendre les architectures logicielles et les données plus durables à l'ère numérique. La durabilité devient un objectif clé dans le domaine technologique, et les entreprises doivent repenser leurs approches pour minimiser leur impact environnemental.</p>
            </section>
            <section id="article-section">
                <h1>Les Défis de la Durabilité en Informatique</h1>
                <p>Cette section identifie les principaux défis de la durabilité en informatique, notamment la consommation d'énergie, les émissions de carbone, la gestion des données et la nécessité de rendre les technologies plus respectueuses de l'environnement.</p>
            </section>
            <section id="article-section">
                <h1>Les Solutions Techniques</h1>
                <p>L'article explore diverses solutions techniques pour améliorer la durabilité des architectures logicielles et des données. Cela inclut l'optimisation des centres de données, l'utilisation de l'informatique verte, la gestion efficace des données, et l'adoption de pratiques de développement durable.</p>
            </section>
            <section id="article-section">
                <h1>L'Importance de l'Engagement des Entreprises</h1>
                <p>L'engagement des entreprises dans la durabilité est essentiel. Les entreprises doivent intégrer des pratiques durables dans leur culture et leurs opérations, en mettant l'accent sur la réduction de leur empreinte carbone et la promotion de technologies plus propres.</p>
            </section>
            <section id="article-section">
                <h1>Conclusion et Perspectives d'Avenir</h1>
                <p>En conclusion, l'article souligne que la durabilité dans le domaine informatique est cruciale pour l'avenir. Il est impératif que les entreprises adoptent des approches durables et contribuent à réduire l'impact environnemental de la technologie. Des efforts continus seront nécessaires pour atteindre des objectifs de durabilité plus élevés dans le secteur de l'informatique.</p>
            </section>
        </div>
    );
}

export default Reference1;
