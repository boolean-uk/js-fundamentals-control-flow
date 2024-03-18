// 1. Use conditional statements to set answerOne to true if STR_ONE is 'Hello'

let answerOne = true;
const STR_ONE = 'Hello' 
if(STR_ONE == 'Hello'){
const answerOne = true;
console.log(answerOne);
}
// 2. Use conditional statements to set answerTwo to true if STR_TWO is not 'Hello'
const STR_TWO = 'Goodbye'

let answerTwo = true;
if(STR_TWO !== 'Hello'){
  const answerTwo = true;
  console.log(answerTwo);
}

// 3. Use conditional statements to set answerThree to true if STR_THREE is
// longer than STR_FOUR
const STR_THREE = 'Hello';
const STR_FOUR = 'World';

let answerThree = false; 
if (STR_THREE.length < STR_FOUR.length) {
  answerThree = false; 
}
else 
answerThree = true;
console.log(answerThree);

// 4. Use conditional statements to set answerFour to true
// if STR_FIVE starts and ends with the same character, regardless of case

const STR_FIVE = 'Alexandra' 
const STR_SIX = 'Joanna';
let answerFour = true;
if(STR_FIVE.charAt(0) === STR_SIX.charAt(STR_FIVE.length - 1)){

  const answerFour = true;
  console.log(answerFour);
}
// 5. Conditional statement for STR_SIX
 
let answerFive; 
const strSixLowercase = STR_SIX.toLowerCase(); 
if (strSixLowercase.charAt(0) === strSixLowercase.charAt(STR_SIX.length - 1)) {
  answerFive = true;
} else {
  answerFive = false;
}

// 6. Conditional statement for STR_SEVEN
const STR_SEVEN = 'Kayla'; 
let answerSix; 
if (STR_SEVEN.length % 2 !== 0) {
  answerSix = STR_SEVEN.charAt(Math.floor(STR_SEVEN.length / 2));
}

// 7. Conditional statement for STR_EIGHT
const STR_EIGHT = 'Alex'; 
let answerSeven; 
if (STR_EIGHT.length % 2 === 0) {
  answerSeven = STR_EIGHT.substr(STR_EIGHT.length / 2 - 1, 2);
}

// 8. Conditional statement for determining the season based on MONTH
const MONTH = 'January'; 
let answerEight; 
if (['March', 'April', 'May'].includes(MONTH)) {
  answerEight = 'Spring';
} else if (['June', 'July', 'August'].includes(MONTH)) {
  answerEight = 'Summer';
} else if (['September', 'October', 'November'].includes(MONTH)) {
  answerEight = 'Autumn';
} else if (['December', 'January', 'February'].includes(MONTH)) {
  answerEight = 'Winter';
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
};
