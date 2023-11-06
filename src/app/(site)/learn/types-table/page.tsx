import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { BsFillFileTextFill } from 'react-icons/bs';

const dataTypes = [
  {
    description: " The int data type is used to represent whole numbers. It is a type of data that does not support decimal or fractional values.",
    exemple: " A common example of using the int type would be to store ages, phone numbers, item quantities, years, or any other whole number. For instance, age = 30, quantity = 10, year = 2023.",
    utilisation: " The int type is primarily used for storing numerical values without decimals. It is commonly used for mathematical operations, counters, array indices, and other situations where only whole numbers are necessary.",
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
    title: 'int',
    code: 'int = 12 + 1233 + 4; ' +'\n' + 'int = 12 + 1233 + 4;',
  },
  {
    description: " The float data type is used to represent numbers with decimal points, that is, numbers with decimal values. It allows for the storage of real and fractional values.",
    exemple: " A common example of using the float type would be to store prices, geographical coordinates, exchange rates, or other values that require decimals. For instance, price = 19.99, latitude = 34.0522, interestRate = 0.05.",
    utilisation: " The float type is widely used for performing mathematical calculations involving decimal numbers. It is suitable for storing precise data that requires decimals.",
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
    title: 'float',
    code: 'float = 1,2 + 1,233 + 0,4',
  },
  {
    description: " The char data type is used to represent individual characters, including letters, numbers, symbols, or other special characters.",
    exemple: " A common example of the char type would be to store letters of the alphabet, digits (such as '0', '1'), symbols (such as '@', '#'), or other special characters (such as '$', '%').",
    utilisation: " The char type is often used in string manipulation, handling individual characters, and creating text.",
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    title: 'char',
    code: 'char = "a" + "b" + "c";',
  },
  {
    description: " The string data type is used to represent character strings, that is, a sequence of characters. It can contain words, sentences, paragraphs, or any other text.",
    exemple: ' A common example of using the string type would be to store text, such as names, descriptions, messages, addresses, or any other textual content. For example, name = "John Doe", message = "Hello, how are you?".',
    utilisation: " The string type is essential for text manipulation, displaying information, and communicating with users.",
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    title: 'string',
    code: 'string = "Hello World"',
  },
  {
    description: " The bool (boolean) data type is used to represent boolean values, that is, true or false. It is commonly used to make decisions based on conditions.",
    exemple: " A common example of using the bool type would be to store truth values for logical expressions, like isTrue = true, isReady = false.",
    utilisation: " The bool type is crucial for control structures, conditional statements, and evaluating the validity of conditions.",
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    title: 'bool',
    code: 'bool = true',
  },
  {
    description: " Create arrays with type[] (void not allowed).",
    exemple: " Arrays are a versatile and widely used data structure in programming for a variety of tasks. They are essential for organizing, storing, and manipulating data efficiently.",
    utilisation: " Data storage",
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    title: 'Array',
    code: 'type strArray = string[];\nint[]\nfloat[]\nchar[]\nstring[]\nbool[]',
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
