import React from 'react';
import './HomePage.css';

function HomePage() {
    return (
        <div className="accueil-container">
          <img src="logo.png" className="App-logo" alt="Green [it] logo" />
          <h1>Green [it]</h1>
            <section id="introduction">
                <h1>Green [it] - L'innovation au service de la planète</h1>
                <p>Bienvenue sur Green [it], la plateforme dédiée aux projets étudiants d'ingénierie informatique centrés sur l'écologie et la durabilité. Notre mission est de mettre en avant les efforts de la nouvelle génération pour allier technologie et respect de l'environnement.</p>
            </section>

            <section id="student-projects">
                <h2>Projets d'étudiants en informatique :</h2>
                <p>Découvrez une variété de projets innovants élaborés par des étudiants en ingénierie informatique. Chaque projet présenté vise à résoudre des problématiques environnementales à l'aide de solutions technologiques. De l'optimisation énergétique à la conception de plateformes éco-responsables, laissez-vous inspirer par le talent et la créativité de ces jeunes ingénieurs.</p>
            </section>

            <section id="references">
                <h2>Références vers d'autres sites sur le Green IT :</h2>
                <p>La technologie verte est un domaine en constante évolution, avec de nouvelles découvertes et initiatives chaque jour. Nous vous invitons à explorer d'autres ressources pour enrichir vos connaissances sur le sujet. Découvrez notre sélection de sites web dédiés au Green IT, qui offrent des perspectives, des études de cas, et des innovations dans ce domaine passionnant.</p>
            </section>

            <footer>
                <p>Rejoignez-nous dans notre quête pour une technologie plus verte et un avenir plus durable!</p>
            </footer>
        </div>
    );
}


export default HomePage;
