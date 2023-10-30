import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Project.css';
import fig1 from '../../pictures/flavien1.png';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { monokaiSublime } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function CodeBlock({ codeString }) {
    return (
      <SyntaxHighlighter language="python" style={monokaiSublime}>
        {codeString}
      </SyntaxHighlighter>
    );
  }

const Conversion_dec_bin = `from pyJoules.energy_meter import measure_energy

print("Conversion décimal vers binaire")
@measure_energy
def decbin():
    for i in range(1, 1000001):
        nomdec = i
        nombin = 0
        bin = []

        while nomdec > 0:
            bin.append(nomdec%2)
            nomdec = int(nomdec / 2)
            
        for y in range(len(bin)-1, -1, -1):
            nombin = nombin + bin[y]
            
            if (y != 0):
                    nombin = nombin * 10
            
        #print("Pour le nombre décimal " + str(i) + " le nombre binaire est : " + str(nombin))

decbin()
print("Conversion fini!!")`;

const Conversion_dec_hex = `from pyJoules.energy_meter import measure_energy

print("Conversion décimal vers hexadécimal")
@measure_energy
def binhex():
    for i in range(1, 1000001):
        o = i
        hex = []
        nomhex = ""

        while o > 0:
            y = int(o / 16)
            nomdec = o - (y * 16)
            o = y

            if nomdec == 0:
                hex.append('0')
            elif nomdec == 1:
                hex.append('1')
            elif nomdec == 2:
                hex.append('2')
            elif nomdec == 3:
                hex.append('3')
            elif nomdec == 4:
                hex.append('4')
            elif nomdec == 5:
                hex.append('5')
            elif nomdec == 6:
                hex.append('6')
            elif nomdec == 7:
                hex.append('7')
            elif nomdec == 8:
                hex.append('8')
            elif nomdec == 9:
                hex.append('9')
            elif nomdec == 10:
                hex.append('A')
            elif nomdec == 11:
                hex.append('B')
            elif nomdec == 12:
                hex.append('C')
            elif nomdec == 13:
                hex.append('D')
            elif nomdec == 14:
                hex.append('E')
            elif nomdec == 15:
                hex.append('F')
            
        for z in range(len(hex)-1, -1, -1):
            nomhex = nomhex + hex[z]
            
        print("Pour le nombre décimal " + str(i) + " le nombre hexadécimal est : " + nomhex)

binhex()
print("Conversion fini!!")`;

const resultat = `begin timestamp : 1698498643.6963377; tag : decbin; duration : 1.9332919120788574; package_0 : 97565180.0; core_0 : 89539138.0`;

function FlavienGAUTIER() {
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
                <h1>Analyse de Consommation d'énergie et de temps entre 2 scripts de conversion en python : décimal-binaire et décimal-hexadécimal</h1>
                <div class="collab">
                    <span>En collaboration avec Gaspard CHARLES</span>
                </div>
                <section id="sub-section">
                    <p>Dans le monde de la programmation, il existe une multitude de façons d'élaborer des algorithmes, chacune possédant ses propres avantages et inconvénients. l'un des éléments les plus cruciaux est l'optimisation, car même à l'intérieur d'un même langage de programmation, plusieurs approches peuvent être employées pour accomplir une même tâche. Il est évident que le choix de la méthode d'écriture peut influencer de manière significative l'efficacité et les performances d'un code. Notre projet s'inscrit dans cette démarche en se penchant sur l'impact des différentes conversion de nombre dans des scripts Python sur la consommation d'énergie.</p>
                </section>
                <section id="sub-section">
                    <h2>Présentation du Projet</h2>
                    <p>Ce projet vise à comparer la consomation énergétique pour des conversions de nombre. Pour cela on utilise 2 scripts python; l'un portant sur la conversion décimale vers binaire et l'autre sur la conversion décimale vers hexadécimal. Pour obtenir des résultats à analyser et exploitables, chaque script sera excécuté 100,000 fois avec et sans l'affichage des conversions (print("Pour le nombre décimal " + str(i)....). L'analyse de consomation d'énergie se fera à l'aide de la bibliothèque pyJoules qui permettra de mesurer la consomation d'énergie des scripts python.</p>
                </section>
                <section id="sub-section">
                    <h2>Technologie Utilisée</h2>
                    <ul>
                        <li>pyJoules :</li>
                        <ul>
                            <li>pyJoules est une bibliothèque Python qui permet de mesurer l'empreinte énergétique d'une machine hôte lors de l'exécution d'un morceau de code Python. Il surveille l'énergie consommée par un périphérique spécifique de la machine hôte tel que :</li>
                            <ul>
                               <li>paquet de sockets pour processeur Intel</li>
                               <li>RAM (pour les architectures de serveur Intel)</li>
                               <li>GPU intégré Intel (pour les architectures client)</li>
                               <li>GPU nvidia.</li>
                            </ul>
                            <li>Plus d'informations sur pyJoules peuvent être trouvées sur <a href="https://pypi.org/project/pyJoules/" target="_blank" rel="noopener noreferrer">PyPI - pyJoules</a>.</li>
                        </ul>
                    </ul>
                </section>
                <section id="sub-section">
                    <h2>Défis Rencontrés</h2>
                    <section>
                        <h3>Exploration des Technologies de Mesure</h3>
                        <p>Mon projet consistait à mesurer la consommation d'énergie des scripts Python. Cependant, la recherche de la technologie appropriée pour effectuer ces mesures a été un processus complexe. Le défi initial était de naviguer parmi les nombreuses options disponibles pour déterminer celle qui correspondrait le mieux à mes critères de précision et d'efficacité.</p>
                    </section>
                    <section>
                        <h3>Sélection de la Librairie Idéale</h3>
                        <p>Le choix de la bibliothèque appropriée constituait une étape importante de mon projet. Deux bibliothèques, pyJoules et pyRAPL, étaient en compétition pour cette place. J'ai entrepris une évaluation approfondie de chacune d'entre elles afin de déterminer leur efficacité et leur précision dans la mesure de la consommation d'énergie. Et malgré le faite que pyRAPL c'est montré comme le choix à faire, je me suis tourné vers pyJoules à cause de certains problèmes.</p>
                    </section>
                    <section>
                        <h3>Problèmes</h3>
                        <ul>
                            <li>
                                <h4>Incompatibilité avec Windows</h4>
                                <p>Au début du projet, les tests ont été effectués sur une machine windows, ces deux bibliothèques ne sont compatible qu'avec un environnement linux.</p>
                                <p>De plus, comme ces deux bibliothèques utilisent la technologie Intel RAPL, et que cette technologie n'est pas fourni par une machine virtuelle, l'utilisation de celle-ci n'était donc pas envisageable.</p>
                            </li>
                        </ul>
                    </section>
                    <section>
                        <h3>Solution</h3>
                        <ul>
                            <li>
                                <h4>Dual Boot Linux</h4>
                                <p>Finalement, la seul solution a été de faire un dual boot avec une distribution linux. Cela à résolu en parti le problème, car il y avait de nouveau problème sur l'utilisation de la bibliothèque pyRAPL. Cependant, la bibliothèque pyJoules (en donnant les bon droits au fichier) a réussi à donner des résultat concret ce qui a permis d'effectuer des tests sur la consommation d'énergie.</p>
                            </li>
                        </ul>
                    </section>
                </section>
                <section id="sub-section">
                    <h2>Méthodologie</h2>
                    <p>Deux scripts Python ont été créés, contenant chacune une fonction de test. Le script, nommé Conversion_dec_bin.py, exécute la conversion d'un nombre décimal en un nombre binaire. Le script, nommé Conversion_dec_hex.py, exécute quant à lui la conversion d'un nombre décimal en un nombre hexadécimal. Chaque scripts sont exécutés 100,000 fois. Les scripts ont été exécutés 2 fois chacun avec la ligne d'affichage à l'intérieur de la boucle "print("Pour le nombre décimal " + str(i)...." commenté et non commenté, et la bibliothèque pyJoules est utilisée pour mesurer et enregistrer la consommation d'énergie de chaque script lors de leur exécution.</p>
                    <figure>
                        <CodeBlock codeString = {Conversion_dec_bin}/>
                        <figcaption>Conversion_dec_bin.py</figcaption>
                    </figure>
                    <figure>
                        <CodeBlock codeString = {Conversion_dec_hex}/>
                        <figcaption>Conversion_dec_hex.py</figcaption>
                    </figure>
                    <figure>
                        <CodeBlock codeString = {resultat}/>
                        <figcaption>résultat</figcaption>
                    </figure>
                </section>
                <section id="sub-section">
                    <h2>Résultats</h2>
                    <figure>
                        <center><img src={fig1} alt="resultat" style={{ transform: 'scale(0.75)' }}/></center>
                        <figcaption>Analyse du temps, de l'énergie et de la puissance lors de l'exécution des scripts</figcaption>
                    </figure>
                    <ul>
                        <li>
                            <h3>Temps d'exécution</h3>
                            <p>Surprenament, c'est le script de conversion décimal-binaire qui prend le plus de temps pour s'exécuter. On pourrait penser que le deuxième script prendrait plus de temps à cause de tous ces 'if - elif' qui remplace le 'switch case' mais même en l'exécutant avec l'affichage, il ne prend pas autant de temps que le premier script.</p>
                            <p>Par contre, dans les deux script, l'affichage des nombres convertis double presque le temps d'exécution des scripts.</p>
                        </li>
                        <li>
                            <h3>Consommation d'énergie</h3>
                            <p>De même, le script de conversion décimal-binaire est celui qui consomme le plus d'énergie. Comme pour le temps, on pourrait penser que le deuxième script consommerait plus d'énergie mais les résultat montre que c'est le contraire.</p>
                            <p>Là aussi, la consomation d'énergie est doublé avec l'affichage.</p>
                        </li>
                        <li>
                            <h3>Puissance</h3>
                            <p>La puissance est obtenue en divisant l'énergie par le temps, ce qui donne une mesure de l'efficacité énergétique de l'exécution.</p>
                            <p>En ce qui concerne la puissance utilisée pour exécuter les 2 scripts, elle est presque identique malgré les grandes différence qu'il y a eu au niveau du temps et de l'énergie utilisé pour exécuter ces scripts.</p>
                            <p>Pour la puissance, l'affichage ne le fait pas doubler mais elle subit tout de même une augmentation.</p>
                        </li>
                        <li>
                            <h3>Conclusion</h3>
                            <p>Bien que la deuxième conversion soit plus efficace en terme de temps et d'énergie, les deux conversion possèdent la même puissance. Il n'y a donc pas beaucoup de différence entre l'utilisation de l'une ou de l'autre conversion mise à part le temps et l'énergie consommée malgré les différences du code.</p>
                            <p>Le résultat sur l'affichage des nombres convertie montre qu'une simple ligne de code poeut augmenter drastiquement la consomation de temps, d'énergie et de puissance d'un code. Elle a le même impact quelque soit le code utilisé.</p>
                        </li>
                    </ul>
                </section>
            </section>
        </div>
    );
}

export default FlavienGAUTIER;
