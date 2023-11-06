import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { BsFillFileTextFill } from 'react-icons/bs';

const dataTypes = [
  {
    description: " A function is a block of code in a computer program that performs a specific task or carries out a set of instructions.",
    exemple: " A function is declared with the keyword 'fun', followed by the name of the function. Then, in parentheses, the arguments with the syntax name: type separated by commas if there is more than one argument (there may be no arguments). A function always returns a type; if it returns nothing, use -> void.",
    utilisation: " Functions are used to organize and reuse code, making them more modular and easier to manage.",
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    title: 'func',
    code: "fun factorial(nbr: int) -> int\n{\n    if (nbr == 0) {\n        return 1;\n    }\n\n    return nbr * factorial(nbr - 1);\n\nfun main() -> void\n{\n    return 0;\n}",
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
