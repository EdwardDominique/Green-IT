import React from 'react';
import './ReferencesPage.css';
import { Link } from 'react-router-dom';
import ref2Image from '../pictures/ref2.png';
import ref3Image from '../pictures/ref3.png';
import ref4Image from '../pictures/ref4.jpg';
import ref5Image from '../pictures/ref5.png';
import ref6Image from '../pictures/ref6.png';
import ref7Image from '../pictures/ref7.png';
import ref8Image from '../pictures/ref8.png';

function Reference() {
    const references = [
        {
            titre: 'ref1',
            imgSrc: 'image.jpg',
            description: 'une description',
            auteur: ''
        },
        {
            titre: 'Analyse Énergétique et Environnementale des Navigateurs Web Android en 2021',
            imgSrc: ref2Image,
            description: "L'article analyse la consommation énergétique et l'impact environnemental de 16 navigateurs web pour Android en 2021. Firefox Focus se distingue par sa faible consommation énergétique, tandis que des navigateurs populaires comme Edge, Firefox, et Chrome présentent des performances moindres à cet égard.",
            auteur: 'Aurélien MANCEAU'
        },
        {
            titre: 'Évaluation des Technologies Blockchain pour la Gestion des Transactions et des Actifs en Utilisant les Principes de Green IT',
            imgSrc: ref3Image,
            description: "L'étude évalue la technologie Blockchain pour gérer les transactions et les actifs en se basant sur les principes de Green IT. Des améliorations notables ont été observées, notamment une réduction de la consommation d'énergie de 30%, une augmentation de l'efficacité du traitement de 20% et une réduction des émissions de CO2 de 25%. Ces améliorations ont été obtenues grâce à l'optimisation des algorithmes de consensus, l'utilisation de matériel éco-énergétique, et l'emploi d'énergies renouvelables.",
            auteur: 'Léonard BONNEVILLE'
        },
        {
            titre: 'Le Green Coding : Vers une Informatique Plus Durable',
            imgSrc: ref4Image,
            description: "La demande mondiale en électricité a augmenté avec l'évolution de la programmation informatique. Pourtant, le green coding émerge comme une solution pour réduire la consommation énergétique des technologies de l'information. Voici les principales solutions mises en avant pour une programmation plus respectueuse de l'environnement.",
            auteur: 'Aurélien MANCEAU'
        },
        {
            titre: 'Évaluation de la Green IT et des Pratiques de Programmation Écoénergétiques',
            imgSrc: ref5Image,
            description: "Le rapport évalue l'impact environnemental du développement logiciel, explore l'efficacité énergétique des langages de programmation, et analyse les attitudes des programmeurs envers la Green IT. Des langages comme C et Rust sont identifiés comme écoénergétiques, et des outils comme PageSpeed Insights et GraphQL sont présentés comme des moyens efficaces d'améliorer l'efficacité énergétique du développement web.",
            auteur: 'Léonard BONNEVILLE'
        },
        {
            titre: 'AI for Green : la branche verte de l’intelligence artificielle',
            imgSrc: ref6Image,
            description: "Le Green IT et l'IA sont deux domaines en pleine expansion qui ont un impact significatif sur notre environnement. Bien que l'IA puisse contribuer à l'augmentation des émissions de gaz à effet de serre, elle peut également être utilisée pour aider à la transition écologique. Le concept de Green IA, qui vise à rendre l'IA plus durable, est une initiative prometteuse dans ce sens.",
            auteur: 'Henrique MARTINS'
        },
        {
            titre: 'Efficacité énergétique des langages de programmation',
            imgSrc: ref7Image,
            description: "Dans cet article informatif, nous explorons le domaine du Green IT et son impact sur l'efficacité énergétique des langages de programmation. À travers une étude détaillée portant sur 27 langages populaires, nous découvrons ceux qui se distinguent en matière de durabilité. De la méthodologie aux résultats, nous mettons en lumière l'impact environnemental des choix de langage. En fin de compte, nous tirons des conclusions importantes qui éclairent le rôle du Green IT dans l'industrie de la programmation pour un avenir plus respectueux de l'environnement.",
            auteur: 'Bassidiki HAIDARA'
        },
        {
            titre: 'GREEN CLOUD COMPUTING AND ENVIRONMENTAL SUSTAINABILITY',
            imgSrc: ref8Image,
            description: "Le cloud informatique est devenue une infrastructure essentielle pour les entreprises, mais sa croissance rapide soulève des préoccupations environnementales. L'article se concentre sur la consommation d'énergie des centres de données, devenue un problème critique en raison des coûts opérationnels élevés et des émissions de carbone importantes. Pour résoudre ces problèmes, l'article explore des solutions pour rendre le cloud informatique plus respectueuse de l'environnement. Il examine les aspects technologiques qui contribuent à la consommation d'énergie et propose des orientations pour la recherche future dans le domaine de le cloud informatique vert.",
            auteur: 'Flavien GAUTIER'
        },
        
    ];

    return (
        <div className="reference-page">
            <h1>Page de référence pour le Green IT</h1>
            <section className="introduction">
                <p>Cette page a pour objectif de rediriger vers des sites proposant des solutions pour le Green IT, afin d'encourager une informatique plus responsable et durable.</p>
            </section>
            <div className="references-grid" >
                {references.map((reference, index) => (
                    <div key={index} className="reference-item">
                        <h2>{reference.titre}</h2>
                        <div className="reference-details">
                            <img className="reference-image" src={reference.imgSrc} alt={reference.titre} style={{ width: "240px", height: "auto", objectFit: "cover" }} />
                            <p>{reference.description}</p>
                        </div>
                        <div className="reference-link-author">
                            <Link to={`/reference${index + 1}`}>Découvrir</Link>
                            <span className="reference-author">{reference.auteur}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Reference;
