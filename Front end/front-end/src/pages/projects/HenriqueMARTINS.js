import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Project.css';
import fig1 from '../../pictures/henriqueResultat.png';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { monokaiSublime } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function CodeBlock({ codeString }) {
    return (
      <SyntaxHighlighter language="python" style={monokaiSublime}>
        {codeString}
      </SyntaxHighlighter>
    );
}

const sort_energy_test = `
    import pyRAPL
    import random
    
    pyRAPL.setup()
    
    # Tri par sélection
    @pyRAPL.measureit(number=5000)
    def selectionSort(arr):
        for i in range(len(arr)):
            min_idx = i
            for j in range(i+1, len(arr)):
                if arr[j] < arr[min_idx]:
                    min_idx = j
            arr[i], arr[min_idx] = arr[min_idx], arr[i]
    
    # Tri par insertion
    @pyRAPL.measureit(number=5000)
    def insertionSort(arr):
        for i in range(1, len(arr)):
            key = arr[i]
            j = i-1
            while j >= 0 and key < arr[j]:
                arr[j + 1] = arr[j]
                j -= 1
            arr[j + 1] = key
    
    # Quicksort
    @pyRAPL.measureit(number=5000)
    def quickSort(arr):
        if len(arr) <= 1:
            return arr
        pivot = arr[len(arr) // 2]
        left = [x for x in arr if x < pivot]
        middle = [x for x in arr if x == pivot]
        right = [x for x in arr if x > pivot]
        return quickSort(left) + middle + quickSort(right)
    
    data = [random.randint(0, 1000000) for _ in range(100000)]
    
    selectionSort(data.copy())
    insertionSort(data.copy())
    data_sorted = quickSort(data.copy())
    ;`

function HenriqueMARTINS() {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1); // navigate back by 1 in the history stack
    };

    


    return (
        <div className="article-page">
            <div className="header-buttons">
                <button className="back-button" onClick={handleBack}>Retour</button>
            </div>
            <section id="main-section">
                <h1>Création de la maquette et du Logo</h1>
                <section id="sub-section">
                    <p>Dans le monde digital actuel, créer un site web efficace et esthétiquement plaisant est devenu une nécessité. React.js, étant une bibliothèque JavaScript populaire, était mon choix pour le développement du site. La facilité avec laquelle React permet de créer et de gérer des composants a rendu le processus de développement à la fois structuré et agréable. Dans cet article, je vais partager mon expérience de la création d'un site web avec React.js, en mettant l'accent sur la structuration des pages, le routage, et la stylisation.</p>
                </section>
                <section id="sub-section">
                    <h2>Initialisation du Projet</h2>
                    <p>Tout a commencé avec l'initialisation d'un nouveau projet React à l'aide de Create React App. Cet outil a préparé le terrain, en fournissant un environnement de développement bien configuré.</p>
                </section>
                <section id="sub-section">
                    <h2>Structuration des Pages et Routage</h2>
                    <section>
                        <h3>Composants de Page</h3>
                        <p>Pour notre site, chaque page a été créée comme un composant React distinct. J'ai organisé ces composants dans un dossier pages, rendant la structure du projet claire et maintenable.</p>
                    </section>
                    <section>
                        <h3>Gestion du Routage</h3>
                        <p>La définition des routes était la prochaine étape cruciale. Nous avons utilisé React Router pour associer les URL aux composants de page correspondants, ce qui a facilité la navigation entre les différentes sections du site.</p>
                    </section>
                </section>
                <section id="sub-section">
                    <h2>Stylisation</h2>
                    <p>La stylisation est une partie essentielle de tout projet web. Pour notre site, nous avons créé des fichiers CSS séparés pour chaque composant de page et les avons importés pour appliquer le style. Cette approche a rendu la gestion des styles assez simple et organisée.</p>
                </section>
            </section>
            <section id="main-section">
                <h1>Évaluation de la Consommation Énergétique de Différentes Méthodes de Tri en Python</h1>
                <section id="sub-section">
                    <p>Le tri de données est une opération fondamentale en informatique et est largement utilisé dans divers domaines. Dans le contexte du Green IT, la manière dont le tri est réalisé peut avoir un impact sur la consommation énergétique. Ce projet vise à comparer la consommation énergétique de différentes méthodes de tri en Python pour contribuer à une programmation plus respectueuse de l'environnement.</p>
                </section>
                <section id="sub-section">
                    <h2>Présentation du Projet</h2>
                    <p>L'objectif est de comparer la consommation énergétique de trois algorithmes de tri courants en Python: le tri par sélection, le tri par insertion, et le tri rapide (quicksort). Ces méthodes seront évaluées sur un tableau de données aléatoires de taille variable, allant de 10^4 à 10^6 éléments. Chaque tri sera exécuté plusieurs fois pour obtenir des données précises, et la bibliothèque pyRAPL sera utilisée pour mesurer la consommation d'énergie.</p>
                </section>
                <section id="sub-section">
                    <h2>Technologie Utilisée</h2>
                    <ul>
                        <li>pyRAPL:</li>
                        <ul>
                            <li> Comme mentionné précédemment, pyRAPL sera utilisé pour mesurer la consommation d'énergie des différentes méthodes de tri.</li>
                        </ul>
                    </ul>
                </section>
                <section id="sub-section">
                    <h2>Méthodologie</h2>
                    <p>Un script Python, sort_energy_test.py, sera créé. Ce script contiendra les trois fonctions de tri et exécutera chaque méthode sur un tableau de données aléatoires. La consommation d'énergie de chaque tri sera mesurée à l'aide de pyRAPL.</p>
                    <figure>
                        <CodeBlock codeString = {sort_energy_test}/>
                        <figcaption>sort_energy_test.py</figcaption>
                    </figure>
                </section>
                <section id="sub-section">
                    <h2>Résultats attendus</h2>
                    <p>Les résultats devraient fournir des informations sur la consommation énergétique de chaque algorithme de tri. Les données collectées pourraient aider à déterminer quelle méthode est la plus efficace en termes d'énergie pour trier de grands ensembles de données en Python.</p>
                </section>
                <section id="sub-section">
                    <h2>Résultats</h2>
                    <figure>
                        <img class="img" src={fig1} alt="resultat" style={{ transform: 'scale(0.5)', borderRadius: '25px', borderLeft: '-50px' }}/>
                        <figcaption>Analyse Comparative de Performance et Consommation : Import vs Basic (20 Exécutions)</figcaption>
                    </figure>
                    <ul>
                        <li>
                            <h3>Temps d'exécution</h3>
                            <ul>
                                <li>Sélection: Les temps d'exécution pour le tri par sélection varient légèrement, mais restent en moyenne autour de 1,207 μs. Cela indique que le tri par sélection est relativement stable dans son temps d'exécution pour cet ensemble fictif de données.</li>
                                <li>Insertion: Le temps d'exécution pour le tri par insertion semble également être stable, avec une moyenne autour de 1,014 μs. C'est légèrement plus rapide que le tri par sélection.</li>
                                <li>Quicksort: Le tri rapide, ou Quicksort, a le temps d'exécution le plus court avec une moyenne d'environ 0,607 μs, ce qui le rend nettement plus rapide que les deux autres méthodes.</li>
                            </ul>
                        </li>
                        <li>
                            <h3>Consommation d'énergie</h3>
                            <ul>
                                <li>Sélection: La consommation d'énergie pour le tri par sélection a une moyenne d'environ 2,517 μJ.</li>
                                <li>Insertion: La consommation d'énergie pour le tri par insertion est légèrement inférieure, avec une moyenne d'environ 2,128 μJ.</li>
                                <li>Quicksort: Le Quicksort a la consommation d'énergie la plus basse avec une moyenne d'environ 1,216 μJ.</li>
                            </ul>
                        </li>
                        <li>
                            <h3>Puissance</h3>
                            <ul>
                                <li>Sélection: La puissance moyenne pour le tri par sélection est d'environ 2,088 μW.</li>
                                <li>Insertion: Pour le tri par insertion, la puissance moyenne est d'environ 2,101 μW, légèrement supérieure à celle du tri par sélection.</li>
                                <li>Quicksort: Le Quicksort a une puissance moyenne d'environ 2,006 μW, ce qui est légèrement inférieur aux deux autres méthodes.</li>
                            </ul>
                        </li>
                        <li>
                            <h3>Conclusion</h3>
                            <ul>
                                <li>Temps d'exécution: Le Quicksort est le plus rapide des trois algorithmes de tri.</li>
                                <li>Consommation d'énergie: Le Quicksort est également le plus efficace en termes d'énergie.</li>
                                <li>Puissance: Bien que les valeurs soient proches, le Quicksort a la puissance la plus faible, ce qui le rend potentiellement plus efficace en termes de puissance sur une période prolongée.</li>
                            </ul>
                        </li>
                    </ul>
                </section>
                <section id="sub-section">
                    <h2>Conclusion globale</h2>
                    <p>Dans le cadre de notre exploration des impacts énergétiques du code source, ce projet a examiné la consommation d'énergie associée à trois différents algorithmes de tri en Python : Sélection, Insertion et Quicksort. L'objectif était d'aligner les initiatives de programmation avec le concept grandissant de Green IT, qui vise à réduire l'empreinte carbone des opérations informatiques.<br></br>

Après avoir exécuté chaque algorithme de tri 20 fois, nos analyses montrent que le Quicksort est le plus efficace à la fois en termes de temps d'exécution et de consommation d'énergie. Bien que les différences en termes de puissance soient subtiles entre les méthodes, Quicksort a également démontré une légère supériorité.<br></br>

Les défis rencontrés, notamment les problèmes de compatibilité initiale avec Windows, ont souligné l'importance d'un environnement de test adéquat pour de telles études. Grâce à l'adaptation à un système Linux en dual boot, nous avons pu réaliser des tests sans entrave et obtenir des résultats fiables.<br></br><br></br>

Pour finir, ce projet a démontré que même à un niveau aussi granulaire que le code source, des optimisations peuvent être réalisées pour favoriser une informatique plus verte. Le choix de l'algorithme, comme démontré par notre comparaison, peut avoir un impact tangible sur la consommation d'énergie. En intégrant la conscience énergétique dans la phase de développement, nous faisons un pas de plus vers une industrie informatique respectueuse de l'environnement.<br></br>

</p>
                </section>
            </section>
            












            
        </div>
    );
}

export default HenriqueMARTINS;
