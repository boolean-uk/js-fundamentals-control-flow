// Initialise the didPass variable with a boolean value
let didPass = false

// 1. Create a conditional statement that changes the answer variable to the string
// "Well done, you passed!" if didPass is true, or "Sorry, try again!" if didPass
// is false
let answer

// 2. When you're done and the test passes, changing didPass to the opposite boolean
// and run the test again to make sure it still passes
if (didPass === true) {
  answer = "Well done, you passed!"
} else if (didPass === false) {
  answer = "Sorry, try again!"
}

// Don't change the code below this line
module.exports = {
  didPass,
  answer
}
