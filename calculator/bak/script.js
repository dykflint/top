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

function getResultDiv(inputElement) {
  // Traverse the DOM to find the parent div of the input element
  const container = inputElement.closest('.calc-row');

  // Find the reuslt div within the container 
  if(container) {
    const resultDiv = container.querySelector('.result');
    return resultDiv;
  }
  
  return null; // No corresponding result div found
}

function isMathExpression(str) {
  // Define a regular expression to check the string against
  var pattern = /^[0-9+\-*/().\spi]+$/;

  // Use the test method to check whether the string fits the pattern 
  return pattern.test(str);
}

let calcInput = document.querySelectorAll('.calc-input');
function showResult(num) {
  let result = getResultDiv(calcInput[num]);
  console.log(Math.PI);
  // calcInput.textContent = calcInput.value.replace('pi', Math.PI);
  if(isMathExpression(calcInput[num].value)) {
    result.textContent = '= ' + eval(calcInput[num].value.replace('pi',Math.PI)).toFixed(5);
  } else if(!calcInput.value) {
    result.textContent = "";
  } else {
    result.textContent = "NaN";
  }
}

