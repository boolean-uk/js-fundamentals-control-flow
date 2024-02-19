const { answer } = require("./boolean-conditions");

// Task 1
const LOWER = 4 // eslint-disable-line no-unused-vars
const UPPER = 17 // eslint-disable-line no-unused-vars
const NUM = 9 // eslint-disable-line no-unused-vars

// 1. Use conditional statements to set the value of the answerOne variable
// to be true if the NUM variable is more than or equal to the LOWER variable
// AND is less than or equal to the UPPER variable
let answerOne;
  if (NUM >= LOWER && NUM <= UPPER){
    answerOne = true
  } else { 
    answerOne = false }
  console.log("answerOne is:", answerOne)

// Task 2
const STR = "Goodbye"

// 2. Use conditional statements to set the answerTwo variable below to true
// if the STR variable is 'Hello' or 'Goodbye'
// Set answerTwo to false if it's neither of those
// Run the test after setting STR to 'Hello', then 'Goodbye', then any other value you like
// to verify your code is correct
let answerTwo; 
    if (STR === "Hello" | STR === "Goodbye"){
      answerTwo = true
      console.log("answerTwo:", answerTwo)
    } else {
      answerTwo = false 
      console.log("answerTwo:", answerTwo)}

// Task 3
const AGE = 15

// 3. Use conditional statements to set the answerThree variable below to a
// string value based on what the AGE variable is set to.
// The table below shows the string that should be used for each range of
// values that AGE can be.
//
// For example: if AGE is set to 3, answerThree should be set to 'Toddler'
//
// 0      | Baby
// 1-4    | Toddler
// 5-12   | Child
// 13-19  | Teenager
// 20+    | Adult
let baby;
      if (AGE <1){
        answerThree = "baby"
        console("answerThree:", answerThree)
      } 
let toddler;
      if (AGE >= 1 && AGE <= 4){
        answerThree = "Toddler"
        console.log("answerThree:", answerThree)
      }
let child;
      if (AGE >= 4 && AGE <= 12){
        answerThree = "Child"
        console.log("answerThree:", answerThree)
      }
let teenager;
      if (AGE >= 12 && AGE <= 19){
        answerThree = "Teenager"
        console.log("answerThree:", answerThree)
      }
let Adult;
      if  (AGE >= 20){
        answerThree = "adult"
        console.log("answerThree:", answerThree)
      }


// Run the test after changing the AGE value to verify you've successfully
// accounted for each age range

// Don't touch the code below this line
module.exports = {
  answerOne,
  STR,
  answerTwo,
  AGE,
  answerThree
}
