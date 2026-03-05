const TIER_COLORS = {
    SSR: "#FFC72C",
    SS: "#D93A3A",
    S: "#A242E6",
    A: "#3984E3",
    B: "#6BBF5F",
    C: "#888888",
    D: "#8B4513",
};

// =========================================
// SETTING PERSENTASE (PROBABILITY)
// Total harus 100
// =========================================
const GACHA_RATES = {
    SSR: 5,   // 5% (Sesuai permintaan)
    SS: 8,    // 8%
    S: 12,    // 12%
    A: 15,    // 15%
    B: 18,    // 18%
    C: 20,    // 20%
    D: 22     // 22% (Total = 100%)
};

const gachaBtn = document.getElementById("gachaBtn");
const clawContainer = document.querySelector(".claw-container");
const resultCard = document.getElementById("resultCard");
const cardImg = document.getElementById("cardImg");
const cardName = document.getElementById("cardName");
const cardDesc = document.getElementById("cardDesc");
const cardCulture = document.getElementById("cardCulture");
const cardTier = document.getElementById("cardTier");
const cardDecoration = document.querySelector(".card-decoration");

function saveUnlock(name) {
    const savedProgress = JSON.parse(localStorage.getItem("mythicClawProgress")) || {};
    savedProgress[name] = true;
    localStorage.setItem("mythicClawProgress", JSON.stringify(savedProgress));
}

// FUNGSI INTI GACHA (Sesuai Persentase)
function getRandomCharacter() {
    const rand = Math.random() * 100;
    let cumulative = 0;
    let selectedTier = "D";

    // Cek dapet tier apa berdasarkan angka random
    for (const [tier, rate] of Object.entries(GACHA_RATES)) {
        cumulative += rate;
        if (rand <= cumulative) {
            selectedTier = tier;
            break;
        }
    }

    // Filter karakter yang sesuai dengan tier yang didapat
    const possibleChars = characters.filter(c => c.tier.toUpperCase() === selectedTier);
    
    // Jika tier tersebut kosong di data.js, ambil random dari semua karakter sebagai fallback
    if (possibleChars.length === 0) return characters[Math.floor(Math.random() * characters.length)];
    
    return possibleChars[Math.floor(Math.random() * possibleChars.length)];
}

gachaBtn.addEventListener("click", () => {
    gachaBtn.disabled = true;
    resultCard.classList.remove("show");

    // 1. ANIMASI CAPIT TURUN (Pendek sesuai request)
    // -200px artinya turun sedikit dari posisi awal -320px
    clawContainer.style.top = "-200px"; 

    setTimeout(() => {
        // 2. Pilih Karakter Berdasarkan Persentase
        const character = getRandomCharacter();
        const charColor = TIER_COLORS[character.tier.toUpperCase()] || TIER_COLORS.D;

        // 3. Update Status Unlocked & Notifikasi
        const savedProgress = JSON.parse(localStorage.getItem("mythicClawProgress")) || {};
        if (!savedProgress[character.name]) {
            cardDecoration.textContent = "✨ NEW UNLOCK! ✨";
            cardDecoration.style.color = "#FFC72C"; // Warna emas untuk baru
            saveUnlock(character.name);
        } else {
            cardDecoration.textContent = "♻️ DUPLICATE ♻️";
            cardDecoration.style.color = "#4c4648"; // Warna gelap untuk duplikat
        }

        // 4. Update Konten Kartu
        cardImg.src = character.file;
        cardName.innerHTML = `<span style="color:${charColor};">${character.name.toUpperCase()}</span>`;
        cardDesc.textContent = character.description || "Prasasti ini telah terkikis waktu...";
        cardCulture.innerHTML = `ASAL: <span style="color:${charColor};">${character.culture.toUpperCase()}</span>`;
        cardTier.innerHTML = `TIER: <span style="color:${charColor};">${character.tier.toUpperCase()}</span>`;

        // Style Visual Kartu
        resultCard.style.border = `6px solid ${charColor}`;
        resultCard.style.boxShadow = `0 0 40px ${charColor}80, 0 0 20px rgba(0, 0, 0, 0.9)`;
        resultCard.style.background = "#eaddca"; 

        // 5. CAPIT NAIK KEMBALI (Sembunyi total)
        clawContainer.style.top = "-320px";

        // 6. Tampilkan Kartu Hasil dengan sedikit delay agar capit naik dulu
        setTimeout(() => {
            resultCard.classList.add("show");
            gachaBtn.disabled = false;
        }, 600);
        
    }, 1000);
});
