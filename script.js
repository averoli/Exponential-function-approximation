//! 1. A program that given and would approximate e**x:
// I re-writte serie as:
// e**x = 1 + (x/1)(1 + (x/2)(1 + (x/3)...))

let sum = 1;

function exponential(x, n) {
  for (i = n; i > 0; i--) {
    sum = 1 + (x * sum) / i;
    sum.toString();
  }
  return sum;
}

//! 2. What should be the value of in order to approximate up to 9 decimals?
function calculateN(x, numberDecimals) {
  const exactValue = Math.pow(Math.E, x); // 2.718281828;
  const minError = Math.pow(10, -numberDecimals); // min error is equal to .000000001
  const maxIterations = 1000;
  for (let i = 0; i <= maxIterations; i++) {
    let aproximatedValue = exponential(x, i);
    if (exactValue - aproximatedValue < minError) {
      return i;
    }
  }
  return "Max iterations should be increased.";
}

console.log("Value of n should be", calculateN(1, 9));
