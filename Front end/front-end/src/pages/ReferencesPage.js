import React from 'react';
import './ReferencesPage.css';
import { Link } from 'react-router-dom';

function Reference() {
    const references = [
        {
            titre: 'ref1',
            imgSrc: 'image.jpg',
            description: 'une description',
            auteur: ''
        },
        {
            titre: 'ref2',
            imgSrc: 'image.jpg',
            description: 'une description',
            auteur: ''
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
                        <img src={reference.imgSrc} alt={reference.titre} />
                        <h2>{reference.titre}</h2>
                        <p>{reference.description}</p>
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
