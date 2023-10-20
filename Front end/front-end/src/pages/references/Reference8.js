import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Reference.css';

function Reference8() {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1); // navigate back by 1 in the history stack
    };

    return (
        <div className="article-page">
            <div className="header-buttons">
                <button className="back-button" onClick={handleBack}>Retour</button>
                <a href="https://www.researchgate.net/publication/327281286_GREEN_CLOUD_COMPUTING_AND_ENVIRONMENTAL_SUSTAINABILITY" target="_blank" rel="noopener noreferrer" className="site-link-button">Visiter le site</a>
            </div>
            <h1>GREEN CLOUD COMPUTING AND ENVIRONMENTAL SUSTAINABILITY</h1>
            <section id="article-section">
                <h1>1) Énergie et Cloud Computing</h1>
                <p>L'article examine comment la demande croissante en infrastructure en cloud a entraîné une augmentation significative de la consommation d'énergie des centres de données, ce qui affecte les coûts opérationnels, la rentabilité des fournisseurs de services en cloud, et contribue aux émissions de carbone.</p>
            </section>
            <section id="article-section">
                <h1>2) Solutions Vertes</h1>
                <p>L'article propose des solutions pour rendre le cloud informatique plus respectueux de l'environnement, en mettant l'accent sur l'efficacité énergétique, la consolidation des centres de données, et l'utilisation à la demande des ressources informatiques.</p>
            </section>
            <section id="article-section">
                <h1>3) Importance de l'Informatique Verte</h1>
                <p>L'auteur souligne l'importance de l'adoption de l'informatique verte, en explorant les avantages concurrentiels, la légitimation, et la responsabilité environnementale comme moteurs clés pour les entreprises.</p>
            </section>
            <section id="article-section">
                <h1>4) Impact de la Croissance du Cloud</h1>
                <p>L'article met en évidence l'impact de la croissance du cloud informatique sur les émissions de carbone et la nécessité de trouver des solutions pour répondre à cette demande croissante tout en réduisant l'empreinte carbone.</p>
            </section>
            <section id="article-section">
                <h1>5) Conclusion</h1>
                <p>Cet article met en évidence les défis environnementaux associés à la croissance du cloud informatique et souligne l'importance de l'informatique verte pour atténuer ces problèmes. Il offre des solutions et des recommandations pour rendre le cloud informatique plus respectueux de l'environnement tout en répondant à la demande croissante de services informatiques. La recherche future dans le domaine du cloud informatique vert est essentielle pour promouvoir la durabilité environnementale dans ce secteur en pleine expansion.</p>
            </section>
        </div>
    );
}

export default Reference8;
