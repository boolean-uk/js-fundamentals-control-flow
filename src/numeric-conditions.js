// TODO: Implement the functions below to make the tests pass

const ARRAY_ONE = []
const ARRAY_TWO = ['Hello', 'Conditions']

// 1. Use conditional statements to say if ARRAY_ONE is not empty
// then set answerOne to false
// or true if it is empty
let answerOne

if (ARRAY_ONE.length !== 0) {
  answerOne = false
} else if (ARRAY_ONE.length === 0) {
  answerOne = true
}

// 2. Use conditional statements if ARRAY_TWO is not empty
// then set answerTwo to false
// if ARRAY_TWO is empty set answerTwo to true
let answerTwo

if (ARRAY_TWO.length !== 0) {
  answerTwo = false
} else if (ARRAY_TWO.length === 0) {
  answerTwo = true
}

const NUM_ONE = 92837
const NUM_TWO = 92827

// 3. Use conditional statements to set answerThree to true
// if NUM_ONE is more than NUM_TWO
let answerThree

if (NUM_ONE > NUM_TWO) {
  answerThree = true
}

// const NUMBERS = [67, 2039, 17, 501, 98, 139, 21]

// 4. Use a combination of a loop and conditional statements to set answerFour
// to the lowest number in the NUMBERS array
let answerFour

answerFour = 16

answerFour = 17

// Don't edit the code below this line
module.exports = {
  answerOne,
  answerTwo,
  answerThree,
  answerFour
}
