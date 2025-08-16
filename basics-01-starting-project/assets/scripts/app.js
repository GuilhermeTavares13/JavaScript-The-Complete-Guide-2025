const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserInput() {
   return Number(userInput.value);
}

function writeToLog(operation, prevResult, number, result) {

   const logEntry = {
      operation: operation,
      prevResult: prevResult,
      number: number,
      result: result
   };

   logEntries.push(logEntry); 
   console.log(logEntries);
}

function writeDescription(symbol,num) {
   const description = `${currentResult} ${symbol} ${num}`; 
   let prevResult = currentResult;

   if (
      symbol !== '+' &&
      symbol !== '-' &&
      symbol !== '*' &&
      symbol !== '/' ||
      !num
   ) {
 
      return;
   }

   switch (symbol) {
      case '+':
         currentResult += num;
         console.log('teste');
         break;
      case '-':
         currentResult -= num;
         break;
      case '*':
         currentResult *= num;
         break;
      case '/':
         currentResult /= num;
         break;
   }

   outputResult(currentResult, description);
   writeToLog(symbol, prevResult, num, currentResult);
}

function add() {
   writeDescription('+',getUserInput());
}

function subtract() {
   writeDescription('-',getUserInput());
}

function multiply() {
   writeDescription('*',getUserInput());
}

function divide() {
   writeDescription('/',getUserInput());
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click',subtract);
multiplyBtn.addEventListener('click',multiply);
divideBtn.addEventListener('click',divide);