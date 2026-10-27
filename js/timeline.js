/* =========================================================
   WEDDING EVENTS TIMELINE
   Renders all 4 days of wedding celebrations dynamically
   from weddingData.events (js/config.js) and updates the
   gold progress line as the visitor scrolls.
   No hardcoded event data.
========================================================= */

(function () {
  "use strict";

  var timelineEl = document.getElementById("timeline");
  var timelineProgress = document.getElementById("timeline-progress");
  if (!timelineEl) return;

  function render() {
    timelineEl.innerHTML = '<div class="timeline-progress" id="timeline-progress"></div>';
    var progressEl = document.getElementById("timeline-progress");
    if (progressEl) timelineProgress = progressEl;

    var events = weddingData.events || [];
    events.forEach(function (ev, index) {
      var item = document.createElement("div");
      item.className = "tl-item reveal" + (ev.isMain ? " main-event" : "");

      // Day badge + date + time
      var dayBadge = ev.dayLabel ? '<span class="tl-badge">' + ev.dayLabel + '</span>' : '';
      var timeStr = ev.time ? ' &middot; ' + ev.time : '';
      var dateHtml = '<p class="tl-date">' + dayBadge + (dayBadge ? ' &middot; ' : '') + ev.date + timeStr + '</p>';

      // Title + Hindi subtitle
      var hindiHtml = ev.hindi ? '<span class="tl-hindi">' + ev.hindi + '</span>' : '';
      var titleHtml = '<h3 class="tl-title">' + ev.name + hindiHtml + '</h3>';

      // English description + Hindi description
      var descHtml = '<p class="tl-desc">' + (ev.description || '') + '</p>';
      if (ev.descHi) {
        descHtml += '<p class="tl-desc-hi">' + ev.descHi + '</p>';
      }

      // Attire / Dress code
      var dressHtml = '';
      if (ev.dress) {
        dressHtml = '<div class="tl-dress"><span class="tl-dress-label">Attire:</span> ' + ev.dress + '</div>';
      }

      // Location & Google Maps button
      var mapLink = ev.mapUrl || ev.mapsUrl;
      var placeHtml = '';
      if (ev.location) {
        placeHtml = '<p class="tl-place' + (ev.isMain ? ' venue-highlight' : '') + '">' + ev.location + '</p>';
      }
      if (mapLink) {
        placeHtml += '<div class="tl-map">' +
          '<a class="tl-map-btn btn" href="' + mapLink + '" target="_blank" rel="noopener noreferrer">' +
          '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right:6px;vertical-align:-1px"><path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z"/><circle cx="12" cy="9.5" r="2.5"/></svg>' +
          'View on Google Maps</a>' +
          '</div>';
      }

      item.innerHTML =
        '<span class="tl-index">' + String(index + 1).padStart(2, "0") + '</span>' +
        '<span class="tl-dot" aria-hidden="true"></span>' +
        '<div class="tl-content">' +
        dateHtml +
        titleHtml +
        descHtml +
        dressHtml +
        placeHtml +
        '</div>';

      timelineEl.appendChild(item);
    });
  }

  function updateProgress() {
    if (!timelineEl || !timelineProgress) return;
    var rect = timelineEl.getBoundingClientRect();
    var vh = window.innerHeight;
    var total = rect.height;
    var visible = vh * 0.75 - rect.top;
    var pct = Math.max(0, Math.min(1, visible / total));
    timelineProgress.style.height = pct * 100 + "%";
  }

  render();
  updateProgress();

  window.addEventListener("scroll", updateProgress, { passive: true });
  window.addEventListener("resize", updateProgress);

  window.__timelineRendered = true;
})();
