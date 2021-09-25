// solution to Hello, Name or World!codewars https://www.codewars.com/kata/57e3f79c9cb119374600046b

function hello(name) {
  if (typeof name === "undefined" || name.length === 0) {
    return `Hello, World!`;
  } else {
    return `Hello, ${name[0].toUpperCase()}${name.substring(1,).toLowerCase()}!`;
  }
}