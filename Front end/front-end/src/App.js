import React, { useState } from 'react';
import Accueil from './components/Accueil';
import Projet from './components/Projet';
import Reference from './components/Reference';
import Toolbar from './components/Toolbar';

function App() {
    const [tab, setTab] = useState('accueil');

    const renderContent = () => {
        switch(tab) {
            case 'accueil':
                return <Accueil />;
            case 'projet':
                return <Projet />;
            case 'reference':
                return <Reference />;
            default:
                return <div>Sélectionnez un onglet.</div>;
        }
    };

    return (
        <div>
            <Toolbar onSelectTab={setTab} />
            <div>
                {renderContent()}
            </div>
        </div>
    );
}

export default App;
