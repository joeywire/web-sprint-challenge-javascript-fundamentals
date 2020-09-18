// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 
/*
nestedFunction can access the varible `internal` becasue the exist in the same lexical scope. In this case the lexical scope I'm referring to is everything with myFunction's {}. 

The closure is created when we declare nestedFunction in our lexical environment, now when we initalize myFunction and subsequently initiate nestedFunction - nestedFunction has access to all the data in myFunctions lexical environment, including any variables. But this only works in to out, myfunciton can not reach into nested function - its 'enclosed'.
*/

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function summation(param){
  let count = 0;
  for(let i = param; i > 0; i--) {
    count += i;
  }
  return count;
}

console.log(summation(4));