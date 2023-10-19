import React from 'react';
import './ReferencesPage.css';
import { Link } from 'react-router-dom';
import ref2Image from '../pictures/ref2.png';
import ref3Image from '../pictures/ref3.png';
import ref4Image from '../pictures/ref4.jpg';

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
            titre: 'ref5',
            imgSrc: 'image.jpg',
            description: 'une description',
            auteur: ''
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
