# Mridul & Anjali — Wedding Invitation

A luxury, interactive digital wedding invitation site. No build steps, no external dependencies — 100% config-driven static files you can open locally or host on GitHub Pages for free.

---

## 📅 4 Days of Wedding Celebrations

All details are configured in `js/config.js` and `config.json`:
- **Day 1 (01 Dec)**: Haldi Ceremony · Harina Baghan Colony, Dhanbad
- **Day 2 (02 Dec)**: Mehandi & Sangeet Night · Harina Baghan Colony, Dhanbad
- **Day 3 (03 Dec)**: Shaadi & Phere (Wedding Ceremony) · Phusbunglow, Bhaga More, Dhanbad
- **Day 5 (05 Dec)**: Grand Wedding Reception · Dumra, Dhanbad

---

## 🛠️ Config-Driven Architecture

All content is decoupled from `index.html`. You only need to touch `js/config.js` (or `config.json`) to update:
- Names, blessings, mantras, dates, and locations
- 4 days of events, dates, times, Hindi subtitles, dress codes, and descriptions
- Venues, addresses, and individual Google Maps links
- Countdown timer target date and custom countdown note
- Cover screen text and closing blessings

### Folder Structure

```
wedding-invitation/
├── index.html                     ← Clean, config-driven HTML template
├── config.json                    ← Shared configuration data (JSON)
├── css/
│   └── style.css                  ← All visual styling, animations, fonts, and responsive layout
├── js/
│   ├── config.js                  ← ✏️ Central configuration file (all data lives here)
│   ├── render.js                  ← Dynamic render engine that populates page from config.js
│   ├── timeline.js                ← Renders the 4 days of wedding events dynamically
│   ├── venue.js                   ← Renders venue cards & Google Maps buttons dynamically
│   ├── countdown.js               ← Live countdown timer to the start of celebrations
│   ├── cover.js                   ← "Open Invitation" transition & entrance
│   ├── nav.js                     ← Floating navigation & scrollspy
│   ├── music.js                   ← Background music controller
│   ├── petals.js                  ← Ambient falling flower petals animation
│   └── reveal.js                  ← Smooth scroll-reveal animation
└── assets/
    ├── music/
    │   └── wedding.mp3            ← Background wedding music
    └── images/
        └── gallery/
            └── photo-1.jpg        ← Couple photo
```

---

## 🚀 Live Preview & Deployment

- **GitHub Repository**: [https://github.com/MridulME/wedding-invitation](https://github.com/MridulME/wedding-invitation)
- **Live GitHub Pages URL**: [https://mridulme.github.io/wedding-invitation/](https://mridulme.github.io/wedding-invitation/)
