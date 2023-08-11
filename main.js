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
const userHistory = document.querySelector("#history");

//total to store final result while history stores each individual action
let userValue = [];
let history = [];

// divide, add, subtract, or multiply
function addEval(eval) {
  // no input from the user means either we are starting with a sign (bad) or using 
  // previous answer (fine)
  if (userValue.length === 0) {
    if (history.length === 1) {
      userValue[0] = history[0];
      history.pop();
    }      
    else {
      return;
    }
  }
  
  let userValueNum = Number(userValue.join(""));
  history.push(userValueNum);
  
  if (history.length >= 3) {
    switch (history[1]) {
      case "+":
        total = history[0] + history[2];
        break;
  
      case "-":
        total = history[0] - history[2];
        break;
  
      case "x":
        total = history[0] * history[2];
        break;
  
      case "/":
        if (history[history.length - 1] === 0) {
          history = [];
          userOutput.value = [];
          userOutput.textContent = "ERROR | DIV BY 0";
          return;
        }
        total = history[0] / history[2];
        break;
    }
  
    history = [total];
    userOutput.textContent = total;
  }
  userHistory.textContent += userValueNum;
  userHistory.textContent += eval;
  history.push(eval);
  userValue = [];

}

function numEntry(num) {
  userValue.push(num);
  userOutput.textContent = Number(userValue.join(""));
}

allclear.addEventListener("click", () => {
  // clear everything
  history = [];
  userValue = [];
  userOutput.textContent = "0";
  userHistory.textContent = "";
});

clear.addEventListener("click", () => {
  // reset user value, but not history
  userValue = [0];
  userOutput.textContent = "0";

  // remove history as well if only number is stored
  if (history.length <= 1) {
    history = [];
  }
});

signChange.addEventListener("click", () => {
  if (userValue[0] ===  "-") {
    userValue.shift();
  }
  else {
    userValue.unshift("-");
  }
  userOutput.textContent = Number(userValue.join(""));
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
  numEntry(".");
});

equals.addEventListener("click", () => {
  let userValueNum = Number(userValue.join(""));
  let total;

  // There is no equation to compute so no change needed
  if (history.length < 2) {
    return;
  }

  history.push(userValueNum);

  // if history still contains last equation's answer remove
  if (history.length > 3) {
    history.shift();
  }

  // if user enters a eval and immediately equals the eval button is disregarded
  if (typeof history[history.length - 1] != "number") {
    userHistory.textContent = "";
    history.pop();
    return;
  }


  switch (history[1]) {
    case "+":
      total = history[0] + history[2];
      break;

    case "-":
      total = history[0] - history[2];
      break;

    case "x":
      total = history[0] * history[2];
      break;

    case "/":
      if (history[history.length - 1] === 0) {
        history = [];
        userOutput.value = [];
        userOutput.textContent = "ERROR | DIV BY 0";
        return;
      }
      total = history[0] / history[2];
      break;
  }

  userHistory.textContent = "";
  history = [total];
  userValue = []
  userOutput.textContent = total;
});

