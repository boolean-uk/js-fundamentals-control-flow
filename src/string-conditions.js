// Use conditional statements to set answerOne to true if STR_ONE is 'Hello'
const STR_ONE = 'Hello' // eslint-disable-line no-unused-vars

let answerOne
if (STR_ONE === 'Hello') {
  answerOne = true
}
// Use conditional statements to set answerTwo to true if STR_TWO is not 'Hello'
const STR_TWO = 'Goodbye' // eslint-disable-line no-unused-vars

let answerTwo
if (STR_TWO !== 'Hello') {
  answerTwo = true
} else {
  answerTwo = false
}
// Use conditional statements to set answerThree to true if STR_THREE is
// longer than STR_FOUR
const STR_THREE = 'Hello' // eslint-disable-line no-unused-vars
const STR_FOUR = 'Good' // eslint-disable-line no-unused-vars

let answerThree
if (STR_THREE.length > STR_FOUR.length) {
  answerThree = true
}
// Use a combination of a loop and conditional statements to set answerFour
// to false if STR_FIVE has an odd number of vowels, or true if it has an
// even number
const STR_FIVE = 'Alex' // eslint-disable-line no-unused-vars

let answerFour

// Use a combination of a loop and conditional statements to set answerFive
// to false if STR_SIX has an odd number of vowels, or true if it has an
// even number
const STR_SIX = 'Joanna' // eslint-disable-line no-unused-vars

let answerFive

// Use conditional statements to set answerSix to the middle character of STR_SEVEN
// if STR_SEVEN has an odd number of characters
const STR_SEVEN = 'Kayla' // eslint-disable-line no-unused-vars

let answerSix
if (STR_SEVEN.length % 2 !== 0) {
  answerSix = STR_SEVEN[2]
}

// Use conditional statements to set answerSeven to the middle two characters of
// STR_EIGHT if STR_EIGHT has an even number of characters
const STR_EIGHT = 'Alex' // eslint-disable-line no-unused-vars

let answerSeven
//console.log('Answer: ', STR_EIGHT.length)

if (STR_EIGHT.length % 2 === 0) {
  answerSeven = STR_EIGHT[1] + STR_EIGHT[2]
  console.log('Answer 7:', answerSeven)
}
// Set answerEight to the appropriate season based on what MONTH is set to
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
const MONTH = 'December'

let answerEight
if (MONTH === ('March' || 'April' || 'May')) {
  answerEight = 'Spring'
} else if (MONTH === ('June' || 'July' || 'August')) {
  answerEight = 'Summer'
  // console.log('It is SUMMER')
} else if (MONTH === ('September' || 'October' || 'November')) {
  answerEight = 'Autumn'
} else {
  answerEight = 'Winter'
}
console.log('TEST: ', answerEight)
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
