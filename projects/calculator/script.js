const resultDiv = document.querySelector("#result");
const operators = Array.from(document.querySelector("#operators").children);
const basicOperations = ["+", "-", "*", "/"];
const equal = document.querySelector("#equal");
let allNumRows = document.querySelectorAll(".row");
function showNumber(num) {
  resultDiv.textContent += num;
}
console.log(basicOperations);

allNumRows.forEach((parElem) => {
  let rowNums = parElem.querySelectorAll("div");
  rowNums.forEach((numButton) => {
    numButton.addEventListener("click", () => {
      if (resultDiv.textContent == "0" || resultDiv.textContent == "NaN")
        resultDiv.textContent = "";
      showNumber(numButton.textContent);
    });
  });
});
operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    if (resultDiv.textContent != "") {
      let currentInput = resultDiv.textContent;
      // Remove any pre-existing active operators
      operators.forEach((element) => {
        element.classList.remove("activeOperator");
      });
      // Add activeOperator status to the newly clicked operator
      operator.classList.add("activeOperator");
      // Add operator to result container
      if (
        basicOperations.includes(operator.textContent) &&
        !basicOperations.includes(currentInput[currentInput.length - 1])
      ) {
        resultDiv.textContent += operator.textContent;
      } else if (
        basicOperations.includes(currentInput[currentInput.length - 1]) &&
        operator.textContent != "="
      ) {
        currentInputArr = currentInput.split("");
        currentInputArr[currentInput.length - 1] = operator.textContent;
        resultDiv.textContent = currentInputArr.join("");
      }
    }
  });
});

function calculate() {
  equal.classList.remove("activeOperator");
  resultDiv.textContent = eval(resultDiv.textContent).toFixed(3);
}

function addDot() {
  let splitEquation = resultDiv.textContent.split(/[+\-*/]/);
  if (!splitEquation[splitEquation.length - 1].includes("."))
    resultDiv.textContent += ".";
}

function clearLog() {
  // Remove active operators

  operators.forEach((operator) => {
    operator.classList.remove("activeOperator");
  });
  resultDiv.textContent = "0";
}
