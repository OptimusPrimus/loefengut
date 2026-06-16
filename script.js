const defaultLanguage = "de";
const supportedLanguages = ["de", "en"];

const translations = {
  de: {
    pageTitle: "Löfengut Apartment",
    metaDescription:
      "Ein ruhiges Apartment im Löfengut in Oberösterreich mit historischem Charakter, modernem Komfort und direkter Kontaktmöglichkeit.",
    header: {
      eyebrow: "Apartment",
      title: "Löfengut",
    },
    nav: {
      overview: "Überblick",
      gallery: "Galerie",
      location: "Lage",
      contact: "Kontakt",
    },
    hero: {
      eyebrow: "Ruhiger Lage in St. Florian bei Linz",
      title: "Das Apartment...",
      text: "... liegt in Unterweidlham bei St. Florian. Es eignet sich ideal als Unterkunft bei Veranstaltungen in der Nähe, etwa im Stift St. Florian oder auf Schloss Tillysburg. Rad- und Wanderwege befinden sich in der Umgebung. Linz, Enns, Steyr und das Salzkammergut sind mit dem Auto gut erreichbar. Durch die Nähe zur A1 Autobahn ist es auch ideal für Durchreisende.",
      ctaPrimary: "Verfügbarkeit anfragen",
      ctaSecondary: "Fotos ansehen",
    },
    overview: {
      location: { label: "Ort", value: "St. Florian, Oberösterreich" },
      setting: { label: "Lage", value: "Ländlich" },
      layout: { label: "Aufteilung", value: "Apartment auf 2 Etagen" },
      atmosphere: { label: "Atmosphäre", value: "Ruhig, schlicht, Blick ins Grüne" },
    },
    map: {
      eyebrow: "Karte",
      title: "Löfengut in St. Florian",
      link: "In Google Maps öffnen",
    },
    space: {
      eyebrow: "Auf einen Blick",
      title: "Die Unterkunft",
      floors: { label: "Etagen", value: "2" },
      bedroom: { label: "Schlafzimmer", value: "1 großes Doppelbett" },
      bathroom: { label: "Badezimmer", value: "Dusche und Badewanne" },
      living: { label: "Wohnbereich", value: "Bücher, Brettspiele, Zugang zur Terrasse" },
      tv: { label: "TV", value: "Nicht vorhanden" },
      pets: { label: "Haustiere", value: "Auf Anfrage, Reinigungsgebühr fällt an" },
    },
    gallery: {
      eyebrow: "Galerie",
      title: "Apartment und Umgebung",
      living: "Wohnbereich",
      bedroom: "Schlafzimmer",
      kitchen: "Küche",
      bathroom: "Badezimmer",
      bathtub: "Badewanne",
      neighborhood: "Umgebung",
    },
    location: {
      eyebrow: "Lage",
      title: "Ein guter Ausgangspunkt für ruhige Tage und Ausflüge",
      text: "Das Apartment liegt ruhig in Unterweidlham bei St. Florian. Es eignet sich ideal als Bleibe bei Veranstaltungen in der Nähe, etwa im Stift St. Florian oder auf Schloss Tillysburg. Rad- und Wanderwege befinden sich in der Umgebung. Linz, Enns, Steyr und das Salzkammergut sind mit dem Auto gut erreichbar. Durch die Nähe zur A1 Autobahn ist es auch ideal für Durchreisende.",
      noteTitle: "Gut zu wissen",
      notes: [
        "Ruhige Lage auf dem Land",
        "Historischer Dreikanthof mit langer Geschichte",
        "Ideal für Erholung und Ausflüge in die Natur",
        "Ortstaxe: EUR 2,40 pro Person und Nacht, bar vor Ort zu bezahlen",
      ],
    },
    contact: {
      eyebrow: "Kontakt",
      title: "Direkte Anfragen",
      text: "Für Anfragen zur Verfügbarkeit erreichen Sie uns direkt per E-Mail oder Telefon.",
      emailButton: "E-Mail-Anfrage senden",
    },
  },
  en: {
    pageTitle: "Löfengut Apartment",
    metaDescription:
      "A quiet apartment at Löfengut in Upper Austria with historic character, modern comfort, and direct contact information.",
    header: {
      eyebrow: "Apartment",
      title: "Löfengut",
    },
    nav: {
      overview: "Overview",
      gallery: "Gallery",
      location: "Location",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Quiet location in St. Florian near Linz",
      title: "The apartment...",
      text: "... is located in Unterweidlham near St. Florian. It is ideal as accommodation for events nearby, for example at St. Florian Abbey or Schloss Tillysburg. Cycling and hiking trails are in the surrounding area. Linz, Enns, Steyr and the Salzkammergut are easy to reach by car. Thanks to its proximity to the A1 motorway, it is also ideal for travelers passing through.",
      ctaPrimary: "Ask about availability",
      ctaSecondary: "View photos",
    },
    overview: {
      location: { label: "Place", value: "St. Florian, Upper Austria" },
      setting: { label: "Location", value: "Rural" },
      layout: { label: "Layout", value: "Apartment over 2 floors" },
      atmosphere: { label: "Atmosphere", value: "Quiet, simple, countryside view" },
    },
    map: {
      eyebrow: "Map",
      title: "Löfengut in St. Florian",
      link: "Open in Google Maps",
    },
    space: {
      eyebrow: "At a glance",
      title: "The space",
      floors: { label: "Floors", value: "2" },
      bedroom: { label: "Bedroom", value: "1 large double bed" },
      bathroom: { label: "Bathroom", value: "Shower and bathtub" },
      living: { label: "Living area", value: "Books, board games, terrace access" },
      tv: { label: "TV", value: "Not available" },
      pets: { label: "Pets", value: "On request, cleaning fee applies" },
    },
    gallery: {
      eyebrow: "Gallery",
      title: "Apartment and surroundings",
      living: "Living area",
      bedroom: "Bedroom",
      kitchen: "Kitchen",
      bathroom: "Bathroom",
      bathtub: "Bathtub",
      neighborhood: "Surroundings",
    },
    location: {
      eyebrow: "Location",
      title: "A good base for quiet days and day trips",
      text: "The apartment is quietly located in Unterweidlham near St. Florian. It is ideal as a place to stay for events nearby, for example at St. Florian Abbey or Schloss Tillysburg. Cycling and hiking trails are in the surrounding area. Linz, Enns, Steyr and the Salzkammergut are easy to reach by car. Thanks to its proximity to the A1 motorway, it is also ideal for travelers passing through.",
      noteTitle: "Good to know",
      notes: [
        "Quiet countryside setting",
        "Historic Dreikanthof with a long history",
        "Ideal for relaxing stays and nature outings",
        "City tax: EUR 2.40 per person and night, to be paid in cash at the property",
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Direct inquiries",
      text: "For availability inquiries, contact us directly by email or phone.",
      emailButton: "Send email inquiry",
    },
  },
};

const metaDescription = document.querySelector("#meta-description");
const langButtons = document.querySelectorAll(".lang-button");

function getValue(language, key) {
  return key.split(".").reduce((value, part) => {
    if (value == null) {
      return undefined;
    }

    if (/^\d+$/.test(part)) {
      return value[Number(part)];
    }

    return value[part];
  }, translations[language]);
}

function setLanguage(language) {
  const nextLanguage = supportedLanguages.includes(language) ? language : defaultLanguage;

  document.documentElement.lang = nextLanguage;
  document.title = translations[nextLanguage].pageTitle;

  if (metaDescription) {
    metaDescription.setAttribute("content", translations[nextLanguage].metaDescription);
  }

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    const value = getValue(nextLanguage, key);

    if (typeof value === "string") {
      if (element.hasAttribute("data-i18n-html")) {
        element.innerHTML = value;
      } else {
        element.textContent = value;
      }
    }
  });

  langButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === nextLanguage);
    button.setAttribute("aria-pressed", String(button.dataset.lang === nextLanguage));
  });

  localStorage.setItem("site-language", nextLanguage);
}

langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.lang || defaultLanguage);
  });
});

const storedLanguage = localStorage.getItem("site-language");
setLanguage(storedLanguage || defaultLanguage);
