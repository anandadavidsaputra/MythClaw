const today = getTodayString();

      // Q1: Check-in
      function claimQ1() {
        addTokens(5);
        localStorage.setItem("q1_" + today, "true");
        document.getElementById("q1").disabled = true;
        document.getElementById("q1").textContent = "SELESAI";
      }

      // Q2: Makan
      function claimQ2() {
        addTokens(5);
        localStorage.setItem("q2_" + today, "true");
        document.getElementById("q2").disabled = true;
        document.getElementById("q2").textContent = "SELESAI";
      }

      // Q3: Minum Air (5 Gelas)
      function claimQ3() {
        let cnt = parseInt(localStorage.getItem("q3_cnt_" + today)) || 0;
        if (cnt < 5) {
          cnt++;
          addTokens(1);
          localStorage.setItem("q3_cnt_" + today, cnt);
          document.getElementById("waterCount").textContent = cnt;
          if (cnt >= 5) {
            document.getElementById("q3").disabled = true;
            document.getElementById("q3").textContent = "SELESAI";
          }
        }
      }

      // Q4: Peregangan (Timer 10s)
      function startQ4() {
        let sec = 10;
        const btn = document.getElementById("q4");
        btn.disabled = true;
        const timer = setInterval(() => {
          if (document.hidden) {
            alert("Jangan ganti tab!");
          } else {
            sec--;
            document.getElementById("stretchTimer").textContent = sec + "s";
            if (sec <= 0) {
              clearInterval(timer);
              addTokens(5);
              localStorage.setItem("q4_" + today, "true");
              btn.textContent = "SELESAI";
            }
          }
        }, 1000);
      }

      // Q5: Target
      function checkQ5() {
        const txt = document.getElementById("inputQ5").value.trim();
        const count = txt ? txt.split(/\s+/).length : 0;
        if (!localStorage.getItem("q5_" + today)) {
          document.getElementById("q5").disabled = count < 3;
        }
      }
      function claimQ5() {
        addTokens(5);
        localStorage.setItem("q5_" + today, "true");
        document.getElementById("q5").disabled = true;
        document.getElementById("q5").textContent = "SELESAI";
      }

      // Q6: Istirahat Layar (Timer 15s)
      function startQ6() {
        let sec = 15;
        const btn = document.getElementById("q6");
        btn.disabled = true;
        const timer = setInterval(() => {
          if (document.hidden) {
            alert("Jangan ganti tab!");
          } else {
            sec--;
            document.getElementById("eyeTimer").textContent = sec + "s";
            if (sec <= 0) {
              clearInterval(timer);
              addTokens(5);
              localStorage.setItem("q6_" + today, "true");
              btn.textContent = "SELESAI";
            }
          }
        }, 1000);
      }

      // Q7: Refleksi Positif
      function claimQ7() {
        addTokens(5);
        localStorage.setItem("q7_" + today, "true");
        document.getElementById("q7").disabled = true;
        document.getElementById("q7").textContent = "SELESAI";
      }

      // Q8: Rapikan Meja
      function claimQ8() {
        addTokens(5);
        localStorage.setItem("q8_" + today, "true");
        document.getElementById("q8").disabled = true;
        document.getElementById("q8").textContent = "SELESAI";
      }

      // Q9: Tarik Napas (Timer 8s)
      function startQ9() {
        let sec = 8;
        const btn = document.getElementById("q9");
        btn.disabled = true;
        const timer = setInterval(() => {
          if (document.hidden) {
            alert("Jangan ganti tab!");
          } else {
            sec--;
            document.getElementById("breathTimer").textContent = sec + "s";
            if (sec <= 0) {
              clearInterval(timer);
              addTokens(5);
              localStorage.setItem("q9_" + today, "true");
              btn.textContent = "SELESAI";
            }
          }
        }, 1000);
      }

      // Q10: Catatan Kebaikan
      function checkQ10() {
        const txt = document.getElementById("inputQ10").value.trim();
        const count = txt ? txt.split(/\s+/).length : 0;
        if (!localStorage.getItem("q10_" + today)) {
          document.getElementById("q10").disabled = count < 3;
        }
      }
      function claimQ10() {
        addTokens(5);
        localStorage.setItem("q10_" + today, "true");
        document.getElementById("q10").disabled = true;
        document.getElementById("q10").textContent = "SELESAI";
      }

      // Load Status saat halaman dibuka
      document.addEventListener("DOMContentLoaded", () => {
        if (localStorage.getItem("q1_" + today)) {
          document.getElementById("q1").disabled = true;
          document.getElementById("q1").textContent = "SELESAI";
        }
        if (localStorage.getItem("q2_" + today)) {
          document.getElementById("q2").disabled = true;
          document.getElementById("q2").textContent = "SELESAI";
        }

        const wCnt = parseInt(localStorage.getItem("q3_cnt_" + today)) || 0;
        document.getElementById("waterCount").textContent = wCnt;
        if (wCnt >= 5) {
          document.getElementById("q3").disabled = true;
          document.getElementById("q3").textContent = "SELESAI";
        }

        if (localStorage.getItem("q4_" + today)) {
          document.getElementById("q4").disabled = true;
          document.getElementById("q4").textContent = "SELESAI";
        }
        if (localStorage.getItem("q5_" + today)) {
          document.getElementById("q5").disabled = true;
          document.getElementById("q5").textContent = "SELESAI";
        }
        if (localStorage.getItem("q6_" + today)) {
          document.getElementById("q6").disabled = true;
          document.getElementById("q6").textContent = "SELESAI";
        }
        if (localStorage.getItem("q7_" + today)) {
          document.getElementById("q7").disabled = true;
          document.getElementById("q7").textContent = "SELESAI";
        }
        if (localStorage.getItem("q8_" + today)) {
          document.getElementById("q8").disabled = true;
          document.getElementById("q8").textContent = "SELESAI";
        }
        if (localStorage.getItem("q9_" + today)) {
          document.getElementById("q9").disabled = true;
          document.getElementById("q9").textContent = "SELESAI";
        }
        if (localStorage.getItem("q10_" + today)) {
          document.getElementById("q10").disabled = true;
          document.getElementById("q10").textContent = "SELESAI";
        }
      });