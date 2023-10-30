import React from 'react';
import { useNavigate } from 'react-router-dom';
import schem_ard from '../../pictures/dong/schem_ard.png';
import mont_ard from '../../pictures/dong/mont_ard.jpg';
import result_ard from '../../pictures/dong/result_ard.png';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { monokaiSublime } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import './Project.css';

function CodeBlock({ codeString }) {
    return (
      <SyntaxHighlighter language="arduino" style={monokaiSublime}>
        {codeString}
      </SyntaxHighlighter>
    );
}
const fonction_mes60Hz = `const int ledPin = 11; // Broche de la LED

void setup() {
  pinMode(ledPin, OUTPUT);
}

void loop() {
  int cycleTimeMillis = 16; // Temps en millisecondes pour un cycle (1/60e de seconde)

  analogWrite(ledPin, 32); // Intensité à 50%
  delay(cycleTimeMillis / 2); // Temps d'allumage (1/2 cycle)

  analogWrite(ledPin, 0); // Éteindre la LED
  delay(cycleTimeMillis / 2); // Temps d'extinction (1/2 cycle)
}`;

const fonction_mes30Hz = `const int ledPin = 11; // Broche de la LED

void setup() {
  pinMode(ledPin, OUTPUT);
}

void loop() {
  int cycleTimeMillis = 33; // Temps en millisecondes pour un cycle (1/60e de seconde)

  analogWrite(ledPin, 32); // Intensité à 50%
  delay(cycleTimeMillis / 2); // Temps d'allumage (1/2 cycle)

  analogWrite(ledPin, 0); // Éteindre la LED
  delay(cycleTimeMillis / 2); // Temps d'extinction (1/2 cycle)
}`;


function HenriqueDONG() {
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
                <h1>Étude de la consommation électrique des LED à différentes fréquences et résistances sur ARDUINO</h1>
                <section id="sub-section">
                    <p>À l'époque moderne, la consommation électrique est un pilier essentiel de notre vie quotidienne, alimentant nos foyers, nos industries et notre avancée technologique. Cependant, face à la croissance constante de la demande en énergie et à l'urgence de réduire notre empreinte carbone, il est impératif de réfléchir à des solutions visant à minimiser notre consommation d'électricité. Ce projet, en examinant l'impact de la fréquence de clignotement et de la valeur de la résistance sur la consommation des LED, illustre comment de petites modifications peuvent avoir un impact significatif dans cette quête vers une utilisation plus économe et responsable de l'énergie, contribuant ainsi à la durabilité environnementale et à la réduction de notre impact sur la planète.</p>
                </section>
                <section id="sub-section">
                    <h2>Présentation du Projet</h2>
                    <p>Ce projet vise à explorer et à analyser l'efficacité énergétique des LED dans diverses conditions, en mettant particulièrement l'accent sur l'impact de la fréquence de clignotement et de la résistance en série sur leur consommation électrique. En observant comment de petits ajustements dans ces paramètres influencent la consommation d'énergie, nous pouvons mieux comprendre comment optimiser l'utilisation des LED, contribuant ainsi à des solutions énergétiques plus durables et éco-responsables.</p>
                </section>
                <section id="sub-section">
                    <h2>Technologie Utilisée</h2>
                    <ul>
                        <li>LED (Diode Électroluminescente)</li>
                        <ul>
                            <li>Les LED sont la technologie d'éclairage utilisée dans ce projet. Elles convertissent l'électricité en lumière et sont couramment utilisées pour l'éclairage et l'indication visuelle.</li>
                        </ul>
                        <li>Résistances </li>
                        <ul>
                            <li> Les résistances en série sont utilisées pour limiter le courant qui traverse les LED. Elles sont essentielles pour contrôler l'intensité lumineuse et la consommation d'énergie des LED.</li>
                        </ul>
                        <li>Arduino </li>
                        <ul>
                            <li> Les microcontrôleurs Arduino sont employés pour contrôler la fréquence de clignotement des LED et collecter des données sur la consommation électrique.</li>
                        </ul>
                        <li>Breadboard </li>
                        <ul>
                            <li> Les breadboards (plaque d'essai) sont utilisés pour prototyper le circuit électrique de manière temporaire et permettre des ajustements faciles.</li>
                        </ul>
                        <li>Multimètre </li>
                        <ul>
                            <li>Les multimètres sont des outils de mesure essentiels pour mesurer l'intensité du courant électrique traversant les composants du circuit.</li>
                        </ul>
                        <li>Code Arduino </li>
                        <ul>
                            <li>Des programmes Arduino sont écrits pour contrôler le clignotement des LED à différentes fréquences et collecter des données sur la consommation électrique.</li>
                        </ul>
                        
                    </ul>
                </section>
                <section id="sub-section">
                    <h2>Méthodologie</h2>
                    <p>La première chose à faire a été la conception ainsi que le montage du circuit :</p>
                    <ul>
                        <li><p>Identifier les composants nécessaires : LED, résistances, Arduino, breadboard, etc.</p></li>
                        <li><p>Concevoir le schéma électrique du circuit, en indiquant comment les composants seront connectés.</p></li>
                        <li><p>Assembler physiquement le circuit sur une breadboard en suivant le schéma électrique.</p></li>
                    </ul>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <figure>
                            <img src={schem_ard} alt="schema arduino" style={{ transform: 'scale(0.75)', borderRadius: '25px', height: '450px' }}/>
                            <figcaption>Conception du circuit</figcaption>
                        </figure>
                        <figure>
                            <img src={mont_ard} alt="montage arduino" style={{ width: '500px', borderRadius: '25px' }}/>
                            <figcaption>Montage du circuit</figcaption>
                        </figure>
                    </div>

                    <p>Ensuite, la programmation de l'arduino :</p>
                    <ul>
                        <li><p>Écrire le code Arduino pour contrôler le clignotement des LED à différentes fréquences.</p></li>
                    </ul>

                    <figure>
                        <CodeBlock codeString = {fonction_mes60Hz}/>
                        <figcaption>test_60hz.ino</figcaption>
                    </figure>
                    <figure>
                        <CodeBlock codeString = {fonction_mes30Hz}/>
                        <figcaption>test_30hz.ino</figcaption>
                    </figure>

                    <p>Et pour finir, la collecte de données : </p>
                    <ul>
                        <li><p>Effectuer les tests en faisant varier la fréquence de clignotement des LED (par exemple, 60 Hz et 30 Hz) tout en maintenant la résistance en série constante.</p></li>
                        <li><p>Mesurer l'intensité du courant traversant les LED à l'aide d'un multimètre.</p></li>
                        <li><p>Noter les données recueillies pour chaque condition de test.</p></li>
                    </ul>

                </section>
                <section id="sub-section">
                    <h2>Résultats</h2>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <figure>
                        <img src={result_ard} alt="resultat arduino" style={{ width: '500px', borderRadius: '25px' }}/>
                        <figcaption>Analyse comparative des consommations énergétiques relevés</figcaption>
                    </figure>
                    </div>
                    <ul>
                        <li>
                            <h3>Effet de la fréquence</h3>
                            <ul>
                                <li>Les variations de fréquence de la LED de 60 Hz à 30 Hz n'ont que peu d'impact sur l'intensité du courant. Les différences sont minimes, ce qui suggère que la LED peut maintenir des niveaux d'intensité similaires malgré les changements de fréquence.</li>
                            </ul>
                        </li>
                        <li>
                            <h3>Effet de la résistance</h3>
                            <ul>
                                <li>En augmentant la valeur de la résistance de 330 ohms à 1 000 ohms, l'intensité du courant traversant la LED diminue de manière significative. Cela confirme la relation directe entre la résistance en série et le courant de la LED. Une résistance plus élevée limite davantage le courant, réduisant ainsi l'intensité lumineuse de la LED et sa consommation électrique.</li>
                            </ul>
                        </li>
                        <li>
                            <h3>Variation de l'intensité lumineuse</h3>
                            <ul>
                                <li>La variation de l'intensité lumineuse est directement liée à l'intensité du courant. Une intensité plus élevée produit une luminosité plus intense, tandis qu'une intensité plus faible réduit la luminosité.</li>
                            </ul>
                        </li>
                        <li>
                            <h3>Conclusion</h3>
                            <p>Les LED maintiennent une intensité relativement constante malgré les variations de fréquence. Cependant, la résistance en série a un effet significatif sur l'intensité, permettant de réguler la consommation d'énergie de la LED en réduisant la tension à ses bornes. Si vous avez besoin de réduire la consommation électrique d'une LED, l'ajustement de la valeur de la résistance en série est une méthode efficace. Cela vous permet de trouver un équilibre entre la luminosité et l'efficacité énergétique en fonction de vos besoins spécifiques.</p>
                        </li>
                    </ul>
                </section>
            </section>












            
        </div>
    );
}

export default HenriqueDONG;
