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
// const vowels = ['a', 'e', 'i', 'o', 'u']
// let numberOfVowels = 0
// for (let count = 0; count < STR_FIVE.length; count++) {
//   if (vowels.includes(STR_FIVE[count].toLowerCase())) {
//     numberOfVowels += 1
//   }
// }
// answerFour = numberOfVowels % 2 === 0

// Use a combination of a loop and conditional statements to set answerFive
// to false if STR_SIX has an odd number of vowels, or true if it has an
// even number
const STR_SIX = 'Joanna' // eslint-disable-line no-unused-vars

let answerFive
// let numberOfVowels2 = 0
// for (let count2 = 0; count2 < STR_SIX.length; count2++) {
//   if (vowels.includes(STR_SIX[count2])) {
//     numberOfVowels2 += 1
//   }
// }
// answerFive = numberOfVowels2 % 2 === 0
// Use conditional statements to set answerSix to the middle character of STR_SEVEN
// if STR_SEVEN has an odd number of characters
const STR_SEVEN = 'Kayla' // eslint-disable-line no-unused-vars

let answerSix
if (STR_SEVEN.length % 2 === 1) {
  answerSix = STR_SEVEN[2]
}
// Use conditional statements to set answerSeven to the middle two characters of
// STR_EIGHT if STR_EIGHT has an even number of characters
const STR_EIGHT = 'Alex' // eslint-disable-line no-unused-vars

let answerSeven
if (STR_EIGHT.length % 2 === 0) {
  answerSeven = STR_EIGHT.slice(1, 3)
}
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
if (MONTH === 'January' || MONTH === 'February' || MONTH === 'December') {
  answerEight = 'Winter'
} else if (MONTH === 'March' || MONTH === 'April' || MONTH === 'May') {
  answerEight = 'Spring'
} else if (MONTH === 'June' || MONTH === 'July' || MONTH === 'August') {
  answerEight = 'Summer'
} else if (
  MONTH === 'September' ||
  MONTH === 'October' ||
  MONTH === 'November'
) {
  answerEight = 'Autumn'
}

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
