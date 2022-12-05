//! 1. A program that given and would approximate e**x:
// I re-writte serie as:
// e**x = 1 + (x/1)(1 + (x/2)(1 + (x/3)...))

let sum = 1;

function exponential(x, n) {
  for (i = n; i > 0; i--) {
    sum = 1 + (x * sum) / i;
  }
  return sum.toFixed(9);
}


//! 2. What should be the value of in order to approximate up to 9 decimals?
function calculateN() {
  const exactValue = 2.718281828;
  const maxIterations = 1000;
  for (let i = 0; i <= maxIterations; i++) {
    let aproximatedValue = exponential(1, i);
    if (exactValue - aproximatedValue === 0) {
      return i;
    }
  }
  return "Max iterations should be increased.";
}

console.log("Value of n should be", calculateN());
