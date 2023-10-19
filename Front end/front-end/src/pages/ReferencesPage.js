import React from 'react';
import './ReferencesPage.css';
import { Link } from 'react-router-dom';
import ref2Image from '../pictures/ref2.png';

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
            titre: 'ref3',
            imgSrc: 'image.jpg',
            description: 'une description',
            auteur: ''
        },
        {
            titre: 'ref4',
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
