// Task 1
const LOWER = 4 // eslint-disable-line no-unused-vars
const UPPER = 17 // eslint-disable-line no-unused-vars
const NUM = 9 // eslint-disable-line no-unused-vars
// 1. Use conditional statements to set the value of the answerOne variable
// to be true if the NUM variable is more than or equal to the LOWER variable
// AND is less than or equal to the UPPER variable
let answerOne

if (NUM >= LOWER && NUM <= UPPER) {
  answerOne = true
}
console.log(answerOne)

// Task 2
const STR = null

// Run the test after setting STR to 'Hello', then 'Goodbye', then any other value you like
// to verify your code is correct
let answerTwo
if (STR === 'Hello' || STR === 'Goodbye') {
  answerTwo = true
} else {
  answerTwo = false
}
console.log(answerTwo)

// Task 3
const AGE = 0

// 13-19  | Teenager
// 20+    | Adult
let answerThree

if (AGE === 0) {
  answerThree = 'Baby'
} else if (AGE >= 1 && AGE <= 4) {
  answerThree = 'Toddler'
} else if (AGE >= 5 && AGE <= 12) {
  answerThree = 'Child'
} else if (AGE >= 13 && AGE <= 19) {
  answerThree = 'Teenager'
} else if (AGE >= 20) {
  answerThree = 'Adult'
}
console.log(answerThree)
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
