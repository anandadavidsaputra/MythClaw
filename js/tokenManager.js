// Mengelola Token Harian & Poin
const INITIAL_DAILY_TOKENS = 10; // Jumlah token per hari

function getTodayString() {
  return new Date().toISOString().split("T")[0]; // Format YYYY-MM-DD
}

function initTokenSystem() {
  const today = getTodayString();
  const lastLogin = localStorage.getItem("lastLoginDate");
  let tokens = parseInt(localStorage.getItem("userTokens"));

  // Jika pertama kali atau pergantian hari -> Tambah token harian
  if (isNaN(tokens) || lastLogin !== today) {
    tokens = isNaN(tokens) ? INITIAL_DAILY_TOKENS : tokens + INITIAL_DAILY_TOKENS;
    localStorage.setItem("userTokens", tokens);
    localStorage.setItem("lastLoginDate", today);
  }
  updateTokenDisplay();
}

function getTokens() {
  return parseInt(localStorage.getItem("userTokens")) || 0;
}

function addTokens(amount) {
  const current = getTokens();
  const updated = current + amount;
  localStorage.setItem("userTokens", updated);
  updateTokenDisplay();
  return updated;
}

function useTokens(amount) {
  const current = getTokens();
  if (current < amount) return false;
  localStorage.setItem("userTokens", current - amount);
  updateTokenDisplay();
  return true;
}

function updateTokenDisplay() {
  const tokenDisplays = document.querySelectorAll(".token-count");
  const currentTokens = getTokens();
  tokenDisplays.forEach((el) => {
    el.textContent = currentTokens;
  });
}

document.addEventListener("DOMContentLoaded", initTokenSystem);