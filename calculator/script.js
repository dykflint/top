const resultDiv = document.querySelector('#result');
const operators = Array.from(document.querySelector('#operators').children);
const basicOperations = ['+','-','*','/'];
let allNumRows = document.querySelectorAll('.row');

function showNumber(num) {
  resultDiv.textContent += num;
}
console.log(basicOperations);

allNumRows.forEach(parElem => {
  let rowNums = parElem.querySelectorAll('div');
  rowNums.forEach(numButton => {
    numButton.addEventListener('click', () => {
      showNumber(numButton.textContent);
    })
  })
})
operators.forEach(operator => {
  operator.addEventListener('click', () => {
    let currentInput = resultDiv.textContent;
    // Remove any pre-existing active operators
    operators.forEach((element) => {
      element.classList.remove('activeOperator');
    })
    // Add activeOperator status to the newly clicked operator
    operator.classList.add('activeOperator');
    // Add operator to result container
    if(basicOperations.includes(operator.textContent) 
      && !basicOperations.includes(currentInput[currentInput.length - 1])) {
      resultDiv.textContent += operator.textContent;
    } else if (basicOperations.includes(currentInput[currentInput.length - 1])) {
      currentInputArr = currentInput.split('');
      currentInputArr[currentInput.length - 1] = operator.textContent;
      resultDiv.textContent = currentInputArr.join('');
    }
  })
})

function calculate() {
  resultDiv.textContent = eval(resultDiv.textContent);
}

function clear() {
  resultDiv.textContent = '';
}
