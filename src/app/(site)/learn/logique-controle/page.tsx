import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { BsFillFileTextFill } from 'react-icons/bs';

const dataTypes = [
  {
    description: " Le type de données int est utilisé pour représenter des nombres entiers. Il s'agit d'un type de données qui ne prend pas en charge les valeurs décimales ou fractionnaires.",
    exemple: " Un exemple courant d'utilisation du type int serait de stocker des âges, des numéros de téléphone, des quantités d'articles, des années, ou tout autre nombre entier. Par exemple, age = 30, quantity = 10, year = 2023.",
    utilisation: " Le type int est principalement utilisé pour stocker des valeurs numériques sans décimales. Il est couramment utilisé pour les opérations mathématiques, les compteurs, les indices de tableau et d'autres situations où seuls des nombres entiers sont nécessaires.",
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
    title: 'logique',
    code: 'int = 12 + 1233 + 4; ' +'\n' + 'int = 12 + 1233 + 4;',
  },
  {
    description: " Le type de données float est utilisé pour représenter des nombres à virgule, c'est-à-dire des nombres avec des valeurs décimales. Il permet de stocker des valeurs réelles et fractionnaires.",
    exemple: " Un exemple courant d'utilisation du type float serait de stocker des prix, des coordonnées géographiques, des taux de change, ou d'autres valeurs qui nécessitent des décimales. Par exemple, price = 19.99, latitude = 34.0522, interestRate = 0.05.",
    utilisation: " Le type float est largement utilisé pour effectuer des calculs mathématiques impliquant des nombres à virgule. Il est adapté pour stocker des données précises nécessitant des décimales.",
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
    title: 'float',
    code: 'float = 1,2 + 1,233 + 0,4',
  },
  {
    description: " Le type de données char est utilisé pour représenter des caractères individuels, y compris des lettres, des chiffres, des symboles ou d'autres caractères spéciaux.",
    exemple: " Un exemple courant d'utilisation du type char serait de stocker des lettres de l'alphabet, des chiffres (comme '0', '1'), des symboles (comme '@', '#'), ou d'autres caractères spéciaux (comme '$', '%').",
    utilisation: " Le type char est souvent utilisé dans la manipulation de chaînes de caractères, le traitement de caractères individuels et la création de texte.",
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
    title: 'char',
    code: 'char = "a" + "b" + "c"',
  },
  {
    description: " Le type de données string est utilisé pour représenter des chaînes de caractères, c'est-à-dire une séquence de caractères. Il peut contenir des mots, des phrases, des paragraphes, ou tout autre texte.",
    exemple: ' Un exemple courant d utilisation du type string serait de stocker du texte, comme des noms, des descriptions, des messages, des adresses, ou tout autre contenu textuel. Par exemple, name = "John Doe", message = "Bonjour, comment ça va ?".',
    utilisation: " Le type string est essentiel pour la manipulation de texte, l'affichage d'informations et la communication avec les utilisateurs.",
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
    title: 'string',
    code: 'string = "Hello World"',
  },
  {
    description: " Le type de données bool (booléen) est utilisé pour représenter des valeurs booléennes, c'est-à-dire true (vrai) ou false (faux). Il est couramment utilisé pour prendre des décisions basées sur des conditions.",
    exemple: " Un exemple courant d'utilisation du type bool serait de stocker des valeurs de vérité pour des expressions logiques, comme isTrue = true, isReady = false.",
    utilisation: " Le type bool est essentiel pour les structures de contrôle, les déclarations conditionnelles et l'évaluation de la validité des conditions.",
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
    title: 'bool',
    code: 'bool = true',
  },
];

function DocumentationPage() {
  return (
    <div className="p-10 w-full">
      <h1 className="font-semibold text-4xl mb-8">Data Types</h1>
      <p className="font-medium text-xl mb-6">
        Here's a documentation page for data types in Glados.
      </p>
      {dataTypes.map((dataType, index) => (
        <div key={index}>
          <h2 className="font-semibold text-3xl mb-2 mx-7">{dataType.title}</h2>
          <ul className='list-disc mx-7 mb-5'>
            <li>
                <p><strong>Description:</strong>{dataType.description}</p>
            </li>
            <li>
                <p><strong>Exemple:</strong>{dataType.exemple}</p>
            </li>
            <li>
                <p><strong>Utilisation:</strong>{dataType.utilisation}</p>
            </li>
          </ul>
          <div className='mx-7 mb-12'>
            <SyntaxHighlighter language="c" style={atomDark}>
              {dataType.code}
            </SyntaxHighlighter>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DocumentationPage;
