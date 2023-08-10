// ref to each button
const allclear = document.querySelector("#allclear");
const clear = document.querySelector("#clear");
const signChange = document.querySelector("#sign-change");
const divide = document.querySelector("#divide");
const nine = document.querySelector("#9");
const eight = document.querySelector("#8");
const seven = document.querySelector("#7");
const six = document.querySelector("#6");
const five = document.querySelector("#5");
const four = document.querySelector("#4");
const three = document.querySelector("#3");
const two = document.querySelector("#2");
const one = document.querySelector("#1");
const zero = document.querySelector("#0");
const add = document.querySelector("#add");
const subtract = document.querySelector("#subtract");
const multiply = document.querySelector("#multiply");
const decimal = document.querySelector("#devimal");
const equals = document.querySelector("#equals");

//total to store final result while history stores each individual action
let total = 0;
let userValue = 0;
let history = [0];

// divide, add, subtract, or multiply
function addEval(eval) {
  // if user enters eval sign twice in a row the subsequent entries should not do anything
  if (typeof history[history.length - 1] === "number") {
    history.push(eval);
  }

  if (history[history.length - 1] == ".") {
    // remove decimal since #.000 is same as #
    history.pop();
    history.push(eval);
  }
}

allclear.addEventListener("click", () => {
  // clear everything
  history = [0];
  total = 0;
  userValue = 0;
});

clear.addEventListener("click", () => {
  // reset user value, but not history
  userValue = 0;
});

signChange.addEventListener("click", () => {
  
});

divide.addEventListener("click", () => {
  addEval("÷");
});

nine.addEventListener("click", () => {
  
});

eight.addEventListener("click", () => {
  
});

seven.addEventListener("click", () => {
  
});

six.addEventListener("click", () => {
  
});

five.addEventListener("click", () => {
  
});

four.addEventListener("click", () => {
  
});

three.addEventListener("click", () => {
  
});

twh.addEventListener("click", () => {
  
});

one.addEventListener("click", () => {
  
});

zero.addEventListener("click", () => {
  
});

add.addEventListener("click", () => {
  addEval("+");
});

subtract.addEventListener("click", () => {
  addEval("-");
});

multiply.addEventListener("click", () => {
  addEval("x");
});

decimal.addEventListener("click", () => {
  
});

equals.addEventListener("click", () => {
  
});