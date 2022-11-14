// Use conditional statements to set answerOne to true if STR_ONE is 'Hello'
const STR_ONE = 'Hello' // eslint-disable-line no-unused-vars

let answerOne

if (STR_ONE === 'Hello') {
  answerOne = true
} else {
  answerOne = false
}

console.log(`Should log true: ${answerOne}`)
console.log('--------')

// Use conditional statements to set answerTwo to true if STR_TWO is not 'Hello'
const STR_TWO = 'Goodbye' // eslint-disable-line no-unused-vars

let answerTwo

if (STR_TWO !== 'Hello') {
  answerTwo = true
} else {
  answerTwo = false
}

console.log(`Should log true: ${answerTwo}`)
console.log('--------')

// Use conditional statements to set answerThree to true if STR_THREE is
// longer than STR_FOUR
const STR_THREE = 'Hello' // eslint-disable-line no-unused-vars
const STR_FOUR = 'Good' // eslint-disable-line no-unused-vars

let answerThree

if (STR_THREE.length > STR_FOUR.length) {
  answerThree = true
} else {
  answerThree = false 
}

console.log(`Should log true: ${answerThree}`)
console.log('--------')

// Use a combination of a loop and conditional statements to set answerFour
// to false if STR_FIVE has an odd number of vowels, or true if it has an
// even number
const STR_FIVE = 'Alex' // eslint-disable-line no-unused-vars

let answerFour
const listOfVowles = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U']
let numberOfVowles = 0

for (let letter = 0; STR_FIVE.length > letter; letter++) {
  if (listOfVowles.includes(STR_FIVE[letter])) {
    numberOfVowles += 1
  }
}

console.log(`Should be 2: ${numberOfVowles}`)

if (numberOfVowles % 2 == 0) {
  answerFour = true
} else {
  answerFour = false
}

console.log(`Should log true: ${answerFour}`)
console.log('--------')

// Use a combination of a loop and conditional statements to set answerFive
// to false if STR_SIX has an odd number of vowels, or true if it has an
// even number
const STR_SIX = 'Joanna' // eslint-disable-line no-unused-vars

let answerFive
numberOfVowles = 0

for (let letter = 0; STR_SIX.length > letter; letter++) {
  if (listOfVowles.includes(STR_SIX[letter])) {
    numberOfVowles += 1
  }
}

console.log(`Should be 3: ${numberOfVowles}`)

if (numberOfVowles % 2 == 0) {
  answerFive = true
} else {
  answerFive = false
}

console.log(`Should log false: ${answerFive}`)
console.log('--------')

// Use conditional statements to set answerSix to the middle character of STR_SEVEN
// if STR_SEVEN has an odd number of characters
const STR_SEVEN = 'Kayla' // eslint-disable-line no-unused-vars

let answerSix

if (STR_SEVEN.length % 2 !== 0) {
  answerSix = STR_SEVEN[Math.floor(STR_SEVEN.length / 2)]
}

console.log(`Should log the letter y: ${answerSix}`)
console.log(`--------`)

// Use conditional statements to set answerSeven to the middle two characters of
// STR_EIGHT if STR_EIGHT has an even number of characters
const STR_EIGHT = 'Alex' // eslint-disable-line no-unused-vars

let answerSeven

if (STR_EIGHT.length % 2 == 0) {
  answerSeven = STR_EIGHT[STR_EIGHT.length / 2 - 1]
  answerSeven += STR_EIGHT[STR_EIGHT.length / 2]
}

console.log(`Should log le:  ${answerSeven}`)

// Set answerEight to the appropriate season based on what MONTH is set to
//
// For example, if MONTH is 'January', answerEight should be 'Winter'
//
// The below table shows the season for each range of months:
//
// March to May: Spring
// June to August: Summer
// September to November: Autumn
// December to February: Winter
//
// Run the test after changing the value of MONTH to check you've covered every month correctly
const MONTH = 'January'

let answerEight
const Spring = ['March', 'April', 'May']
const Summer = ['June', 'July', 'August']
const Autumn = ['September', 'October', 'November']
const Winter = ['December', 'January', 'February']

if (Spring.includes(MONTH)) {
  answerEight = 'Spring'
} else if (Summer.includes(MONTH)) {
  answerEight = 'Summer'
} else if (Autumn.includes(MONTH)) {
  answerEight = 'Autumn'
} else if (Winter.includes(MONTH)) {
  answerEight = 'Winter'
} else {
  answerEight = 'Not a Month'
}

console.log(answerEight)

module.exports = {
  answerOne,
  answerTwo,
  answerThree,
  answerFour,
  answerFive,
  answerSix,
  answerSeven,
  MONTH,
  answerEight
}
