import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Project.css';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { monokaiSublime } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import fig_whileFor_pyRAPL from '../../pictures/leonard/leonard_whileFor_pyRAPL.png';
import fig_whileFor_pyJoules from '../../pictures/leonard/leonard_whileFor_pyJoules.png';
import fig_selectCase_pyRAPL from '../../pictures/leonard/leonard_selectCase_pyRAPL.png';
import fig_selectCase_pyJoules from '../../pictures/leonard/leonard_selectCase_pyJoules.png';
import fig_increment_pyRAPL from '../../pictures/leonard/leonard_increment_pyRAPL.png';
import fig_increment_pyJoules from '../../pictures/leonard/leonard_increment_pyJoules.png';
import fig_recursif_pyJoules from '../../pictures/leonard/leonard_recursif_pyJoules.png';

function CodeBlock({ codeString }) {
    return (
      <SyntaxHighlighter language="python" style={monokaiSublime}>
        {codeString}
      </SyntaxHighlighter>
    );
  }

const fonction_captureOutput = `import pyRAPL
import io
import contextlib
from pyJoules.energy_meter import measure_energy

def capture_output(func):
    output = io.StringIO()
    with contextlib.redirect_stdout(output):
        func()
    return output.getvalue()`;

const fonction_displayResults = `
def display_results(result_str_pyJoules, result_str_pyRAPL, type):
    print(f"---- {type} ----")
    result_dict_pyJoules = {}                                                           # Analyse des résultats pyJoules
    for line in result_str_pyJoules.split(';'):
        key, value = map(str.strip, line.split(':', 1))
        result_dict_pyJoules[key] = value

    lines_pyRAPL = result_str_pyRAPL.strip().split('/n')                                # Analyse des résultats pyRAPL

    duration_pyRAPL = float(lines_pyRAPL[2].split(':')[1].strip()[:-3]) / 1e6           # Durées en secondes
    duration_pyJoules = float(result_dict_pyJoules.get('duration', '0'))            
    print(f"Durée (pyRAPL) : {duration_pyRAPL:.6f} secondes Durée (pyJoules) : {duration_pyJoules} secondes")

    energy_cpu_pyRAPL = float(lines_pyRAPL[5].split(':')[1].strip()[:-3]) / 1e6         # Résultats pyRAPL
    power_cpu_pyRAPL = energy_cpu_pyRAPL / duration_pyRAPL                              
    print(f'CPU AMD Ryzen 7 5800H (pyRAPL) : {energy_cpu_pyRAPL} Joules, {power_cpu_pyRAPL} Watts')

    energy_cpu_pyJoules = float(result_dict_pyJoules.get('package_0', 0)) / 1_000_000   # Résultats pyJoules
    power_cpu_pyJoules = energy_cpu_pyJoules / duration_pyJoules
    print(f'CPU AMD Ryzen 7 5800H (pyJoules) : {energy_cpu_pyJoules} Joules, {power_cpu_pyJoules} Watts')`;

const code_whileFor = `pyRAPL.setup()
@pyRAPL.measureit()
def pyRAPL_while():
    i = 0
    while i < 100_000:
        i += 1

@pyRAPL.measureit()
def pyRAPL_for():
    j = 0
    for i in range(100_000):
        j += 1

@measure_energy
def pyJoules_while():
    i = 0
    while i < 100_000:
        i += 1

@measure_energy
def pyJoules_for():
    j = 0
    for i in range(100_000):
        j += 1

display_results(capture_output(pyJoules_while), capture_output(pyRAPL_while), "Résultats boucle while")
display_results(capture_output(pyJoules_for), capture_output(pyRAPL_for), "Résultats boucle for")`;

const code_selectCase = `pyRAPL.setup()
@pyRAPL.measureit()
def pyRAPL_match():
    for _ in range(100_000):
        value = 4
        match value:
            case 1:
                pass
            case 2:
                pass
            case 3:
                pass

@pyRAPL.measureit()
def pyRAPL_if():
    for _ in range(100_000):
        value = 4  
        if value == 1:
            pass
        elif value == 2:
            pass
        elif value == 3:
            pass

@measure_energy
def pyJoules_match():
    for _ in range(100_000):
        value = 4  
        match value:
            case 1:
                pass
            case 2:
                pass
            case 3:
                pass

@measure_energy
def pyJoules_if():
    for _ in range(100_000):
        value = 4
        if value == 1:
            pass
        elif value == 2:
            pass
        elif value == 3:
            pass

display_results(capture_output(pyJoules_match), capture_output(pyRAPL_match), "Résultats select case")
display_results(capture_output(pyJoules_if), capture_output(pyRAPL_if), "Résultats if/elif")`;

const code_increment = `pyRAPL.setup()
@pyRAPL.measureit()
def pyRAPL_incShort():
    i = 0
    while i < 100_000:
        i += 1

@pyRAPL.measureit()
def pyRAPL_incLong():
    i = 0
    while i < 100_000:
        i = i + 1

@measure_energy
def pyJoules_incShort():
    i = 0
    while i < 100_000:
        i += 1

@measure_energy
def pyJoules_incLong():
    i = 0
    while i < 100_000:
        i = i + 1

display_results(capture_output(pyJoules_incShort), capture_output(pyRAPL_incShort), "Résultats i += 1")
display_results(capture_output(pyJoules_incLong), capture_output(pyRAPL_incLong), "Résultats i = i + 1")`;

const code_recursif = `ef recursive(n):
if n == 0:
    return 0
return recursive(n - 1)

def non_recursive(n):
while n != 0:
    n = n - 1
return n

@measure_energy
def pyJoules_recursive():
recursive(900)

@measure_energy
def pyJoules_nonRecursive():
non_recursive(900)

display_results(capture_output(pyJoules_recursive), "Résultats boucle recursive")
display_results(capture_output(pyJoules_nonRecursive), "Résultats boucle non recursive")`;










function LeonardBONNEVILLE() {
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
                <h1>Mise en place Site Web avec React.js</h1>
                <div class="collab">
                    <span>En collaboration avec Aurélien MANCEAU</span>
                </div>
                <section id="sub-section">
                    <p>Création et mise a jour de se site web en collaboration avec Aurélien MANCEAU, notemment :l'infrastructure globale, la charte graphique des couleurs, le choix de l'image de fond du site, </p>
                    <ul>
                        <li>l'infrastructure globale</li>
                        <li>la charte graphique des couleurs</li>
                        <li>l'image de fond du site</li>
                        <li>la page projet</li>
                        <li>ainsi que d'autres point vu en commun avec Aurélien MANCEAU</li>
                    </ul>
                </section>
            </section>
            <section id="main-section"></section>     

            <section id="main-section">
                <h1>Comparaison de différentes fonctions, analyse du temps d’execution, de la consommation en Python: Un pas de plus vers le Green IT</h1>
                <section id="sub-section">
                    <p>Le nombre de développeur ne fait que croitre d’année en année, tout comme notre consommation numérique. C’est pourquoi il devient de plus en plus nécessaire de faire des codes plus en adéquation avec le « Green IT ».</p>
                </section>
                <section id="sub-section">
                    <h2>Présentation du Projet</h2>
                    <p>Etant moi-même en formation d’informatique et application, il y a diverses questions que je me posais depuis quelques temps, quelle fonction est plus intéressante à utiliser si le choix est possible, for ? ou while ?</p>
                    <p>Que choisir entre Select Case ou if/elif ? est un choix esthétique ou le temps d’exécution du code pourrait en partir ?</p>
                    <p>diverses questions auxquelles j’apporterai des résultats concrets, que chacun pourra reprendre et pousser plus loin. C’est ainsi qu’on fera avancer le Green IT.</p>
                </section>
                <section id="sub-section">
                    <h2>Technologie Utilisée</h2>
                    <ul>
                        <li>pyRAPL:</li>
                        <ul>
                            <li>pyRAPL est une bibliothèque Python qui permet de mesurer la consommation d'énergie des composants matériels d'un système informatique, en particulier le CPU et la DRAM, en utilisant le framework RAPL (Running Average Power Limit) intégré dans les processeurs modernes d'Intel. Plus d'informations sur pyRAPL peuvent être trouvées sur <a href="https://pyrapl.readthedocs.io/en/latest/" target="_blank" rel="noopener noreferrer">Documentation - pyRAPL</a>.</li>
                        </ul>
                        <li>pyJoules:</li>
                        <ul>
                            <li>pyJoules est également une bibliothèque Python destinée à la mesure de la consommation énergétique des systèmes informatiques. Elle permet d'obtenir des mesures de la consommation d'énergie au niveau des composants matériels en instrumentant les compteurs d'énergie disponibles sur la plateforme. Plus d'informations sur pyJoules peuvent être trouvées sur <a href="https://pyjoules.readthedocs.io/en/latest/" target="_blank" rel="noopener noreferrer">Documentation - pyJoules</a>.</li>
                        </ul>
                        <li>Visual Studio Code:</li>
                        <ul>
                            <li>Visual Studio Code (VS Code) est un éditeur de code source gratuit et open-source développé par Microsoft. Il propose des fonctionnalités telles que la mise en surbrillance de la syntaxe, le débogage intégré, et la prise en charge de Git, facilitant ainsi le développement et le débogage de programmes.</li>
                        </ul>
                        <li>Langage Python:</li>
                        <ul>
                            <li>Python est un langage de programmation interprété, de haut niveau et généraliste. Il est conçu pour optimiser la lisibilité du code, et permet une expression concise et claire des concepts en moins de lignes de code.</li>
                        </ul>
                        <li>Système Ubuntu via Dual Boot:</li>
                        <ul>
                            <li>Le dual boot est une configuration qui permet à un ordinateur d'exécuter deux systèmes d'exploitation différents de manière séparée, sur la même machine. L'utilisateur peut choisir quel système d'exploitation démarrer lors de l'allumage de l'ordinateur. Dans votre cas, l'un des systèmes d'exploitation est Ubuntu.</li>
                            <li>Ubuntu est un système d'exploitation libre et gratuit basé sur le noyau Linux. Il est réputé pour sa facilité d'utilisation, sa sécurité et sa robustesse. Il offre un environnement de travail efficace et des outils puissants pour le développement, les opérations de serveur et l'informatique quotidienne.</li>
                            <li>Le dual boot d'Ubuntu avec un autre système d'exploitation offre une flexibilité permettant aux utilisateurs de bénéficier des avantages spécifiques de chaque système, tout en conservant la possibilité de basculer entre eux selon les besoins.</li>
                        </ul>
                    </ul>
                </section>
                <section id="sub-section">
                    <h2>Méthodologie</h2>
                    <p>J’ai décidé d’utiliser deux librairies qui calcul le temps d’exécution et la consommation du code afin d’avoir plusieurs sources de comparaison.</p>
                    <p>Les librairies pyRAPL et pyJoules, lesquelles ne fonctionne que sur un système Linux. Pour se faire, j’ai effectué un dual boot sur mon système windows 11.</p>
                    <p>J’ai effectué 4 comparaisons de code, pour ce faire je reprends la même bas pour chacun de ses codes et je modifie les fonctions à tester.</p>
                    <p>J’utilise deux fonctions que j’utilise pour chacun des codes: </p>
                    <ul>
                        <li>capture_output : cette fonction récupère la sortie de la fonction et la convertit en une chaine de caractère utilisable pour la suite.</li>
                        <figure>
                        <CodeBlock codeString = {fonction_captureOutput}/>
                        <figcaption>capture_output.py</figcaption>
                        </figure>
                        <li>display_results : cette fonction récupère la chaîne de caractère de la fonction ‘capture_output’ et print les résultats selon les données pyRAPL et pyJoules qui lui sont envoyé.</li>
                        <figure>
                        <CodeBlock codeString = {fonction_displayResults}/>
                        <figcaption>display_results.py</figcaption>
                        </figure>
                    </ul>
                    <p>Pour les tests, j’effectue 100 000 itérations des fonctions afin d’obtenir des résultats de consommation exploitable.</p>
                    <p>Les unités de durées sont en secondes, l’énergie est en Joule, la puissance est en Watt.</p>
                </section>

                <section id="sub-section">
                    <h2>1ère comparaison: While vs For</h2>
                    <p>Les boucles for et while possèdent certaines similarités, toutes deux permettent d’effectuer une boucle a de multiple reprise, tandis que la boucle « while attend la validation d’une condition, la boucle ‘for’ s’exécute un nombre de fois donnée.</p>
                    <p>Pour ce test, les deux boucles effectueront la même tâche et exécuteront le même nombre de répétitions afin de permettre la meilleure comparaison possible.</p>
                    <figure>
                        <CodeBlock codeString = {code_whileFor}/>
                        <figcaption>While_For.py</figcaption>
                    </figure>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <figure style={{ marginRight: 'auto' }}>
                            <img src={fig_whileFor_pyRAPL} alt="pyRAPL: while vs for" style={{ transform: 'scale(0.75)', borderRadius: '25px' }}/>
                            <figcaption>pyRAPL: while vs for</figcaption>
                        </figure>
                        <figure style={{ marginLeft: 'auto' }}>
                            <img src={fig_whileFor_pyJoules} alt="pyJoules: while vs for" style={{ transform: 'scale(0.75)', borderRadius: '25px' }}/>
                            <figcaption>pyJoules: while vs for</figcaption>
                        </figure>
                    </div>
                    <ul>
                        <li>
                            <h3>Durée d'exécution </h3>
                            <ul>
                                <li>Les boucles 'For' ont également montré une durée d'exécution légèrement plus longue que les boucles 'While'.</li>
                                <li>Bien que la différence ne soit pas significative, dans un environnement où des milliers ou des millions de boucles sont exécutées, même de petites différences de temps peuvent s'accumuler, ce qui peut avoir un impact sur l'efficacité énergétique.</li>
                            </ul>
                        </li>
                        <li>
                            <h3>Consommation d'énergie</h3>
                            <ul>
                                <li>On observe que les boucles 'For' ont tendance à consommer plus d'énergie que les boucles 'While', quel que soit la bibliothèque utilisée. </li>
                                <li>En moyenne, pyRAPL enregistre une consommation d'énergie de 0.031321 Joules pour les boucles 'For' contre 0.022830 Joules pour les boucles 'While'.</li>
                                <li>De même, pyJoules enregistre une consommation d'énergie de 0.034146 Joules pour les boucles For contre 0.027728 Joules pour les boucles While. </li>
                                <li>Ces tendances suggèrent que, pour des tâches similaires, les boucles While peuvent être plus écoénergétiques.</li>                                
                            </ul>
                        </li>
                        <li>
                            <h3>Puissance</h3>
                            <ul>
                                <li>Les mesures de puissance suivent une tendance similaire à celle de la consommation d'énergie.</li>
                                <li>Les boucles 'For' enregistrent une puissance moyenne plus élevée que les boucles 'While' dans les deux bibliothèques. Cela peut être dû au fait que les boucles For peuvent nécessiter plus de ressources système, ce qui entraîne une augmentation de la puissance.</li>
                            </ul>
                        </li>
                        <li>
                            <h3>Comparaison entre pyRAPL et pyJoules</h3>
                            <ul>
                                <li>Les deux bibliothèques montrent des tendances similaires, bien que les valeurs absolues diffèrent. pyRAPL tend à enregistrer une puissance plus élevée que pyJoules.</li>
                                <li>Cette différence peut être due à la manière dont chaque bibliothèque mesure la puissance et l'énergie, ou à des différences dans la configuration du système lors des tests.</li>
                            </ul>
                        </li>
                        <li>
                            <h3>Implications pour le Green IT</h3>
                            <ul>
                                <li>Pour maximiser l'efficacité énergétique dans le cadre du Green IT, il peut être judicieux d'opter pour des structures de boucle While lorsqu'elles sont appropriées, car elles semblent consommer moins d'énergie, utiliser moins de puissance et s'exécuter légèrement plus rapidement.</li>
                                <li>Cependant, l'impact réel sur l'efficacité énergétique dépendra également d'autres facteurs, comme la complexité du code à l'intérieur des boucles et les optimisations du compilateur.</li>
                            </ul>
                        </li>
                    </ul>
                </section>

                <section id="sub-section">
                    <h2>2eme comparaison: Select case vs if/elif </h2>
                    <p>Select case et if/elif sont deux instructions qui peuvent être utiliser pour la même chose bien que dans certain cas, l’instruction if permettra une plus grande liberté que Select case.</p>
                    <p>Select case permet d’observer une ou plusieurs variables et de faire des tâches selon l’état de la variable tandis qu’if observe une ou plusieurs conditions et effectue des tâches selon leur état.</p>
                    <p>Dans le code, j’ai mis une condition que ne sera jamais vrai afin de forcer le compilateur à analyser 3 conditions dans les deux cas.</p>
                    <figure>
                        <CodeBlock codeString = {code_selectCase}/>
                        <figcaption>Select Case_if.py</figcaption>
                    </figure>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <figure style={{ marginRight: 'auto' }}>
                            <img src={fig_selectCase_pyRAPL} alt="pyRAPL: Select Case vs if/elif" style={{ transform: 'scale(0.75)', borderRadius: '25px' }}/>
                            <figcaption>pyRAPL: Select Case vs if/elif</figcaption>
                        </figure>
                        <figure style={{ marginLeft: 'auto' }}>
                            <img src={fig_selectCase_pyJoules} alt="pyJoules: Select Case vs if/elif" style={{ transform: 'scale(0.75)', borderRadius: '25px' }}/>
                            <figcaption>pyJoules: Select Case vs if/elif</figcaption>
                        </figure>
                    </div>
                    <ul>
                        <li>
                            <h3>Durée d'exécution </h3>
                            <ul>
                                <li>Selon les deux bibliothèques, les structures 'select case' montrent en moyenne une durée d'exécution légèrement inférieure à celle des structures 'if/elif', selon les deux bibliothèques. </li>
                                <li>Cette tendance peut suggérer que pour des tâches similaires, l'utilisation de 'select case' peut légèrement réduire le temps d'exécution, ce qui peut avoir un impact positif sur l'efficacité énergétique, surtout dans des environnements où ces structures sont fréquemment utilisées.</li>
                            </ul>
                        </li>
                        <li>
                            <h3>Consommation d'énergie</h3>
                            <ul>
                                <li>On observe que les structures 'select case' consomment en moyenne moins d'énergie que les structures 'if/elif', du moins selon la bibliothèque pyRAPL. En moyenne, pyRAPL enregistre une consommation d'énergie de 0.039314467 Joules pour 'select case' contre 0.049758667 Joules pour 'if/elif'.</li>
                                <li>pyJoules enregistre une consommation d'énergie légèrement inférieure pour 'if/elif' (0.049634467 Joules) par rapport à 'select case' (0.0461818 Joules). </li>
                                <li>Cette variation suggère que l'efficacité énergétique peut être influencée par la structure de contrôle utilisée, bien que l'impact semble être marginal et potentiellement dépendant de la bibliothèque de mesure utilisée.</li>                           
                            </ul>
                        </li>
                        <li>
                            <h3>Puissance</h3>
                            <ul>
                                <li>Les mesures de puissance suivent une tendance similaire à celle de la consommation d'énergie. </li>
                                <li>Avec pyRAPL, 'if/elif' enregistre une puissance moyenne plus élevée (10.20010786 Watts) que 'select case' (8.988161728 Watts). </li>
                                <li>En revanche, pyJoules enregistre une puissance moyenne légèrement inférieure pour 'if/elif' (6.996095517 Watts) par rapport à 'select case' (8.063934567 Watts).</li>
                                <li>Ces résultats suggèrent que la structure de contrôle utilisée peut influencer la puissance, bien que l'impact puisse être modeste.</li>
                            </ul>
                        </li>
                        <li>
                            <h3>Comparaison entre pyRAPL et pyJoules</h3>
                            <ul>
                                <li>Les deux bibliothèques montrent des tendances légèrement différentes en ce qui concerne la consommation d'énergie et la puissance entre select case et if/elif.</li>
                                <li>Cela peut être dû à la manière dont chaque bibliothèque mesure la puissance et l'énergie, ou à des différences dans la configuration du système lors des tests.</li>
                                <li>Cela souligne également l'importance de considérer plusieurs sources de données lors de l'évaluation de l'efficacité énergétique.</li>
                            </ul>
                        </li>
                        <li>
                            <h3>Implications pour le Green IT</h3>
                            <ul>
                                <li>Pour maximiser l'efficacité énergétique dans le cadre du Green IT, l'analyse suggère une légère préférence pour l'utilisation de structures 'select case' sur 'if/elif', bien que les différences soient faibles et peuvent varier en fonction de la bibliothèque de mesure utilisée.</li>
                                <li>L'impact réel sur l'efficacité énergétique dépendra également d'autres facteurs, tels que la complexité du code à l'intérieur des structures de contrôle et les optimisations du compilateur.</li>
                                <li>Il peut être judicieux de considérer ces résultats lors de la conception de codes, tout en recherchant d'autres stratégies pour réduire la consommation d'énergie et la puissance.</li>
                            </ul>
                        </li>
                    </ul>
                </section>

                <section id="sub-section">
                    <h2>3eme comparaison: i += 1 vs i = i + 1</h2>
                    <p>Ici je compare deux lignes de code qui effectuent la même action mais qui s’écrivent de façon différente.</p>
                    <figure>
                        <CodeBlock codeString = {code_increment}/>
                        <figcaption>Incrémentation.py</figcaption>
                    </figure>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <figure style={{ marginRight: 'auto' }}>
                            <img src={fig_increment_pyRAPL} alt="pyRAPL: i += 1 vs i = i + 1" style={{ transform: 'scale(0.75)', borderRadius: '25px' }}/>
                            <figcaption>pyRAPL: i += 1 vs i = i + 1</figcaption>
                        </figure>
                        <figure style={{ marginLeft: 'auto' }}>
                            <img src={fig_increment_pyJoules} alt="pyJoules: i += 1 vs i = i + 1" style={{ transform: 'scale(0.75)', borderRadius: '25px' }}/>
                            <figcaption>pyJoules: i += 1 vs i = i + 1</figcaption>
                        </figure>
                    </div>
                    <ul>
                        <li>
                            <h3>Durée d'exécution </h3>
                            <ul>
                                <li>La durée d'exécution montre une légère augmentation avec 'i = i + 1' par rapport à 'i += 1' dans les deux bibliothèques. </li>
                                <li>Pour pyRAPL, 'i = i + 1' a une durée moyenne de 0.002540 secondes tandis que 'i += 1' a une durée moyenne de 0.002415 secondes.</li>
                                <li>Pour pyJoules, 'i = i + 1' a une durée moyenne de 0.004349 secondes tandis que 'i += 1' a une durée moyenne de 0.004159 secondes</li>
                                <li>Même si ces différences sont minimes, elles peuvent s'accumuler sur un grand nombre d'itérations, ce qui pourrait affecter l'efficacité énergétique.</li>
                            </ul>
                        </li>
                        <li>
                            <h3>Consommation d'énergie</h3>
                            <ul>
                                <li>On observe une consommation d'énergie légèrement supérieure pour la syntaxe 'i = i + 1' par rapport à 'i += 1' dans l'utilisation de la bibliothèque pyRAPL.</li>
                                <li>En moyenne, 'i = i + 1' enregistre une consommation d'énergie de 0.028098 Joules tandis que 'i += 1' enregistre une consommation d'énergie de 0.024311 Joules.</li>
                                <li>o	Dans le cas de pyJoules, la consommation d'énergie est presque équivalente, avec 0.028096 Joules pour i += 1 et 0.031978 Joules pour 'i = i + 1'.</li>
                                <li>Ce qui suggère que la syntaxe 'i += 1' pourrait être légèrement plus écoénergétique, du moins lorsqu'elle est mesurée avec pyRAPL.</li>                         
                            </ul>
                        </li>
                        <li>
                            <h3>Puissance</h3>
                            <ul>
                                <li>Les mesures de puissance suivent une tendance similaire à celle de la consommation d'énergie.</li>
                                <li>Pour pyRAPL, la syntaxe 'i = i + 1' enregistre une puissance de 11.184 Watts tandis que 'i += 1' enregistre une puissance de 10.143 Watts.</li>
                                <li>Pour pyJoules, bien que les puissances moyennes soient inférieures, 'i = i + 1' enregistre encore une puissance légèrement supérieure à 'i += 1', avec respectivement 7.396 Watts et 6.775 Watts.</li>
                            </ul>
                        </li>
                        <li>
                            <h3>Comparaison entre pyRAPL et pyJoules</h3>
                            <ul>
                                <li>Les tendances observées sont similaires dans les deux bibliothèques, bien que les valeurs soient différentes.</li>
                                <li>pyRAPL enregistre généralement des valeurs de puissance plus élevées que pyJoules. </li>
                                <li>Ces différences peuvent être attribuées aux méthodes de mesure employées par chaque bibliothèque ou à d'autres facteurs systémiques.</li>
                            </ul>
                        </li>
                        <li>
                            <h3>Implications pour le Green IT</h3>
                            <ul>
                                <li>Dans le but de maximiser l'efficacité énergétique dans une perspective de Green IT, l'utilisation de la syntaxe 'i += 1' pourrait être légèrement préférable à 'i = i + 1' car elle semble consommer moins d'énergie, utiliser moins de puissance et s'exécuter légèrement plus rapidement.</li>
                                <li>Cependant, l'impact réel sur l'efficacité énergétique pourrait être influencé par d'autres facteurs tels que l’optimisations du compilateur Python.</li>
                                <li>Cette analyse offre un aperçu de la manière dont des modifications syntaxiques mineures peuvent contribuer à l'efficacité énergétique globale, un élément clé du Green IT.</li>
                            </ul>
                        </li>
                    </ul>
                </section>

                <section id="sub-section">
                    <h2>4eme comparaison: Fonction récursive vs Non récursive</h2>
                    <p>Il arrive que l’on doive utiliser une fonction récursive, généralement dans un algorithme.</p>
                    <p>J’étais curieux de faire une analyse entre une fonction récursive et une faisant la même action mais sans récursivité.</p>
                    <p>Pour cette comparaison, la librairie pyRAPL n’a pas fournis de données concluantes, je me suis donc limité à la libraire pyJoules.</p>
                    <figure>
                        <CodeBlock codeString = {code_recursif}/>
                        <figcaption>recursivité.py</figcaption>
                    </figure>
                    <figure style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <img src={fig_recursif_pyJoules} alt="resultat" style={{ transform: 'scale(1)', borderRadius: '25px' }}/>
                        <figcaption style={{ marginTop: 'auto' }}>pyJoules: Fonction récursive vs Non récursive</figcaption>
                    </figure>
                    <ul>
                        <li>
                            <h3>Durée d'exécution </h3>
                            <ul>
                                <li>Les boucles récursives semblent, en moyenne, prendre plus de temps à exécuter que les boucles non récursives.</li>
                                <li>La durée moyenne d'exécution pour les boucles récursives est de 0.0021 secondes, tandis que pour les boucles non récursives, elle est de 0.0012 secondes.</li>
                                <li>Un temps d'exécution plus court peut conduire à une consommation d'énergie moindre si la puissance consommée reste constante.</li>
                            </ul>
                        </li>
                        <li>
                            <h3>Consommation d'énergie</h3>
                            <ul>
                                <li>Les boucles récursives consomment en moyenne deux fois plus que les boucles non récursives, avec des valeurs respectives de 0.0084 Joules et 0.0044 Joules.</li>                       
                            </ul>
                        </li>
                        <li>
                            <h3>Puissance</h3>
                            <ul>
                                <li>Les boucles non récursives ont en moyenne une puissance légèrement plus élevée (4.5415 Watts) comparativement aux boucles récursives (4.2037 Watts).</li>
                                <li>On remarque également que les valeurs de puissance sont variées à travers les tests, ce qui pourrait indiquer que d'autres facteurs, comme le comportement du CPU ou d'autres opérations en arrière-plan, pourraient influencer la puissance mesurée.</li>
                            </ul>
                        </li>
                        <li>
                            <h3>Implications pour le Green IT</h3>
                            <ul>
                                <li>D'un point de vue Green IT, les boucles non récursives semblent être plus efficientes en termes d'énergie et de temps d'exécution par rapport aux boucles récursives.</li>
                                <li>Néanmoins, il y a des moment ou la récursivité permet d’effectuer des code plus complexes, à utiliser lorsque nécessaire.</li>
                            </ul>
                        </li>
                    </ul>
                </section>
            </section>








            
        </div>
    );
}

export default LeonardBONNEVILLE;
