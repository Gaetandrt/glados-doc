import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { BsFillFileTextFill } from 'react-icons/bs';

const dataTypes = [
  {
    description: "Un enum (énumération) en programmation est une structure de données qui permet de définir un ensemble de valeurs constantes, généralement associées à un type spécifique. Ces valeurs constantes sont souvent utilisées pour représenter un ensemble fini d'options ou d'états. ",
    exemple: " Un exemple courant d'utilisation du type int serait de stocker des âges, des numéros de téléphone, des quantités d'articles, des années, ou tout autre nombre entier. Par exemple, age = 30, quantity = 10, year = 2023.",
    utilisation: " Le type int est principalement utilisé pour stocker des valeurs numériques sans décimales. Il est couramment utilisé pour les opérations mathématiques, les compteurs, les indices de tableau et d'autres situations où seuls des nombres entiers sont nécessaires.",
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
    title: 'enum',
    code: 'int = 12 + 1233 + 4; ' +'\n' + 'int = 12 + 1233 + 4;',
  },
  {
    description: " Le type de données float est utilisé pour représenter des nombres à virgule, c'est-à-dire des nombres avec des valeurs décimales. Il permet de stocker des valeurs réelles et fractionnaires.",
    exemple: " Un exemple courant d'utilisation du type float serait de stocker des prix, des coordonnées géographiques, des taux de change, ou d'autres valeurs qui nécessitent des décimales. Par exemple, price = 19.99, latitude = 34.0522, interestRate = 0.05.",
    utilisation: " Le type float est largement utilisé pour effectuer des calculs mathématiques impliquant des nombres à virgule. Il est adapté pour stocker des données précises nécessitant des décimales.",
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
    title: 'struct',
    code: 'float = 1,2 + 1,233 + 0,4',
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
