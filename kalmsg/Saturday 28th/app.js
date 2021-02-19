// We'll store all the numbers and operators entered in this manner eg. [6, '+', 5, '-', 4]
let formula = [];
// Calculate from formula array.
const calculateTotalFormula = (formulaArray) => {
  let total = 0;
  let currentOperator = null;
  formulaArray.forEach((element, index) => {
    // The first iteration where we assume it will always be a number. No calculation required in first iteration.
    // Just assign the 1st number in array to the total variable.
    if (index === 0 && typeof element === 'number' && total === 0) {
      total = element;
    }
    // Safe to assume that string is the operator.
    // We store the operator in currentOperator for the next number to use it for Calculation.
    if (typeof element === 'string') {
      currentOperator = element;
    }
    // Calculation. If element is a number (using typeof check with variable)
    if (typeof element === 'number' && index > 0) {
      if (currentOperator === '+') {
        total = total + element;
      } else if (currentOperator === '-') {
        total = total - element;
      } else if (currentOperator === '*') {
        total = total * element;
      } else if (currentOperator === '/') {
        total = total / element;
      }
    }
  })
}