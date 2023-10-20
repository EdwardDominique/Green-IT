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
                <a href="https://d1wqtxts1xzle7.cloudfront.net/68693889/Cloud-EnvSustainability2011-libre.pdf?1628678974=&response-content-disposition=inline%3B+filename%3DGreen_Cloud_computing_and_Environmental.pdf&Expires=1697815945&Signature=Uj5OWrEd2y4vRdQ-eUhk2p-bRoahzlQySayPxEJyWUVO1Wg3EBKBDpqB5gQ4irJi6OOnU23YZ2mNmhuo4l9lek9YkCF8nCbDAm-xwaawujG-prxwtmyVbPeLPrxouu9DW~5FuBWe2XNE~8f8TAi7Lowbn7seXG0PW77vQET-Hj5dIdqHglzlXv0sRyXBZRSnnmY1oMfM8eLKPrDvwWXdEu~mO77FLCMYKvw8i~tFC7LaxuwC9Ks9vJmDp3Zbl~zMaAOyv2m3xd8qTLjC7EUBm1g1p7rb~a~uUO0UWUZgPcl1IVCDooIsTixq9RyGuUim2TorE6zLAGDMXueMGDWYsg__&Key-Pair-Id=APKAJLOHF5GGSLRBV4ZA" target="_blank" rel="noopener noreferrer" className="site-link-button">Visiter le site</a>
            </div>
            <h1>CLOUD INFORMATIQUE VERT et DURABILITÉ ENVIRONNEMENTALE</h1>
            <section id="article-section">
                <h1>0. Auteurs de l'article</h1>
                <p>L'article est un chapitre du livre "Harnessing Green IT : Principles and Practices" qui regroupe des leçons et des bonne pratiques à faire pour rendre l'Informatique verte. Ce chapitre a été écrit par </p>
                <a href="https://scholar.google.com/citations?hl=fr&user=v5xSgA0AAAAJ" target="_blank" rel="noopener noreferrer" className="site-link-button">Saurabh Kumar Garg</a>
                <a> étudient en bac technologique et dévelopeur front end et </a>
                <a href="https://scholar.google.com/citations?hl=fr&user=7xN6JqYAAAAJ" target="_blank" rel="noopener noreferrer" className="site-link-button">Rajkumar Buyya</a>
                <a> qui fut membre de l'institut des ingénieurs éléctriciens et éléctroniciens en 2015 et qui est maintenant un professeur dans l'université de Melbourne en Australie dans le laboratoire de cloud informatique et de systèmes distribués.</a>
            </section>
            <section id="article-section">
                <h1>1. Énergie et Cloud Computing</h1>
                <p>L'article examine comment la demande croissante en infrastructure en cloud a entraîné une augmentation significative de la consommation d'énergie des centres de données, ce qui affecte les coûts opérationnels, la rentabilité des fournisseurs de services en cloud, et contribue aux émissions de carbone.</p>
            </section>
            <section id="article-section">
                <h1>2. Solutions Vertes</h1>
                <p>L'article propose des solutions pour rendre le cloud informatique plus respectueux de l'environnement, en mettant l'accent sur l'efficacité énergétique, la consolidation des centres de données, et l'utilisation à la demande des ressources informatiques.</p>
            </section>
            <section id="article-section">
                <h1>3. Importance de l'Informatique Verte</h1>
                <p>L'auteur souligne l'importance de l'adoption de l'informatique verte, en explorant les avantages concurrentiels, la légitimation, et la responsabilité environnementale comme moteurs clés pour les entreprises.</p>
            </section>
            <section id="article-section">
                <h1>4. Impact de la Croissance du Cloud</h1>
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
