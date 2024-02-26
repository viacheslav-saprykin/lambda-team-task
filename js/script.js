// 1. Given by the task
let inputStringOne = 'abc'; // the condition for task 1
let inputStringTwo = 'abcd'; // the condition for task 1

// 2. Calculations
function externalFunction(isString) { // create a main function
  let result = []; // сreate a variable where we will add our result

  function generate(current, remaining, index) { // create a function
    if (index === remaining.length) { // check if we have gone through the entire line
      result.push(current); // add the current result to the array
      return; // for the function to work correctly, you need to return 
    }
    // Otherwise, we call generate for both variants: with a letter without a dot and with a letter with a dot, and increase the index.
    generate(current + remaining[index], remaining, index + 1);
    generate(current + remaining[index] + '.', remaining, index + 1);
  }

  generate(' ', isString, 0); // we call the generate function with the initial values: an empty string (''), a string to process (str), and the starting index (0).

  return result; // for the function to work correctly, you need to return reult
}

// 3. Result
let outputArrayOne = externalFunction(inputStringOne); // create a variable and call functions with the string from example #1;
document.write(` <br> <div class="result">Результат работы в console и выведен на страницу. <br> Если будет введено ${inputStringOne}, то результат будет - [${outputArrayOne}];</div> <br>`); // The result of example #1 is displayed directly on the page;
console.log(`Если будет введено ${inputStringOne}, то результат будет - [${outputArrayOne}];`); // For those who like Concole.log, the result of example #1 

let outputArrayTwo = externalFunction(inputStringTwo); // create a variable and call functions with the string from example #2;
document.write(`<div class="result">Если будет введено ${inputStringTwo}, то результат будет - [${outputArrayTwo}];</div>`); // The result of example #2 is displayed directly on the page;
console.log(`Если будет введено ${inputStringTwo}, то результат будет - [${outputArrayTwo}];`); // For those who like Concole.log, the result of example #2; 
