import React from 'react';
import './ProjectsPage.css';

const couleurs = ['#FCD0A1', '#AFD2E9'];
const motif = [1, 2, 2, 1, 1, 2, 2, 1, 1, 2];

function ProjectsPage() {
    const projets = [
        { imgSrc: 'lien_vers_image1.jpg', nom: 'Gaspard CHARLES', lien: '', titre: 'Projet 1' },
        { imgSrc: 'lien_vers_image2.jpg', nom: 'Loïc BOURNONVILLE', lien: '', titre: 'Projet 2' },
        { imgSrc: 'lien_vers_image1.jpg', nom: 'Edouard DOMINIQUE', lien: '', titre: 'Projet 3' },
        { imgSrc: 'lien_vers_image2.jpg', nom: 'Henrique DONG', lien: '', titre: 'Projet 4' },
        { imgSrc: 'lien_vers_image1.jpg', nom: 'Flavien GAUTIER', lien: '', titre: 'Projet 5' },
        { imgSrc: 'lien_vers_image2.jpg', nom: 'Léonard BONNEVILLE', lien: '', titre: 'Projet 6' },
        { imgSrc: 'lien_vers_image1.jpg', nom: 'Bassidiki HAIDARA', lien: '', titre: 'Projet 7' },
        { imgSrc: 'lien_vers_image2.jpg', nom: 'Maxime MOREL', lien: '', titre: 'Projet 8' },
        { imgSrc: 'lien_vers_image1.jpg', nom: 'Henrique MARTINS', lien: '', titre: 'Projet 9' },
        { imgSrc: 'lien_vers_image2.jpg', nom: 'Aurélien MANCEAU', lien: '', titre: 'Projet 10' },
    ];

    return (
        <div className="projects-page">
            <h1>Projets d'étudiants en ingénierie informatique</h1>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                {projets.map((projet, index) => (
                    <div key={index} style={{ border: '1px solid black', padding: '16px', boxSizing: 'border-box', backgroundColor: couleurs[motif[index % motif.length] - 1] }}>
                        <img src={projet.imgSrc} alt={projet.titre} style={{ width: '100%', height: 'auto' }} />
                        <h3>{projet.nom}</h3>
                        <a href={projet.lien}>{projet.titre}</a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProjectsPage;
