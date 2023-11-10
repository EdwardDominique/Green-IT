import React from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { monokaiSublime } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export function affichageFigure(dataFig) {
    if (dataFig) {
        switch (dataFig.type) {
            case 0:
                return (
                    <div className="single-container">
                        <figure className="single-figure">
                            <img src={dataFig.src_pyRAPL} alt={dataFig.alt_pyRAPL} className="single-img" />
                            <figcaption className="single-figcaption">{dataFig.caption_pyRAPL}</figcaption>
                        </figure>
                    </div>
                )
            case 1:
                return (
                    <div className="single-container">
                        <figure className="single-figure">
                            <img src={dataFig.src_pyJoules} alt={dataFig.alt_pyJoules} className="single-img" />
                            <figcaption className="single-figcaption">{dataFig.caption_pyJoules}</figcaption>
                        </figure>
                    </div>
                )
            case 2:
                return (
                    <div className="double-container">
                        <figure className="double-figure">
                            <img src={dataFig.src_pyRAPL}      alt={dataFig.alt_pyRAPL}       className="double-img" />
                            <figcaption className="double-figcaption">{dataFig.caption_pyRAPL}</figcaption>
                        </figure>
                        <figure className="double-figure">
                            <img src={dataFig.src_pyJoules}    alt={dataFig.alt_pyJoules}     className="double-img" />
                            <figcaption className="double-figcaption">{dataFig.caption_pyJoules}</figcaption>
                        </figure>
                    </div>)
            default:
                return null             
        }
    }
    return null;
}

function CodeBlock({ codeString }) {
    return (
      <SyntaxHighlighter language="python" style={monokaiSublime}>
        {codeString}
      </SyntaxHighlighter>
    );
  }

export function affichageCode(dataCode, balise = []) {
    if (!dataCode) {
        return null;
    }

    let content = (
        <figure>
            <CodeBlock codeString={dataCode.codeString} />
            <figcaption>{dataCode.caption}</figcaption>
        </figure>
    );

    balise.forEach(tag => {
        content = React.createElement(tag, {}, content);
    });

    return content;
}

function affichageDonnee(liste, balise) {
    if (!balise) {
        if (typeof liste === 'string') {
            return React.createElement('div', {}, liste);
        } else return liste
    } else if (typeof balise === 'string') {
        return React.createElement(balise, {}, liste);
    } else if (Array.isArray(balise)) {
        return balise.reduce((acc, currentTag) => {
            return React.createElement(currentTag, {}, acc);
        }, liste);
    }
}

export function affichageText(data, balise) {
    if (!data || !data.contenu) {
        return affichageDonnee(data, balise)
    } else { 
        if (!balise) {
            return affichageDonnee(data.contenu, data.balises)
        } else {
            return affichageDonnee(data.contenu, data.balises.concat(balise))
        }
    }
}