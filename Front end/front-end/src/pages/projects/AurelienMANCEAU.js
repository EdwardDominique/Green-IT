import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Project.css';
import fig1 from '../../pictures/aurelien1.png';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { monokaiSublime } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function CodeBlock({ codeString }) {
    return (
      <SyntaxHighlighter language="python" style={monokaiSublime}>
        {codeString}
      </SyntaxHighlighter>
    );
  }

const energy_test = `import pyRAPL
pyRAPL.setup()

@pyRAPL.measureit(number=10000000)
def importConso():
    import import_test
    y = import_test.x + 2

importConso()

@pyRAPL.measureit(number=10000000)
def basicConso():
    x = 3
    y = x + 2

basicConso()`;

const import_test = `x=3`;

const resultat = `Label : importConso
Begin : Fri Oct 27 15:08:06 2023
Duration :     0.1702 us
-------------------------------
PKG :
        socket 0 :     1.7386 uJ
Label : basicConso
Begin : Fri Oct 27 15:08:08 2023
Duration :     0.0807 us
-------------------------------
PKG :
        socket 0 :     0.8260 uJ`;

function AurelienMANCEAU() {
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
                <h1>Création d'un Site Web avec React.js: De la Conception à la Stylisation</h1>
                <div class="collab">
                    <span>En collaboration avec Léonard BONNEVILLE</span>
                </div>
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
                <h1>Analyse de la Consommation Énergétique dans les Scripts Python: Une Approche Vers le Green IT</h1>
                <section id="sub-section">
                    <p>Dans l'ère numérique actuelle, la consommation d'énergie des infrastructures informatiques a suscité des préoccupations environnementales significatives, ce qui a conduit à l'émergence du concept de Green IT. L'objectif principal du Green IT est de minimiser l'empreinte carbone des opérations informatiques en optimisant la consommation d'énergie sans compromettre les performances. Un aspect crucial de cet objectif est d'examiner et d'optimiser la consommation d'énergie au niveau du code source. Notre projet s'inscrit dans cette initiative en explorant l'impact de l'utilisation de l'importation de fichiers dans des scripts Python sur la consommation d'énergie.</p>
                </section>
                <section id="sub-section">
                    <h2>Présentation du Projet</h2>
                    <p>Le projet vise à comparer la consommation énergétique de deux fonction dans un scripts Python simples; l'une utilise l'importation de fichiers pour effectuer une opération arithmétique de base (3 + 2), tandis que l'autre effectue la même opération sans importation de fichiers. Pour obtenir des résultats probants, chaque fonction sera exécuté 10,000,000 fois. L'analyse de la consommation d'énergie est facilitée par l'utilisation de la bibliothèque pyRAPL, un outil efficace pour mesurer la consommation d'énergie des fonctions en Python.</p>
                </section>
                <section id="sub-section">
                    <h2>Technologie Utilisée</h2>
                    <ul>
                        <li>pyRAPL:</li>
                        <ul>
                            <li>pyRAPL est une bibliothèque Python qui permet de mesurer la consommation d'énergie des scripts Python en utilisant les compteurs RAPL (Running Average Power Limit) disponibles dans les processeurs modernes d'Intel. La bibliothèque fournit une API simple pour collecter des mesures d'énergie pour le code en cours d'exécution. Plus d'informations sur pyRAPL peuvent être trouvées sur <a href="https://pypi.org/project/pyRAPL/" target="_blank" rel="noopener noreferrer">PyPI - pyRAPL</a>.</li>
                        </ul>
                    </ul>
                </section>
                <section id="sub-section">
                    <h2>Défis Rencontrés</h2>
                    <section>
                        <h3>Exploration des Technologies de Mesure</h3>
                        <p>Au cœur de mon projet résidait la nécessité de mesurer précisément la consommation d'énergie des scripts Python. Cependant, la découverte de la technologie adéquate pour cette mesure s'est révélée être un parcours semé d'embûches. Le défi initial était de naviguer à travers les multiples options disponibles et de déterminer celle qui répondait le mieux à mes exigences en termes de précision et d'efficacité.</p>
                    </section>
                    <section>
                        <h3>Sélection de la Librairie Idéale</h3>
                        <p>La sélection de la librairie appropriée était la prochaine étape cruciale. Deux librairies, pyJoules et pyRAPL, étaient en lice. Chacune d'elles a été testée en profondeur pour évaluer leur efficacité et leur précision dans la mesure de la consommation d'énergie. Finalement, pyRAPL s'est avérée être la librairie de choix en raison de ses fonctionnalités robustes et de son intégration plus aisée dans mon environnement de développement.</p>
                    </section>
                    <section>
                        <h3>Problèmes de Compatibilité</h3>
                        <ul>
                            <li>
                                <h4>Incompatibilité avec Windows</h4>
                                <p>Initialement, les tests ont été effectués sur une machine Windows, mais des problèmes de compatibilité ont rapidement été rencontrés. Les librairies n'étaient pas entièrement compatibles avec ce système d'exploitation, ce qui m'a conduit à explorer d'autres alternatives.</p>
                            </li>
                            <li>
                                <h4>Tentatives sur Différentes Plates-formes Linux</h4>
                                <p>Après l'échec sur Windows, une machine virtuelle Linux a été configurée pour faire avancer le projet. Malheureusement, cette configuration a également présenté des problèmes d'incompatibilité. Un autre essai a été fait sur un Raspberry Pi via une connexion SSH sous Linux, mais encore une fois, l'incompatibilité a persisté.</p>
                            </li>
                            <div class="collab">
                                <span>En collaboration avec Léonard BONNEVILLE</span>
                            </div>
                            <li>
                                <h4>Solution: Dual Boot Linux</h4>
                                <p>Finalement, la décision a été prise de configurer un dual boot avec une distribution Linux sur une machine. Cette démarche a résolu les problèmes de compatibilité précédents et a permis le bon déroulement des tests de consommation d'énergie.</p>
                            </li>
                        </ul>
                    </section>
                </section>
                <section id="sub-section">
                    <h2>Méthodologie</h2>
                    <p>Un script Python unique a été créé, contenant les deux fonction de test. Le script, nommé energy_test.py, exécute d'abord la fonction avec importation de fichiers, suivi de celle sans importation, chaque fonction étant exécuté 10,000,000 fois. Le script energy_test.py est exécuté 20 fois, et la bibliothèque pyRAPL est utilisée pour mesurer et enregistrer la consommation d'énergie de chaque fonction lors de chaque exécution.</p>
                    <figure>
                        <CodeBlock codeString = {energy_test}/>
                        <figcaption>energy_test.py</figcaption>
                    </figure>
                    <figure>
                        <CodeBlock codeString = {import_test}/>
                        <figcaption>import_test.py</figcaption>
                    </figure>
                    <figure>
                        <CodeBlock codeString = {resultat}/>
                        <figcaption>resultat</figcaption>
                    </figure>
                </section>
                <section id="sub-section">
                    <h2>Résultats</h2>
                    <figure>
                        <img class="img" src={fig1} alt="resultat" style={{ transform: 'scale(0.6)', borderRadius: '25px' }}/>
                        <figcaption>Analyse Comparative de Performance et Consommation : Import vs Basic (20 Exécutions)</figcaption>
                    </figure>
                    <ul>
                        <li>
                            <h3>Temps d'exécution</h3>
                            <ul>
                                <li>En moyenne, la configuration Import prend plus de temps pour s'exécuter que la configuration Basic. La moyenne des temps d'exécution pour Import est de 0,1711 μs, tandis que pour Basic, elle est de 0,0816 μs. La médiane suit la même tendance, ce qui confirme que la distribution des temps d'exécution est cohérente entre les deux configurations.</li>
                                <li>La variance et l'écart-type sont faibles, ce qui suggère que les temps d'exécution sont relativement bien groupés autour de la moyenne.</li>
                            </ul>
                        </li>
                        <li>
                            <h3>Consommation d'énergie</h3>
                            <ul>
                                <li>De même, la configuration Import consomme plus d'énergie que la configuration Basic en moyenne. L'énergie moyenne consommée par Import est de 1,8508 μJ, tandis que pour Basic, elle est de 0,8717 μJ.</li>
                                <li>La variance et l'écart-type pour Import sont légèrement plus élevés que pour Basic, ce qui indique une dispersion plus large des valeurs autour de la moyenne dans la configuration Import.</li>
                            </ul>
                        </li>
                        <li>
                            <h3>Puissance</h3>
                            <ul>
                                <li>La puissance est obtenue en divisant l'énergie par le temps, ce qui donne une mesure de l'efficacité énergétique de l'exécution.</li>
                                <li>La moyenne de la puissance pour Import est de 10,8437 μW et pour Basic est de 10,7053 μW. Bien que la différence entre les moyennes soit faible, la dispersion des valeurs, comme indiqué par l'écart-type et la variance, est plus grande pour Import.</li>
                            </ul>
                        </li>
                        <li>
                            <h3>Conclusion</h3>
                            <p>La configuration Basic est plus efficace en termes de temps d'exécution et de consommation d'énergie. Cependant, les différences en termes de puissance sont moins prononcées, ce qui suggère que la configuration Import pourrait avoir des avantages en termes de performance énergétique dans certains cas, bien que ces avantages ne soient pas suffisamment grands pour compenser sa consommation d'énergie et son temps d'exécution plus élevés.</p>
                        </li>
                    </ul>
                </section>
            </section>
            












            
        </div>
    );
}

export default AurelienMANCEAU;
