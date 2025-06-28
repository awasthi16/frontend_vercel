import React from "react";

const stringFunctions = [
  {
    name: "capitalize()",
    description: "Converts the first character to uppercase",
    example: "'hello'.capitalize() => 'Hello'",
  },
  {
    name: "casefold()",
    description: "Converts string to lowercase, more aggressive than lower()",
    example: "'HELLO'.casefold() => 'hello'",
  },
  {
    name: "center(width)",
    description: "Centers the string in a field of given width",
    example: "'hi'.center(6) => '  hi  '",
  },
  {
    name: "count(sub)",
    description: "Returns the number of occurrences of a substring",
    example: "'banana'.count('a') => 3",
  },
  {
    name: "endswith(suffix)",
    description: "Returns True if string ends with the specified suffix",
    example: "'hello'.endswith('o') => True",
  },
  {
    name: "find(sub)",
    description: "Returns the lowest index of the substring",
    example: "'hello'.find('l') => 2",
  },
  {
    name: "format()",
    description: "Formats the string using placeholders",
    example: "'My name is {}'.format('John') => 'My name is John'",
  },
  {
    name: "isalnum()",
    description: "Returns True if all characters are alphanumeric",
    example: "'abc123'.isalnum() => True",
  },
  {
    name: "isalpha()",
    description: "Returns True if all characters are alphabetic",
    example: "'abc'.isalpha() => True",
  },
  {
    name: "isdigit()",
    description: "Returns True if all characters are digits",
    example: "'123'.isdigit() => True",
  },
  {
    name: "join(iterable)",
    description: "Concatenates iterable elements with the string as separator",
    example: "'-'.join(['a', 'b']) => 'a-b'",
  },
  {
    name: "lower()",
    description: "Converts all characters to lowercase",
    example: "'HELLO'.lower() => 'hello'",
  },
  {
    name: "replace(old, new)",
    description: "Replaces occurrences of a substring with another",
    example: "'hello'.replace('l', 'x') => 'hexxo'",
  },
  {
    name: "split(sep)",
    description: "Splits string at separator",
    example: "'a,b,c'.split(',') => ['a', 'b', 'c']",
  },
  {
    name: "strip()",
    description: "Removes leading and trailing whitespace",
    example: "'  hello  '.strip() => 'hello'",
  },
  {
    name: "upper()",
    description: "Converts all characters to uppercase",
    example: "'hello'.upper() => 'HELLO'",
  }
];

const Python = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '1000px', margin: 'auto' }}>
      <h1 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '20px' }}>Python String Functions</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
        {stringFunctions.map((func, idx) => (
          <div key={idx} style={{ border: '1px solid #ccc', borderRadius: '10px', padding: '15px', backgroundColor: '#f9f9f9' }}>
            <h2 style={{ fontSize: '1.2rem', color: '#007acc', marginBottom: '10px' }}>{func.name}</h2>
            <p style={{ marginBottom: '8px' }}>{func.description}</p>
            <pre style={{ backgroundColor: '#eaeaea', padding: '10px', borderRadius: '5px', overflowX: 'auto' }}>
              {func.example}
            </pre>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Python;
