import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Reference.css';

function Reference5() {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1); // navigate back by 1 in the history stack
    };

    return (
        <div className="article-page">
            <div className="header-buttons">
                <button className="back-button" onClick={handleBack}>Retour</button>
                <a href="https://www.diva-portal.org/smash/get/diva2:1675178/FULLTEXT02" target="_blank" rel="noopener noreferrer" className="site-link-button">Visiter le site</a>
            </div>
            <h1>Impact du Green IT (Technologies de l'Information Vertes) dans le Développement Web</h1>
            <section id="article-section">
                <h1>0. Auteurs de l'article</h1>
                <p>Sofia Herelius, dans sa thèse soumise à l'Institut de Technologie de Blekinge, explore le codage vert et son impact sur le changement climatique. À travers une méthodologie impliquant un sondage auprès des programmeurs et la collecte de données, elle identifie des techniques de codage éco-énergétiques, tout en révélant une reconnaissance modérée du "codage vert" parmi les programmeurs. L'étude met également en lumière l'importance d'optimiser l'efficacité énergétique dans le développement de logiciels pour réduire l'empreinte carbone des applications.</p>
            </section>
            <section id="article-section">
                <h1>1. Introduction :</h1>
                <p>La nécessité du Green IT a été mise en avant avec la montée des préoccupations environnementales. Par exemple, la création de pages web plus légères a été réalisée en réduisant la taille des images et en éliminant le code CSS redondant, contribuant ainsi à réduire les émissions et atténuer l'impact du changement climatique.</p>
            </section>
            <section id="article-section">
                <h1>2. Perception des Programmeurs :</h1>
                <ul>
                    <li>Une étude a montré que 30% des répondants étaient familiers avec les termes "green code" ou "green coding".</li>
                    <li>Environ un tiers des répondants réfléchissent à la façon dont leur code peut économiser de l'énergie lors du développement.</li>
                    <li>Une majorité des répondants souhaiteraient que la Green IT soit une priorité plus élevée dans leur environnement de travail.</li>
                </ul>
            </section>
            <section id="article-section">
                <h1>3. Techniques de Green IT :</h1>
                <ul>
                    <li>Les langages de programmation C et Rust ont été identifiés comme les plus écoénergétiques, tandis que PHP et JavaScript sont plus efficaces que Swift, Perl, R, et Python. 
                        <ul>
                            <li>Méthodologie: Les tests ont été conduits en utilisant des benchmarks standardisés qui mesurent la consommation d'énergie lors de l'exécution de tâches spécifiques. L'efficacité énergétique a été évaluée en mesurant la consommation d'énergie durant l'exécution de ces tâches dans différents langages de programmation.</li>
                        </ul>
                    </li>
                    <li>Des outils tels que PageSpeed Insights peuvent fournir des suggestions pour améliorer la performance du site, pouvant conduire à une économie de temps de chargement de 0.8 secondes. 
                        <ul>
                            <li>Méthodologie: Les tests ont été réalisés en mesurant les temps de chargement avant et après l'application des suggestions d'optimisation fournies par l'outil. Les optimisations proposées incluaient la suppression du code CSS inutilisé et l'optimisation des images.</li>
                        </ul>
                    </li>
                    <li>GraphQL permet de récupérer des données spécifiques sans surcharge, résolvant les problèmes associés aux APIs REST traditionnelles qui nécessitent parfois des requêtes importantes.
                        <ul>
                            <li>Méthodologie: Les tests ont été conduits en comparant la charge sur les serveurs et la consommation d'énergie entre les requêtes GraphQL et REST sur un ensemble de données similaire. L'objectif était d'évaluer comment GraphQL permet des requêtes plus précises, réduisant ainsi la charge sur les serveurs et améliorant l'efficacité énergétique.</li>
                        </ul>
                    </li>
                </ul>
            </section>
            <section id="article-section">
                <h1>4. Conclusion :</h1>
                <p>Le Green IT est un domaine crucial pour réduire l'impact environnemental du secteur numérique. Avec des langages de programmation écoénergétiques, des techniques de développement optimisées, et une sensibilisation accrue des programmeurs, il est possible de faire des progrès significatifs vers un web plus durable. L'engagement des programmeurs et des entreprises envers le Green IT est essentiel pour réaliser ces améliorations.</p>
            </section>
        </div>
    );
}

export default Reference5;
