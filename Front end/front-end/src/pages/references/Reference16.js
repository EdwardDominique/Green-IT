import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Reference.css';

function Reference1() {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1); // navigate back by 1 in the history stack
    };

    return (
        <div className="article-page">
            <div className="header-buttons">
                <button className="back-button" onClick={handleBack}>Retour</button>
                <a href="https://www.researchgate.net/profile/Silvana-Trimi/publication/257704718_Green_IT_Practices_of_leading_firms_and_NGOs/links/0c960533c2b868eaef000000/Green-IT-Practices-of-leading-firms-and-NGOs.pdf" target="_blank" rel="noopener noreferrer" className="site-link-button">Visiter le site</a>
            </div>
            <h1> Pratiques informatiques vertes d'entreprises et d'ONG de premier plan</h1>
            <section id="article-section">
                <h1>Introduction</h1>
                <p>L'article met en avant le rôle immédiat de solutions telles que les pratiques de Green IT (technologies de l'information vertes) pour contribuer à la durabilité. Il présente des exemples spécifiques de l'adoption de la Green IT par des entreprises et des organisations à but non lucratif, ainsi que des initiatives menées par des organisations environnementales internationales pour établir des normes et accroître la sensibilisation à la Green IT.</p>
            </section>
            <section id="article-section">
                <h1>Le Principe</h1>
                <p>L'introduction de l'article souligne que les préoccupations environnementales et climatiques ne sont plus seulement l'affaire des écologistes, des scientifiques et des régulateurs nationaux et internationaux, mais aussi du monde des affaires. Il insiste sur le rôle potentiel des systèmes d'information (IS) pour contribuer à la durabilité, et encourage les chercheurs en IS à s'engager davantage dans la recherche sur ces questions.
                L'article mentionne que le mouvement de la Green IT a pris de l'ampleur et est devenu une composante essentielle des stratégies de durabilité des organisations. Il met en évidence la capacité des technologies de l'information à contribuer à la réduction de la consommation d'énergie et des émissions de CO2, tant par leur propre efficacité énergétique que par leur utilisation pour réduire l'impact environnemental dans d'autres secteurs de l'économie.</p>
            </section>
            <section id="article-section">
                <h1>Conclusion</h1>
                <p>En conclusion, l'article souligne que la durabilité est un enjeu mondial qui nécessite des approches innovantes et des partenariats. Il appelle les entreprises à penser à la création d'un environnement durable pour les générations futures en développant des produits à faible émission de carbone, en adoptant des infrastructures adaptées et en concevant de nouveaux modèles d'affaires. Il encourage également les individus à devenir plus conscients de leur consommation énergétique et appelle les gouvernements à créer des réglementations et des infrastructures pour soutenir la durabilité. Enfin, il met en avant le rôle clé de la Green IT dans la réalisation de ces objectifs, à la fois pour améliorer l'efficacité énergétique et pour favoriser des modes de vie plus durables.</p>
            </section>
        </div>
    );
}

export default Reference1;
