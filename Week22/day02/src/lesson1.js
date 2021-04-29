// Create a function which adds two numbers
// The same function should return null when no inputs are passed
// This is what the simple code would look like with no robustness
    // const addTwoNumbers = (num1, num2) => {
        //     return num1 + num2
    // };
    // addTwoNumbers(4,5)

// TDD - Test driven development
// Start by building bolier plate code to test
// Stage 1

        // const addTwoNumbers = () => {
        //     return null
        // };



// Stage 2 - Make code mor erobust to cover second test
        // const addTwoNumbers = (number1, number2) => {
        //  if (number1 && number2) {
        //       return number1 + number2;
        //     }
        //     return null;
        //   };
  
// Stage 3 - more robustness built in
const addTwoNumbers = (number1, number2) => {
    if (typeof number1 !== "number" || typeof number2 !== "number") {
      return null;
    } else if (number1 && number2) {
      return number1 + number2;
    }
    return null;
}


module.exports = addTwoNumbers;