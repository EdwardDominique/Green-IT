import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Reference.css';

function Reference17() {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1); // navigate back by 1 in the history stack
    };

    return (
        <div className="article-page">
            <div className="header-buttons">
                <button className="back-button" onClick={handleBack}>Retour</button>
                <a href="https://www.cs.ucy.ac.cy/~dzeina/papers/ic22-green.pdf" target="_blank" rel="noopener noreferrer" className="site-link-button">Visiter le site</a>
            </div>
            <h1>Green Planning Systems for Self-Consumption of Renewable Energy</h1>
            <section id="article-section">
                <h1>Auteurs et Contexte de l'Article</h1>
                <p>Les auteurs de l'article sont Soteris Constantinou, Andreas Konstantinidis et Demetrios Zeinalipour-Yazti. L'article a été rédigé dans le contexte de la recherche scientifique pour explorer les systèmes de planification verte visant à promouvoir l'autoconsommation d'énergie renouvelable, ainsi que des sujets liés à l'efficacité énergétique et à la réduction des émissions de CO2.</p>
            </section>
            <section id="article-section">
                <h1>1. Le Réchauffement Climatique Mondial dû aux Activités Humaines</h1>
                <p>La vision du réchauffement climatique mondial attribuable aux activités humaines, mettant en évidence une augmentation des niveaux de CO2 depuis la révolution industrielle. Il est important de noter que 85% des émissions de CO2 proviennent de la combustion de combustibles fossiles, notamment dans les secteurs de l'électricité, des transports et des bâtiments.</p>
            </section>
            <section id="article-section">
                <h1>2. Green Planning : Une Approche pour un Environnement Durable</h1>
                <p>Le concept de Green Planning s'introduit comme une approche informatique visant à améliorer la qualité de l'environnement en prenant en compte les impératifs économiques. Cette approche propose des alternatives durables pour remplacer les méthodes traditionnelles de préservation de l'environnement.</p>
            </section>
            <section id="article-section">
                <h1>3. L'Internet des Objets (IoT) et la Réduction des Émissions de CO2</h1>
                <p>Le rôle essentiel de l'Internet des objets (IoT) dans la réduction des émissions de CO2, c'est grâce à la connexion et à la gestion intelligente des équipements informatiques. Elle souligne également l'importance cruciale de l'autoconsommation d'énergie renouvelable et de la réponse à la demande d'énergie pour réduire les coûts énergétiques et les émissions de CO2.</p>
            </section>
            <section id="article-section">
                <h1>CONCLUSION</h1>
                <p>L'article met en avant l'importance de la réduction des émissions de CO2 et de la Green Planning pour lutter contre le changement climatique. Il mentionne aussi le rôle crucial de l'IoT dans la gestion de l'énergie, et appelle à allouer davantage de ressources pour développer des cadres durables.</p>
            </section>
        </div>
    );
}

export default Reference17;