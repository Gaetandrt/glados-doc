import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { BsFillFileTextFill } from 'react-icons/bs';

const dataTypes = [
  {
    description: "Une fonction est une portion de code dans un programme informatique qui effectue une tâche spécifique ou effectue un ensemble d'instructions.",
    exemple: " Une fonction se déclare avec le mot-clé fun, suivi du nom de la fonction. Ensuite, entre parenthèses, les arguments ayant la syntaxe nom: type séparés par des virgules s'il y a plus d'un argument (il peut n'y avoir aucun argument). Une fonction retourne toujours un type, s'il ne retourne rien, mettre -> void.",
    utilisation: "Les fonctions sont utilisées pour organiser et réutiliser du code, les rendant plus modulaires et faciles à gérer.",
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
    title: 'func',
    code: "fun factorial(nbr: int) -> int\n{\n    if (nbr == 0) {\n        return 1;\n    }\n\n    return nbr * factorial(nbr - 1);\n\nfun main() -> int\n{\n    return 0;\n}",
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
