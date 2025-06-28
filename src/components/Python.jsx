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

const dictionaryFunctions = [
  {
    name: "get(key)",
    description: "Returns the value for the specified key if key is in dictionary",
    example: `{'a': 1}.get('a') => 1`,
  },
  {
    name: "keys()",
    description: "Returns a view object of all keys",
    example: `{'a': 1, 'b': 2}.keys() => dict_keys(['a', 'b'])`,
  },
  {
    name: "values()",
    description: "Returns a view object of all values",
    example: `{'a': 1, 'b': 2}.values() => dict_values([1, 2])`,
  },
  {
    name: "items()",
    description: "Returns a view object of key-value pairs",
    example: `{'a': 1}.items() => dict_items([('a', 1)])`,
  },
  {
    name: "update(other)",
    description: "Updates the dictionary with elements from another dictionary",
    example: `{'a': 1}.update({'b': 2}) => {'a': 1, 'b': 2}`,
  },
  {
    name: "pop(key)",
    description: "Removes the specified key and returns its value",
    example: `{'a': 1}.pop('a') => 1`,
  },
  {
    name: "popitem()",
    description: "Removes and returns a (key, value) pair from the dictionary",
    example: `{'a': 1, 'b': 2}.popitem() => ('b', 2)`,
  },
  {
    name: "clear()",
    description: "Removes all items from the dictionary",
    example: `{'a': 1}.clear() => {}`,
  },
  {
    name: "copy()",
    description: "Returns a shallow copy of the dictionary",
    example: `{'a': 1}.copy() => {'a': 1}`,
  },
  {
    name: "setdefault(key, default)",
    description: "Returns value of key; inserts key with default if not present",
    example: `{}.setdefault('x', 10) => 10`,
  },
  {
    name: "in operator",
    description: "Checks if a key exists in dictionary",
    example: `'a' in {'a': 1} => True`,
  },
  {
    name: "del keyword",
    description: "Deletes a key from dictionary",
    example: `d = {'a': 1}; del d['a'] => {}`,
  },
  {
    name: "dict comprehension",
    description: "Creates dictionary using comprehension",
    example: `{x: x**2 for x in range(3)} => {0: 0, 1: 1, 2: 4}`,
  },
  {
    name: "len()",
    description: "Returns number of items in dictionary",
    example: `len({'a': 1, 'b': 2}) => 2`,
  },
  {
    name: "any()",
    description: "Returns True if any key is truthy",
    example: `any({'': 0, 'a': 0}) => True`,
  },
  {
    name: "all()",
    description: "Returns True if all keys are truthy",
    example: `all({'a': 1, 'b': 2}) => True`,
  },
  {
    name: "max()",
    description: "Returns the maximum key",
    example: `max({'a': 10, 'c': 5, 'b': 8}) => 'c'`,
  },
  {
    name: "min()",
    description: "Returns the minimum key",
    example: `min({'a': 10, 'c': 5, 'b': 8}) => 'a'`,
  },
  {
    name: "fromkeys(iterable, value)",
    description: "Creates a new dictionary with keys from iterable and same value",
    example: `dict.fromkeys(['a', 'b'], 0) => {'a': 0, 'b': 0}`,
  },
  {
    name: "dict() constructor",
    description: "Creates a new dictionary",
    example: `dict(a=1, b=2) => {'a': 1, 'b': 2}`,
  },
];

const Python = () => {
  const renderCards = (data) =>
    data.map((func, idx) => (
      <div
        key={idx}
        style={{
          border: "1px solid #ccc",
          borderRadius: "10px",
          padding: "15px",
          backgroundColor: "#f9f9f9",
        }}
      >
        <h2 style={{ fontSize: "1.2rem", color: "#007acc", marginBottom: "10px" }}>
          {func.name}
        </h2>
        <p style={{ marginBottom: "8px" }}>{func.description}</p>
        <pre
          style={{
            backgroundColor: "#eaeaea",
            padding: "10px",
            borderRadius: "5px",
            overflowX: "auto",
          }}
        >
          {func.example}
        </pre>
      </div>
    ));

  return (
    <div style={{ padding: "20px", maxWidth: "1000px", margin: "auto" }}>
      <h1 style={{ fontSize: "2rem", textAlign: "center", marginBottom: "20px" }}>
        Python String Functions
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
        }}
      >
        {renderCards(stringFunctions)}
      </div>

      <h1 style={{ fontSize: "2rem", textAlign: "center", margin: "40px 0 20px" }}>
        Python Dictionary Functions
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
        }}
      >
        {renderCards(dictionaryFunctions)}
      </div>
    </div>
  );
};

export default Python;
