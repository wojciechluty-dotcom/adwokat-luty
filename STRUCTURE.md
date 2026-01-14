# 📁 Struktura projektu

```
adwokat-luty/
│
├── 📄 index.html                    # HTML z meta tagami SEO, JSON-LD
├── 📄 package.json                  # Zależności i skrypty npm
├── 📄 netlify.toml                  # Konfiguracja Netlify
├── 📄 vite.config.ts                # Konfiguracja Vite
├── 📄 postcss.config.mjs            # Konfiguracja PostCSS
│
├── 📂 public/                       # Pliki statyczne (dostępne publicznie)
│   ├── robots.txt                   # Instrukcje dla robotów Google
│   ├── sitemap.xml                  # Mapa strony dla SEO
│   ├── _redirects                   # Przekierowania Netlify (SPA)
│   ├── favicon.svg                  # Ikona strony
│   ├── portrait1.jpg                # (DO DODANIA) Główne zdjęcie
│   ├── portrait2.jpg                # (DO DODANIA) Zdjęcie "O mnie"
│   ├── portrait3.jpg                # (DO DODANIA) Zdjęcie "Dlaczego"
│   ├── logo.png                     # (DO DODANIA) Logo kancelarii
│   ├── og-image.jpg                 # (DO DODANIA) Obraz social media
│   └── apple-touch-icon.png         # (DO DODANIA) Ikona iOS
│
├── 📂 src/                          # Kod źródłowy aplikacji
│   │
│   ├── 📂 app/                      # Komponenty React
│   │   │
│   │   ├── 📄 App.tsx               # ⭐ GŁÓWNY KOMPONENT - cała strona
│   │   │
│   │   └── 📂 components/           # Komponenty wielokrotnego użytku
│   │       │
│   │       ├── ContactForm.tsx      # Formularz kontaktowy (RODO)
│   │       ├── PrivacyPolicy.tsx    # Modal - Polityka prywatności
│   │       ├── RodoInfo.tsx         # Modal - Informacja RODO
│   │       ├── Terms.tsx            # Modal - Regulamin
│   │       ├── SEO.tsx              # Komponent SEO (dynamiczne meta)
│   │       │
│   │       ├── 📂 figma/            # Komponenty systemowe Figma
│   │       │   └── ImageWithFallback.tsx
│   │       │
│   │       └── 📂 ui/               # Komponenty UI (shadcn)
│   │           ├── button.tsx
│   │           ├── card.tsx
│   │           ├── input.tsx
│   │           ├── label.tsx
│   │           ├── checkbox.tsx
│   │           └── ... (inne komponenty shadcn)
│   │
│   ├── 📂 config/                   # Pliki konfiguracyjne
│   │   └── contact.ts               # ⭐ DANE KONTAKTOWE - edytuj tutaj!
│   │
│   └── 📂 styles/                   # Style CSS
│       ├── index.css                # Główny plik CSS
│       ├── tailwind.css             # Importy Tailwind
│       ├── theme.css                # Custom theme (kolory, czcionki)
│       └── fonts.css                # Importy czcionek
│
├── 📂 guidelines/                   # Wytyczne systemowe
│
├── 📄 README.md                     # 📖 Główna dokumentacja projektu
├── 📄 DEPLOYMENT.md                 # 🚀 Szczegółowa instrukcja wdrożenia
├── 📄 QUICKSTART.md                 # ⚡ Szybki start
├── 📄 TODO.md                       # ✅ Lista zadań do wykonania
├── 📄 CHANGELOG.md                  # 📝 Historia zmian
├── 📄 CONTRIBUTING.md               # 🤝 Zasady współpracy
├── 📄 LICENSE                       # ⚖️ Licencja
│
├── 📄 .gitignore                    # Pliki ignorowane przez Git
└── 📄 .env.example                  # Przykład zmiennych środowiskowych
```

---

## 🎯 Najważniejsze pliki do edycji

### 1. `/src/app/App.tsx` - GŁÓWNY KOMPONENT
**Co zawiera:**
- Cała struktura strony (Hero, O mnie, Usługi, itd.)
- Wszystkie teksty i treści
- Layout i komponenty

**Kiedy edytować:**
- Zmieniasz teksty na stronie
- Dodajesz/usuwasz sekcje
- Modyfikujesz layout

---

### 2. `/src/config/contact.ts` - DANE KONTAKTOWE
**Co zawiera:**
- Telefon, email, adres
- Dane kancelarii
- Godziny otwarcia
- Statystyki (lata doświadczenia, liczba spraw)
- Obszary specjalizacji

**Kiedy edytować:**
- Zmienia się numer telefonu
- Aktualizujesz adres
- Zmieniasz godziny otwarcia
- Aktualizujesz statystyki

---

### 3. `/index.html` - SEO i META TAGI
**Co zawiera:**
- Title i description strony
- Meta tagi Open Graph (social media)
- Structured Data (JSON-LD)
- Canonical URL

**Kiedy edytować:**
- Zmieniasz tytuł strony
- Aktualizujesz opis dla Google
- Zmieniasz URL domeny
- Dodajesz Google Analytics

---

### 4. `/public/sitemap.xml` - MAPA STRONY
**Co zawiera:**
- Lista wszystkich URL na stronie
- Daty ostatnich modyfikacji
- Priorytety dla Google

**Kiedy edytować:**
- Zmieniasz URL domeny
- Dodajesz nowe sekcje/podstrony
- Aktualizujesz daty modyfikacji

---

### 5. `/public/robots.txt` - INSTRUKCJE DLA GOOGLE
**Co zawiera:**
- Zasady indeksowania
- Link do sitemap

**Kiedy edytować:**
- Zmieniasz URL domeny
- Chcesz zablokować indeksowanie niektórych stron

---

## 📝 Jak dodać własne zdjęcia?

### Krok 1: Przygotuj zdjęcia
```
portrait1.jpg - Główne zdjęcie (pionowe, ~800x1000px)
portrait2.jpg - Zdjęcie "O mnie" (pionowe, ~800x1000px)
portrait3.jpg - Zdjęcie "Dlaczego warto" (pionowe, ~800x1000px)
logo.png - Logo kancelarii (przezroczyste tło, ~400x150px)
og-image.jpg - Social media (1200x630px)
favicon.svg - Ikona strony (100x100px)
apple-touch-icon.png - Ikona iOS (180x180px)
```

### Krok 2: Umieść w folderze `/public/`
```
public/
├── portrait1.jpg
├── portrait2.jpg
├── portrait3.jpg
├── logo.png
├── og-image.jpg
├── favicon.svg
└── apple-touch-icon.png
```

### Krok 3: Zaktualizuj ścieżki w `/src/app/App.tsx`
Znajdź linie 10-14 i zmień na:
```typescript
const lawyerPortrait1 = "/portrait1.jpg";
const lawyerPortrait2 = "/portrait2.jpg";
const lawyerPortrait3 = "/portrait3.jpg";
const logoImage = "/logo.png";
```

---

## 🎨 Jak zmienić kolory?

Edytuj plik `/src/styles/theme.css`:

```css
@theme {
  /* Główny kolor (granatowy → zmień na swój) */
  --color-primary: #1e293b;
  
  /* Akcent (złoty → zmień na swój) */
  --color-accent: #d97706;
  
  /* Tło */
  --color-background: #ffffff;
}
```

Lub używaj klas Tailwind bezpośrednio w komponentach:
- `slate-800` → Twój główny kolor
- `amber-700` → Twój kolor akcentu

---

## 🔧 Przydatne komendy

```bash
# Instalacja
npm install

# Development (localhost)
npm run dev

# Build produkcyjny
npm run build

# Podgląd buildu
npm run preview

# Aktualizacja pakietów
npm update
```

---

## 📚 Linki do dokumentacji

- [React](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Vite](https://vitejs.dev)
- [Shadcn/ui](https://ui.shadcn.com)
- [Lucide Icons](https://lucide.dev)

---

## ❓ FAQ

**Q: Gdzie zmienić numer telefonu?**  
A: `/src/config/contact.ts` → `contact.phone`

**Q: Gdzie zmienić teksty na stronie?**  
A: `/src/app/App.tsx` → znajdź odpowiednią sekcję

**Q: Gdzie dodać własne zdjęcia?**  
A: `/public/` folder + zaktualizuj ścieżki w `App.tsx`

**Q: Jak zmienić kolory?**  
A: `/src/styles/theme.css` lub bezpośrednio klasy Tailwind

**Q: Jak wdrożyć na Netlify?**  
A: Zobacz `DEPLOYMENT.md` lub `QUICKSTART.md`

---

**Ostatnia aktualizacja:** 14 stycznia 2026  
**Wersja:** 1.0.0
