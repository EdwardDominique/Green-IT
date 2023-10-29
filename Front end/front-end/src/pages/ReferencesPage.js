import React from 'react';
import './ReferencesPage.css';
import { Link } from 'react-router-dom';
import ref1Image from '../pictures/ref1.png';
import ref2Image from '../pictures/ref2.png';
import ref3Image from '../pictures/ref3.png';
import ref4Image from '../pictures/ref4.jpg';
import ref5Image from '../pictures/ref5.png';
import ref6Image from '../pictures/ref6.png';
import ref7Image from '../pictures/ref7.png';
import ref8Image from '../pictures/ref8.png';
import ref9Image from '../pictures/ref9.png';
import ref10Image from '../pictures/ref10.png';
import ref11Image from '../pictures/ref11.png';
import ref12Image from '../pictures/ref12.png';
import ref13Image from '../pictures/ref13.png';
import ref15Image from '../pictures/ref15.png';
import ref14Image from '../pictures/ref14.png';
import ref16Image from '../pictures/ref16.png';
import ref17Image from '../pictures/ref17.PNG';

function Reference() {
    const references = [
        {
            titre: 'Le Green IT, une démarche pleine d’ambitions et d’opportunités pour les entreprises',
            imgSrc: ref1Image,
            description: 'Le Green IT est une démarche visant à réduire l’impact environnemental du numérique, qui représente une part significative des émissions mondiales de gaz à effet de serre. Cette démarche englobe divers aspects, allant de la réduction de la consommation d’énergie des infrastructures numériques à l’éco-conception des produits et services numériques. En plus de ses bénéfices environnementaux, le Green IT offre également de nombreuses opportunités pour les entreprises en termes d’efficacité et d’innovation.',
            auteur: 'Henrique MARTINS'
        },
        {
            titre: 'Analyse Énergétique et Environnementale des Navigateurs Web Android en 2021',
            imgSrc: ref2Image,
            description: "L'article analyse la consommation énergétique et l'impact environnemental de 16 navigateurs web pour Android en 2021. Firefox Focus se distingue par sa faible consommation énergétique, tandis que des navigateurs populaires comme Edge, Firefox, et Chrome présentent des performances moindres à cet égard.",
            auteur: 'Aurélien MANCEAU'
        },
        {
            titre: 'Évaluation des Technologies Blockchain pour la Gestion des Transactions et des Actifs en Utilisant les Principes de Green IT',
            imgSrc: ref3Image,
            description: "L'étude évalue la technologie Blockchain pour gérer les transactions et les actifs en se basant sur les principes de Green IT. Des améliorations notables ont été observées, notamment une réduction de la consommation d'énergie de 30%, une augmentation de l'efficacité du traitement de 20% et une réduction des émissions de CO2 de 25%. Ces améliorations ont été obtenues grâce à l'optimisation des algorithmes de consensus, l'utilisation de matériel éco-énergétique, et l'emploi d'énergies renouvelables.",
            auteur: 'Léonard BONNEVILLE'
        },
        {
            titre: 'Le Green Coding : Vers une Informatique Plus Durable',
            imgSrc: ref4Image,
            description: "La demande mondiale en électricité a augmenté avec l'évolution de la programmation informatique. Pourtant, le green coding émerge comme une solution pour réduire la consommation énergétique des technologies de l'information. Voici les principales solutions mises en avant pour une programmation plus respectueuse de l'environnement.",
            auteur: 'Aurélien MANCEAU'
        },
        {
            titre: 'Évaluation de la Green IT et des Pratiques de Programmation Écoénergétiques',
            imgSrc: ref5Image,
            description: "Le rapport évalue l'impact environnemental du développement logiciel, explore l'efficacité énergétique des langages de programmation, et analyse les attitudes des programmeurs envers la Green IT. Des langages comme C et Rust sont identifiés comme écoénergétiques, et des outils comme PageSpeed Insights et GraphQL sont présentés comme des moyens efficaces d'améliorer l'efficacité énergétique du développement web.",
            auteur: 'Léonard BONNEVILLE'
        },
        {
            titre: 'AI for Green : la branche verte de l’intelligence artificielle',
            imgSrc: ref6Image,
            description: "Le Green IT et l'IA sont deux domaines en pleine expansion qui ont un impact significatif sur notre environnement. Bien que l'IA puisse contribuer à l'augmentation des émissions de gaz à effet de serre, elle peut également être utilisée pour aider à la transition écologique. Le concept de Green IA, qui vise à rendre l'IA plus durable, est une initiative prometteuse dans ce sens.",
            auteur: 'Henrique MARTINS'
        },
        {
            titre: 'Efficacité énergétique des langages de programmation',
            imgSrc: ref7Image,
            description: "Dans cet article informatif, nous explorons le domaine du Green IT et son impact sur l'efficacité énergétique des langages de programmation. À travers une étude détaillée portant sur 27 langages populaires, nous découvrons ceux qui se distinguent en matière de durabilité. De la méthodologie aux résultats, nous mettons en lumière l'impact environnemental des choix de langage. En fin de compte, nous tirons des conclusions importantes qui éclairent le rôle du Green IT dans l'industrie de la programmation pour un avenir plus respectueux de l'environnement.",
            auteur: 'Bassidiki HAIDARA'
        },
        {
            titre: 'CLOUD INFORMATIQUE VERT et DURABILITÉ ENVIRONNEMENTALE',
            imgSrc: ref8Image,
            description: "Le cloud informatique est devenue une infrastructure essentielle pour les entreprises, mais sa croissance rapide soulève des préoccupations environnementales. L'article se concentre sur la consommation d'énergie des centres de données, devenue un problème critique en raison des coûts opérationnels élevés et des émissions de carbone importantes. Pour résoudre ces problèmes, l'article explore des solutions pour rendre le cloud informatique plus respectueuse de l'environnement. Il examine les aspects technologiques qui contribuent à la consommation d'énergie et propose des orientations pour la recherche future dans le domaine de le cloud informatique vert.",
            auteur: 'Flavien GAUTIER'
        },
        {
            titre: 'IBM Cloud Carbon Calculator Aims to Aid Enterprise Sustainability Efforts',
            imgSrc: ref9Image,
            description: "IBM utilise son expertise en matière d'IA pour améliorer les initiatives de développement durable en aidant les entreprises à mieux comprendre l'impact de l'informatique dématérialisée sur l'environnement.",
            auteur: 'Maxime MOREL'
        },
        {
            titre: 'A sustainable and secure load management model for green cloud data centres',
            imgSrc: ref10Image,
            description: "Un modèle SaS-LM propose une gestion de charge durable et sécurisée pour les centres de données cloud. Il utilise l'optimisation DPBHO pour réduire les émissions de carbone, la consommation d'énergie et améliorer l'utilisation des ressources.",
            auteur: 'Maxime MOREL'
        },
        {
            titre: 'Resource-aware Programming in a High-level Language',
            imgSrc: ref11Image,
            description: "La programmation tenant compte des ressources dans les langages de haut niveau sur les MPSoC est réalisable avec un effort gérable et améliore les performances.",
            auteur: 'Maxime MOREL'
        },
        {
            titre: 'Making software and data architectures more sustainable',
            imgSrc: ref12Image,
            description: "Les éditeurs de logiciels ont la possibilité de réduire les émissions de carbone des applications en réévaluant les approches traditionnelles et en intégrant dès le départ la notion de durabilité.",
            auteur: 'Maxime MOREL'
        },
        {
            titre: 'Telecom SudParis lance un programme de formation pour former les ingénieurs du Green IT',
            imgSrc: ref13Image,
            description: "Cet article parle de l'initiative de Telecom SudParis, une école d'ingénieurs en France, pour former les ingénieurs du futur spécialisés dans les technologies vertes. L'école a lancé un nouveau programme de formation appelé 'Green IT' qui vise à former des étudiants à la conception et à la mise en œuvre de solutions informatiques durables pour réduire l'impact environnemental des technologies de l'information. Le programme comprend des cours sur la conception de centres de données économes en énergie, la gestion de l'énergie et la réduction de l'empreinte carbone des infrastructures informatiques. Telecom SudParis espère ainsi répondre à la demande croissante de professionnels qualifiés dans le domaine de l'informatique verte.",
            auteur: 'Henrique DONG'
        },
        {
            titre: 'BENCHMARK GREEN IT 2022',
            imgSrc: ref14Image,
            description: "L'article 'Benchmark Green IT 2022' souligne l'importance de l'Analyse du Cycle de Vie (ACV) dans le domaine du Green IT. Il propose une méthodologie pour évaluer les impacts environnementaux directs des systèmes d'information, mettant en avant l'ACV comme un outil essentiel pour quantifier ces externalités. L'article recommande divers indicateurs environnementaux, notamment le changement climatique et l'appauvrissement de la couche d'ozone, et encourage une approche matricielle pour évaluer le cycle de vie de l'ensemble des composants des systèmes informatiques. En somme, l'article met en avant l'ACV comme un instrument essentiel pour orienter les stratégies Green IT vers une meilleure durabilité environnementale.",
            auteur: 'Flavien GAUTIER'
        },
        {
            titre: 'Green IT : écoresponsabilité des APIs encouragée par le nouveau label API Green Score',
            imgSrc: ref15Image,
            description: "Le collectif API Thinking a introduit le label API Green Score pour promouvoir des APIs écoresponsables dans un contexte de prolifération numérique. Les APIs, malgré leur utilité, ont un impact environnemental significatif, contribuant à la pollution numérique et aux émissions de gaz à effet de serre. Ce label encourage les développeurs à considérer l'impact environnemental de leurs interfaces, en attribuant un score vert aux APIs respectueuses de l'environnement. Pour obtenir la certification, les APIs doivent répondre à des critères répartis en 7 domaines, incluant la gestion du cycle de vie et l'évaluation de la consommation d'énergie. En favorisant la durabilité des APIs, le label API Green Score constitue une initiative importante pour l'adoption de pratiques numériquement responsables.",
            auteur: 'Bassidiki HAIDARA'
        },
        {
            titre: 'Pratiques informatiques vertes des entreprises et des ONG de premier plan',
            imgSrc: ref16Image,
            description: "Cet article traite de l'importance de la durabilité environnementale et du rôle des technologies de l'information (IT) dans cet objectif. Il souligne la nécessité de réduire l'utilisation des combustibles fossiles et de développer des sources d'énergie renouvelable pour parvenir à une société à faible émission de carbone.",
            auteur: 'Loic BOURNONVILLE'
        },
        {
            titre: 'Green Planning Systems for Self-Consumption of Renewable Energy',
            imgSrc: ref17Image,
            description: "L'article aborde le réchauffement climatique mondial causé par les activités humaines et met en avant l'importance de réduire les émissions de CO2. Il explore également le concept de Green Planning qui propose des approches informatiques pour améliorer l'environnement, et met en évidence le rôle de l'Internet des objets (IoT) dans la gestion de l'énergie et la réduction des émissions de CO2.",
            auteur: 'Edouard DOMINIQUE'
        },

    ];

    return (
        <div className="reference-page">
            <h1>Page de référence pour le Green IT</h1>
            <section className="introduction">
                <p>Cette page a pour objectif de rediriger vers des sites proposant des solutions pour le Green IT, afin d'encourager une informatique plus responsable et durable.</p>
            </section>
            <div className="references-grid" >
                {references.map((reference, index) => (
                    <div key={index} className="reference-item">
                        <h2>{reference.titre}</h2>
                        <div className="reference-details">
                            <img className="reference-image" src={reference.imgSrc} alt={reference.titre} style={{ width: "240px", height: "auto", objectFit: "cover" }} />
                            <p>{reference.description}</p>
                        </div>
                        <div className="reference-link-author">
                            <Link to={`/reference${index + 1}`}>Découvrir</Link>
                            <span className="reference-author">Review par : {reference.auteur}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Reference;
