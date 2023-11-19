import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Project.css';

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
                <h1>Evaluation de l'efficacité d'operations String courantes / Collection de données </h1>
                <div class="collab">
                    <span>En collaboration avec Léonard BONNEVILLE</span>
                </div>
                <section id="sub-section">
                    <p>Dans le cadre prédominant des préoccupations environnementales, l'importance cruciale de l'efficacité énergétique dans le domaine de la programmation émerge comme une préoccupation incontournable pour l'avenir. Avec la technologie jouant un rôle central dans notre vie quotidienne, il devient impératif de développer des applications et des systèmes informatiques de manière écoénergétique. La nécessité de reconsidérer notre approche du développement logiciel découle de l'impact substantiel des activités numériques sur la consommation mondiale d'énergie. L'obligation de concevoir des programmes réduisant leur empreinte carbone s'inscrit dans une optique de développement durable, visant à concilier l'innovation technologique avec la préservation de notre planète. Ainsi, l'impératif de la programmation efficace sur le plan énergétique se présente comme un défi incontournable pour façonner un avenir où la technologie s'harmonise de manière équilibrée avec les exigences de durabilité.</p>
                </section>

{/* Introduction */}

                <section id="sub-section">
                    <h2>Définition du Projet</h2>
                    <p>Tout a commencé avec l'initialisation d'un nouveau projet React à l'aide de Create React App. Cet outil a préparé le terrain, en fournissant un environnement de développement bien configuré.</p>
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
                    <p>La comparaison des résultats ce fera en via les bibliothéques PyRAPL et PyJoules, et nous nous ferons le focus sur des résultats en µW/s.</p>
                </section>

{/* CONCAT 1 */}
                
                <section id="sub-section">
                    <h2>Concatenation de strings avec join() vs. + operator vs. * operator vs. String Literal Concatenation</h2>
                    <section>
                        <h3>Using join()</h3>
                        <p>Pour notre site, chaque page a été créée comme un composant React distinct. J'ai organisé ces composants dans un dossier pages, rendant la structure du projet claire et maintenable.</p>
                        <figure>
                        <CodeBlock codeString = {pyRAPL_CONCAT1_1}/>
                        <figcaption>pyRAPL_CONCAT1_1.py</figcaption>
                    </figure>
                    </section>
                    <section>
                        <h3>Using +</h3>
                        <p>Pour notre site, chaque page a été créée comme un composant React distinct. J'ai organisé ces composants dans un dossier pages, rendant la structure du projet claire et maintenable.</p>
                        <figure>
                        <CodeBlock codeString = {pyRAPL_CONCAT1_2}/>
                        <figcaption>pyRAPL_CONCAT1_2.py</figcaption>
                    </figure>
                    </section>
                    <section>
                        <h3>Using *</h3>
                        <p>Pour notre site, chaque page a été créée comme un composant React distinct. J'ai organisé ces composants dans un dossier pages, rendant la structure du projet claire et maintenable.</p>
                        <figure>
                        <CodeBlock codeString = {pyRAPL_CONCAT1_3}/>
                        <figcaption>pyRAPL_CONCAT1_3.py</figcaption>
                    </figure>
                    </section>
                    <section>
                        <h3>Using String Literal Concatenation</h3>
                        <p>Pour notre site, chaque page a été créée comme un composant React distinct. J'ai organisé ces composants dans un dossier pages, rendant la structure du projet claire et maintenable.</p>
                        <figure>
                        <CodeBlock codeString = {pyRAPL_CONCAT1_4}/>
                        <figcaption>pyRAPL_CONCAT1_4.py</figcaption>
                    </figure>
                    </section>
                    <section>
                        <h3>Résultats</h3>
                        <figure>
                            <img class="img" src={Img_1} alt="resultat" style={{ transform: 'scale(0.6)', borderRadius: '25px' }} />
                            <figcaption>Analyse des résultat de l'utilisation des fonctions join() vs. + operator vs. * operator vs. String Literal Concatenation. (100 000 Exécutions)</figcaption>
                        </figure>
                        <p>Il nous est donc possible d'affirmer avec ces tests, que xxxx est la méthode la plus efficace.</p>
                    </section>
                </section>

{/* CONCAT 2 */}

                <section id="sub-section">
                    <h2>Interpolation de string en utilisant f-strings vs. str.format()</h2>
                    <section>
                        <h3>Using f-strings</h3>
                        <p>Pour notre site, chaque page a été créée comme un composant React distinct. J'ai organisé ces composants dans un dossier pages, rendant la structure du projet claire et maintenable.</p>
                        <figure>
                        <CodeBlock codeString = {pyRAPL_CONCAT2_1}/>
                        <figcaption>pyRAPL_CONCAT2_1.py</figcaption>
                    </figure>
                    </section>
                    <section>
                        <h3>Using str.format()</h3>
                        <p>Pour notre site, chaque page a été créée comme un composant React distinct. J'ai organisé ces composants dans un dossier pages, rendant la structure du projet claire et maintenable.</p>
                        <figure>
                        <CodeBlock codeString = {pyRAPL_CONCAT2_2}/>
                        <figcaption>pyRAPL_CONCAT2_2.py</figcaption>
                    </figure>
                    </section>
                    <section>
                        <h3>Résultats</h3>
                        <figure>
                            <img class="img" src={Img_2} alt="resultat" style={{ transform: 'scale(0.6)', borderRadius: '25px' }} />
                            <figcaption>Analyse des résultat de l'utilisation des fonctions f-strings vs. str.format(). (100 000 Exécutions)</figcaption>
                        </figure>
                        <p>Il nous est donc possible d'affirmer avec ces tests, que xxxx est la méthode la plus efficace.</p>
                    </section>
                </section>

{/* CONCAT 3 */}

                <section id="sub-section">
                    <h2>Utilisation de l'opérateur in vs str.find() pour la recherhe de substring</h2>
                    <section>
                        <h3>Using in</h3>
                        <p>Pour notre site, chaque page a été créée comme un composant React distinct. J'ai organisé ces composants dans un dossier pages, rendant la structure du projet claire et maintenable.</p>
                        <figure>
                        <CodeBlock codeString = {pyRAPL_CONCAT3_1}/>
                        <figcaption>pyRAPL_CONCAT3_1.py</figcaption>
                    </figure>
                    </section>
                    <section>
                        <h3>Using str.find()</h3>
                        <p>Pour notre site, chaque page a été créée comme un composant React distinct. J'ai organisé ces composants dans un dossier pages, rendant la structure du projet claire et maintenable.</p>
                        <figure>
                        <CodeBlock codeString = {pyRAPL_CONCAT3_2}/>
                        <figcaption>pyRAPL_CONCAT3_2.py</figcaption>
                    </figure>
                    </section>
                    <section>
                        <h3>Résultats</h3>
                        <figure>
                            <img class="img" src={Img_3} alt="resultat" style={{ transform: 'scale(0.6)', borderRadius: '25px' }} />
                            <figcaption>Analyse des résultat de l'utilisation de l'opérateur in vs str.find(). (100 000 Exécutions)</figcaption>
                        </figure>
                        <p>Il nous est donc possible d'affirmer avec ces tests, que xxxx est la méthode la plus efficace.</p>
                    </section>
                </section>

{/* CONCAT 4 */}

                <section id="sub-section">
                    <h2>Utilisation de  list comprehension vs map() pour la modification de string</h2>
                    <section>
                        <h3>Using list comprehension</h3>
                        <p>Pour notre site, chaque page a été créée comme un composant React distinct. J'ai organisé ces composants dans un dossier pages, rendant la structure du projet claire et maintenable.</p>
                        <figure>
                        <CodeBlock codeString = {pyRAPL_CONCAT4_1}/>
                        <figcaption>pyRAPL_CONCAT4_1.py</figcaption>
                    </figure>
                    </section>
                    <section>
                        <h3>Using map()</h3>
                        <p>Pour notre site, chaque page a été créée comme un composant React distinct. J'ai organisé ces composants dans un dossier pages, rendant la structure du projet claire et maintenable.</p>
                        <figure>
                        <CodeBlock codeString = {pyRAPL_CONCAT4_2}/>
                        <figcaption>pyRAPL_CONCAT4_2.py</figcaption>
                    </figure>
                    </section>
                    <section>
                        <h3>Résultats</h3>
                        <figure>
                            <img class="img" src={Img_4} alt="resultat" style={{ transform: 'scale(0.6)', borderRadius: '25px' }} />
                            <figcaption>Analyse des résultat de l'utilisation des fonctions list comprehension vs map(). (100 000 Exécutions)</figcaption>
                        </figure>
                        <p>Il nous est donc possible d'affirmer avec ces tests, que xxxx est la méthode la plus efficace.</p>
                    </section>
                </section>

{/* CONCAT 5 */}

                <section id="sub-section">
                    <h2>Split de strings en utilisant str.split() vs re.split()</h2>
                    <section>
                        <h3>Using str.split()</h3>
                        <p>Pour notre site, chaque page a été créée comme un composant React distinct. J'ai organisé ces composants dans un dossier pages, rendant la structure du projet claire et maintenable.</p>
                        <figure>
                        <CodeBlock codeString = {pyRAPL_CONCAT5_1}/>
                        <figcaption>pyRAPL_CONCAT5_1.py</figcaption>
                    </figure>
                    </section>
                    <section>
                        <h3>Using re.split()</h3>
                        <p>Pour notre site, chaque page a été créée comme un composant React distinct. J'ai organisé ces composants dans un dossier pages, rendant la structure du projet claire et maintenable.</p>
                        <figure>
                        <CodeBlock codeString = {pyRAPL_CONCAT5_2}/>
                        <figcaption>pyRAPL_CONCAT5_2.py</figcaption>
                    </figure>
                    </section>
                    <section>
                        <h3>Résultats</h3>
                        <figure>
                            <img class="img" src={Img_5} alt="resultat" style={{ transform: 'scale(0.6)', borderRadius: '25px' }} />
                            <figcaption>Analyse des résultat de l'utilisation des fonctions str.split() vs re.split(). (100 000 Exécutions)</figcaption>
                        </figure>
                        <p>Il nous est donc possible d'affirmer avec ces tests, que xxxx est la méthode la plus efficace.</p>
                    </section>
                </section>

{/* CONCAT 6 */}

                <section id="sub-section">
                    <h2>Replacement de substrings en utilisant str.replace() vs re.sub()</h2>
                    <section>
                        <h3>Using str.replace()</h3>
                        <p>Pour notre site, chaque page a été créée comme un composant React distinct. J'ai organisé ces composants dans un dossier pages, rendant la structure du projet claire et maintenable.</p>
                        <figure>
                        <CodeBlock codeString = {pyRAPL_CONCAT6_1}/>
                        <figcaption>pyRAPL_CONCAT6_1.py</figcaption>
                    </figure>
                    </section>
                    <section>
                        <h3>Using re.sub()</h3>
                        <p>Pour notre site, chaque page a été créée comme un composant React distinct. J'ai organisé ces composants dans un dossier pages, rendant la structure du projet claire et maintenable.</p>
                        <figure>
                        <CodeBlock codeString = {pyRAPL_CONCAT6_2}/>
                        <figcaption>pyRAPL_CONCAT6_2.py</figcaption>
                    </figure>
                    </section>
                    <section>
                        <h3>Résultats</h3>
                        <figure>
                            <img class="img" src={Img_6} alt="resultat" style={{ transform: 'scale(0.6)', borderRadius: '25px' }} />
                            <figcaption>Analyse des résultat de l'utilisation des fonctions str.replace() vs re.sub(). (100 000 Exécutions)</figcaption>
                        </figure>
                        <p>Il nous est donc possible d'affirmer avec ces tests, que xxxx est la méthode la plus efficace.</p>
                    </section>
                </section>

{/* CONCAT 7 */}

                <section id="sub-section">
                    <h2>Validation des prefixes de string en utilisant str.startswith() vs slicing</h2>
                    <section>
                        <h3>Using str.startswith</h3>
                        <p>Pour notre site, chaque page a été créée comme un composant React distinct. J'ai organisé ces composants dans un dossier pages, rendant la structure du projet claire et maintenable.</p>
                        <figure>
                        <CodeBlock codeString = {pyRAPL_CONCAT7_1}/>
                        <figcaption>pyRAPL_CONCAT7_1.py</figcaption>
                    </figure>
                    </section>
                    <section>
                        <h3>Slicing</h3>
                        <p>Pour notre site, chaque page a été créée comme un composant React distinct. J'ai organisé ces composants dans un dossier pages, rendant la structure du projet claire et maintenable.</p>
                        <figure>
                        <CodeBlock codeString = {pyRAPL_CONCAT7_2}/>
                        <figcaption>pyRAPL_CONCAT7_2.py</figcaption>
                    </figure>
                    </section>
                    <section>
                        <h3>Résultats</h3>
                        <figure>
                            <img class="img" src={Img_7} alt="resultat" style={{ transform: 'scale(0.6)', borderRadius: '25px' }} />
                            <figcaption>Analyse des résultat de l'utilisation des fonctions str.startswith() vs slicing. (100 000 Exécutions)</figcaption>
                        </figure>
                        <p>Il nous est donc possible d'affirmer avec ces tests, que xxxx est la méthode la plus efficace.</p>
                    </section>
                </section>

{/* CONCAT 8 */}

                <section id="sub-section">
                    <h2>Convertion de strings vers list en utilisant list() vs list comprehension</h2>
                    <section>
                        <h3>Using list()</h3>
                        <p>Pour notre site, chaque page a été créée comme un composant React distinct. J'ai organisé ces composants dans un dossier pages, rendant la structure du projet claire et maintenable.</p>
                        <figure>
                        <CodeBlock codeString = {pyRAPL_CONCAT8_1}/>
                        <figcaption>pyRAPL_CONCAT8_1.py</figcaption>
                    </figure>
                    </section>
                    <section>
                        <h3>Using list comprehension</h3>
                        <p>Pour notre site, chaque page a été créée comme un composant React distinct. J'ai organisé ces composants dans un dossier pages, rendant la structure du projet claire et maintenable.</p>
                        <figure>
                        <CodeBlock codeString = {pyRAPL_CONCAT8_2}/>
                        <figcaption>pyRAPL_CONCAT8_2.py</figcaption>
                    </figure>
                    </section>
                    <section>
                        <h3>Résultats</h3>
                        <figure>
                            <img class="img" src={Img_8} alt="resultat" style={{ transform: 'scale(0.6)', borderRadius: '25px' }} />
                            <figcaption>Analyse des résultat de l'utilisation des fonctions list() vs list comprehension. (100 000 Exécutions)</figcaption>
                        </figure>
                        <p>Il nous est donc possible d'affirmer avec ces tests, que xxxx est la méthode la plus efficace.</p>
                    </section>
                </section>

{/* CONCAT 9 */}

                <section id="sub-section">
                    <h2>Invertion de strings en utilisant slicing vs reversed() and join()</h2>
                    <section>
                        <h3>Using slicing</h3>
                        <p>Pour notre site, chaque page a été créée comme un composant React distinct. J'ai organisé ces composants dans un dossier pages, rendant la structure du projet claire et maintenable.</p>
                        <figure>
                        <CodeBlock codeString = {pyRAPL_CONCAT9_1}/>
                        <figcaption>pyRAPL_CONCAT9_1.py</figcaption>
                    </figure>
                    </section>
                    <section>
                        <h3>Using reversed() and join()</h3>
                        <p>Pour notre site, chaque page a été créée comme un composant React distinct. J'ai organisé ces composants dans un dossier pages, rendant la structure du projet claire et maintenable.</p>
                        <figure>
                        <CodeBlock codeString = {pyRAPL_CONCAT9_2}/>
                        <figcaption>pyRAPL_CONCAT9_2.py</figcaption>
                    </figure>
                    </section>
                    <section>
                        <h3>Résultats</h3>
                        <figure>
                            <img class="img" src={Img_9} alt="resultat" style={{ transform: 'scale(0.6)', borderRadius: '25px' }} />
                            <figcaption>Analyse des résultat de l'utilisation des fonctions slicing vs reversed() and join(). (100 000 Exécutions)</figcaption>
                        </figure>
                        <p>Il nous est donc possible d'affirmer avec ces tests, que xxxx est la méthode la plus efficace.</p>
                    </section>
                </section>

{/* CONCAT 10 */}

                <section id="sub-section">
                    <h2>Compter le nombre d'occurence d'une sous chaine en utilisant str.count() vs re.find()</h2>
                    <section>
                        <h3>Using str.count()</h3>
                        <p>Pour notre site, chaque page a été créée comme un composant React distinct. J'ai organisé ces composants dans un dossier pages, rendant la structure du projet claire et maintenable.</p>
                        <figure>
                        <CodeBlock codeString = {pyRAPL_CONCAT10_1}/>
                        <figcaption>pyRAPL_CONCAT10_1.py</figcaption>
                    </figure>
                    </section>
                    <section>
                        <h3>Using re.findall()</h3>
                        <p>Pour notre site, chaque page a été créée comme un composant React distinct. J'ai organisé ces composants dans un dossier pages, rendant la structure du projet claire et maintenable.</p>
                        <figure>
                        <CodeBlock codeString = {pyRAPL_CONCAT10_2}/>
                        <figcaption>pyRAPL_CONCAT10_2.py</figcaption>
                    </figure>
                    </section>
                    <section>
                        <h3>Résultats</h3>
                        <figure>
                            <img class="img" src={Img_10} alt="resultat" style={{ transform: 'scale(0.6)', borderRadius: '25px' }} />
                            <figcaption>Analyse des résultat de l'utilisation des fonctions str.count() vs re.find(). (100 000 Exécutions)</figcaption>
                        </figure>
                        <p>Il nous est donc possible d'affirmer avec ces tests, que xxxx est la méthode la plus efficace.</p>
                    </section>
                </section>

{/* TAL */}

                <section id="sub-section">
                    <h2>Efficacité des collections de données (Tuples, Array, List)</h2>
                    <section>
                        <h3>Using TUPLES</h3>
                        <p>Pour notre site, chaque page a été créée comme un composant React distinct. J'ai organisé ces composants dans un dossier pages, rendant la structure du projet claire et maintenable.</p>
                        <figure>
                        <CodeBlock codeString = {pyRAPL_TUPLE}/>
                        <figcaption>pyRAPL_TUPLE.py</figcaption>
                    </figure>
                    </section>
                    <section>
                        <h3>Using ARRAY</h3>
                        <p>Pour notre site, chaque page a été créée comme un composant React distinct. J'ai organisé ces composants dans un dossier pages, rendant la structure du projet claire et maintenable.</p>
                        <figure>
                        <CodeBlock codeString = {pyRAPL_ARRAY}/>
                        <figcaption>pyRAPL_ARRAY.py</figcaption>
                    </figure>
                    </section>
                    <section>
                        <h3>Using LIST</h3>
                        <p>Pour notre site, chaque page a été créée comme un composant React distinct. J'ai organisé ces composants dans un dossier pages, rendant la structure du projet claire et maintenable.</p>
                        <figure>
                        <CodeBlock codeString = {pyRAPL_LIST}/>
                        <figcaption>pyRAPL_LIST.py</figcaption>
                    </figure>
                    </section>
                    <section>
                        <h3>Résultats</h3>
                        <figure>
                            <img class="img" src={Img_TLA} alt="resultat" style={{ transform: 'scale(0.6)', borderRadius: '25px' }} />
                            <figcaption>Analyse de l' efficacité des collections de données (Tuples, Array, List). (100 000 Exécutions)</figcaption>
                        </figure>
                        <p>Il nous est donc possible d'affirmer avec ces tests, que xxxx est la méthode la plus efficace.</p>
                    </section>
                </section>

{/* Conclusion */}

                <section id="sub-section">
                    <h2>Conclusion</h2>
                    <section>
                        <h3>Le projet</h3>
                        <p>Ce projet m'a permis de me rendre compte de la différence de traitement des différentes instructions que l'on peut utiliser dans notre utilisation professionelle journaliére. Cela mets donc en exergue la necessité d'en un futur proche de dévelloper les compétence du green coding, dans un monde ou la vie numériques et les applications que cela apporte, nous entoure de plus en plus.</p>
                    </section>
                    <section>
                        <h3>Les possiblitées d'amélioration</h3>
                        <p>Une vois d'amélioration possible, pour parfaire les tests effectuer dans ce projet, serait d'inclure le temps de traitement de chaque fonction, et de le comparer à la consommation. Cela pourrait faire évoluer les résultats obtenus.</p>
                    </section>
                </section>

            </section> 
        </div>
    );
}

export default MaximeMOREL;
