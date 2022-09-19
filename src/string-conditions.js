// Use conditional statements to set answerOne to true if STR_ONE is 'Hello'
const STR_ONE = 'Hello'

let answerOne
if (STR_ONE === 'Hello') answerOne = true

// Use conditional statements to set answerTwo to true if STR_TWO is not 'Hello'
const STR_TWO = 'Goodbye'

let answerTwo
if (STR_TWO !== 'Hello') answerTwo = true

// Use conditional statements to set answerThree to true if STR_THREE is
// longer than STR_FOUR
const STR_THREE = 'Hello'
const STR_FOUR = 'Good'

let answerThree
if (STR_THREE.length > STR_FOUR.length) answerThree = true

// Use a combination of a loop and conditional statements to set answerFour
// to false if STR_FIVE has an odd number of vowels, or true if it has an
// even number
const STR_FIVE = 'Alexs'

let answerFour
let vowelsNumFour = 0
for (let idx = 0; idx < STR_FIVE.length; idx++) {
  const char = STR_FIVE.charAt(idx)
  const match = char.match(/a|e|i|o|u/i)
  if (match != null) vowelsNumFour += 1
}
if (vowelsNumFour % 2 === 0) answerFour = true
else answerFour = false

// Use a combination of a loop and conditional statements to set answerFive
// to false if STR_SIX has an odd number of vowels, or true if it has an
// even number
const STR_SIX = 'Joannaaa'

let answerFive
let vowelsNumFive = 0
for (let idx = 0; idx < STR_SIX.length; idx++) {
  const char = STR_SIX.charAt(idx)
  const match = char.match(/a|e|i|o|u/i)
  if (match != null) vowelsNumFive += 1
}
if (vowelsNumFive % 2 === 0) answerFive = true
else answerFive = false

// Use conditional statements to set answerSix to the middle character of STR_SEVEN
// if STR_SEVEN has an odd number of characters
const STR_SEVEN = 'Kayla'

const oddStringSeven = STR_SEVEN.length % 2 !== 0
const midCharIdxSeven = oddStringSeven ? STR_SEVEN.length / 2 - 0.5 : null
const answerSix = STR_SEVEN.charAt(midCharIdxSeven)

// Use conditional statements to set answerSeven to the middle two characters of
// STR_EIGHT if STR_EIGHT has an even number of characters
const STR_EIGHT = 'Alex'

const evenString = STR_EIGHT.length % 2 === 0
const midCharIdxEight = evenString ? STR_EIGHT.length / 2 - 1 : null
let answerSeven = STR_EIGHT.charAt(midCharIdxEight)
answerSeven += STR_EIGHT.charAt(midCharIdxEight + 1)

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
switch (MONTH) {
  case 'March':
  case 'April':
  case 'May':
    answerEight = 'Spring'
    break
  case 'June':
  case 'July':
  case 'August':
    answerEight = 'Summer'
    break
  case 'September':
  case 'October':
  case 'November':
    answerEight = 'Autumn'
    break
  case 'December':
  case 'January':
  case 'February':
    answerEight = 'Winter'
    break
  default: // Do Nothing
    break
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
