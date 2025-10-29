:root {
  --bg: #0d1117;
  --text: #ffffff;
  --btn-bg: #161b22;
  --accent: #58a6ff;
}

body.light {
  --bg: #f7f7f7;
  --text: #222;
  --btn-bg: #ffffff;
  --accent: #0066ff;
}

body {
  background: var(--bg);
  color: var(--text);
  font-family: 'Poppins', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  transition: background 0.5s ease, color 0.5s ease;
}

.top-bar {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  position: relative;
}

h1 {
  font-size: 1.8rem;
}

/* 🌗 Animated Theme Toggle */
.theme-toggle {
  position: relative;
  width: 60px;
  height: 30px;
  border-radius: 30px;
  background: var(--btn-bg);
  border: 2px solid var(--accent);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 6px;
  overflow: hidden;
  transition: background 0.4s ease, border-color 0.4s ease;
}

.toggle-thumb {
  position: absolute;
  top: 3px;
  left: 3px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: var(--accent);
  transition: transform 0.4s ease;
  z-index: 1;
}

.toggle-icon {
  font-size: 1.1rem;
  z-index: 2;
  transition: opacity 0.3s ease;
}

.theme-toggle .sun { opacity: 1; color: #fcd440; }
.theme-toggle .moon { opacity: 0; color: #00bfff; }

body.light .theme-toggle .toggle-thumb {
  transform: translateX(30px);
}

body.light .theme-toggle .sun { opacity: 0; }
body.light .theme-toggle .moon { opacity: 1; }

/* 🧮 Calculator Layout */
.calculator {
  background: var(--btn-bg);
  padding: 1.5rem;
  border-radius: 20px;
  box-shadow: 0 0 25px rgba(0,0,0,0.3);
  width: 300px;
  margin-top: 2rem;
}

#display {
  width: 100%;
  font-size: 2rem;
  text-align: right;
  border: none;
  padding: 1rem;
  border-radius: 10px;
  margin-bottom: 1rem;
  color: var(--text);
  background: var(--bg);
}

.buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.8rem;
}

.btn {
  padding: 1rem;
  border: none;
  border-radius: 10px;
  font-size: 1.2rem;
  cursor: pointer;
  background: var(--accent);
  color: var(--bg);
  transition: transform 0.1s ease, opacity 0.3s ease, box-shadow 0.2s ease;
}

.btn:hover { transform: scale(1.05); box-shadow: 0 0 10px var(--accent); }
.btn:active { transform: scale(0.95); }
.zero { grid-column: span 2; }
.equal { background: #28a745; }

/* ⚙️ Settings Button */
.open-settings {
  background: var(--btn-bg);
  border: 2px solid var(--accent);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.open-settings:hover { transform: rotate(30deg); }

/* ⚙️ Modal Styles */
.modal {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal.show { display: flex; }

.modal-content {
  background: var(--bg);
  color: var(--text);
  border-radius: 20px;
  padding: 2rem;
  width: 300px;
  text-align: left;
  box-shadow: 0 0 20px rgba(0,0,0,0.3);
  animation: slideDown 0.4s ease forwards;
}

@keyframes slideDown {
  from { transform: translateY(-30px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

.setting-option {
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
}

.setting-option select {
  margin-top: 0.5rem;
  padding: 0.4rem;
  border-radius: 8px;
  border: 1px solid var(--accent);
  background: var(--btn-bg);
  color: var(--text);
}

.reset-btn, .close-btn {
  background: var(--accent);
  color: var(--bg);
  border: none;
  padding: 0.6rem 1rem;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 1rem;
  transition: opacity 0.3s ease;
}

.reset-btn:hover, .close-btn:hover { opacity: 0.8; }
