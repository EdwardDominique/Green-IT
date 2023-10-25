import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Reference.css';

function Reference14() {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1); // navigate back by 1 in the history stack
    };

    return (
        <div className="article-page">
            <div className="header-buttons">
                <button className="back-button" onClick={handleBack}>Retour</button>
                <a href="https://club.greenit.fr/doc/2022-09-Benchmark_Green_IT-2022-rapport.0.5_FR.pdf" target="_blank" rel="noopener noreferrer" className="site-link-button">Visiter le site</a>
            </div>
            <h1>BENCHMARK GREEN IT</h1>
            <section id="article-section">
                <h1>0. Auteurs de l'article</h1>
                <span>L'article a été réalisé par les organisations </span>
                <a href="https://www.greenit.fr/" target="_blank" rel="noopener noreferrer" className="site-link-author">GreenIT.fr</a><span>, </span>
                <a href="https://www.espelia.fr/#/" target="_blank" rel="noopener noreferrer" className="site-link-author">Espelia</a><span> et </span>
                <a href="https://resilio-solutions.com/" target="_blank" rel="noopener noreferrer" className="site-link-author">Resilio</a><span> pour le </span>
                <a href="https://club.greenit.fr/" target="_blank" rel="noopener noreferrer" className="site-link-author">Club Green IT</a><span> et à porté sur 10 grandes entreprises privées et publiques, 39 760 utilisateurs et 206 475 équipements numériques (informatiques et télécoms).</span>
            </section>
            <section id="article-section">
                <h1>1. Méthodologie ACV</h1>
                <p>L'article met en évidence l'importance de l'Analyse du Cycle de Vie (ACV) pour évaluer l'impact environnemental des systèmes d'information. L'ACV est une méthode multicritère qui évalue les impacts environnementaux directs, mais dans ce contexte, elle se limite aux ACV attributionnelles.</p>
            </section>
            <section id="article-section">
                <h1>2. Cycle de Vie Matriciel</h1>
                <p>L'article propose de passer d'une approche circulaire à une approche matricielle pour évaluer le cycle de vie de l'ensemble des équipements (terminaux, réseaux, datacenters) contribuant au fonctionnement des systèmes d'information. Cela permet d'éviter les transferts de pollution d'une phase à l'autre et d'un tiers à l'autre.</p>
            </section>
            <section id="article-section">
                <h1>3. Indicateurs Environnementaux</h1>
                <p>L'article recommande plusieurs indicateurs environnementaux pour évaluer les impacts, notamment le changement climatique, l'appauvrissement de la couche d'ozone, l'émission de particules, l'acidification, l'utilisation des ressources, et d'autres. Ces indicateurs permettent de quantifier les externalités environnementales.</p>
            </section>
            <section id="article-section">
                <h1>4. Stratégie Green IT</h1>
                <p>L'ACV est présentée comme un outil puissant pour aider à établir une stratégie Green IT, identifier des leviers d'amélioration significatifs et communiquer de manière objective sur les performances et les améliorations environnementales.</p>
            </section>
            <section id="article-section">
                <h1>5. Conclusion</h1>
                <p>L'article "Benchmark Green IT 2022" met en avant l'importance de l'Analyse du Cycle de Vie (ACV) dans l'évaluation des impacts environnementaux des systèmes d'information, contribuant ainsi au Green IT. Il propose une méthodologie, des indicateurs environnementaux, et encourage une approche matricielle du cycle de vie pour une évaluation complète. L'ACV est reconnue comme un outil clé pour piloter une stratégie Green IT au niveau de l'entreprise.</p>
            </section>
        </div>
    );
}

export default Reference14;
