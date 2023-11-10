import React, { useState, useEffect }  from 'react';
import { useNavigate } from 'react-router-dom';
import './Project.css';
import { dataProjetGreenIT, dataProjetSite } from './LeonardBONNEVILLE/LBON_DataState';
import { affichageCode, affichageFigure, affichageText } from './LeonardBONNEVILLE/LBON_Fonctions';

function LeonardBONNEVILLE() {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1); // navigate back by 1 in the history stack
    };

    const [projetSite, setProjetSite] = useState(dataProjetSite);

    const [projetGreenIT, setprojetGreenIT] = useState(dataProjetGreenIT);

    useEffect(() => {
        // L'appel API ou extérieur se ferait ici :
        // setProjetSite({});
        // setprojetGreenIT({});
    }, []);

    const projets = [projetSite, projetGreenIT];

    return (
        <div className="article-page">
            <div className="header-buttons">
                <button className="back-button" onClick={handleBack}>Retour</button>
            </div>
            <section id="main-section">
                {projets.map((projet, projetDictKey) => (<>
                    {projet.title && affichageText(projet.title)}
                    {projet.collaboration && (<div className="collab">    <span>{projet.collaboration}</span>   </div>)}
                    {projet.sections.map((section, sectionDictKey) => (
                    <section key={`${projetDictKey}-${sectionDictKey}`} id="sub-section">
                        {section.subtitle && affichageText(section.subtitle)}
                        {section.text && affichageText(section.text)}              
                        {section.figCodes && affichageCode(section.figCodes["figIntroduction"])}    
                        {section.figResults && affichageFigure(section.figResults["figIntroduction"])}
                        {section.list && Object.entries(section.list).map(([key, value], listDictKey) => (
                            <div key={listDictKey}>
                                {affichageText(section.list[key])}
                                {section.figCodes && affichageCode(section.figCodes[key])}
                            </div>
                        ))}
                        {section.conclusion !== [] && affichageText(section.conclusion)}
                    </section>))}
                </>))}
            </section>
        </div>
    );
}

export default LeonardBONNEVILLE;
