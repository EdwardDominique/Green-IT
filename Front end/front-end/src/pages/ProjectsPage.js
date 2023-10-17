import React from 'react';
import './ProjectsPage.css';

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
        <div>
            <h1>Projets d'étudiants en ingénierie informatique</h1>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                {projets.map((projet, index) => (
                    <div key={index} style={{ border: '1px solid black', padding: '16px', boxSizing: 'border-box' }}>
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
