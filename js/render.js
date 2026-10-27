/* =========================================================
   RENDER ENGINE — Config-driven page population
   Populates all text, meta tags, titles, and couple details
   dynamically from weddingData (js/config.js).
   No hardcoded values in HTML.
========================================================= */

(function () {
  "use strict";

  if (typeof weddingData === "undefined") return;

  function setText(id, text) {
    var el = document.getElementById(id);
    if (el && text !== undefined && text !== null) {
      el.textContent = text;
    }
  }

  function setHtml(id, html) {
    var el = document.getElementById(id);
    if (el && html !== undefined && html !== null) {
      el.innerHTML = html;
    }
  }

  // 1. Meta & Title
  if (weddingData.meta) {
    if (weddingData.meta.title) document.title = weddingData.meta.title;
    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && weddingData.meta.description) metaDesc.content = weddingData.meta.description;
    var ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle && (weddingData.meta.ogTitle || weddingData.meta.title)) {
      ogTitle.content = weddingData.meta.ogTitle || weddingData.meta.title;
    }
    var ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc && (weddingData.meta.ogDescription || weddingData.meta.description)) {
      ogDesc.content = weddingData.meta.ogDescription || weddingData.meta.description;
    }
    var twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle && (weddingData.meta.ogTitle || weddingData.meta.title)) {
      twTitle.content = weddingData.meta.ogTitle || weddingData.meta.title;
    }
    var twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc && (weddingData.meta.ogDescription || weddingData.meta.description)) {
      twDesc.content = weddingData.meta.ogDescription || weddingData.meta.description;
    }
  }

  // 2. Cover Screen
  setText("cover-blessing", (weddingData.cover && weddingData.cover.topBlessing) || weddingData.topBlessing || "");
  setText("cover-monogram", weddingData.monogram || "");
  setText("cover-eyebrow", (weddingData.cover && weddingData.cover.eyebrow) || "Shubh Vivah");
  setText("cover-groom", weddingData.groom || "Mridul");
  setText("cover-bride", weddingData.bride || "Anjali");
  setText("cover-sub", (weddingData.cover && weddingData.cover.sub) || "Together with our families");
  setText("cover-invite-line", (weddingData.cover && weddingData.cover.inviteLine) || "request the honour of your presence as they begin their forever");
  setText("cover-date", weddingData.dateFormatted || weddingData.dateDisplay || "");
  setText("cover-location", weddingData.location || "");
  if (weddingData.cover && weddingData.cover.openBtn) {
    setText("open-invitation-btn", weddingData.cover.openBtn);
  }

  // 3. Story Section
  if (weddingData.story) {
    setText("story-eyebrow", weddingData.story.eyebrow || "Our Story");
    setText("story-title", weddingData.story.title || "A Beautiful New Chapter");
    setText("story-text", weddingData.story.text || "");
    if (weddingData.story.textHi) {
      var elHi = document.getElementById("story-text-hi");
      if (elHi) {
        elHi.textContent = weddingData.story.textHi;
        elHi.style.display = "block";
      }
    }
    setText("story-names", weddingData.story.namesLine || ((weddingData.groom || "") + " & " + (weddingData.bride || "")));
  }

  // 4. Countdown Section
  setText("cd-eyebrow", "शुभ घड़ी · Counting Down To");
  setText("cd-title", "Our Celebrations");
  if (weddingData.countdownNote) {
    setText("countdown-note", weddingData.countdownNote);
  }

  // 5. Events Section Header
  setText("events-eyebrow", "कार्यक्रम · The Celebrations");
  setText("events-title", "Wedding Festivities");
  setText("events-intro", (weddingData.wedding && weddingData.wedding.eventsIntro) || (weddingData.story && weddingData.story.text) || "Four joyous days of colour, music, traditions and blessings. We would love for you to be there for every moment.");

  // 6. Ceremony Feature Section (Day 3: Shaadi & Phere)
  if (weddingData.ceremony) {
    setText("ceremony-eyebrow", weddingData.ceremony.eyebrow || "The Sacred Wedding Ceremony");
    setText("ceremony-date", weddingData.ceremony.date || "03");
    setText("ceremony-month", weddingData.ceremony.month || "December 2026");
    setText("ceremony-tagline", weddingData.ceremony.tagline || "the wedding of");
    setText("ceremony-couple", weddingData.ceremony.couple || ((weddingData.groom || "") + " & " + (weddingData.bride || "")));
    setText("ceremony-note", weddingData.ceremony.note || "");
  }

  // 7. Venue Section Header
  setText("venue-eyebrow", "विवाह स्थल · Join Us");
  setText("venue-place", weddingData.city || "Dhanbad");
  setText("venue-sub", weddingData.state || "Jharkhand, India");

  // 8. Closing Section
  if (weddingData.blessings) {
    setText("closing-blessing", weddingData.blessings.topBlessing || weddingData.topBlessing || "");
    setText("closing-mono", weddingData.monogram || "");
    setText("closing-text", weddingData.blessings.lead || "Your presence and blessings will make our celebration complete.");
    if (weddingData.blessings.leadHi) {
      setText("closing-text-hi", weddingData.blessings.leadHi);
    }
    setText("closing-credit", weddingData.blessings.closingCredit || ((weddingData.groom || "") + " & " + (weddingData.bride || "") + " · " + (weddingData.dateDisplay || "")));
  }

  // 9. Audio
  if (weddingData.music && weddingData.music.src) {
    var audioSrc = document.querySelector("#bg-audio source");
    if (audioSrc) audioSrc.src = weddingData.music.src;
  }
})();
