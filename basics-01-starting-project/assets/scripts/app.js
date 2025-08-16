const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserInput() {
   return Number(userInput.value);
}


function writeDescription(symbol,num1,num2) {
   const description = `${num1} ${symbol} ${num2}`; 

   switch (symbol) {
      case '+':
         currentResult += getUserInput();
         break;
      case '-':
         currentResult -= getUserInput();
         break;
      case '*':
         currentResult *= getUserInput();
         break;
      case '/':
         currentResult /= getUserInput();
         break;
   }
   outputResult(currentResult, description);
   logEntries.push(num2);
   console.log(logEntries);
}

function add() {
   writeDescription('+',currentResult,getUserInput());
}

function subtract() {
   writeDescription('-',currentResult,getUserInput());
}

function multiply() {
   writeDescription('*',currentResult,getUserInput());
}

function divide() {
   writeDescription('/',currentResult,getUserInput());
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click',subtract);
multiplyBtn.addEventListener('click',multiply);
divideBtn.addEventListener('click',divide);