/**
 * Dane kontaktowe kancelarii
 * Edytuj ten plik aby zmienić dane kontaktowe w całej aplikacji
 */

export const contactInfo = {
  // Dane adwokata
  lawyer: {
    firstName: "Wojciech",
    lastName: "Luty",
    fullName: "Wojciech Luty",
    title: "Adwokat",
    specialization: "Prawo Rodzinne i Rozwody"
  },

  // Dane kancelarii
  firm: {
    name: "Steidler Luty Adamski Bućko",
    fullName: "Steidler Luty Adamski Bućko - Adwokaci i Radcowie Prawni",
    shortName: "SLABR"
  },

  // Kontakt
  contact: {
    phone: "+48 694 491 095",
    phoneDisplay: "+48 694 491 095",
    email: "Wojciech.luty@wsla.pl",
    website: "https://www.wsla.pl"
  },

  // Adres
  address: {
    street: "ul. Krupnicza 14/9",
    postalCode: "31-123",
    city: "Kraków",
    country: "Polska",
    fullAddress: "ul. Krupnicza 14/9, 31-123 Kraków"
  },

  // Współrzędne geograficzne (dla map i SEO)
  geo: {
    latitude: "50.061389",
    longitude: "19.936944"
  },

  // Godziny otwarcia
  openingHours: {
    weekdays: "Poniedziałek - Piątek: 9:00 - 18:00",
    saturday: "Sobota: po wcześniejszym umówieniu",
    sunday: "Niedziela: Nieczynne"
  },

  // Statystyki
  stats: {
    yearsOfExperience: "10+",
    casesCompleted: "800+",
    successRate: "100%"
  },

  // Social media (opcjonalnie)
  social: {
    linkedin: "",
    facebook: "",
    twitter: ""
  }
};

// SEO i meta dane
export const seoConfig = {
  siteUrl: "https://adwokat-luty.netlify.app",
  siteName: "Adwokat Wojciech Luty",
  defaultTitle: "Adwokat Wojciech Luty - Prawo Rodzinne i Rozwody Kraków | Kancelaria SLABR",
  defaultDescription: "Adwokat Wojciech Luty - specjalista prawa rodzinnego w Krakowie. Ponad 10 lat doświadczenia, 800+ spraw. Rozwody, alimenty, opieka nad dziećmi, podział majątku. Profesjonalna pomoc prawna.",
  defaultKeywords: "adwokat Kraków, prawo rodzinne Kraków, rozwód Kraków, alimenty, opieka nad dziećmi, podział majątku, adwokat rodzinny, Wojciech Luty, kancelaria SLABR",
  ogImage: "/og-image.jpg",
  twitterHandle: "@adwokat_luty" // jeśli masz Twitter
};

// Obszary specjalizacji
export const practiceAreas = [
  {
    id: "rozwody",
    name: "Rozwód i separacja",
    description: "Pomoc w przeprowadzeniu postępowania rozwodowego lub separacyjnego. Rozwód za porozumieniem stron lub z orzekaniem o winie.",
    icon: "Heart"
  },
  {
    id: "opieka",
    name: "Opieka nad dziećmi",
    description: "Ustalenie miejsca zamieszkania dziecka, władzy rodzicielskiej oraz kontaktów z dzieckiem. Reprezentacja w sądzie.",
    icon: "Baby"
  },
  {
    id: "alimenty",
    name: "Alimenty",
    description: "Ustalenie i zmiana wysokości alimentów na dzieci i małżonka. Egzekucja zaległych alimentów.",
    icon: "Coins"
  },
  {
    id: "podzial-majatku",
    name: "Podział majątku",
    description: "Podział majątku wspólnego po rozwodzie lub separacji. Wycena i podział nieruchomości, rachunków i innych składników.",
    icon: "Home"
  },
  {
    id: "ojcostwo",
    name: "Ustalenie ojcostwa",
    description: "Postępowania o ustalenie lub zaprzeczenie ojcostwa. Reprezentacja w sprawach o uznanie ojcostwa.",
    icon: "UserCheck"
  },
  {
    id: "przemoc",
    name: "Przemoc w rodzinie",
    description: "Reprezentacja w sprawach o przemoc domową. Pomoc w uzyskaniu zakazu zbliżania się. Ochrona ofiar przemocy rodzinnej.",
    icon: "Shield"
  }
];
