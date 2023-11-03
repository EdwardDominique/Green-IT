import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Project.css';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';



function BassidikiHAIDARA() {
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
                <h1>Comparaison de 3 langages de programmation sur leurs consommation d'énergie à l'aide d'un projet</h1>
                <section id="sub-section">
                    <p>Dans un monde de plus en plus soucieux de la durabilité environnementale, la consommation d'énergie dans le domaine de l'informatique est devenue un sujet de préoccupation majeur. Les applications et les systèmes informatiques modernes évoluent rapidement, offrant des fonctionnalités toujours plus sophistiquées, mais cela s'accompagne souvent d'une augmentation de la demande énergétique. Pourtant, l'efficacité énergétique est essentielle pour réduire l'empreinte carbone de l'industrie informatique et contribuer à un avenir plus durable.</p>
                </section>
                <section id="sub-section">
                    <h2>Présentation du projet</h2>
                    <p>Il y a trois ans, j'ai conçu un générateur de mots de passe aléatoires en utilisant le langage C. Ce générateur de mots de passe a été élaboré pour répondre à un besoin de sécurité croissant, visant à créer des mots de passe robustes et aléatoires pour les applications, les comptes en ligne et les systèmes sensibles.
Aujourd'hui, l'objectif est d'aller plus loin en comparant l'efficacité énergétique de ce générateur de mots de passe dans différents langages de programmation. J'ai choisi de le convertir en trois langages majeurs : JavaScript, Python et C++, afin d'évaluer et de comparer leur consommation d'énergie respective.</p>
                </section>
                <section id="sub-section">
                    <h2>Mise en oeuvre du projet</h2>
                    <p>A l'origine, le code avait été développé sur le langage de programmation C, la tache etait ensuite de proceder au conversion.</p>
                    <SyntaxHighlighter language="c" style={dracula}>
        {`
#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main()
{

	char tab[26] = {'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'};
	char tab2[26] = {'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'};
	char tab3[11] = {'0','1','2','3','4','5','6','7','8','9'};

	int a = 0;
	int j = 0;

	printf("Generateur de Mot de Passe Aléatoire :");
	printf("Nombre de caracère ?");
	printf("6 ?");
	printf("8 ?");
	printf("10 ?");
	printf("12 ?");
	printf("14 ?");
	printf("16 ?");
	scanf("%d", &a);
	char tab4[a];
	int z = 0;
	srand(time(0));
	while (z<a)
	{
		j = 0;
		j=rand()%3+1;
		if( j == 1)
		{
			tab4[z] = tab[rand()%26+0];
			z++;
		}
		else if( j == 2)
		{
			tab4[z] = tab2[rand()%26+0];
			z++;
		}

		else if( j == 3)
		{
			tab4[z] = tab3[rand()%11+0];
			z++;
		}
	}

	int t = 0;
	for( t = 0; t<a; t++)
	{
		printf("%c",tab4[t]);
	}
	return 0;
}
        `}
    </SyntaxHighlighter>
                    </section>
                </section>

                <section id="sub-section">
                    <h2>Choix de la Conversion en C++, JavaScript et Python pour l'Analyse de la Consommation d'Énergie</h2>
                    <p>La décision de convertir notre générateur de mots de passe aléatoires en C++, JavaScript et Python pour l'analyse de la consommation d'énergie repose sur plusieurs considérations fondamentales. Ces langages ont été sélectionnés en raison de leurs caractéristiques intrinsèques qui les rendent particulièrement appropriés pour cette étude comparative.</p>
                    <section>
                        <h3>Réputation de Langages à Basse Consommation</h3>
                        <p>L'une des raisons majeures de ce choix réside dans la réputation bien établie de ces trois langages en tant que langages de programmation à faible consommation d'énergie. En général, C++, JavaScript et Python sont connus pour leur efficacité énergétique, ce qui en fait des choix pertinents pour des applications où la consommation d'énergie est une préoccupation primordiale. Cette réputation découle de leur conception orientée vers la performance et leur capacité à optimiser les ressources matérielles.</p>
                    </section>
                    <section>
                        <h3>Facilité d'Analyse</h3>
                        <p> Les langages C++, JavaScript et Python se distinguent également par leur facilité d'analyse de la consommation d'énergie. Leur transparence en termes de gestion des ressources système, ainsi que la disponibilité d'outils de mesure et de profilage, simplifient grandement la tâche d'évaluation de l'impact énergétique des opérations de génération de mots de passe. La capacité à accéder aux données de consommation d'énergie et à effectuer des mesures précises est cruciale pour des analyses comparatives fiables.</p>
                    </section>
                    <section>
                        <h3>Polyvalence et Utilisation Répandue</h3>
                        <p>  En outre, C++, JavaScript et Python sont des langages largement utilisés dans divers domaines, de la programmation embarquée aux applications web, en passant par le traitement des données. Cette polyvalence et leur utilisation répandue signifient que les résultats de notre étude auront une portée plus large, car ils toucheront un large éventail d'applications informatiques. Les conclusions pourront ainsi être applicables à de nombreuses situations réelles.</p>
                    </section>
                </section>    
                <section id="sub-section">
                    <h2>Résultats des conversion vers les autres langages</h2>
                    <p>La stylisation est une partie essentielle de tout projet web. Pour notre site, nous avons créé des fichiers CSS séparés pour chaque composant de page et les avons importés pour appliquer le style. Cette approche a rendu la gestion des styles assez simple et organisée.</p>
                </section>












            
        </div>
    );
}

export default BassidikiHAIDARA;
