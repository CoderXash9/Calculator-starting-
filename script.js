const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const themeToggle = document.getElementById("theme-toggle");
const clickSound = document.getElementById("click-sound");

// Load saved theme
if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light");
  themeToggle.setAttribute("aria-pressed", "true");
}

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    if (localStorage.getItem("sound") === "on") {
      clickSound.currentTime = 0;
      clickSound.play();
    }
    handleInput(btn.dataset.key);
  });
});

document.addEventListener("keydown", (e) => {
  const validKeys = "0123456789+-*/.=EnterBackspace";
  if (validKeys.includes(e.key)) {
    e.preventDefault();
    if (localStorage.getItem("sound") === "on") {
      clickSound.currentTime = 0;
      clickSound.play();
    }
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

  display.setAttribute("aria-label", `Display value is ${display.value}`);
}

// 🌗 Theme Toggle
themeToggle.addEventListener("click", () => {
  const isLight = document.body.classList.toggle("light");
  themeToggle.setAttribute("aria-pressed", isLight);
  localStorage.setItem("theme", isLight ? "light" : "dark");
});

// ⚙️ Settings Modal Logic
const openSettings = document.getElementById("open-settings");
const closeModal = document.getElementById("close-modal");
const modal = document.getElementById("settings-modal");
const soundToggle = document.getElementById("sound-toggle");
const fontSizeSelect = document.getElementById("font-size");
const resetBtn = document.getElementById("reset-preferences");

// Load preferences
if (localStorage.getItem("sound") === "on") soundToggle.checked = true;
if (localStorage.getItem("fontSize")) {
  document.body.style.fontSize = localStorage.getItem("fontSize");
  fontSizeSelect.value = localStorage.getItem("fontSizeLabel") || "medium";
}

// Open/close modal
openSettings.addEventListener("click", () => modal.classList.add("show"));
closeModal.addEventListener("click", () => modal.classList.remove("show"));
modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.classList.remove("show");
});

// Sound toggle
soundToggle.addEventListener("change", () => {
  localStorage.setItem("sound", soundToggle.checked ? "on" : "off");
});

// Font size
fontSizeSelect.addEventListener("change", () => {
  let size;
  switch (fontSizeSelect.value) {
    case "small": size = "14px"; break;
    case "medium": size = "16px"; break;
    case "large": size = "18px"; break;
  }
  document.body.style.fontSize = size;
  localStorage.setItem("fontSize", size);
  localStorage.setItem("fontSizeLabel", fontSizeSelect.value);
});

// Reset preferences
resetBtn.addEventListener("click", () => {
  localStorage.clear();
  document.body.style.fontSize = "16px";
  soundToggle.checked = false;
  fontSizeSelect.value = "medium";
  alert("Preferences reset successfully!");
});
