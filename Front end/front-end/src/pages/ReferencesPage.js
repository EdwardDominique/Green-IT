import React from 'react';
import './ReferencesPage.css';

function Reference() {
    // Un exemple de données pour les références
    const references = [
        {
            titre: 'ref1',
            imgSrc: 'image.jpg',
            description: 'une description',
            lien: ''
        },
        {
            titre: 'ref2',
            imgSrc: 'image.jpg',
            description: 'une description',
            lien: ''
        },
        {
            titre: 'ref3',
            imgSrc: 'image.jpg',
            description: 'une description',
            lien: ''
        },
        {
            titre: 'ref4',
            imgSrc: 'image.jpg',
            description: 'une description',
            lien: ''
        },
        //... Ajoutez autant de références que nécessaire
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
                        <a href={reference.lien}>Découvrir</a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Reference;
