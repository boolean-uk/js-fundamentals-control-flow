// Initialise the didPass variable with a boolean value
let didPass = false;

// 1. Create a conditional statement that changes the answer variable to the string
// "Well done, you passed!" if didPass is true, or "Sorry, try again!" if didPass
// is false


const correct = "Well done, You passed!";
const incorrect = "Sorry, try again";
answer = "Sorry, try again!";
if(didPass !== true)  {
const answer = incorrect; 
console.log(answer); 
}
else {
const answer = correct;
console.log(answer);
}

// 2. When you're done and the test passes, changing didPass to the opposite boolean
// and run the test again to make sure it still passes

// Don't change the code below this line
module.exports = {
  didPass,
  answer
}
