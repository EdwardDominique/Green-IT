import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Reference.css';

function Reference1() {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1); // navigate back by 1 in the history stack
    };

    return (
        <div className="article-page">
            <div className="header-buttons">
                <button className="back-button" onClick={handleBack}>Retour</button>
                <a href="https://siecledigital.fr/2023/05/09/green-it-demarche-ambition-opportunites-entreprises/" target="_blank" rel="noopener noreferrer" className="site-link-button">Visiter le site</a>
            </div>
            <h1>Le Green IT, une démarche pleine d’ambitions et d’opportunités pour les entreprises</h1>
            <section id="article-section">
                <h1>L’urgence de la sobriété numérique</h1>
                <p>Le numérique représente 3 à 4 % des émissions de gaz à effet de serre dans le monde et 2,5 % de l’empreinte carbone. Ces chiffres sont susceptibles d’augmenter en raison de notre consommation du digital en constante augmentation. Il est donc urgent d’aller vers une ère de « sobriété numérique » en déployant une démarche de Green IT.</p>
            </section>
            <section id="article-section">
                <h1>La pollution numérique</h1>
                <p>La pollution numérique est générée par les systèmes d’information. L’ADEME identifie trois sources principales : les équipements des consommateurs (47 %) ; les infrastructures réseau (28 %) ; les data centers (25 %).</p>
            </section>
            <section id="article-section">
                <h1>Les scopes de la pollution du numérique</h1>
                <p>À l’échelle d’une société, la pollution du numérique et de l’IT revêt plusieurs visages. On distingue trois scopes :</p>
                <ul>
                    <li>Le premier scope concerne l’entreprise elle-même, avec les personnes qui la composent, les produits ou les services ou les biens qu’elle produit et les véhicules qu’elle possède.</li>
                    <li>Le second scope couvre l’électricité qui est fournie à la société pour fonctionner.</li>
                    <li>Le scope 3 amont concerne toutes les matières premières qui rentrent dans l’organisation pour qu’elle puisse produire ses chaînes de valeur.</li>
                    <li>Le scope 3 descendant est l’utilisation des produits, des services ou des biens qui ont été construits par l’entreprise et utilisés par chacun d’entre nous.</li>
                </ul>
            </section>
            <section id="article-section">
                <h1>Les opportunités du Green IT</h1>
                <p>Pour réduire leur empreinte carbone, les entreprises sont nombreuses à déployer une démarche de Green IT. Outre la nécessité environnementale, elle offre également de nombreuses opportunités.</p>
            </section>
            <section id="article-section">
                <h1>Conclusion</h1>
                <p>En conclusion, le Green IT est une démarche essentielle pour réduire l’impact environnemental du numérique. Il offre une opportunité pour les entreprises de minimiser leur empreinte carbone tout en exploitant les avantages du numérique. Cependant, il est crucial que cette transition vers une informatique plus verte soit réalisée de manière réfléchie et durable, en tenant compte de tous les aspects de la pollution numérique.</p>
            </section>
        </div>
    );
}

export default Reference1;
