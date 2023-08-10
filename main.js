// ref to each button
const allclear = document.querySelector("#allclear");
const clear = document.querySelector("#clear");
const signChange = document.querySelector("#sign-change");
const divide = document.querySelector("#divide");
const nine = document.querySelector("#nine");
const eight = document.querySelector("#eight");
const seven = document.querySelector("#seven");
const six = document.querySelector("#six");
const five = document.querySelector("#five");
const four = document.querySelector("#four");
const three = document.querySelector("#three");
const two = document.querySelector("#two");
const one = document.querySelector("#one");
const zero = document.querySelector("#zero");
const add = document.querySelector("#add");
const subtract = document.querySelector("#subtract");
const multiply = document.querySelector("#multiply");
const decimal = document.querySelector("#decimal");
const equals = document.querySelector("#equals");
const userOutput = document.querySelector("#user-value");

//total to store final result while history stores each individual action
let total = 0;
let userValue = [0];
let history = [];

// divide, add, subtract, or multiply
function addEval(eval) {
  // if user enters eval sign twice in a row the subsequent entries should not do anything
  if (typeof history[history.length - 1] === "number") {
    history.push(eval);
    let userValueNum = Number(userValue.join(""));
    switch (eval) {
      case "+":
        total = total + userValueNum;

      case "-":
        total = total - userValueNum;

      case "x":
        total = total * userValueNum;

      case "/":
        total = total / userValueNum;

      case "=":
        history = [];
    }
    
    userValue = [total];
    userOutput.textContent = Number(userValue.join(""));
  }
}

function numEntry(num) {
  userValue.push(num);
  userOutput.textContent = Number(userValue.join(""));
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
  userValue = -userValue;
});

divide.addEventListener("click", () => {
  addEval("/");
});

nine.addEventListener("click", () => {
  numEntry("9");
});

eight.addEventListener("click", () => {
  numEntry("8");
});

seven.addEventListener("click", () => {
  numEntry("7");
});

six.addEventListener("click", () => {
  numEntry("6");
});

five.addEventListener("click", () => {
  numEntry("5");
});

four.addEventListener("click", () => {
  numEntry("4");
});

three.addEventListener("click", () => {
  numEntry("3");
});

two.addEventListener("click", () => {
  numEntry("2");
});

one.addEventListener("click", () => {
  numEntry("1");
});

zero.addEventListener("click", () => {
  numEntry("0");
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
  addEval(".");
});

equals.addEventListener("click", () => {
  addEval("=");
});

