// 1. Use conditional statements to set answerOne to true if STR_ONE is 'Hello'

let answerOne = true;
const STR_ONE = 'Hello' // eslint-disable-line no-unused-vars
if(STR_ONE == 'Hello'){
const answerOne = true;
console.log(answerOne);
}
// 2. Use conditional statements to set answerTwo to true if STR_TWO is not 'Hello'
const STR_TWO = 'Goodbye' // eslint-disable-line no-unused-vars

let answerTwo = true;
if(STR_TWO !== 'Hello'){
  const answerTwo = true;
  console.log(answerTwo);
}

// 3. Use conditional statements to set answerThree to true if STR_THREE is
// longer than STR_FOUR
const STR_THREE = 'Hello' // eslint-disable-line no-unused-vars
const STR_FOUR = 'Good' // eslint-disable-line no-unused-vars

let answerThree = true;
if(STR_THREE > STR_FOUR.length){
  const answerThree = true;
  console.log(answerThree);
}

// 4. Use conditional statements to set answerFour to true
// if STR_FIVE starts and ends with the same character, regardless of case

const STR_FIVE = 'Alexandra' // eslint-disable-line no-unused-vars

let answerFour = true;
if(STR_FIVE.charAt(0) === STR_SIX.charAt(STR_FIVE.length - 1)){

  const answerFour = true;
  console.log(answerFour);
}

// 5. Use conditional statements to set answerFive to true
// if STR_SIX starts and ends with the same character, regardless of case

const STR_SIX = 'Joanna' // eslint-disable-line no-unused-vars

let answerFive = true; 
if(STR_SIX.charAt(0) === strLowercase.charAt(STR_SIX.length - 1)){

  const answerFive = true;
  console.log(answerFive);
}
/*
// 6. Use conditional statements to set answerSix to the middle character of STR_SEVEN
// if STR_SEVEN has an odd number of characters
const STR_SEVEN = 'Kayla' // eslint-disable-line no-unused-vars

let answerSix = 

// 7. Use conditional statements to set answerSeven to the middle two characters of
// STR_EIGHT if STR_EIGHT has an even number of characters
const STR_EIGHT = 'Alex' // eslint-disable-line no-unused-vars

let answerSeven

// 8. Set answerEight to the appropriate season based on what MONTH is set to
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
*/
