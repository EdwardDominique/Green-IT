import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Project.css';

function LoicBOURNONVILLE() {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1); // navigate back by 1 in the history stack
    };

    return (
        <div className="article-page">
            <div className="header-buttons">
                <button className="back-button" onClick={handleBack}>Retour</button>
            </div>
            












            
        </div>
    );
}

export default LoicBOURNONVILLE;
