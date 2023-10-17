import React from 'react';

function Toolbar({ onSelectTab }) {
    return (
        <div className="toolbar">
            <button onClick={() => onSelectTab('accueil')}>Accueil</button>
            <button onClick={() => onSelectTab('projet')}>Projet</button>
            <button onClick={() => onSelectTab('reference')}>Référence</button>
        </div>
    );
}

export default Toolbar;
