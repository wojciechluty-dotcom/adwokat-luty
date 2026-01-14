# Strona Internetowa - Adwokat Wojciech Luty

Profesjonalna strona internetowa dla adwokata Wojciecha Luty specjalizującego się w prawie rodzinnym i rozwodach w Krakowie.

---

## 🚀 ZACZNIJ TUTAJ!

**Nowy na projekcie?** Przeczytaj: **[START-HERE.md](./START-HERE.md)** 👈

**Gotowy do wdrożenia?** Przeczytaj: **[QUICKSTART.md](./QUICKSTART.md)** ⚡

---

## 🌐 Demo

Strona jest dostępna pod adresem: [https://adwokat-luty.netlify.app](https://adwokat-luty.netlify.app)

## 📋 Opis projektu

Strona internetowa stworzona w React + TypeScript z wykorzystaniem Tailwind CSS v4. Projekt zawiera:

- **Sekcja Hero** - Profesjonalna prezentacja adwokata z kluczowymi statystykami
- **O mnie** - Informacje o doświadczeniu i kwalifikacjach
- **Zakres usług** - Szczegółowy opis obszarów specjalizacji:
  - Rozwody i separacje
  - Alimenty
  - Opieka nad dziećmi
  - Podział majątku
  - Ustalenie ojcostwa
  - Przemoc w rodzinie
- **Proces współpracy** - Przejrzysty opis etapów współpracy
- **Dlaczego warto zaufać** - Korzyści wynikające z wieloletniego doświadczenia
- **Formularz kontaktowy** - Zgodny z RODO
- **Polityka prywatności, RODO, Regulamin** - Pełna dokumentacja prawna

---

## 📚 Dokumentacja projektu

### 🎯 Dla początkujących
- 📖 **[START-HERE.md](./START-HERE.md)** - Zacznij tutaj! Podsumowanie całego projektu
- ⚡ **[QUICKSTART.md](./QUICKSTART.md)** - Wdrożenie w 5 minut
- 🚀 **[DEPLOYMENT.md](./DEPLOYMENT.md)** - Szczegółowa instrukcja wdrożenia
- ✅ **[CHECKLIST.md](./CHECKLIST.md)** - Checklist do wydruku

### 🔧 Dla zaawansowanych
- 📁 **[STRUCTURE.md](./STRUCTURE.md)** - Struktura projektu i gdzie co edytować
- 🔄 **[UPDATE-GUIDE.md](./UPDATE-GUIDE.md)** - Jak aktualizować stronę
- 🤝 **[CONTRIBUTING.md](./CONTRIBUTING.md)** - Zasady współpracy

### 🔍 SEO i marketing
- 📈 **[SEO-GUIDE.md](./SEO-GUIDE.md)** - Kompletny poradnik SEO dla prawników
- 📝 **[TODO.md](./TODO.md)** - Lista zadań po wdrożeniu

### ℹ️ Pozostałe
- 📋 **[CHANGELOG.md](./CHANGELOG.md)** - Historia zmian
- ⚖️ **[LICENSE](./LICENSE)** - Licencja

---

## 🚀 Technologie

- **React 18** - Biblioteka UI
- **TypeScript** - Typowanie statyczne
- **Tailwind CSS v4** - Stylowanie
- **Vite** - Build tool
- **Lucide React** - Ikony
- **Shadcn/ui** - Komponenty UI

## 🎨 Design

Strona wykorzystuje elegancką paletę kolorów:
- **Ciemnoszary** (slate-800) - Główny kolor korporacyjny
- **Stonowane złoto/bursztyn** (amber-700/800) - Akcenty
- **Granatowe logo** - Logo kancelarii Steidler Luty Adamski Bućko

## 📦 Instalacja i uruchomienie

### Wymagania

- Node.js 18+ 
- npm lub pnpm

### Kroki instalacji

1. **Sklonuj repozytorium**
   \`\`\`bash
   git clone https://github.com/TWOJA-NAZWA-UZYTKOWNIKA/adwokat-luty.git
   cd adwokat-luty
   \`\`\`

2. **Zainstaluj zależności**
   \`\`\`bash
   npm install
   # lub
   pnpm install
   \`\`\`

3. **Uruchom serwer deweloperski**
   \`\`\`bash
   npm run dev
   # lub
   pnpm dev
   \`\`\`

4. **Otwórz przeglądarkę**
   
   Strona będzie dostępna pod adresem: `http://localhost:5173`

### Build produkcyjny

\`\`\`bash
npm run build
# lub
pnpm build
\`\`\`

Zbudowane pliki znajdą się w folderze `dist/`.

## 🖼️ Dodawanie własnych zdjęć

Aby użyć własnych zdjęć:

1. Utwórz folder `public/` w głównym katalogu projektu (jeśli nie istnieje)
2. Dodaj swoje zdjęcia:
   - `portrait1.jpg` - Główne zdjęcie w sekcji Hero
   - `portrait2.jpg` - Zdjęcie w sekcji "O mnie"
   - `portrait3.jpg` - Zdjęcie w sekcji "Dlaczego warto zaufać"
   - `logo.png` - Logo kancelarii

3. Zaktualizuj ścieżki w pliku `/src/app/App.tsx` (linie 10-13):
   \`\`\`typescript
   const lawyerPortrait1 = "/portrait1.jpg";
   const lawyerPortrait2 = "/portrait2.jpg";
   const lawyerPortrait3 = "/portrait3.jpg";
   const logoImage = "/logo.png";
   \`\`\`

## 🔍 Optymalizacja SEO

Projekt zawiera pełną optymalizację SEO:

### Meta tagi
- Podstawowe meta tagi (title, description, keywords)
- Open Graph dla mediów społecznościowych
- Twitter Card
- Canonical URL
- Geo meta tagi (lokalizacja w Krakowie)

### Structured Data (JSON-LD)
- Schema.org dla Attorney
- Schema.org dla LegalService
- Schema.org dla WebPage z breadcrumbs

### Pliki SEO
- **`/public/sitemap.xml`** - Mapa strony dla Google
- **`/public/robots.txt`** - Instrukcje dla robotów indeksujących

### Google Search Console

Po wdrożeniu strony, dodaj ją do Google Search Console:
1. Przejdź do [Google Search Console](https://search.google.com/search-console)
2. Dodaj nową właściwość
3. Zweryfikuj własność domeny
4. Prześlij sitemap: `https://adwokat-luty.netlify.app/sitemap.xml`

## 🌍 Deployment na Netlify

### Automatyczny deployment z GitHub

1. **Połącz z GitHub**
   - Zaloguj się na [Netlify](https://www.netlify.com)
   - Kliknij "Add new site" → "Import an existing project"
   - Wybierz GitHub i autoryzuj
   - Wybierz repozytorium

2. **Konfiguracja build**
   - Build command: `npm run build` lub `pnpm build`
   - Publish directory: `dist`
   - Netlify automatycznie wykryje ustawienia z `netlify.toml`

3. **Deploy**
   - Kliknij "Deploy site"
   - Netlify automatycznie zbuduje i opublikuje stronę
   - Każdy push do gałęzi `main` automatycznie uruchomi nowy deployment

### Własna domena

Aby dodać własną domenę:
1. W panelu Netlify przejdź do "Domain settings"
2. Kliknij "Add custom domain"
3. Wprowadź swoją domenę (np. `adwokat-luty.pl`)
4. Skonfiguruj DNS zgodnie z instrukcjami Netlify

## 📱 Responsywność

Strona jest w pełni responsywna i zoptymalizowana dla:
- 📱 Smartfonów (320px+)
- 📱 Tabletów (768px+)
- 💻 Laptopów (1024px+)
- 🖥️ Desktopów (1280px+)

## 🔒 RODO i Prywatność

Strona zawiera pełną dokumentację zgodną z RODO:
- Polityka prywatności
- Informacja o przetwarzaniu danych osobowych
- Regulamin świadczenia usług
- Zgody w formularzu kontaktowym

## 📞 Kontakt

**Adwokat Wojciech Luty**  
Kancelaria: Steidler Luty Adamski Bućko - Adwokaci i Radcowie Prawni

📍 ul. Krupnicza 14/9, 31-123 Kraków  
📞 +48 694 491 095  
📧 Wojciech.luty@wsla.pl

🕐 Godziny pracy:  
Poniedziałek - Piątek: 9:00 - 18:00  
Sobota: po wcześniejszym umówieniu

## 📄 Licencja

© 2026 Adwokat Wojciech Luty. Wszelkie prawa zastrzeżone.

---

**Uwaga:** Strona została stworzona w Figma Make i zoptymalizowana pod kątem SEO oraz wydajności.