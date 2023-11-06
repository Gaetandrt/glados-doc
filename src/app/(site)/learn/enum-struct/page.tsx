import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { BsFillFileTextFill } from 'react-icons/bs';

const dataTypes = [
  {
    description: "An enum (enumeration) in programming is a data structure that allows for the definition of a set of constant values, usually associated with a specific type. These constant values are often used to represent a finite set of options or states.",
    exemple: "A common example of using the int type would be to store ages, phone numbers, item quantities, years, or any other integer number. For instance, age = 30, quantity = 10, year = 2023.",
    utilisation: "The int type is primarily used to store numerical values without decimals. It is commonly used for mathematical operations, counters, array indices, and other situations where only whole numbers are required.",
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    title: 'enum',
    code: 'int = 12 + 1233 + 4;' +'\n' + 'int = 12 + 1233 + 4;',
  },
  {
    description: "The float data type is used to represent floating-point numbers, that is, numbers with decimal values. It allows for the storage of real and fractional values.",
    exemple: "A common example of using the float type would be to store prices, geographical coordinates, exchange rates, or other values that require decimals. For example, price = 19.99, latitude = 34.0522, interestRate = 0.05.",
    utilisation: "The float type is widely used to perform mathematical calculations involving floating-point numbers. It is suitable for storing precise data requiring decimals.",
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    title: 'struct',
    code: 'float = 1.2 + 1.233 + 0.4',
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
