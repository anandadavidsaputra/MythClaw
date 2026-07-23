const TIER_COLORS = {
  SSR: "#FFC72C",
  SS: "#D93A3A",
  S: "#A242E6",
  A: "#3984E3",
  B: "#6BBF5F",
  C: "#888888",
  D: "#8B4513",
};

const GACHA_RATES = {
  SSR: 5,
  SS: 8,
  S: 12,
  A: 15,
  B: 18,
  C: 20,
  D: 22,
};

const gachaBtn = document.getElementById("gachaBtn");
const gacha10Btn = document.getElementById("gacha10Btn");
const clawContainer = document.querySelector(".claw-container");

const resultCard = document.getElementById("resultCard");
const cardImg = document.getElementById("cardImg");
const cardName = document.getElementById("cardName");
const cardDesc = document.getElementById("cardDesc");
const cardCulture = document.getElementById("cardCulture");
const cardTier = document.getElementById("cardTier");
const cardDecoration = document.querySelector(".card-decoration");

const multiResultCard = document.getElementById("multiResultCard");
const multiResultsContainer = document.getElementById("multiResultsContainer");

// Flag penanda apakah modal detail dibuka dari Spin 10x
let isFromMultiSpin = false;

function saveUnlock(name) {
  const savedProgress =
    JSON.parse(localStorage.getItem("mythClawProgress")) || {};
  savedProgress[name] = true;
  localStorage.setItem("mythClawProgress", JSON.stringify(savedProgress));
}

function getRandomCharacter() {
  const rand = Math.random() * 100;
  let cumulative = 0;
  let selectedTier = "D";

  for (const [tier, rate] of Object.entries(GACHA_RATES)) {
    cumulative += rate;
    if (rand <= cumulative) {
      selectedTier = tier;
      break;
    }
  }

  const possibleChars = characters.filter(
    (c) => c.tier.toUpperCase() === selectedTier,
  );
  if (possibleChars.length === 0)
    return characters[Math.floor(Math.random() * characters.length)];
  return possibleChars[Math.floor(Math.random() * possibleChars.length)];
}

function toggleButtons(disabled) {
  gachaBtn.disabled = disabled;
  gacha10Btn.disabled = disabled;
}

// FUNGSI CLOSING MODAL DETAIL
function closeDetailCard() {
  resultCard.classList.remove("show");
  // Jika tadi membukanya dari Spin 10x, kembalikan modal 10x
  if (isFromMultiSpin) {
    multiResultCard.classList.add("show");
  }
}

// Ganti handler event close pada modal detail
document
  .querySelectorAll("#resultCard .claim-btn, #resultCard .close-btn")
  .forEach((btn) => {
    btn.onclick = closeDetailCard;
  });

// --- SPIN 1x ---
gachaBtn.addEventListener("click", () => {
  if (!useTokens(1)) {
    alert("Token tidak cukup! Selesaikan Quest atau tunggu reset harian.");
    return;
  }

  isFromMultiSpin = false; // Reset flag
  toggleButtons(true);
  resultCard.classList.remove("show");
  clawContainer.style.top = "-200px";

  setTimeout(() => {
    const character = getRandomCharacter();
    const charColor =
      TIER_COLORS[character.tier.toUpperCase()] || TIER_COLORS.D;
    const savedProgress =
      JSON.parse(localStorage.getItem("mythClawProgress")) || {};

    if (!savedProgress[character.name]) {
      cardDecoration.textContent = "✨ NEW UNLOCK! ✨";
      cardDecoration.style.color = "#FFC72C";
      saveUnlock(character.name);
    } else {
      cardDecoration.textContent = "♻️ DUPLICATE ♻️";
      cardDecoration.style.color = "#4c4648";
    }

    cardImg.src = character.file;
    cardName.innerHTML = `<span style="color:${charColor};">${character.name.toUpperCase()}</span>`;
    cardDesc.textContent =
      character.description || "Prasasti ini telah terkikis waktu...";
    cardCulture.innerHTML = `ASAL: <span style="color:${charColor};">${character.culture.toUpperCase()}</span>`;
    cardTier.innerHTML = `TIER: <span style="color:${charColor};">${character.tier.toUpperCase()}</span>`;

    resultCard.style.border = `6px solid ${charColor}`;
    resultCard.style.boxShadow = `0 0 40px ${charColor}80, 0 0 20px rgba(0, 0, 0, 0.9)`;
    clawContainer.style.top = "-320px";

    setTimeout(() => {
      resultCard.classList.add("show");
      toggleButtons(false);
    }, 600);
  }, 1000);
});

// --- SPIN 10x ---
gacha10Btn.addEventListener("click", () => {
  if (!useTokens(10)) {
    alert("Token tidak cukup untuk 10x Spin! Butuh 10 Token.");
    return;
  }

  toggleButtons(true);
  multiResultCard.classList.remove("show");
  clawContainer.style.top = "-200px";

  setTimeout(() => {
    multiResultsContainer.innerHTML = "";

    for (let i = 0; i < 10; i++) {
      const character = getRandomCharacter();
      const charColor =
        TIER_COLORS[character.tier.toUpperCase()] || TIER_COLORS.D;
      saveUnlock(character.name);

      const miniCard = document.createElement("div");
      miniCard.className = "mini-card";
      miniCard.style.borderColor = charColor;
      miniCard.style.cursor = "pointer";

      miniCard.innerHTML = `
                <img src="${character.file}" alt="${character.name}">
                <p style="color:${charColor}; font-weight:bold;">${character.tier}</p>
                <p>${character.name}</p>
            `;

      miniCard.addEventListener("click", () => {
        isFromMultiSpin = true; // Tandai bahwa ini dibuka dari modal 10x
        multiResultCard.classList.remove("show");

        cardImg.src = character.file;
        cardName.innerHTML = `<span style="color:${charColor};">${character.name.toUpperCase()}</span>`;
        cardDesc.textContent =
          character.description || "Prasasti ini telah terkikis waktu...";
        cardCulture.innerHTML = `ASAL: <span style="color:${charColor};">${character.culture.toUpperCase()}</span>`;
        cardTier.innerHTML = `TIER: <span style="color:${charColor};">${character.tier.toUpperCase()}</span>`;
        cardDecoration.textContent = "🔍 DETAIL KARAKTER";
        cardDecoration.style.color = charColor;

        resultCard.style.border = `6px solid ${charColor}`;
        resultCard.style.boxShadow = `0 0 40px ${charColor}80, 0 0 20px rgba(0, 0, 0, 0.9)`;

        resultCard.classList.add("show");
      });

      multiResultsContainer.appendChild(miniCard);
    }

    clawContainer.style.top = "-320px";

    setTimeout(() => {
      multiResultCard.classList.add("show");
      toggleButtons(false);
    }, 600);
  }, 1000);
});
