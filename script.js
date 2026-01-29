// ==============================
// OFA DRIVER SUPPORT - Login
// ==============================

// ★ ここがログインパスワード（変更済み）
const LOGIN_PASSWORD = "OFA/202602";

// ログイン保持キー
const LS_KEY = "ofa_driver_support_logged_in";

const loginView = document.getElementById("loginView");
const appView = document.getElementById("appView");
const passwordInput = document.getElementById("passwordInput");
const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");
const errorMsg = document.getElementById("errorMsg");

function showApp() {
  loginView.classList.add("hidden");
  appView.classList.remove("hidden");
}

function showLogin() {
  appView.classList.add("hidden");
  loginView.classList.remove("hidden");
  passwordInput.value = "";
  passwordInput.focus();
}

function setError(message) {
  errorMsg.textContent = message || "";
}

function normalizeInput(value) {
  // iPhoneで勝手に入る全角スペース等を潰す
  return (value || "").trim();
}

function handleLogin() {
  setError("");
  const input = normalizeInput(passwordInput.value);

  if (!input) {
    setError("パスコードを入力してください。");
    return;
  }

  if (input === LOGIN_PASSWORD) {
    localStorage.setItem(LS_KEY, "1");
    showApp();
  } else {
    setError("パスコードが違います。もう一度入力してください。");
  }
}

function handleLogout() {
  localStorage.removeItem(LS_KEY);
  showLogin();
}

// 初期表示（ログイン済みならメニュー表示）
(function init() {
  const loggedIn = localStorage.getItem(LS_KEY) === "1";
  if (loggedIn) showApp();
  else showLogin();

  loginBtn.addEventListener("click", handleLogin);
  logoutBtn.addEventListener("click", handleLogout);

  passwordInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") handleLogin();
  });
})();
