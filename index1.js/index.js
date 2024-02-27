// Save this code snippet as a file named index.js
// Make sure you do this in a clean directory, do not put it into an existing project

// 1. use the   npm init   command to create a new node project, you can press Enter
// at each prompt to choose the default it offers

// 2. Use the   npm install -D jasmine   command to add the jasmine test framework to the project

// 3. run `npx jasmine init` to set up jasmine, this will create a spec folder

// 4. Create a function that accepts two parameters: firstName, lastName
// The function should return an object with firstName and lastName properties
function fullName(firstName, lastName) {
  return firstName + lastName
}
const value = fullName('Nathan ', 'King')
console.log(value)
// 5. Use module.exports to export your function
module.exports {
    fullName
}
// Save this code snippet as a file named spec/index.spec.js (be very careful not to 
// save it inside /spec/support because if you do, jasmine won't be able to find the
// test
// 1. Import your function from the index.js file


// 2. Use jasmine's `describe` function to create a test suite for your function
// https://jasmine.github.io/

// 3. Use jasmine's `it` function to create a single test case for your function
// Inside the test case, test that your function works correctly using jasmine's `expect` and `toEqual` functions