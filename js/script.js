// Distribusi jumlah karakter per tier (total 100)
const TIER_COUNTS = {
  SSR: 5,
  SS: 8,
  S: 10,
  A: 12,
  B: 15,
  C: 20,
  D: 30,
};

const TIER_COLORS = {
  SSR: "#FFC72C",
  SS: "#D93A3A",
  S: "#A242E6",
  A: "#3984E3",
  B: "#6BBF5F",
  C: "#888888",
  D: "#8B4513",
};

// JavaScript ini opsional untuk efek gelombang dasar.
// Untuk animasi yang lebih kompleks, Anda bisa menggunakan library seperti Three.js.

// Contoh sederhana untuk mengubah warna gelombang secara dinamis (opsional)
document.addEventListener('DOMContentLoaded', () => {
    const waves = document.querySelectorAll('.wave');
    waves.forEach(wave => {
        wave.addEventListener('mouseover', () => {
            // Contoh: Mengubah warna saat mouse over
            wave.style.background = `linear-gradient(to top, rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.8), rgba(0, 0, 0, 0.8))`;
        });
        wave.addEventListener('mouseout', () => {
            // Kembali ke warna asli (atau warna lain)
            // Anda bisa menyimpan warna awal atau menggunakan kondisi nth-child seperti di CSS
            // Untuk kesederhanaan, ini akan mengembalikan ke gradien biru default yang sedikit berbeda
            const originalColor = `linear-gradient(to top, rgba(0, 100, 200, 0.8), rgba(0, 50, 100, 0.8))`;
            wave.style.background = originalColor;
        });
    });
});