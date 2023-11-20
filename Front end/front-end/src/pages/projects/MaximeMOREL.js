import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Project.css';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { monokaiSublime } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import Img_1 from './MaximeMOREL/Concat_1.png';
import Img_2 from './MaximeMOREL/Concat_2.png';
import Img_3 from './MaximeMOREL/Concat_3.png';
import Img_4 from './MaximeMOREL/Concat_4.png';
import Img_5 from './MaximeMOREL/Concat_5.png';
import Img_6 from './MaximeMOREL/Concat_6.png';
import Img_7 from './MaximeMOREL/Concat_7.png';
import Img_8 from './MaximeMOREL/Concat_8.png';
import Img_9 from './MaximeMOREL/Concat_9.png';
import Img_10 from './MaximeMOREL/Concat_10.png';
import Img_TLA from './MaximeMOREL/TLA.png';
import Img_ResTot from './MaximeMOREL/Resultat_Tot.png';
import Img_TabRes from './MaximeMOREL/Tableau_Resultat.png';

function CodeBlock({ codeString }) {
    return (
      <SyntaxHighlighter language="python" style={monokaiSublime}>
        {codeString}
      </SyntaxHighlighter>
    );
  }

const pyRAPL_CONCAT1_1 = `
def pyRAPL_CONCAT1_1():    # Using join()
    result = ''.join(['a', 'b', 'c'])
    `;

const pyRAPL_CONCAT1_2 = `
def pyRAPL_CONCAT1_2():    # Using +
    result = 'a' + 'b' + 'c'  
    `;

const pyRAPL_CONCAT1_3 = `
def pyRAPL_CONCAT1_3():    # Using *
    result = "a" * len(['a', 'b', 'c'])
    `;

const pyRAPL_CONCAT1_4 = `
def pyRAPL_CONCAT1_4():    # Using String Literal Concatenation
    result = "a" "b" "c"
    `;

const pyRAPL_CONCAT2_1 = `
def pyRAPL_CONCAT2_1():    # Using f-strings
    name = "John"
    age = 30
    result = f"My name is {name} and I am {age} years old."
    `;

const pyRAPL_CONCAT2_2 = `
def pyRAPL_CONCAT2_2():    # Using str.format()
    name = "John"
    age = 30
    result = "My name is {} and I am {} years old.".format(name, age)
    `;

const pyRAPL_CONCAT3_1 = `
def pyRAPL_CONCAT3_1():  # Using in
    substring_present = "abc" in "abcdef"
    `;

const pyRAPL_CONCAT3_2 = `
def pyRAPL_CONCAT3_2(): # Using str.find()
    substring_present = "abcdef".find("abc") != -1
    `;

const pyRAPL_CONCAT4_1 = `
def pyRAPL_CONCAT4_1(): # Using list comprehension
    result = [x.upper() for x in ["apple", "banana", "cherry"]]
    `;

const pyRAPL_CONCAT4_2 = `
def pyRAPL_CONCAT4_2(): # Using map()
    result = list(map(lambda x: x.upper(), ["apple", "banana", "cherry"]))
    `;

const pyRAPL_CONCAT5_1 = `
def pyRAPL_CONCAT5_1(): # Using str.split()
    result = "apple,banana,cherry".split(",")
    `;

const pyRAPL_CONCAT5_2 = `
def pyRAPL_CONCAT5_2(): # Using re.split()
    import re
    result = re.split(",", "apple,banana,cherry")
    `;

const pyRAPL_CONCAT6_1 = `
def pyRAPL_CONCAT6_1(): # Using str.replace()
    result = "I love apples".replace("apples", "bananas")
    `;

const pyRAPL_CONCAT6_2 = `
def pyRAPL_CONCAT6_2(): # Using re.sub()
    import re
    result = re.sub("apples", "bananas", "I love apples")
    `;

const pyRAPL_CONCAT7_1 = `
def pyRAPL_CONCAT7_1(): # Using str.startswith()
    result = "apple".startswith("app")
    `;

const pyRAPL_CONCAT7_2 = `
def pyRAPL_CONCAT7_2(): # Using slicing
    result = "apple"[:3] == "app"
    `;

const pyRAPL_CONCAT8_1 = `
def pyRAPL_CONCAT8_1(): # Using list()
    result = list("apple")
    `;

const pyRAPL_CONCAT8_2 = `
def pyRAPL_CONCAT8_2(): # Using list comprehension
    result = [c for c in "apple"]
    `;

const pyRAPL_CONCAT9_1 = `
def pyRAPL_CONCAT9_1(): # Using slicing
    result = "apple"[::-1]
    `;

const pyRAPL_CONCAT9_2 = `
def pyRAPL_CONCAT9_2(): # Using reversed() and join()
    result = ''.join(reversed("apple"))
    `;

const pyRAPL_CONCAT10_1 = `
def pyRAPL_CONCAT10_1():    # Using str.count()
    result = "I love apples and apples are tasty".count("apples")
    `;

const pyRAPL_CONCAT10_2 = `
def pyRAPL_CONCAT10_2():    # Using re.findall()
    import re
    result = len(re.findall("apples", "I love apples and apples are tasty"))  
    `;

const pyRAPL_TUPLE = `
def pyRAPL_TUPLE():
    i=0
    tuple = ()
    for i in range(101):
        tuple += ("test"+str(i),)
    `;

const pyRAPL_ARRAY = `
def pyRAPL_ARRAY():
    i=0
    a = arr.array('i', []) 
    for i in range(101):
        a.insert(i,i)
    `;

const pyRAPL_LIST = `
def pyRAPL_LIST():
    i=0
    list = []
    for i in range(101):
        list.insert(i-1,"test"+str(i))
        `;



function MaximeMOREL() {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1); // navigate back by 1 in the history stack
    };

    return (
        <div className="article-page">
            <div className="header-buttons">
                <button className="back-button" onClick={handleBack}>Retour</button>
            </div>

{/* Titre */}            

            <section id="main-section">
                <h1>Evaluation de l'efficacité d'operations String courantes / Collection de données</h1>
                <div class="collab">
                    <span>En collaboration avec Léonard BONNEVILLE</span>
                </div>
                <section id="sub-section">
                    <h2>Réflexion</h2>
                    <p>Dans le cadre prédominant des préoccupations environnementales, l'importance cruciale de l'efficacité énergétique dans le domaine de la programmation émerge comme une préoccupation incontournable pour l'avenir. Avec la technologie jouant un rôle central dans notre vie quotidienne, il devient impératif de développer des applications et des systèmes informatiques de manière écoénergétique. La nécessité de reconsidérer notre approche du développement logiciel découle de l'impact substantiel des activités numériques sur la consommation mondiale d'énergie. L'obligation de concevoir des programmes réduisant leur empreinte carbone s'inscrit dans une optique de développement durable, visant à concilier l'innovation technologique avec la préservation de notre planète. Ainsi, l'impératif de la programmation efficace sur le plan énergétique se présente comme un défi incontournable pour façonner un avenir où la technologie s'harmonise de manière équilibrée avec les exigences de durabilité.</p>
                </section>

{/* Introduction */}

                <section id="sub-section">
                    <h2>Définition du Projet</h2>
                    <p>
                        Ce projet divisé en 11 points de tests différents va nous permettre de mettre un chiffre de consommation éléctrique sur des opérations lié au String
                        <br/>
                        Cela pour documenter mais aussi diriger les futurs dévellopeur vers des pratiques de Green-IT.
                    </p>
                    <ul>
                        <li>Concatenation de strings avec join() vs. + operator vs. * operator vs. String Literal Concatenation</li>
                        <li>Interpolation de string en utilisant f-strings vs. str.format()</li>
                        <li>Utilisation de l'opérateur in vs str.find() pour la recherhe de substring</li>
                        <li>Utilisation de  list comprehension vs map() pour la modification de string</li>
                        <li>Split de strings en utilisant str.split() vs re.split()</li>
                        <li>Replacement de substrings en utilisant str.replace() vs re.sub()</li>
                        <li>Validation des prefixes de string en utilisant str.startswith() vs slicing</li>
                        <li>Convertion de strings vers list en utilisant list() vs list comprehension</li>
                        <li>Invertion de strings en utilisant slicing vs reversed() and join()</li>
                        <li>Compter le nombre d'occurence d'une sous chaine en utilisant str.count() vs re.find()</li>
                        <li>Efficacité des collections de données (Tuples, Array, List)</li>
                    </ul>
                    <p>
                        La comparaison des résultats ce fera en via les bibliothéques PyRAPL et PyJoules, et nous nous ferons le focus sur des résultats en µW/s.
                        Les tests seront fait en 10 itérations différentes.
                        Toutes les opération seront fait par itération de 100 000 afin d'avoir des résultats significatifs.
                    </p>
                </section>
                </section>

{/* CONCAT 1 */}

            <section id="main-section">
                <h1>Méthodologie</h1>
                <section id="sub-section">
                    <h2>Concatenation de strings avec join() vs. + operator vs. * operator vs. String Literal Concatenation</h2>
                    <section>
                        <h3>Utilisation de join()</h3>
                        <p>
                            Join() nous permet de joindre toutes les occupants d'un tableau.
                            La méthode join() est généralement plus efficace lors de la concaténation d'un grand nombre de chaînes de caractères, car elle crée une nouvelle chaîne en une seule passe.
                        </p>
                        <figure>
                        <CodeBlock codeString = {pyRAPL_CONCAT1_1}/>
                        <figcaption>pyRAPL_CONCAT1_1.py</figcaption>
                    </figure>
                    </section>
                    <section>
                        <h3>Utilisation de l'opérateur +</h3>
                        <p>
                            Commun à de nombreux language, l'opérateur + permet de concatener des chaine de caractéres.
                            L'opérateur + crée une nouvelle chaîne pour chaque concaténation, ce qui peut entraîner des performances plus lentes.
                        </p>
                        <figure>
                        <CodeBlock codeString = {pyRAPL_CONCAT1_2}/>
                        <figcaption>pyRAPL_CONCAT1_2.py</figcaption>
                    </figure>
                    </section>
                    <section>
                        <h3>Utilisation de l'opérateur *</h3>
                        <p>L'opérateur * agit comme un multiplicateur de chaine.</p>
                        <figure>
                        <CodeBlock codeString = {pyRAPL_CONCAT1_3}/>
                        <figcaption>pyRAPL_CONCAT1_3.py</figcaption>
                    </figure>
                    </section>
                    <section>
                        <h3>Utilisation de String Literal Concatenation</h3>
                        <p>Il s'agit d'utiliser les opérations litéral, qui ne sont pas défini par une instruction mais natives.</p>
                        <figure>
                        <CodeBlock codeString = {pyRAPL_CONCAT1_4}/>
                        <figcaption>pyRAPL_CONCAT1_4.py</figcaption>
                    </figure>
                    </section>
                    <section>
                        <h3>Résultats</h3>
                        <figure>
                            <img class="img-max" src={Img_1} alt="resultat" />
                            <figcaption>Analyse des résultat de l'utilisation des fonctions join() vs. + operator vs. * operator vs. String Literal Concatenation. (100 000 Exécutions)</figcaption>
                        </figure>
                        <p>Il nous est donc possible d'affirmer avec ces tests, que join() est la méthode la plus efficaces sur les 10 itérations éffectuées.</p>
                    </section>
                </section>

{/* CONCAT 2 */}

                <section id="sub-section">
                    <h2>Interpolation de string en utilisant f-strings vs. str.format()</h2>
                    <section>
                        <h3>Utilisation de f-strings</h3>
                        <p>
                            La fonction f string permet de définir une chaine paramétré avec de variables, compléter lors de l'apelle.
                            Normalement, f-strings introduit dans Python 3.6, est plus rapide que la méthode str.format(), car elle est évaluée à l'exécution et nécessite moins de surcharge.
                        </p>
                        <figure>
                        <CodeBlock codeString = {pyRAPL_CONCAT2_1}/>
                        <figcaption>pyRAPL_CONCAT2_1.py</figcaption>
                    </figure>
                    </section>
                    <section>
                        <h3>Utilisation de str.format()</h3>
                        <p>
                            Str.format est une chaine paramétré avec des emplacement balisés vide permettant l'ajout d'informations, défini dans la méthode format.
                            La méthode str.format(), bien qu'encore utile, peut être plus lente en raison de son analyse syntaxique plus complexe.
                        </p>
                        <figure>
                        <CodeBlock codeString = {pyRAPL_CONCAT2_2}/>
                        <figcaption>pyRAPL_CONCAT2_2.py</figcaption>
                    </figure>
                    </section>
                    <section>
                        <h3>Résultats</h3>
                        <figure>
                            <img class="img-max" src={Img_2} alt="resultat" />
                            <figcaption>Analyse des résultat de l'utilisation des fonctions f-strings vs. str.format(). (100 000 Exécutions)</figcaption>
                        </figure>
                        <p>
                            Sur la majoritée des itérations du test, la foncion str.format() est la méthode la plus efficace.
                            C'est une surprise dans notre cas par rapport à la méthode f-strings qui est sensé être plus éfficace.
                        </p>
                    </section>
                </section>

{/* CONCAT 3 */}

                <section id="sub-section">
                    <h2>Utilisation de l'opérateur in vs str.find() pour la recherhe de substring</h2>
                    <section>
                        <h3>Utilisation de l'opérateur in</h3>
                        <p>L'opérateur in est plus efficace pour vérifier l'existence d'une sous-chaîne dans une chaîne, car il cesse la recherche dès qu'une correspondance est trouvée.</p>
                        <figure>
                        <CodeBlock codeString = {pyRAPL_CONCAT3_1}/>
                        <figcaption>pyRAPL_CONCAT3_1.py</figcaption>
                    </figure>
                    </section>
                    <section>
                        <h3>Utilisation de str.find()</h3>
                        <p>La méthode str.find(), bien qu'elle soit fonctionnelle, renvoie l'indice de la première occurrence ou -1 si elle n'est pas trouvée, ce qui peut être plus lent dans certains cas.</p>
                        <figure>
                        <CodeBlock codeString = {pyRAPL_CONCAT3_2}/>
                        <figcaption>pyRAPL_CONCAT3_2.py</figcaption>
                    </figure>
                    </section>
                    <section>
                        <h3>Résultats</h3>
                        <figure>
                            <img class="img-max" src={Img_3} alt="resultat" />
                            <figcaption>Analyse des résultat de l'utilisation de l'opérateur in vs str.find(). (100 000 Exécutions)</figcaption>
                        </figure>
                        <p>Avec les différents tests effectués, on remarque que les deux fonctions sont souvent trés proches niveau cout / efficacité.</p>
                    </section>
                </section>

{/* CONCAT 4 */}

                <section id="sub-section">
                    <h2>Utilisation de list comprehension vs map() pour la modification de string</h2>
                    <section>
                        <h3>Utilisation de la comprehension de list</h3>
                        <p>La compréhension de liste est généralement plus lisible et plus rapide pour transformer des chaînes de caractères.</p>
                        <figure>
                        <CodeBlock codeString = {pyRAPL_CONCAT4_1}/>
                        <figcaption>pyRAPL_CONCAT4_1.py</figcaption>
                    </figure>
                    </section>
                    <section>
                        <h3>Utilisation de map()</h3>
                        <p>
                            map() nécessite un appel de fonction séparé, ce qui peut entraîner une surcharge et aboutir à un code moins concis et potentiellement moins lisible par rapport à la syntaxe plus directe et lisible des compréhensions de liste pour les transformations de chaînes de caractères.
                        </p>
                        <figure>
                        <CodeBlock codeString = {pyRAPL_CONCAT4_2}/>
                        <figcaption>pyRAPL_CONCAT4_2.py</figcaption>
                    </figure>
                    </section>
                    <section>
                        <h3>Résultats</h3>
                        <figure>
                            <img class="img-max" src={Img_4} alt="resultat" />
                            <figcaption>Analyse des résultat de l'utilisation des fonctions list comprehension vs map(). (100 000 Exécutions)</figcaption>
                        </figure>
                        <p>Il nous est donc possible d'affirmer avec ces tests, que l'utilisation de list comprehension est la méthode la plus efficace.</p>
                    </section>
                </section>

{/* CONCAT 5 */}

                <section id="sub-section">
                    <h2>Split de strings en utilisant str.split() vs re.split()</h2>
                    <section>
                        <h3>Utilisation de str.split()</h3>
                        <p>Pour la division simple de chaînes de caractères, str.split() ne nécessite pas le traitement supplémentaire lié aux expressions régulières.</p>
                        <figure>
                        <CodeBlock codeString = {pyRAPL_CONCAT5_1}/>
                        <figcaption>pyRAPL_CONCAT5_1.py</figcaption>
                    </figure>
                    </section>
                    <section>
                        <h3>Utilisation de re.split()</h3>
                        <p>re.split() peut être plus puissant lorsqu'il s'agit de motifs de division complexes.</p>
                        <figure>
                        <CodeBlock codeString = {pyRAPL_CONCAT5_2}/>
                        <figcaption>pyRAPL_CONCAT5_2.py</figcaption>
                    </figure>
                    </section>
                    <section>
                        <h3>Résultats</h3>
                        <figure>
                            <img class="img-max" src={Img_5} alt="resultat" />
                            <figcaption>Analyse des résultat de l'utilisation des fonctions str.split() vs re.split(). (100 000 Exécutions)</figcaption>
                        </figure>
                        <p>Il nous est donc possible d'affirmer avec ces tests, que str.split() est la méthode la plus efficace.</p>
                    </section>
                </section>

{/* CONCAT 6 */}

                <section id="sub-section">
                    <h2>Replacement de substrings en utilisant str.replace() vs re.sub()</h2>
                    <section>
                        <h3>Utilisation de str.replace()</h3>
                        <p>Pour des remplacements simples de sous-chaînes, str.replace() n'implique pas les coûts supplémentaires liés au traitement des expressions régulières.</p>
                        <figure>
                        <CodeBlock codeString = {pyRAPL_CONCAT6_1}/>
                        <figcaption>pyRAPL_CONCAT6_1.py</figcaption>
                    </figure>
                    </section>
                    <section>
                        <h3>Utilisation de re.sub()</h3>
                        <p>re.sub() est plus puissant lorsqu'il s'agit de motifs de remplacement complexes.</p>
                        <figure>
                        <CodeBlock codeString = {pyRAPL_CONCAT6_2}/>
                        <figcaption>pyRAPL_CONCAT6_2.py</figcaption>
                    </figure>
                    </section>
                    <section>
                        <h3>Résultats</h3>
                        <figure>
                            <img class="img-max" src={Img_6} alt="resultat"/>
                            <figcaption>Analyse des résultat de l'utilisation des fonctions str.replace() vs re.sub(). (100 000 Exécutions)</figcaption>
                        </figure>
                        <p>Il nous est donc possible d'affirmer avec ces tests, que str.replace() est la méthode la plus efficace.</p>
                    </section>
                </section>

{/* CONCAT 7 */}

                <section id="sub-section">
                    <h2>Validation des prefixes de string en utilisant str.startswith() vs slicing</h2>
                    <section>
                        <h3>Utilisation de str.startswith</h3>
                        <p>La méthode str.startswith() en Python est utilisée pour déterminer si une chaîne de caractères commence par une sous-chaîne spécifiée. Elle retourne True si la chaîne commence par la sous-chaîne donnée et False sinon.</p>
                        <figure>
                        <CodeBlock codeString = {pyRAPL_CONCAT7_1}/>
                        <figcaption>pyRAPL_CONCAT7_1.py</figcaption>
                    </figure>
                    </section>
                    <section>
                        <h3>Utilisation du slicing</h3>
                        <p>Le découpage (slicing) implique la création d'une nouvelle sous-chaîne à partir de la chaîne d'origine, ce qui peut entraîner des surcoûts computationnels supplémentaires.</p>
                        <figure>
                        <CodeBlock codeString = {pyRAPL_CONCAT7_2}/>
                        <figcaption>pyRAPL_CONCAT7_2.py</figcaption>
                    </figure>
                    </section>
                    <section>
                        <h3>Résultats</h3>
                        <figure>
                            <img class="img-max" src={Img_7} alt="resultat"/>
                            <figcaption>Analyse des résultat de l'utilisation des fonctions str.startswith() vs slicing. (100 000 Exécutions)</figcaption>
                        </figure>
                        <p>Il nous est donc possible d'affirmer avec ces tests, que str.startswith() est la méthode la plus efficace.</p>
                    </section>
                </section>

{/* CONCAT 8 */}

                <section id="sub-section">
                    <h2>Convertion de strings vers list en utilisant list() vs list comprehension</h2>
                    <section>
                        <h3>Utilisation de list()</h3>
                        <p>le constructeur list() est généralement plus efficace et concis pour convertir des chaînes de caractères en listes. Il vous permet de créer une liste où chaque caractère de la chaîne devient un élément individuel dans la liste.</p>
                        <figure>
                        <CodeBlock codeString = {pyRAPL_CONCAT8_1}/>
                        <figcaption>pyRAPL_CONCAT8_1.py</figcaption>
                    </figure>
                    </section>
                    <section>
                        <h3>Utilisation de la compréhension de list</h3>
                        <p>La compréhension de liste, peut être plus lente et moins lisible suivant le cas d'utilisation.</p>
                        <figure>
                        <CodeBlock codeString = {pyRAPL_CONCAT8_2}/>
                        <figcaption>pyRAPL_CONCAT8_2.py</figcaption>
                    </figure>
                    </section>
                    <section>
                        <h3>Résultats</h3>
                        <figure>
                            <img class="img-max" src={Img_8} alt="resultat"/>
                            <figcaption>Analyse des résultat de l'utilisation des fonctions list() vs list comprehension. (100 000 Exécutions)</figcaption>
                        </figure>
                        <p>Avec les différents tests effectués, on remarque que les deux fonctions sont souvent trés proches niveau cout / efficacité.</p>
                    </section>
                </section>

{/* CONCAT 9 */}

                <section id="sub-section">
                    <h2>Invertion de strings en utilisant slicing vs reversed() and join()</h2>
                    <section>
                        <h3>Utilisation du slicing</h3>
                        <p>Le découpage (slicing) est une méthode efficace et concise pour inverser une chaîne de caractères en Python. Elle permet d'obtenir l'inversion sans le surcoût de la création d'une nouvelle liste et de la concaténation de ses éléments.</p>
                        <figure>
                        <CodeBlock codeString = {pyRAPL_CONCAT9_1}/>
                        <figcaption>pyRAPL_CONCAT9_1.py</figcaption>
                    </figure>
                    </section>
                    <section>
                        <h3>Utilisation de reversed() et join()</h3>
                        <p>L'utilisation de reversed() et join() pour inverser une chaîne introduit des étapes supplémentaires qui peuvent rendre le processus moins efficace par rapport à l'approche concise du découpage. La fonction reversed() crée un itérateur inversé, puis join() est utilisé pour concaténer les caractères dans une nouvelle chaîne.</p>
                        <figure>
                        <CodeBlock codeString = {pyRAPL_CONCAT9_2}/>
                        <figcaption>pyRAPL_CONCAT9_2.py</figcaption>
                    </figure>
                    </section>
                    <section>
                        <h3>Résultats</h3>
                        <figure>
                            <img class="img-max" src={Img_9} alt="resultat"/>
                            <figcaption>Analyse des résultat de l'utilisation des fonctions slicing vs reversed() and join(). (100 000 Exécutions)</figcaption>
                        </figure>
                        <p>
                            Sur la majoritée des itérations du test, slicing et reversed() & join() sont trés proches niveau cout / efficacité.
                            En revanche il apparait avec surprise que la méthode dédoublé reversed() and join() est parfois plus éfficace avec de gros écarts.
                        </p>
                    </section>
                </section>

{/* CONCAT 10 */}

                <section id="sub-section">
                    <h2>Compter le nombre d'occurence d'une sous chaine en utilisant str.count() vs re.find()</h2>
                    <section>
                        <h3>Utilisation de str.count()</h3>
                        <p>Str.count() compte spécifiquement les occurrences non chevauchantes d'une sous-chaîne dans la chaîne donnée, et il ne nécessite pas les coûts liés au traitement des expressions régulières.</p>
                        <figure>
                        <CodeBlock codeString = {pyRAPL_CONCAT10_1}/>
                        <figcaption>pyRAPL_CONCAT10_1.py</figcaption>
                    </figure>
                    </section>
                    <section>
                        <h3>Utilisation de re.findall()</h3>
                        <p>re.findall() peut être plus puissant lorsqu'il s'agit de motifs de correspondance complexes, en particulier ceux impliquant des expressions régulières. Il permet des critères de correspondance plus flexibles et élaborés. Cependant, cette flexibilité a un coût, et pour des tâches simples de comptage ou de correspondance de sous-chaînes, str.count() est souvent plus rapide et plus efficace.</p>
                        <figure>
                        <CodeBlock codeString = {pyRAPL_CONCAT10_2}/>
                        <figcaption>pyRAPL_CONCAT10_2.py</figcaption>
                    </figure>
                    </section>
                    <section>
                        <h3>Résultats</h3>
                        <figure>
                            <img class="img-max" src={Img_10} alt="resultat"/>
                            <figcaption>Analyse des résultat de l'utilisation des fonctions str.count() vs re.find(). (100 000 Exécutions)</figcaption>
                        </figure>
                        <p>Il nous est donc possible d'affirmer avec ces tests, que str.count() est la méthode la plus efficace.</p>
                    </section>
                </section>

{/* TAL */}

                <section id="sub-section">
                    <h2>Efficacité des collections de données (Tuples, Array, List)</h2>
                    <section>
                        <h3>Utilisation des TUPLES</h3>
                        <p>En Python, un tuple est une structure de données similaire à une liste, mais avec une différence fondamentale : les tuples sont immuables, ce qui signifie qu'une fois créés, ils ne peuvent pas être modifiés.</p>
                        <figure>
                        <CodeBlock codeString = {pyRAPL_TUPLE}/>
                        <figcaption>pyRAPL_TUPLE.py</figcaption>
                    </figure>
                    </section>
                    <section>
                        <h3>Utilisation des ARRAY</h3>
                        <p>
                            PLes arrays peuvent être plus compacts en mémoire que les listes standard car ils sont spécifiques à un type de données. Cela peut être avantageux en termes d'utilisation de la mémoire et d'efficacité pour certaines opérations.
                            Les arrays ont moins de fonctionnalités que les listes. Par exemple, ils ne prennent pas en charge autant de méthodes. De plus, ils sont moins flexibles car ils sont spécifiques à un type de données.
                        </p>
                        <figure>
                        <CodeBlock codeString = {pyRAPL_ARRAY}/>
                        <figcaption>pyRAPL_ARRAY.py</figcaption>
                    </figure>
                    </section>
                    <section>
                        <h3>Utilisation des LIST</h3>
                        <p>Les listes en Python offrent une grande flexibilité en permettant le stockage d'éléments de types variés et en étant mutables, facilitant ainsi l'ajout, la suppression et la modification des données. Les méthodes intégrées fournissent des fonctionnalités étendues pour manipuler les listes. Cependant, leur consommation de mémoire peut être plus élevée que des structures plus optimisées, et les opérations de recherche, d'ajout ou de suppression peuvent être coûteuses en temps, notamment pour de grandes listes. Pour des opérations spécifiques, d'autres structures de données plus spécialisées, comme les arrays pour les calculs numériques, peuvent offrir des performances plus efficaces. Le choix entre les structures de données dépend des besoins particuliers de l'application, en équilibrant la polyvalence des listes avec des considérations de performance.</p>
                        <figure>
                        <CodeBlock codeString = {pyRAPL_LIST}/>
                        <figcaption>pyRAPL_LIST.py</figcaption>
                    </figure>
                    </section>
                    <section>
                        <h3>Résultats</h3>
                        <figure>
                            <img class="img-max" src={Img_TLA} alt="resultat" />
                            <figcaption>Analyse de l' efficacité des collections de données (Tuples, Array, List). (100 000 Exécutions)</figcaption>
                        </figure>
                        <p>Il nous est donc possible d'affirmer avec ces tests, que la LIST est la méthode la plus efficace dans notre cas de test.</p>
                    </section>
                </section>
                </section>

{/* Conclusion */}
            <section id="main-section">
                <h1>Conclusion</h1>
                <section id="sub-section">
                    <h2>Le projet</h2>
                    <section>
                        <p>Ce projet m'a permis de me rendre compte de la différence de traitement des différentes instructions que l'on peut utiliser dans notre utilisation professionelle journaliére. Cela mets donc en exergue la necessité d'en un futur proche de développer les compétence du green coding, dans un monde ou la vie numériques et les applications que cela apporte, nous entoure de plus en plus.</p>
                    </section>
                </section>
                <section id="sub-section">
                    <h2>Les possiblitées d'amélioration</h2>
                    <section>
                        <p>Une vois d'amélioration possible, pour parfaire les tests effectuer dans ce projet, serait d'inclure le temps de traitement de chaque fonction, et de le comparer à la consommation. Cela pourrait faire évoluer les résultats obtenus.</p>
                        <div class="flexPictures">
                            <figure>
                                <img class="img-max2" src={Img_TabRes} alt="resultat" />
                                <figcaption>Résultats PyRAPL / PyJOULES avec la données de temps</figcaption>
                            </figure>
                            <figure>
                                <img class="img-max2" src={Img_ResTot} alt="resultat" />
                                <figcaption>Tableau de résultats sans la donnée de temps</figcaption>
                            </figure>
                        </div>
                    </section>
                </section>
            </section> 
        </div>
    );
}

export default MaximeMOREL;
