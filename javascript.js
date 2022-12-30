// cool gradient effect

const gradient = Array.from(document.querySelectorAll("#gradient"));

let counter = 0;

function animateGradient() {
  requestAnimationFrame(animateGradient);
  counter++;
  gradient.forEach((cell) => {
    cell.style.background = `linear-gradient(${
      counter % 360
    }deg, transparent, rgba(255, 255, 255,0.5), rgba(255, 255, 255,0.5), #d6d4d4, rgba(255, 255, 255,0.5), rgba(255, 255, 255,0.5), transparent)`;
  });
}

animateGradient();

// operate function

function operate(a, b, operator) {
  if (b === 0 && operator === "/") {
    return "lol";
  }
  let result = 0;

  switch (operator) {
    case "+":
      result = a + b;
      break;

    case "-":
      result = a - b;
      break;

    case "*":
      result = a * b;
      break;

    case "/":
      result = a / b;
      break;

    default:
      result = "CRITICAL ERROR DEHFERIUGH";
      break;
  }

  return result;
}

let displayValue = "";
const display = document.querySelector("#display");
const keys = Array.from(document.querySelectorAll(".key"));

function evaluateExpression() {
  let firstOperand = "";
  let operator = "";
  let secondOperand = "";

  keys.forEach((key) => key.addEventListener('click', e => {
    switch (e.target.textContent) {
        case '+':
        case '-':
        case '/':
        case '*':
            if (secondOperand == "") {
                operator = e.target.textContent;
                displayValue = operator;
            } else {
                firstOperand = `${operate(+firstOperand, +secondOperand, operator)}`;
                operator = e.target.textContent;
                secondOperand = '';
                displayValue = "";
                displayValue = firstOperand;
            }
            break;

        case '=':
            firstOperand = `${operate(+firstOperand, +secondOperand, operator)}`;
            secondOperand = "";
            operator = "";
            displayValue = firstOperand;
            console.table({firstOperand, secondOperand, operator});
            break;

        case '<-':

            if (firstOperand === displayValue && 
                secondOperand === displayValue) {
                    displayValue = displayValue.split("").reverse().splice(
                        displayValue.length - 1,
                        1
                    ).join("");
                    secondOperand = displayValue
                } else if (firstOperand === displayValue) {
                    displayValue = displayValue.split("").reverse().splice(
                        displayValue.length - 1,
                        1
                    ).join("");
                    firstOperand = displayValue;
                } else {
                    displayValue = displayValue.split("").reverse().splice(
                        displayValue.length - 1,
                        1
                    ).join("");
                    secondOperand = displayValue;
                }
            break;

            case 'C':
                firstOperand = "";
                secondOperand = "";
                operator = "";

                break;

            case '+/-':
                break;

        default:
            if (operator == "") {
            firstOperand += e.target.textContent;
            console.table({firstOperand, secondOperand, operator})
            displayValue = "";
            displayValue += firstOperand;
            } else {
                secondOperand += e.target.textContent;
                console.table({firstOperand, secondOperand, operator})
                displayValue = "";
                displayValue += secondOperand;
            }
            break;
    }
    display.textContent = displayValue;
  }))
}

evaluateExpression();