import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Reference.css';

function Reference7() {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1); // navigate back by 1 in the history stack
    };

    return (
        <div className="article-page">
            <div className="header-buttons">
                <button className="back-button" onClick={handleBack}>Retour</button>
                <a href="https://greenlab.di.uminho.pt/wp-content/uploads/2017/10/sleFinal.pdf" target="_blank" rel="noopener noreferrer" className="site-link-button">Visiter le site</a>
            </div>
            <h1>Efficacité énergétique des langages de programmation</h1>
            <section id="article-section">
                <h1>Partie 1 : Description de l'Étude</h1>
                <p>Cette étude analyse l'efficacité énergétique de 27 langages de programmation populaires en se basant sur 10 problèmes de référence du "The Computer Language Benchmarks Game". L'objectif est de déterminer quels langages, types d'exécution et paradigmes sont les plus économes en énergie.</p>
            </section>
            <section id="article-section">
                <h1>Partie 2 : Méthodologie de l'Étude</h1>
                <p>Pour cette étude, les chercheurs ont collecté des solutions optimales pour 10 problèmes de référence, éliminant trois problèmes du champ d'étude. Ils ont ensuite mesuré la consommation d'énergie, le temps d'exécution et l'utilisation maximale de la mémoire pour chaque langage en utilisant une méthodologie précise, se conformant strictement aux instructions du Computer Language Benchmarks Game.</p>
            </section>
            <section id="article-section">
                <h1>Partie 3 : Résultats et Interprétation</h1>
                <p>Les résultats montrent que la rapidité d'un langage ne garantit pas son efficacité énergétique. Il existe des langages rapides qui ne sont pas économes en énergie. Les langages compilés se sont révélés plus rapides et économes en énergie en moyenne. La mémoire utilisée n'a montré qu'une corrélation faible avec la consommation d'énergie. Les analyses détaillées montrent que le choix du langage dépend du scénario d'utilisation.</p>
            </section>
            <section id="article-section">
                <h1>Partie 4 : Conclusion</h1>
                <p>Cette étude apporte des informations essentielles aux développeurs pour prendre des décisions éclairées sur le choix du langage en fonction de leurs besoins d'efficacité énergétique. Elle souligne l'importance de ne pas se fier uniquement à la rapidité d'un langage pour garantir son efficacité énergétique. Les résultats montrent que l'efficacité énergétique est influencée par plusieurs facteurs, y compris le langage, le type d'exécution et le paradigme.</p>
            </section>
        </div>
    );
}

export default Reference7;
