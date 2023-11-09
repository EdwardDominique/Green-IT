import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Project.css';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import result from '../../pictures/BassiResultat.png';



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
                    <p>Voici la conversion dans langage de C++ :</p>
                    <SyntaxHighlighter language="cpp" style={dracula}>
        {`
#include <QApplication>
#include <QWidget>
#include <QVBoxLayout>
#include <QHBoxLayout>
#include <QLabel>
#include <QLineEdit>
#include <QPushButton>
#include <QCheckBox>
#include <QTextEdit>
#include <QTime>
#include <QRandomGenerator>

class PasswordGenerator : public QWidget
{
    Q_OBJECT

public:
    PasswordGenerator(QWidget *parent = 0)
        : QWidget(parent)
    {
        setWindowTitle("Générateur de Mot de Passe");

        QLabel *lengthLabel = new QLabel("Longueur du mot de passe :");
        lengthInput = new QLineEdit("12");
        QLabel *includeUppercaseLabel = new QLabel("Inclure des majuscules :");
        includeUppercase = new QCheckBox();
        QLabel *includeDigitsLabel = new QLabel("Inclure des chiffres :");
        includeDigits = new QCheckBox();
        QLabel *includeSpecialLabel = new QLabel("Inclure des caractères spéciaux :");
        includeSpecial = new QCheckBox();
        generateButton = new QPushButton("Générer le Mot de Passe");
        passwordOutput = new QTextEdit();

        QVBoxLayout *layout = new QVBoxLayout;
        QHBoxLayout *checkboxLayout1 = new QHBoxLayout;
        QHBoxLayout *checkboxLayout2 = new QHBoxLayout;

        checkboxLayout1->addWidget(includeUppercaseLabel);
        checkboxLayout1->addWidget(includeUppercase);
        checkboxLayout1->addWidget(includeDigitsLabel);
        checkboxLayout1->addWidget(includeDigits);

        checkboxLayout2->addWidget(includeSpecialLabel);
        checkboxLayout2->addWidget(includeSpecial);

        layout->addWidget(lengthLabel);
        layout->addWidget(lengthInput);
        layout->addLayout(checkboxLayout1);
        layout->addLayout(checkboxLayout2);
        layout->addWidget(generateButton);
        layout->addWidget(passwordOutput);

        setLayout(layout);

        connect(generateButton, SIGNAL(clicked()), this, SLOT(generatePassword()));
    }

public slots:
    void generatePassword()
    {
        int length = lengthInput->text().toInt();
        bool includeUppercaseChecked = includeUppercase->isChecked();
        bool includeDigitsChecked = includeDigits->isChecked();
        bool includeSpecialChecked = includeSpecial->isChecked();

        QString charset = "abcdefghijklmnopqrstuvwxyz";
        if (includeUppercaseChecked)
            charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (includeDigitsChecked)
            charset += "0123456789";
        if (includeSpecialChecked)
            charset += "!@#$%^&*()_-+=<>?";

        QString password = "";
        QRandomGenerator generator(QTime::currentTime().msec());
        for (int i = 0; i < length; i++)
        {
            int randomIndex = generator.bounded(charset.length());
            password += charset.at(randomIndex);
        }

        passwordOutput->setPlainText(password);
    }

private:
    QLineEdit *lengthInput;
    QCheckBox *includeUppercase;
    QCheckBox *includeDigits;
    QCheckBox *includeSpecial;
    QPushButton *generateButton;
    QTextEdit *passwordOutput;
};

int main(int argc, char *argv[])
{
    QApplication app(argc, argv);
    PasswordGenerator window;
    window.resize(400, 300);
    window.show();
    return app.exec();
}

#include "main.moc"

        `}
    </SyntaxHighlighter>
    <p>Voici la conversion dans langage de JavaScript :</p>
                    <SyntaxHighlighter language="javascript" style={dracula}>
        {`
        function generatePassword() {
            const length = parseInt(document.getElementById("length").value);
            let characters = 'abcdefghijklmnopqrstuvwxyz';

            if (document.getElementById("includeUppercase").checked) {
                characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            }
            if (document.getElementById("includeDigits").checked) {
                characters += '0123456789';
            }
            if (document.getElementById("includeSpecial").checked) {
                characters += '!@#$%^&*()_-+=<>?';
            }

            let password = '';

            for (let i = 0; i < length; i++) {
                const randomIndex = Math.floor(Math.random() * characters.length);
                password += characters.charAt(randomIndex);
            }

            document.getElementById("password").textContent = password;

            // Réinitialiser les variables sensibles
            length = 0;
            characters = '';
            password = '';
        }


        `}
    </SyntaxHighlighter>
    <p>Et voici la conversion dans langage de Python :</p>
                    <SyntaxHighlighter language="pyhton" style={dracula}>
        {`
        import tkinter as tk
        from tkinter import ttk
        import random
        import string
        
        def generate_password():
            length = int(length_var.get())
            include_uppercase = uppercase_var.get()
            include_digits = digits_var.get()
            include_special = special_var.get()
        
            characters = string.ascii_lowercase
        
            if include_uppercase:
                characters += string.ascii_uppercase
            if include_digits:
                characters += string.digits
            if include_special:
                characters += '!@#$%^&*()_-+=<>?'
        
            password = ''.join(random.choice(characters) for _ in range(length))
            password_var.set(password)
        
        # Créer la fenêtre principale
        root = tk.Tk()
        root.title("Générateur de Mot de Passe")
        
        # Créer un cadre
        frame = ttk.Frame(root)
        frame.grid(row=0, column=0, padx=10, pady=10)
        
        # Options de personnalisation
        length_label = ttk.Label(frame, text="Longueur du mot de passe:")
        length_label.grid(row=0, column=0, sticky='w')
        
        length_var = tk.StringVar(value="12")
        length_entry = ttk.Entry(frame, textvariable=length_var)
        length_entry.grid(row=0, column=1)
        
        uppercase_var = tk.BooleanVar(value=True)
        uppercase_check = ttk.Checkbutton(frame, text="Inclure des majuscules", variable=uppercase_var)
        uppercase_check.grid(row=1, column=0, columnspan=2, sticky='w')
        
        digits_var = tk.BooleanVar(value=True)
        digits_check = ttk.Checkbutton(frame, text="Inclure des chiffres", variable=digits_var)
        digits_check.grid(row=2, column=0, columnspan=2, sticky='w')
        
        special_var = tk.BooleanVar(value=True)
        special_check = ttk.Checkbutton(frame, text="Inclure des caractères spéciaux", variable=special_var)
        special_check.grid(row=3, column=0, columnspan=2, sticky='w')
        
        # Bouton pour générer le mot de passe
        generate_button = ttk.Button(frame, text="Générer le Mot de Passe", command=generate_password)
        generate_button.grid(row=4, column=0, columnspan=2, pady=10)
        
        # Champ pour afficher le mot de passe généré
        password_var = tk.StringVar()
        password_label = ttk.Label(frame, text="Mot de passe généré:")
        password_label.grid(row=5, column=0, sticky='w')
        
        password_entry = ttk.Entry(frame, textvariable=password_var)
        password_entry.grid(row=5, column=1)
        
        root.mainloop()
        
        `}
    </SyntaxHighlighter>
                </section>
    <section id="sub-section">
                    <h2>Test et conclusion</h2>
                    <p>Nous allons comparer Python, C++, et JavaScript en tenant compte de certains facteurs environnementaux clés.</p>
                <section>
                    <h3>Consommation de mémoire</h3>
                    <p>Python, JavaScript, et C++ ont des comportements variés en termes de consommation de mémoire, en fonction de l'implémentation et de l'utilisation spécifiques.
C++ peut être plus efficace en gestion de mémoire que Python et JavaScript.</p>
                    <h3>Vitesse d'exécution</h3>
                    <p>C++ est généralement plus rapide que Python et JavaScript en raison de sa compilation.
JavaScript est souvent interprété, ce qui le rend moins rapide que les langages compilés.
Python peut être plus lent que C++ et JavaScript dans certaines situations.</p>
                    <h3>Utilisation des bibliothèques</h3>
                    <p>Python, JavaScript, et C++ disposent de bibliothèques et de frameworks étendus, permettant un développement rapide et une meilleure réutilisation du code.</p>
                    <h3>Efficacité énergétique</h3>
                    <p>C++ a tendance à être plus efficace en termes d'utilisation de l'énergie en raison de sa vitesse d'exécution et de sa gestion de la mémoire.
Python et JavaScript peuvent consommer plus d'énergie en raison de leurs surcharges d'exécution et de gestion automatique de la mémoire.</p>
<h3>Conclusion</h3>
                    <p>Pour une comparaison plus précise, voici un tableau récapitulatif basé sur une échelle de 1 à 10 (10 étant le meilleur score) pour chaque facteur environnemental, en fonction de différents cas d'utilisation :</p>
                    <img  src={result} alt="resultat" style={{ transform: 'scale(0.6)', borderRadius: '25px' }}/>
                    <p>Le choix du langage de programmation le plus respectueux de l'environnement dépendra des besoins spécifiques du projet en cours, de la capacité à optimiser le code et des ressources matérielles disponibles.Le C++ semble avoir un avantage sur les autres langages en termes d'efficacité énergétique, mais il faut également tenir compte d'autres facteurs tels que la facilité de développement et la disponibilité des compétences en programmation.</p>
                </section>
    </section>
            
        </div>
    );
}

export default BassidikiHAIDARA;
