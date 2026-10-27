/* =========================================================
   VENUE SECTION
   Renders all celebration venues dynamically from
   weddingData.venues (or weddingData.venue) in js/config.js.
   Includes address and direct Google Maps buttons.
   No hardcoded venue details.
========================================================= */

(function () {
  "use strict";

  if (typeof weddingData === "undefined") return;

  var placeEl = document.getElementById("venue-place");
  if (placeEl) placeEl.textContent = weddingData.city || "Dhanbad";

  var subEl = document.getElementById("venue-sub");
  if (subEl) subEl.textContent = weddingData.state || "Jharkhand, India";

  var container = document.getElementById("venue-cards-container");
  if (!container) return;

  container.innerHTML = "";

  var venues = weddingData.venues;
  if (!venues || !venues.length) {
    if (weddingData.venue) {
      venues = [weddingData.venue];
    } else {
      venues = [];
    }
  }

  venues.forEach(function (v) {
    if (!v) return;
    var card = document.createElement("div");
    card.className = "venue-card reveal" + (v.isMain ? " main-venue" : "");

    var badgeHtml = v.badge ? '<span class="venue-badge">' + v.badge + '</span>' : '';
    var nameHtml = '<p class="venue-name">' + (v.name || "Wedding Venue") + '</p>';
    var addrHtml = '<p class="venue-address">' + (v.address || "").replace(/\n/g, '<br/>') + '</p>';

    var mapsHtml = '';
    var mapsUrl = v.mapsUrl || v.mapUrl;
    if (mapsUrl) {
      mapsHtml = '<div class="venue-maps-btn">' +
        '<a href="' + mapsUrl + '" class="btn" target="_blank" rel="noopener noreferrer">' +
        '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right:6px;vertical-align:-2px"><path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z"/><circle cx="12" cy="9.5" r="2.5"/></svg>' +
        'View on Google Maps</a>' +
        '</div>';
    } else {
      mapsHtml = '<p class="venue-hint">' + (v.hint || 'Full venue address to be shared closer to the date') + '</p>';
    }

    card.innerHTML = badgeHtml + nameHtml + addrHtml + mapsHtml;
    container.appendChild(card);
  });
})();
