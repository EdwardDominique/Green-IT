import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Reference.css';

function Reference3() {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1); // navigate back by 1 in the history stack
    };

    return (
        <div className="article-page">
            <div className="header-buttons">
                <button className="back-button" onClick={handleBack}>Retour</button>
                <a href="https://www.sciencedirect.com/science/article/abs/pii/S2210537913000504" className="site-link-button">Visiter le site</a>
            </div>
            <h1>Évaluation des Technologies Blockchain pour la Gestion des Transactions et des Actifs en Utilisant les Principes de Green IT</h1>
            <section id="article-section">
                <h1>1. Technologie Utilisée :</h1>
                <p>La technologie Blockchain a été utilisée, exploitant un réseau de 100 nœuds. La plateforme Ethereum a servi de base avec un taux de hachage moyen de 150 TH/s.</p>
            </section>
            <section id="article-section">
                <h1>2. Fonctionnalités Principales :</h1>
                <ul>
                    <li>Transactions Sécurisées: 500 transactions ont été traitées chaque seconde avec un temps de validation moyen de 15 secondes.</li>
                    <li>Contrats Intelligents: 200 contrats intelligents ont été déployés, automatisant ainsi diverses opérations.</li>
                    <li>Gestion Des Actifs: Gestion de 10 000 actifs avec un taux de réussite de transaction de 99.9%.</li>
                </ul>
            </section>
            <section id="article-section">
                <h1>3. Améliorations avec Green IT :</h1>
                <ul>
                    <li>Consommation Énergétique: Réduction de 30% de la consommation d'énergie, passant de 200 kWh à 140 kWh par jour.
                        <ul>
                            <li>Optimisation des algorithmes de consensus pour réduire la charge de travail des nœuds.</li>
                            <li>Utilisation de matériel éco-énergétique.</li>
                        </ul>
                    </li>
                    <li>Efficiency Processing: Augmentation de 20% de l'efficacité du traitement, permettant de traiter 600 transactions par seconde contre 500 auparavant.
                        <ul>
                            <li>Optimisation des temps de réponse grâce à l’amélioration des protocoles de communication entre les nœuds.</li>
                            <li>Amélioration du code des contrats intelligents pour un traitement plus rapide.</li>
                        </ul>
                    </li>
                    <li>Émissions de CO2: Réduction de 25% des émissions de CO2, passant de 100 tonnes à 75 tonnes par an.
                        <ul>
                            <li>Utilisation d'énergies renouvelables pour alimenter les centres de données.</li>
                            <li>Amélioration de l'efficacité énergétique globale réduisant ainsi l'empreinte carbone.</li>
                        </ul>
                    </li>
                </ul>
            </section>
            <section id="article-section">
                <h1>Conclusion :</h1>
                <p>L'application des principes de Green IT a permis d'améliorer considérablement l'efficacité et la durabilité de la gestion des transactions et des actifs via la technologie blockchain. Ces améliorations démontrent le potentiel de la blockchain lorsqu'elle est combinée avec des pratiques éco-responsables, offrant une solution puissante et respectueuse de l'environnement pour les défis modernes de gestion des transactions et des actifs.</p>
            </section>
        </div>
    );
}

export default Reference3;
