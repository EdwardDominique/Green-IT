import React from 'react';
import './ProjectsPage.css';
import { Link } from 'react-router-dom';
import AurelienM from '../pictures/AurelienM.jpg';
import BassidikiH from '../pictures/BassidikiH.jpg';
import FlavienG from '../pictures/FlavienG.jpg';
import GaspardC from '../pictures/GaspardC.jpg';
import HenriqueD from '../pictures/HenriqueD.jpg';
import HenriqueM from '../pictures/HenriqueM.jpg';
import LeonardB from '../pictures/LeonardB.jpg';
import LoicB from '../pictures/LoicB.jpg';
import MaximeM from '../pictures/MaximeM.jpg';
import EdouardD from '../pictures/EdouardD.png';

const couleurs = ['#FCD0A1', '#AFD2E9'];
const motif = [1, 2, 2, 1, 1, 2, 2, 1, 1, 2];

function ProjectsPage() {
    const projets = [
        { img: GaspardC, nom: 'Gaspard CHARLES', titre: 'Projet 1', desc: 'Résumé du projet' },
        { img: LoicB, nom: 'Loic BOURNONVILLE', titre: 'Projet 2', desc: 'Résumé du projet' },
        { img: EdouardD, nom: 'Edouard DOMINIQUE', titre: 'Projet 3', desc: 'Résumé du projet' },
        { img: HenriqueD, nom: 'Henrique DONG', titre: 'Projet 4', desc: 'Résumé du projet' },
        { img: FlavienG, nom: 'Flavien GAUTIER', titre: 'Projet 5', desc: 'Résumé du projet' },
        { img: LeonardB, nom: 'Leonard BONNEVILLE', titre: 'Projet 6', desc: 'Résumé du projet' },
        { img: BassidikiH, nom: 'Bassidiki HAIDARA', titre: 'Projet 7', desc: 'Résumé du projet' },
        { img: MaximeM, nom: 'Maxime MOREL', titre: 'Projet 8', desc: 'Résumé du projet' },
        { img: HenriqueM, nom: 'Henrique MARTINS', titre: 'Projet 9', desc: 'Résumé du projet' },
        { img: AurelienM, nom: 'Aurelien MANCEAU', titre: 'Projet 10', desc: 'Résumé du projet' },
    ];

    return (
        <div className="projects-page">
            <h1>Projets d'étudiants en ingénierie informatique</h1>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                {projets.map((projet, index) => (
                    <div key={index} style={{ borderRadius: '20px', padding: '16px', boxSizing: 'border-box', backgroundColor: couleurs[motif[index % motif.length] - 1], display: 'flex', flexDirection: 'row', justifyContent: 'space-between', height: '100%' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <img src={projet.img} alt={projet.titre} style={{ width: "100px", height: "100px", objectFit: "cover", borderRadius: '20px'}} />
                            <h3>{projet.nom}</h3>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <h2>{projet.titre}</h2>
                            <p>{projet.desc}</p>
                        </div>
                        <div className="link">
                            <Link to={`/${projet.nom.replace(/\s+/g, '')}`}>Découvrir</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProjectsPage;
