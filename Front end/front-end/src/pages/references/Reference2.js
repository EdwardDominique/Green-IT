import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Reference.css';

function Reference2() {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1); // navigate back by 1 in the history stack
    };

    return (
        <div className="article-page">
            <div className="header-buttons">
                <button className="back-button" onClick={handleBack}>Retour</button>
                <a href="https://greenspector.com/fr/quels-sont-les-meilleurs-navigateurs-web-android-a-utiliser-en-2021/" target="_blank" rel="noopener noreferrer" className="site-link-button">Visiter le site</a>
            </div>
            <h1>Analyse Énergétique et Environnementale des Navigateurs Web Android en 2021</h1>
            <section id="article-section">
                <h1>1. Méthodologie d'Évaluation :</h1>
                <p>L'étude a été réalisée sur 16 navigateurs web mobiles, testés sur un smartphone Galaxy S7. L'outil "Greenspector Test Runner" a été utilisé pour exécuter des tests automatisés, simulant des scénarios courants comme le lancement du navigateur, la navigation sur divers sites web, et des périodes d'inactivité.</p>
            </section>
            <section id="article-section">
                <h1>2. Consommation Énergétique et Autonomie :</h1>
                <ul>
                    <li>Evolution de la consommation: La moyenne de consommation d'énergie a augmenté de 4,2% par rapport à 2020, passant de 47mAh à 49mAh.</li>
                    <li>Performances individuelles:
                        <ul>
                            <li>Meilleurs Performants: Firefox Focus a montré une amélioration majeure, passant de la 10ème à la 1ère place. Vivaldi et DuckDuckGo ont également bien performé.</li>
                            <li>Moins Performants: Mint et Opera Mini se sont révélés être les plus énergivores.</li>
                        </ul>
                    </li>
                    <li>Autonomie : Elle est directement proportionnelle à la consommation d'énergie. Firefox Focus offre jusqu'à 10 heures d'autonomie, tandis que Mint n'offre que 5 heures.</li>
                </ul>
            </section>
            <section id="article-section">
                <h1>3. Gestion de la Mémoire (RAM) :</h1>
                <ul>
                    <li>Variabilité : La mémoire consommée par les processus des navigateurs varie entre 400 Mo et 1,8 Go. La consommation dépend de plusieurs facteurs tels que l'analyse, le stockage des éléments et la gestion des onglets.</li>
                    <li>Observations notables:
                        <ul>
                            <li>Edge présente une consommation mémoire initiale élevée de 834Mo.</li>
                            <li>Certains navigateurs comme Firefox Focus, Mint, et DuckDuckGo ont démontré une gestion de mémoire efficiente.</li>
                            <li>Des anomalies ont été observées avec Firefox qui, même après fermeture, continue d'occuper une mémoire importante.</li>
                        </ul>
                    </li>
                </ul>
            </section>
            <section id="article-section">
                <h1>4. Gestion des Données et Performance :</h1>
                <ul>
                    <li>Certains navigateurs optimisent les données grâce à des proxy ou ont une gestion du cache différente. Cette gestion impacte le volume de données échangées et, par conséquent, la performance.</li>
                    <li>La saisie d'URL présente des différences de performance, dues aux échanges réseau, auto-complétions, et traitements en arrière-plan. Par exemple, DuckDuckGo a montré de forts échanges réseau lors de la saisie, influençant sa performance.</li>
                </ul>
            </section>
            <section id="article-section">
                <h1>5. Impact Environnemental :</h1>
                <ul>
                    <li>L'évaluation prend en compte l'énergie consommée, l'usure de la batterie, ainsi que l'impact du réseau et du data center.</li>
                    <li>Classement: Firefox Focus, grâce à sa faible consommation, a le plus faible impact environnemental. Samsung, bien que sa consommation d'énergie soit moyenne, se classe deuxième en raison d'une gestion optimale des données. Les navigateurs tels qu'Ecosia, Edge, Mint et Opera Mini présentent un impact environnemental élevé en raison d'une consommation d'énergie importante et d'une mauvaise gestion des données.</li>
                </ul>
            </section>
            <section id="article-section">
                <h1>Conclusion:</h1>
                <p>Cette étude met en lumière la nécessité d'opter pour des navigateurs web éco-énergétiques, non seulement pour réduire l'empreinte carbone, mais aussi pour améliorer l'autonomie des appareils. Une attention particulière doit également être accordée à la gestion de la mémoire et des données pour assurer une performance optimale.</p>
            </section>
        </div>
    );
}

export default Reference2;
