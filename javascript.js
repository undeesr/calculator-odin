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
