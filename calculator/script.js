// No need to check for number validity because of gui system

function add(a,b) {
  return a + b;
}

function subtract(a,b) {
  return a - b;
}

function multiply(a,b) {
  return a * b;
}

function divide(a,b) {
  if(b !== 0) return a / b;
}

function isMathExpression(str) {
  // Define a regular expression to check the string against
  var pattern = /^[0-9+\-*/().\s]+$/;

  // Use the test method to check whether the string fits the pattern 
  return pattern.test(str);
}

calcInput = document.querySelector('#calc-input');
result = document.querySelector('#result');
function showResult() {
  if(isMathExpression(calcInput.value)) {
    result.textContent = eval(calcInput.value);
  } else {
    result.textContent = "NaN";
  }
}

