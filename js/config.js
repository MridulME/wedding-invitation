/* =========================================================
   WEDDING DATA — CONFIG-DRIVEN INVITATION
   All names, dates, events, venues, descriptions, mantras,
   and maps links are configured here.
   Nothing is hardcoded in the HTML.
========================================================= */

var weddingData = {
  meta: {
    title: "Mridul & Anjali · Shubh Vivah",
    description: "You are invited to the wedding celebrations of Mridul Raj & Anjali Singh · 1–5 December 2026 · Dhanbad, Jharkhand",
    ogTitle: "Mridul & Anjali · Shubh Vivah",
    ogDescription: "Haldi, Mehandi, Shaadi & Reception · 1–5 December 2026 · Dhanbad, Jharkhand"
  },

  couple: {
    groom: {
      name: "Mridul Raj",
      heroName: "Mridul",
      hindi: "मृदुल राज",
      role: "The Groom"
    },
    bride: {
      name: "Anjali Singh",
      heroName: "Anjali",
      hindi: "अंजलि सिंह",
      role: "The Bride"
    },
    monogram: "M & A"
  },

  // Primary couple names & monogram
  groom: "Mridul",
  bride: "Anjali",
  groomFull: "Mridul Raj",
  brideFull: "Anjali Singh",
  monogram: "M & A",

  // Auspicious blessings & mantras
  topBlessing: "॥ जय गणेशाय नमः ॥",
  subBlessing: "॥ शुभ विवाह ॥",

  // Dates & countdown
  // Target: Start of wedding celebrations (Haldi ceremony)
  weddingDateISO: "2026-12-01T11:00:00+05:30",
  // Target: Auspicious Wedding Muhurat (Shaadi & Phere)
  mainWeddingDateISO: "2026-12-03T19:00:00+05:30",
  dateDisplay: "1 – 5 December 2026",
  dateFormatted: "01 · 12 · 2026 — 05 · 12 · 2026",
  countdownNote: "until the haldi begins · Tuesday, 1 December 2026",

  // Location
  location: "Dhanbad, Jharkhand, India",
  city: "Dhanbad",
  state: "Jharkhand, India",

  // Cover section
  cover: {
    topBlessing: "॥ जय गणेशाय नमः ॥",
    eyebrow: "Shubh Vivah",
    sub: "Together with our families",
    inviteLine: "request the honour of your presence as they begin their forever",
    openBtn: "Open Invitation"
  },

  // Story section
  story: {
    eyebrow: "Our Story",
    title: "A Beautiful New Chapter",
    text: "Four joyous days of colour, music, traditions and blessings. With hearts full of love and gratitude, we invite you to join us as we celebrate our union. Your presence and blessings will make our celebrations complete.",
    textHi: "प्रेम और आशीर्वाद के बंधन में बँधे दो परिवार, एक सुंदर नई शुरुआत की ओर। आपकी उपस्थिति और स्नेह से यह उत्सव मंगलमय बनेगा।",
    namesLine: "Mridul & Anjali"
  },

  // Ceremony highlight section (Day 3: Shaadi & Phere)
  ceremony: {
    eyebrow: "The Sacred Wedding Ceremony",
    date: "03",
    month: "December 2026",
    tagline: "the wedding of",
    couple: "Mridul & Anjali",
    note: "Phusbunglow, Bhaga More, Dhanbad · Thursday, 3 Dec · 07:00 PM onwards"
  },

  // Venues overview
  venue: {
    name: "Wedding Festivities · Dhanbad, Jharkhand",
    address: "Day 1 & 2 (Haldi & Mehandi): Harina Baghan Colony, Harina Basti (828306)\nDay 3 (Shaadi): Phusbunglow, Bhaga More (828301)\nDay 5 (Grand Reception): Dumra (828306)",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=RC97%2BC42%2C+Phusbunglow%2C+Bhaga+More%2C+Jharkhand+828301"
  },

  // Multi-venue cards list for all 4 days
  venues: [
    {
      badge: "Days 1 & 2 · Haldi & Mehandi",
      name: "Harina Baghan Colony",
      address: "Harina Basti, Dhanbad, Jharkhand 828306",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=R646%2BVRV%2C+Harina+Baghan+Colony%2C+Harina+Basti%2C+Jharkhand+828306",
      hint: "Venue for Haldi Ceremony & Mehandi Sangeet"
    },
    {
      badge: "Day 3 · Shaadi & Phere (Wedding)",
      name: "Phusbunglow",
      address: "Bhaga More, Dhanbad, Jharkhand 828301",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=RC97%2BC42%2C+Phusbunglow%2C+Bhaga+More%2C+Jharkhand+828301",
      hint: "Main Wedding Ceremony & Holy Vows",
      isMain: true
    },
    {
      badge: "Day 5 · Grand Wedding Reception",
      name: "Dumra Celebration Ground",
      address: "Dumra, Dhanbad, Jharkhand 828306",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Dumra%2C+Jharkhand+828306",
      hint: "Grand Wedding Reception & Dinner"
    }
  ],

  // 4 Days of Wedding Events (Complete itinerary from mirdul-anjali)
  events: [
    {
      dayLabel: "Day 1",
      name: "Haldi Ceremony",
      hindi: "हल्दी की रस्म",
      date: "Tuesday, 1 December 2026",
      time: "11:00 AM onwards",
      location: "Harina Baghan Colony, Harina Basti, Jharkhand 828306",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=R646%2BVRV%2C+Harina+Baghan+Colony%2C+Harina+Basti%2C+Jharkhand+828306",
      dress: "Shades of Yellow",
      description: "A sunshine-soaked celebration of turmeric, fragrant marigolds, and joyous laughter as loved ones bless the couple with a golden glow.",
      descHi: "हल्दी, गेंदे के फूलों और हँसी-ख़ुशी से भरी पावन रस्म, जब सभी प्रियजन मिलकर वर-वधू को शुभ आशीर्वाद व स्नेह देंगे।",
      accent: "#d98200"
    },
    {
      dayLabel: "Day 2",
      name: "Mehandi & Sangeet Night",
      hindi: "मेहंदी एवं संगीत संध्या",
      date: "Wednesday, 2 December 2026",
      time: "05:00 PM onwards",
      location: "Harina Baghan Colony, Harina Basti, Jharkhand 828306",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=R646%2BVRV%2C+Harina+Baghan+Colony%2C+Harina+Basti%2C+Jharkhand+828306",
      dress: "Festive Green & Traditional Glam",
      description: "An enchanting evening of intricate henna artistry, foot-tapping beats of the dhol, dance performances, and musical celebration with family and friends.",
      descHi: "हाथों में रचने वाली मेहंदी के रंगों, ढोल की थाप, मधुर संगीत और अपनों के संग झूमते-गाते जश्न की एक हसीन व यादगार शाम।",
      accent: "#13877a"
    },
    {
      dayLabel: "Day 3",
      name: "Shaadi & Phere (Wedding)",
      hindi: "शुभ विवाह एवं सात फेरे",
      date: "Thursday, 3 December 2026",
      time: "07:00 PM onwards",
      location: "Phusbunglow, Bhaga More, Jharkhand 828301",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=RC97%2BC42%2C+Phusbunglow%2C+Bhaga+More%2C+Jharkhand+828301",
      dress: "Royal Indian Ethnic & Traditional Finery",
      description: "The sacred union: holy vows taken around the sacred fire, sealed with Vedic rituals, blessings of the elders and the divine.",
      descHi: "पवित्र अग्नि के साक्षी में सात फेरों का पावन बंधन, वैदिक मंत्रोच्चार और बड़ों व ईश्वर के मंगल आशीर्वाद के साथ नवजीवन का शुभारंभ।",
      accent: "#c4321a",
      isMain: true
    },
    {
      dayLabel: "Day 5",
      name: "Grand Wedding Reception",
      hindi: "भव्य स्वागत समारोह एवं प्रीतिभोज",
      date: "Saturday, 5 December 2026",
      time: "07:30 PM onwards",
      location: "Dumra, Jharkhand 828306",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Dumra%2C+Jharkhand+828306",
      dress: "Royal Formal / Black Tie & Glam",
      description: "A royal evening of felicitations, fine dining, and joyous celebration welcoming the newly married couple as they begin their journey together.",
      descHi: "नवदम्पति के सम्मान में आयोजित एक भव्य एवं शाही शाम, स्वादिष्ट प्रीतिभोज और परिजनों व स्नेहीजनों के मंगल आशीर्वाद का उत्सव।",
      accent: "#6b1028"
    }
  ],

  // Closing & Blessings section
  blessings: {
    topBlessing: "॥ जय गणेशाय नमः ॥",
    title: "With Love & Blessings",
    lead: "Your presence and blessings will make our celebration complete.",
    leadHi: "आपकी उपस्थिति और आशीर्वाद से हमारा उत्सव पूर्ण होगा।",
    signature: "Mridul & Anjali",
    family: "with our families",
    closingCredit: "Mridul & Anjali · 1 – 5 December 2026 · Dhanbad, Jharkhand"
  },

  // Background music
  music: {
    enabled: true,
    src: "assets/music/wedding.mp3"
  }
};
