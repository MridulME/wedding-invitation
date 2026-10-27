/* =========================================================
   LIVE COUNTDOWN
   Counts down in real time to weddingData.weddingDateISO
   (configured in js/config.js). Automatically swaps to
   "The Celebrations Have Begun" once the festivities start.
   No hardcoded date values.
========================================================= */

(function () {
  "use strict";

  if (typeof weddingData === "undefined" || !weddingData.weddingDateISO) return;

  var targetDate = new Date(weddingData.weddingDateISO).getTime();

  var cdActive = document.getElementById("countdown-active");
  var cdArrived = document.getElementById("countdown-arrived");
  var elDays = document.getElementById("cd-days");
  var elHours = document.getElementById("cd-hours");
  var elMinutes = document.getElementById("cd-minutes");
  var elSeconds = document.getElementById("cd-seconds");
  var noteEl = document.getElementById("countdown-note");

  if (noteEl && weddingData.countdownNote) {
    noteEl.textContent = weddingData.countdownNote;
  }

  function pad(n) {
    return String(n).padStart(2, "0");
  }

  var timer;

  function update() {
    var diff = targetDate - Date.now();

    if (diff <= 0) {
      if (cdActive) cdActive.style.display = "none";
      if (cdArrived) {
        cdArrived.style.display = "block";
        cdArrived.classList.add("in-view");
      }
      clearInterval(timer);
      return;
    }

    var seconds = Math.floor(diff / 1000);
    var days = Math.floor(seconds / 86400);
    seconds -= days * 86400;
    var hours = Math.floor(seconds / 3600);
    seconds -= hours * 3600;
    var minutes = Math.floor(seconds / 60);
    seconds -= minutes * 60;

    if (elDays) elDays.textContent = pad(days);
    if (elHours) elHours.textContent = pad(hours);
    if (elMinutes) elMinutes.textContent = pad(minutes);
    if (elSeconds) elSeconds.textContent = pad(seconds);
  }

  update();
  timer = setInterval(update, 1000);
})();
