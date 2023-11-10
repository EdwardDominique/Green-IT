
import fig_whileFor_pyRAPL from '../../../pictures/leonard/leonard_whileFor_pyRAPL.png';
import fig_whileFor_pyJoules from '../../../pictures/leonard/leonard_whileFor_pyJoules.png';
import fig_selectCase_pyRAPL from '../../../pictures/leonard/leonard_selectCase_pyRAPL.png';
import fig_selectCase_pyJoules from '../../../pictures/leonard/leonard_selectCase_pyJoules.png';
import fig_increment_pyRAPL from '../../../pictures/leonard/leonard_increment_pyRAPL.png';
import fig_increment_pyJoules from '../../../pictures/leonard/leonard_increment_pyJoules.png';
import fig_recursif_pyJoules from '../../../pictures/leonard/leonard_recursif_pyJoules.png';
import { fonction_captureOutput, fonction_displayResults, code_whileFor, code_selectCase, code_increment, code_recursif } from './LBON_Codes';


export const dataProjetSite = 
    {
        title: <h1>Mise en place d'un Site Web avec React.js</h1>,
        collaboration: "En collaboration avec Aurélien MANCEAU",
        sections: [
            {
                subtitle: <h2>Présentation du Projet</h2>,
                text: <p>Création et mise à jour de ce site web en collaboration avec Aurélien MANCEAU, notamment :</p>,
                list:
                {
                    "realisation": {
                        contenu:   [    <li>Infrastructure globale.</li>,
                                        <li>Charte graphique des couleurs.</li>,
                                        <li>Image de fond du site.</li>,
                                        <li>Page projet.</li>,
                                        <li>Ainsi que d'autres points vu en commun avec Aurélien MANCEAU.</li>,
                                    ],
                        balises: ['ul']     // ajoute cette balise en amont de "contenu"
                    },
                },
            },
        ],
    };

export const dataProjetGreenIT = 
    {
        title: <h1>Comparaison de différentes fonctions, analyse du temps d’exécution, de la consommation en Python : Un pas de plus vers le Green IT</h1>,
        sections: [
            { 
                text: <p>Le nombre de développeurs ne fait qu'augmenter d’année en année, tout comme notre consommation numérique. C’est pourquoi il devient de plus en plus nécessaire de faire des codes plus en adéquation avec le « Green IT ».</p>, 
            },

            {
                subtitle: <h2>Présentation du Projet</h2>,
                text: [<p>En tant qu'étudiant en informatique et applications, je me suis retrouvé confronté à plusieurs interrogations persistantes. Lorsqu'il existe plusieurs options pour accomplir une tâche, comment choisir la plus pertinente ?</p>],
                list: {"Comparaison":  {
                        contenu:   [
                                    <li>For ou While : Ces deux structures de boucle ont leurs avantages, mais quelle est la plus recommandée en termes de Green IT ?</li>,
                                    <li>Select Case ou if/elif : Est-ce une question de style, ou y a-t-il une différence notable dans le temps d'exécution du code qui pourrait influencer notre choix ?</li>,
                                    <li>Incrémentation : 'i += 1' est-elle vraiment supérieure à 'i = i + 1', ou est-ce simplement une question de clarté du code ?</li>,
                                    <li>Récursivité : Quels sont ses impacts ?</li>,
                                    ],
                        balises: ['ul']   // ajoute cette balise en amont de "contenu"
                    },
                },
                conclusion: [<p>Diverses questions auxquelles j’apporterai des résultats concrets, que chacun pourra reprendre et pousser plus loin. C’est ainsi qu’on fera avancer le Green IT.</p>,
                            ]
            },

            {
                subtitle: <h2>Technologies utilisées</h2>,
                list: { "technologies": {
                        contenu:   [
                                    <li>pyRAPL:</li>,
                                    <ul>
                                        <li>pyRAPL est une bibliothèque Python qui permet de mesurer la consommation d'énergie des composants matériels d'un système informatique, en particulier le CPU et la DRAM, en utilisant le framework RAPL (Running Average Power Limit) intégré dans les processeurs modernes d'Intel. Plus d'informations sur pyRAPL peuvent être trouvées sur la <a href="https://pyrapl.readthedocs.io/en/latest/" target="_blank" rel="noopener noreferrer">Documentation - pyRAPL</a>.</li>
                                    </ul>,
                                    <li>pyJoules:</li>,
                                    <ul>
                                        <li>pyJoules est également une bibliothèque Python destinée à la mesure de la consommation énergétique des systèmes informatiques. Elle permet d'obtenir des mesures de la consommation d'énergie au niveau des composants matériels en instrumentant les compteurs d'énergie disponibles sur la plateforme. Plus d'informations sur pyJoules peuvent être trouvées sur la <a href="https://pyjoules.readthedocs.io/en/latest/" target="_blank" rel="noopener noreferrer">Documentation - pyJoules</a>.</li>
                                    </ul>,
                                    <li>Visual Studio Code:</li>,
                                    <ul>
                                        <li>Visual Studio Code (VS Code) est un éditeur de code source gratuit et open-source développé par Microsoft. Il propose des fonctionnalités telles que la mise en surbrillance de la syntaxe, le débogage intégré, et la prise en charge de Git, facilitant ainsi le développement et le débogage de programmes.</li>
                                    </ul>,
                                    <li>Langage Python:</li>,
                                    <ul>
                                        <li>Python est un langage de programmation interprété, de haut niveau et généraliste. Il est conçu pour optimiser la lisibilité du code, et permet une expression concise et claire des concepts en moins de lignes de code.</li>
                                    </ul>,
                                    <li>Système Ubuntu via Dual Boot:</li>,
                                    <ul>
                                        <li>Le dual boot est une configuration qui permet à un ordinateur d'exécuter deux systèmes d'exploitation différents de manière séparée, sur la même machine. L'utilisateur peut choisir quel système d'exploitation démarrer lors de l'allumage de l'ordinateur. Dans votre cas, l'un des systèmes d'exploitation est Ubuntu.</li>
                                        <li>Ubuntu est un système d'exploitation libre et gratuit basé sur le noyau Linux. Il est réputé pour sa facilité d'utilisation, sa sécurité et sa robustesse. Il offre un environnement de travail efficace et des outils puissants pour le développement, les opérations de serveur et l'informatique quotidienne.</li>
                                        <li>Le dual boot d'Ubuntu avec un autre système d'exploitation offre une flexibilité permettant aux utilisateurs de bénéficier des avantages spécifiques de chaque système, tout en conservant la possibilité de basculer entre eux selon les besoins.</li>
                                    </ul>
                                    ],
                        balises: ['ul']     // ajoute cette balise en amont de "contenu"
                    },
                  },
            },

            {
                subtitle: <h2>Méthodologie</h2>,
                text: [ <p>J’ai décidé d’utiliser deux librairies qui calculent le temps d’exécution et la consommation du code afin d’avoir plusieurs sources de comparaison.</p>,
                        <p>Les librairies pyRAPL et pyJoules, lesquelles ne fonctionnent que sur un système Linux. Pour ce faire, j’ai effectué un dual boot sur mon système Windows 11.</p>,
                        <p>J’ai effectué 4 comparaisons de différents codes, tous reprenant les deux mêmes fonctions de calcul d'énergie :</p>,],
                list: 
                {
                    "captureOutput": <ul><li>capture_output : cette fonction récupère la sortie de la fonction et la convertit en une chaine de caractère utilisable pour la suite.</li></ul>,
                    "displayResults": <ul><li>display_results : cette fonction récupère la chaîne de caractère de la fonction ‘capture_output’ et print les résultats selon les données pyRAPL et pyJoules qui lui sont envoyées.</li></ul>,
                  },
                figCodes: {
                    "captureOutput": {
                        codeString: fonction_captureOutput,
                        caption: "capture_output.py",
                        balises : ['ul']    // ajoute cette balise en amont de "contenu"
                      },
                    "displayResults": {
                        codeString: fonction_displayResults,
                        caption: "display_results.py",
                        balises : ['ul']    // ajoute cette balise en amont de "contenu"
                      }
                  },
                conclusion: [<p>Pour les tests, j’effectue 100 000 itérations des fonctions afin d’obtenir des résultats de consommation exploitables.</p>,
                            <p>Les unités de durée sont en secondes, l’énergie est en Joules, la puissance est en Watts.</p>,],
            },

            {
                subtitle: <h2>1ère comparaison: While vs For</h2>,
                text: [ <p>Les boucles for et while possèdent certaines similarités, toutes deux permettant d’effectuer une boucle à de multiples reprises.</p>,
                        <p>Tandis que la boucle while attend la validation d’une condition, la boucle for s’exécute un nombre de fois donné.</p>,
                        <p>Pour ce test, les deux boucles effectueront la même tâche et exécuteront le même nombre de répétitions afin de permettre la meilleure comparaison possible.</p>,],
                list: {"donnee": {
                        contenu: [
                                    <li><h3>Durée d'exécution </h3></li>,
                                    <ul>
                                        <li>Les boucles 'For' ont également montré une durée d'exécution légèrement plus longue que les boucles 'While'.</li>
                                        <li>Bien que la différence ne soit pas significative, dans un environnement où des milliers ou des millions de boucles sont exécutées, même de petites différences de temps peuvent s'accumuler, ce qui peut avoir un impact sur l'efficacité énergétique.</li>
                                    </ul>,

                                    <li><h3>Consommation d'énergie</h3></li>,
                                    <ul>
                                        <li>On observe que les boucles 'For' ont tendance à consommer plus d'énergie que les boucles 'While', quel que soit la bibliothèque utilisée. </li>
                                        <li>En moyenne, pyRAPL enregistre une consommation d'énergie de 0.031321 Joules pour les boucles 'For' contre 0.022830 Joules pour les boucles 'While'.</li>
                                        <li>De même, pyJoules enregistre une consommation d'énergie de 0.034146 Joules pour les boucles For contre 0.027728 Joules pour les boucles While. </li>
                                        <li>Ces tendances suggèrent que, pour des tâches similaires, les boucles While peuvent être plus écoénergétiques.</li>                                
                                    </ul>,

                                    <li><h3>Puissance</h3></li>,
                                    <ul>
                                        <li>Les mesures de puissance suivent une tendance similaire à celle de la consommation d'énergie.</li>
                                        <li>Les boucles 'For' enregistrent une puissance moyenne plus élevée que les boucles 'While' dans les deux bibliothèques. Cela peut être dû au fait que les boucles For peuvent nécessiter plus de ressources système, ce qui entraîne une augmentation de la puissance.</li>
                                    </ul>,

                                    <li><h3>Comparaison entre pyRAPL et pyJoules</h3></li>,
                                    <ul>
                                        <li>Les deux bibliothèques montrent des tendances similaires, bien que les valeurs absolues diffèrent. pyRAPL tend à enregistrer une puissance plus élevée que pyJoules.</li>
                                        <li>Cette différence peut être due à la manière dont chaque bibliothèque mesure la puissance et l'énergie, ou à des différences dans la configuration du système lors des tests.</li>
                                    </ul>,

                                    <li><h3>Implications pour le Green IT</h3></li>,
                                    <ul>
                                        <li>Pour maximiser l'efficacité énergétique dans le cadre du Green IT, il peut être judicieux d'opter pour des structures de boucle While lorsqu'elles sont appropriées, car elles semblent consommer moins d'énergie, utiliser moins de puissance et s'exécuter légèrement plus rapidement.</li>
                                        <li>Cependant, l'impact réel sur l'efficacité énergétique dépendra également d'autres facteurs, comme la complexité du code à l'intérieur des boucles et les optimisations du compilateur.</li>
                                    </ul>,],
                        balises: ['ul'] // ajoute cette balise en amont de "contenu"
                    },                                      
                },

                figCodes: {
                    "figIntroduction": {
                        codeString: code_whileFor,
                        caption: "While_For.py",
                        balises : []
                      },
                  },

                figResults: {
                    "figIntroduction": {
                        type : 2, // 0 pour que pyRAPL, 1 pour que pyjoules, 2 pour les deux
                        src_pyRAPL: fig_whileFor_pyRAPL,
                        alt_pyRAPL: "pyRAPL: while vs for",
                        caption_pyRAPL: "pyRAPL: while vs for",
                        src_pyJoules: fig_whileFor_pyJoules,
                        alt_pyJoules: "pyJoules: while vs for",
                        caption_pyJoules: "pyJoules: while vs for",
                        balises : []    // ajoute cette balise en amont de "contenu"
                      },
                },
            },

            {
                subtitle: <h2>2eme comparaison: Select case vs if/elif </h2>,
                text:   [<p>Select Case et if/elif sont deux instructions qui peuvent être utilisées pour la même chose, bien que dans certains cas, l’instruction if offre une plus grande liberté que Select Case.</p>,
                        <p>Select Case permet d’observer une ou plusieurs variables et de faire des tâches selon l’état de la variable tandis qu’if observe une ou plusieurs conditions et effectue des tâches si les conditions sont remplies.</p>,
                        <p>Dans le code, j’ai mis une condition qui ne sera jamais vraie afin de forcer le compilateur à analyser 3 conditions dans les deux cas.</p>,],
                list: {"donnee": {
                        contenu: [
                                    <li><h3>Durée d'exécution </h3></li>,
                                    <ul>
                                        <li>Selon les deux bibliothèques, les structures 'select case' montrent en moyenne une durée d'exécution légèrement inférieure à celle des structures 'if/elif', selon les deux bibliothèques. </li>
                                        <li>Cette tendance peut suggérer que pour des tâches similaires, l'utilisation de 'select case' peut légèrement réduire le temps d'exécution, ce qui peut avoir un impact positif sur l'efficacité énergétique, surtout dans des environnements où ces structures sont fréquemment utilisées.</li>
                                    </ul>,

                                    <li><h3>Consommation d'énergie</h3></li>,
                                    <ul>
                                        <li>On observe que les structures 'select case' consomment en moyenne moins d'énergie que les structures 'if/elif', du moins selon la bibliothèque pyRAPL. En moyenne, pyRAPL enregistre une consommation d'énergie de 0.039314467 Joules pour 'select case' contre 0.049758667 Joules pour 'if/elif'.</li>
                                        <li>pyJoules enregistre une consommation d'énergie légèrement inférieure pour 'if/elif' (0.049634467 Joules) par rapport à 'select case' (0.0461818 Joules). </li>
                                        <li>Cette variation suggère que l'efficacité énergétique peut être influencée par la structure de contrôle utilisée, bien que l'impact semble être marginal et potentiellement dépendant de la bibliothèque de mesure utilisée.</li>                           
                                    </ul>,

                                    <li><h3>Puissance</h3></li>,
                                    <ul>
                                        <li>Les mesures de puissance suivent une tendance similaire à celle de la consommation d'énergie. </li>
                                        <li>Avec pyRAPL, 'if/elif' enregistre une puissance moyenne plus élevée (10.20010786 Watts) que 'select case' (8.988161728 Watts). </li>
                                        <li>En revanche, pyJoules enregistre une puissance moyenne légèrement inférieure pour 'if/elif' (6.996095517 Watts) par rapport à 'select case' (8.063934567 Watts).</li>
                                        <li>Ces résultats suggèrent que la structure de contrôle utilisée peut influencer la puissance, bien que l'impact puisse être modeste.</li>
                                    </ul>,

                                    <li><h3>Comparaison entre pyRAPL et pyJoules</h3></li>,
                                    <ul>
                                        <li>Les deux bibliothèques montrent des tendances légèrement différentes en ce qui concerne la consommation d'énergie et la puissance entre select case et if/elif.</li>
                                        <li>Cela peut être dû à la manière dont chaque bibliothèque mesure la puissance et l'énergie, ou à des différences dans la configuration du système lors des tests.</li>
                                        <li>Cela souligne également l'importance de considérer plusieurs sources de données lors de l'évaluation de l'efficacité énergétique.</li>
                                    </ul>,

                                    <li><h3>Implications pour le Green IT</h3></li>,
                                    <ul>
                                        <li>Pour maximiser l'efficacité énergétique dans le cadre du Green IT, l'analyse suggère une légère préférence pour l'utilisation de structures 'select case' sur 'if/elif', bien que les différences soient faibles et peuvent varier en fonction de la bibliothèque de mesure utilisée.</li>
                                        <li>L'impact réel sur l'efficacité énergétique dépendra également d'autres facteurs, tels que la complexité du code à l'intérieur des structures de contrôle et les optimisations du compilateur.</li>
                                        <li>Il peut être judicieux de considérer ces résultats lors de la conception de codes, tout en recherchant d'autres stratégies pour réduire la consommation d'énergie et la puissance.</li>
                                    </ul>,],
                        balises: ['ul']     // ajoute cette balise en amont de "contenu"
                    },                                      
                },

                figCodes: {
                    "figIntroduction": {
                        codeString: code_selectCase,
                        caption: "Select Case_if.py",
                        balises : []        // ajoute cette balise en amont de "contenu"
                      }
                  },

                figResults: {
                    "figIntroduction": {
                        type : 2, // 0 pour que pyRAPL, 1 pour que pyjoules, 2 pour les deux
                        src_pyRAPL: fig_selectCase_pyRAPL,
                        alt_pyRAPL: "pyRAPL: Select Case vs if/elif",
                        caption_pyRAPL: "pyRAPL: Select Case vs if/elif",
                        src_pyJoules: fig_selectCase_pyJoules,
                        alt_pyJoules: "pyJoules: Select Case vs if/elif",
                        caption_pyJoules: "pyJoules: Select Case vs if/elif",
                      }
                },
            },

            {
                subtitle: <h2>3eme comparaison: i += 1 vs i = i + 1</h2>,
                text:   [<p>Je compare ici deux façons d'incrémenter une variable :</p>, 
                            <ul>
                                <li>l'opérateur d'assignation augmentée 'i += 1'</li>
                                <li>l'expression 'i = i + 1'</li>
                            </ul>,
                        <p>Ces deux options sont fonctionnellement identiques mais présentent des différences syntaxiques.</p>
                        ],
                list: {"donnee": {
                        contenu: [
                                    <li><h3>Durée d'exécution </h3></li>,
                                    <ul>
                                        <li>La durée d'exécution montre une légère augmentation avec 'i = i + 1' par rapport à 'i += 1' dans les deux bibliothèques. </li>
                                        <li>Pour pyRAPL, 'i = i + 1' a une durée moyenne de 0.002540 secondes tandis que 'i += 1' a une durée moyenne de 0.002415 secondes.</li>
                                        <li>Pour pyJoules, 'i = i + 1' a une durée moyenne de 0.004349 secondes tandis que 'i += 1' a une durée moyenne de 0.004159 secondes</li>
                                        <li>Même si ces différences sont minimes, elles peuvent s'accumuler sur un grand nombre d'itérations, ce qui pourrait affecter l'efficacité énergétique.</li>
                                    </ul>,

                                    <li><h3>Consommation d'énergie</h3></li>,
                                    <ul>
                                        <li>On observe une consommation d'énergie légèrement supérieure pour la syntaxe 'i = i + 1' par rapport à 'i += 1' dans l'utilisation de la bibliothèque pyRAPL.</li>
                                        <li>En moyenne, 'i = i + 1' enregistre une consommation d'énergie de 0.028098 Joules tandis que 'i += 1' enregistre une consommation d'énergie de 0.024311 Joules.</li>
                                        <li>o	Dans le cas de pyJoules, la consommation d'énergie est presque équivalente, avec 0.028096 Joules pour i += 1 et 0.031978 Joules pour 'i = i + 1'.</li>
                                        <li>Ce qui suggère que la syntaxe 'i += 1' pourrait être légèrement plus écoénergétique, du moins lorsqu'elle est mesurée avec pyRAPL.</li>                         
                                    </ul>,

                                    <li><h3>Puissance</h3></li>,
                                    <ul>
                                        <li>Les mesures de puissance suivent une tendance similaire à celle de la consommation d'énergie.</li>
                                        <li>Pour pyRAPL, la syntaxe 'i = i + 1' enregistre une puissance de 11.184 Watts tandis que 'i += 1' enregistre une puissance de 10.143 Watts.</li>
                                        <li>Pour pyJoules, bien que les puissances moyennes soient inférieures, 'i = i + 1' enregistre encore une puissance légèrement supérieure à 'i += 1', avec respectivement 7.396 Watts et 6.775 Watts.</li>
                                    </ul>,

                                    <li><h3>Comparaison entre pyRAPL et pyJoules</h3></li>,
                                    <ul>
                                        <li>Les tendances observées sont similaires dans les deux bibliothèques, bien que les valeurs soient différentes.</li>
                                        <li>pyRAPL enregistre généralement des valeurs de puissance plus élevées que pyJoules. </li>
                                        <li>Ces différences peuvent être attribuées aux méthodes de mesure employées par chaque bibliothèque ou à d'autres facteurs systémiques.</li>
                                    </ul>,

                                    <li><h3>Implications pour le Green IT</h3></li>,
                                    <ul>
                                        <li>Dans le but de maximiser l'efficacité énergétique dans une perspective de Green IT, l'utilisation de la syntaxe 'i += 1' pourrait être légèrement préférable à 'i = i + 1' car elle semble consommer moins d'énergie, utiliser moins de puissance et s'exécuter légèrement plus rapidement.</li>
                                        <li>Cependant, l'impact réel sur l'efficacité énergétique pourrait être influencé par d'autres facteurs tels que l’optimisations du compilateur Python.</li>
                                        <li>Cette analyse offre un aperçu de la manière dont des modifications syntaxiques mineures peuvent contribuer à l'efficacité énergétique globale, un élément clé du Green IT.</li>
                                    </ul>,],
                        balises: ['ul']     // ajoute cette balise en amont de "contenu"
                    },                                      
                },

                figCodes: {
                    "figIntroduction": {
                        codeString: code_increment,
                        caption: "Incrémentation.py",
                        balises : []        // ajoute cette balise en amont de "contenu"
                      },
                  },

                figResults: {
                    "figIntroduction": {
                       type : 2, // 0 pour que pyRAPL, 1 pour que pyjoules, 2 pour les deux
                       src_pyRAPL: fig_increment_pyRAPL,
                       alt_pyRAPL: "pyRAPL: i += 1 vs i = i + 1",
                       caption_pyRAPL: "pyRAPL: i += 1 vs i = i + 1",
                       src_pyJoules: fig_increment_pyJoules,
                       alt_pyJoules: "pyJoules: i += 1 vs i = i + 1",
                       caption_pyJoules: "pyJoules: i += 1 vs i = i + 1",
                     },
                },
            },

            {
                subtitle: <h2>4eme comparaison: Fonction récursive vs Non récursive</h2>,
                text:   [<p>Il arrive que l’on doive utiliser une fonction récursive, généralement dans un algorithme.</p>,
                        <p>J’étais curieux de réaliser une analyse entre une fonction récursive et une faisant la même action mais sans récursivité.</p>,
                        <p>Pour cette comparaison, la librairie pyRAPL n’a pas fourni de données concluantes, je me suis donc limité à la librairie pyJoules.</p>,
                        ],
                list: {"donnee": {
                        contenu: [
                                    <li><h3>Durée d'exécution </h3></li>,
                                    <ul>
                                        <li>Les boucles récursives semblent, en moyenne, prendre plus de temps à exécuter que les boucles non récursives.</li>
                                        <li>La durée moyenne d'exécution pour les boucles récursives est de 0.0021 secondes, tandis que pour les boucles non récursives, elle est de 0.0012 secondes.</li>
                                        <li>Un temps d'exécution plus court peut conduire à une consommation d'énergie moindre si la puissance consommée reste constante.</li>
                                    </ul>,

                                    <li><h3>Consommation d'énergie</h3></li>,
                                    <ul>
                                        <li>Les boucles récursives consomment en moyenne deux fois plus que les boucles non récursives, avec des valeurs respectives de 0.0084 Joules et 0.0044 Joules.</li>                       
                                    </ul>,

                                    <li><h3>Puissance</h3></li>,
                                    <ul>
                                        <li>Les boucles non récursives ont en moyenne une puissance légèrement plus élevée (4.5415 Watts) comparativement aux boucles récursives (4.2037 Watts).</li>
                                        <li>On remarque également que les valeurs de puissance sont variées à travers les tests, ce qui pourrait indiquer que d'autres facteurs, comme le comportement du CPU ou d'autres opérations en arrière-plan, pourraient influencer la puissance mesurée.</li>
                                    </ul>,

                                    <li><h3>Implications pour le Green IT</h3></li>,
                                    <ul>
                                        <li>D'un point de vue Green IT, les boucles non récursives semblent être plus efficientes en termes d'énergie et de temps d'exécution par rapport aux boucles récursives.</li>
                                        <li>Néanmoins, il y a des moments où la récursivité permet d’effectuer des codes plus complexes, à utiliser lorsque c’est nécessaire.</li>
                                    </ul>,],
                        balises: ['ul']     // ajoute cette balise en amont de "contenu"
                    },                                      
                },

                figCodes: {
                    "figIntroduction": {
                        codeString: code_recursif,
                        caption: "recursivité.py",
                        balises : []        // ajoute cette balise en amont de "contenu"
                      },
                  },

                figResults: {
                    "figIntroduction": {
                       type : 1, // 0 pour que pyRAPL, 1 pour que pyjoules, 2 pour les deux
                       src_pyJoules: fig_recursif_pyJoules,
                       alt_pyJoules: "Fonction récursive vs Non récursive" ,
                       caption_pyJoules: "pyJoules: Fonction récursive vs Non récursive",
                     },
                },
            },
        ],
    };