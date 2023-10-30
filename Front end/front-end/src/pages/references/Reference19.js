import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Reference.css';

function Reference19() {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1); // navigate back by 1 in the history stack
    };

    return (
        <div className="article-page">
            <div className="header-buttons">
                <button className="back-button" onClick={handleBack}>Retour</button>
                <a href="https://www.researchgate.net/profile/Dhinakaran-s/publication/349126091_Licensed_Under_Creative_Commons_Attribution_CC_BY_Green_Communications_and_Networking_Systems_-_A_Challenge_to_Current_Communications_and_Protocols/links/60220fd245851589399020e7/Licensed-Under-Creative-Commons-Attribution-CC-BY-Green-Communications-and-Networking-Systems-A-Challenge-to-Current-Communications-and-Protocols.pdf" target="_blank" rel="noopener noreferrer" className="site-link-button">Visiter le site</a>
            </div>
            <h1>Green Communications and Networking Systems - A Challenge to Current Communications and Protocols</h1>
            <section id="article-section">
                <h1>Auteurs</h1>
                <p>L'article a été écrit par le Dr. J. Thirumaran, qui était précédemment Principal au Rathinam College of Arts and Science à Coimbatore, en Inde, ainsi que par S. Dhinakaran, qui occupe le poste de Controller of Examinations au même établissement.</p>
            </section>
            <section id="article-section">
                <h1>1. Enjeux des Communications Vertes</h1>
                <p>Les secteurs des télécommunications et des technologies de l'information sont confrontés à des enjeux majeurs, notamment la consommation d'énergie excessive et les émissions de CO2. Ces défis soulignent leur rôle crucial dans le changement climatique et explorent également des solutions pour atténuer leur impact environnemental.</p>
            </section>
            <section id="article-section">
                <h1>2. Comprendre les Communications Vertes</h1>
                <p>La signification du terme "Communications Vertes" est examinée en détail, avec une analyse minutieuse des divers aspects de l'impact environnemental, couvrant tout, de l'extraction des matériaux à la consommation d'énergie et aux émissions de CO2. L'exploration s'étend également sur les répercussions directes et indirectes des approches respectueuses de l'environnement, tout en explorant le concept délicat de "l'effet rebond."</p>
            </section>
            <section id="article-section">
                <h1>3. Modèles de l'Empreinte Carbonne et Futur des Réseaux Sans Fil</h1>
                <p>Les modèles de l'empreinte carbone mettent particulièrement l'accent sur les dispositifs mobiles et les réseaux d'accès radio (Radio Access Networks: RAN). Ils soulignent également l'impératif de réduire la consommation d'énergie, répondant à une nécessité pressante pour faire face à la demande croissante de réseaux sans fil, tout en insistant sur la nécessité d'adopter une vision globale pour relever les défis de l'efficacité énergétique dans les réseaux sans fil.</p>
            </section>
            <section id="article-section">
                <h1>CONCLUSION</h1>
                <p>Cet article souligne l'importance de résoudre les problèmes de consommation d'énergie dans les réseaux de communication sans fil. Il met également en avant la nécessité de solutions éco-énergétiques pour soutenir la croissance exponentielle des réseaux sans fil, tout en minimisant l'impact environnemental. L'article appelle donc à une approche holistique et à la priorisation de l'efficacité énergétique dans la conception des réseaux sans fil pour un avenir plus durable. Il incite également les acteurs de l'industrie à agir de manière responsable pour préserver notre planète.</p>
            </section>
        </div>
    );
}

export default Reference19;