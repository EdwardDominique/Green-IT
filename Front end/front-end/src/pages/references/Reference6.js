import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Reference.css';

function Reference6() {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1); // navigate back by 1 in the history stack
    };

    return (
        <div className="article-page">
            <div className="header-buttons">
                <button className="back-button" onClick={handleBack}>Retour</button>
                <a href="https://www.impact-ai.fr/fr/2021/05/28/ai-for-green-une-serie-speciale-par-impact-ai/" target="_blank" rel="noopener noreferrer" className="site-link-button">Visiter le site</a>
            </div>
            <h1>AI for Green : la branche verte de l’intelligence artificielle</h1>
            <section id="article-section">
                <h1>L’impact environnemental de l’IA</h1>
                <p>L’intelligence artificielle (IA) a un impact environnemental significatif. En effet, le numérique représente près de 5% des émissions mondiales de gaz à effet de serre, et cette proportion est en augmentation constante. L’IA, en tant que composante majeure du numérique, contribue donc à ces émissions. Cependant, il existe également des initiatives d’IA qui visent à réduire cet impact, souvent regroupées sous le terme “AI for Green”.</p>
            </section>
            <section id="article-section">
                <h1>L’IA et l’environnement</h1>
                <p>Actuellement, l’IA joue un rôle relativement mineur dans la problématique environnementale. Cependant, étant donné la rapidité de son développement et son intégration croissante dans divers secteurs, il est probable que son impact sur l’environnement deviendra de plus en plus important à l’avenir.</p>
            </section>
            <section id="article-section">
                <h1>Les dommages et bénéfices de l’IA</h1>
                <p>L’IA peut avoir des effets à la fois négatifs et positifs sur l’environnement. Par exemple, certaines formes d’IA, comme le deep learning, sont très gourmandes en ressources et en énergie, ce qui peut contribuer à l’augmentation des émissions de gaz à effet de serre. D’un autre côté, l’IA peut également être utilisée pour aider à la transition écologique, par exemple en optimisant les systèmes énergétiques pour réduire la consommation d’énergie.</p>
            </section>
            <section id="article-section">
                <h1>La Green IA</h1>
                <p>La Green IA est un concept qui vise à rendre l’IA plus durable. Cela implique le développement de modèles d’IA qui sont conçus pour être efficaces et performants tout en minimisant leur impact sur l’environnement. Cela peut impliquer des techniques comme l’éco-conception, qui vise à réduire l’impact environnemental d’un produit tout au long de son cycle de vie. De nombreuses initiatives sont en cours pour faire de la Green IA une réalité.</p>
            </section>
            <section id="article-section">
                <h1>Conclusion</h1>
                <p>En conclusion, l’IA et le Green IT sont deux domaines en pleine expansion qui ont un impact significatif sur notre environnement. Bien que l’IA puisse contribuer à l’augmentation des émissions de gaz à effet de serre, elle peut également être utilisée pour aider à la transition écologique. Le concept de Green IA, qui vise à rendre l’IA plus durable, est une initiative prometteuse dans ce sens. Il est donc crucial de continuer à développer et à promouvoir des pratiques d’IA respectueuses de l’environnement pour minimiser l’impact négatif du numérique sur notre planète.</p>
            </section>
        </div>
    );
}

export default Reference6;
