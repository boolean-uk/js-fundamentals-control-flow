// names.js
// 1. Create a function that accepts two parameters: firstName, lastName
// The function should return an object with firstName and lastName properties

// 2. Export the function from the file

// hobbies.js
// 1. Create a function that accepts three parameters: hobbyOne, hobbyTwo, hobbyThree
// The function should return an object with a hobbies property, which is an array of hobbies

// 2. Export the function from the file

// people.js
// 1. Import your function from names.js
const { names } = require('../names.js')
// 2. Import your function from hobbies.js
const { hobbies } = require('../hobbies.js')
// 3. Create a function that has no parameters
// The function should return an object with three properties: firstName, lastName, hobbies
// Inside your function, use your previous two functions to construct the object