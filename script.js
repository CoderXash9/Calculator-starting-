const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {
  btn.addEventListener("click", () => handleInput(btn.dataset.key));
});

document.addEventListener("keydown", (e) => {
  const validKeys = "0123456789+-*/.=EnterBackspace";
  if (validKeys.includes(e.key)) {
    e.preventDefault();
    if (e.key === "Enter") handleInput("=");
    else if (e.key === "Backspace") handleInput("DEL");
    else handleInput(e.key);
  }
});

function handleInput(key) {
  let current = display.value;

  switch (key) {
    case "C":
      display.value = "0";
      break;
    case "DEL":
      display.value = current.length > 1 ? current.slice(0, -1) : "0";
      break;
    case "=":
      try {
        display.value = eval(current) || "0";
      } catch {
        display.value = "Error";
      }
      break;
    default:
      display.value = current === "0" ? key : current + key;
  }

  // Announce the update for screen readers
  display.setAttribute("aria-label", `Display value is ${display.value}`);
}
