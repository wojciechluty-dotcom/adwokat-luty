# 🚀 Instrukcja wdrożenia strony na GitHub i Netlify

## Krok 1: Przygotowanie projektu lokalnie

### 1.1 Pobierz projekt z Figma Make
- Kliknij przycisk **"Download"** w Figma Make
- Rozpakuj pobrany plik ZIP
- Otwórz folder w edytorze kodu (np. VS Code)

### 1.2 Dodaj własne zdjęcia (opcjonalnie)
1. Utwórz folder `public/` w głównym katalogu projektu
2. Dodaj swoje pliki:
   - `portrait1.jpg` - główne zdjęcie w Hero
   - `portrait2.jpg` - zdjęcie w sekcji "O mnie"
   - `portrait3.jpg` - zdjęcie w "Dlaczego warto zaufać"
   - `logo.png` - logo kancelarii
   - `og-image.jpg` - obraz do mediów społecznościowych (1200x630px)
   - `favicon.svg` - ikona strony
   - `apple-touch-icon.png` - ikona dla urządzeń Apple (180x180px)

3. Zaktualizuj ścieżki w `/src/app/App.tsx`:
   ```typescript
   const lawyerPortrait1 = "/portrait1.jpg";
   const lawyerPortrait2 = "/portrait2.jpg";
   const lawyerPortrait3 = "/portrait3.jpg";
   const logoImage = "/logo.png";
   ```

### 1.3 Testuj lokalnie
```bash
npm install
npm run dev
```
Otwórz `http://localhost:5173` i sprawdź czy wszystko działa.

---

## Krok 2: Wrzucenie projektu na GitHub

### 2.1 Utwórz repozytorium na GitHub

1. Zaloguj się na [GitHub.com](https://github.com)
2. Kliknij **"New repository"** (zielony przycisk)
3. Wypełnij formularz:
   - **Repository name**: `adwokat-luty` (lub dowolna nazwa)
   - **Description**: "Strona internetowa adwokata Wojciecha Luty - prawo rodzinne Kraków"
   - **Visibility**: Private (jeśli chcesz prywatne) lub Public
   - ❌ **NIE** zaznaczaj "Initialize with README" (już mamy README.md)
4. Kliknij **"Create repository"**

### 2.2 Połącz lokalny projekt z GitHub

Otwórz terminal w folderze projektu i wykonaj:

```bash
# Inicjalizuj Git (jeśli nie jest zainicjowany)
git init

# Dodaj wszystkie pliki
git add .

# Pierwszy commit
git commit -m "Initial commit - strona adwokata Wojciecha Luty"

# Dodaj remote (zamień URL na swój z GitHub)
git remote add origin https://github.com/TWOJA-NAZWA-UZYTKOWNIKA/adwokat-luty.git

# Zmień nazwę gałęzi na main
git branch -M main

# Wypchnij kod na GitHub
git push -u origin main
```

### 2.3 Weryfikacja
Odśwież stronę swojego repozytorium na GitHub - powinny pojawić się wszystkie pliki.

---

## Krok 3: Wdrożenie na Netlify

### 3.1 Utwórz konto na Netlify

1. Przejdź do [Netlify.com](https://www.netlify.com)
2. Kliknij **"Sign up"**
3. Wybierz **"Sign up with GitHub"** (zalecane)
4. Autoryzuj Netlify do dostępu do GitHub

### 3.2 Dodaj nową stronę

1. Po zalogowaniu kliknij **"Add new site"**
2. Wybierz **"Import an existing project"**
3. Wybierz **"Deploy with GitHub"**
4. Netlify poprosi o dostęp - kliknij **"Authorize Netlify"**
5. Znajdź i wybierz swoje repozytorium `adwokat-luty`

### 3.3 Konfiguracja build settings

Netlify powinno automatycznie wykryć ustawienia, ale sprawdź czy są poprawne:

- **Branch to deploy**: `main`
- **Build command**: `npm run build`
- **Publish directory**: `dist`

Jeśli wszystko się zgadza, kliknij **"Deploy site"**

### 3.4 Poczekaj na deployment

- Netlify zacznie budować stronę (1-3 minuty)
- Zobaczysz logi procesu budowania
- Po zakończeniu strona będzie live! 🎉

### 3.5 Zmień nazwę strony (opcjonalnie)

1. W panelu Netlify kliknij **"Site settings"**
2. W sekcji **"Site information"** kliknij **"Change site name"**
3. Wpisz np. `adwokat-luty` lub `wojciech-luty-adwokat`
4. Twoja strona będzie dostępna pod: `https://adwokat-luty.netlify.app`

---

## Krok 4: Dodanie własnej domeny (opcjonalnie)

### 4.1 Kup domenę

Kup domenę np. `adwokat-luty.pl` u jednego z providerów:
- [home.pl](https://home.pl)
- [OVH.pl](https://www.ovhcloud.com/pl/)
- [Namecheap.com](https://www.namecheap.com)

### 4.2 Dodaj domenę w Netlify

1. W panelu Netlify przejdź do **"Domain settings"**
2. Kliknij **"Add custom domain"**
3. Wpisz swoją domenę (np. `adwokat-luty.pl`)
4. Netlify pokaże instrukcje konfiguracji DNS

### 4.3 Skonfiguruj DNS u swojego providera

W panelu zarządzania domeną dodaj rekordy DNS:

**Opcja A: CNAME (subdomena www)**
```
Type: CNAME
Name: www
Value: adwokat-luty.netlify.app
```

**Opcja B: A Record (domena główna)**
```
Type: A
Name: @
Value: 75.2.60.5
```

**UWAGA:** Netlify pokaże Ci dokładne wartości w swoim panelu.

### 4.4 Włącz HTTPS

1. Po skonfigurowaniu DNS, wróć do Netlify
2. W **"Domain settings"** → **"HTTPS"**
3. Kliknij **"Verify DNS configuration"**
4. Po weryfikacji (do 24h) kliknij **"Provision certificate"**
5. Netlify automatycznie wygeneruje darmowy certyfikat SSL (Let's Encrypt)

---

## Krok 5: Optymalizacja SEO (Google Search Console)

### 5.1 Dodaj stronę do Google Search Console

1. Przejdź do [Google Search Console](https://search.google.com/search-console)
2. Kliknij **"Dodaj zasób"**
3. Wybierz **"Prefiks adresu URL"**
4. Wpisz: `https://adwokat-luty.netlify.app` (lub Twoją domenę)
5. Kliknij **"Kontynuuj"**

### 5.2 Weryfikacja własności

**Metoda HTML Tag (najłatwiejsza):**
1. Google pokaże Ci meta tag do dodania
2. Skopiuj ten tag
3. Dodaj go do `/index.html` w sekcji `<head>`
4. Zaktualizuj kod na GitHub:
   ```bash
   git add index.html
   git commit -m "Add Google Search Console verification"
   git push
   ```
5. Poczekaj aż Netlify wdroży zmiany (1-2 minuty)
6. Wróć do Google Search Console i kliknij **"Weryfikuj"**

### 5.3 Prześlij sitemap

1. W Google Search Console przejdź do **"Mapy witryny"**
2. Dodaj nowy sitemap:
   ```
   https://adwokat-luty.netlify.app/sitemap.xml
   ```
3. Kliknij **"Prześlij"**
4. Google zacznie indeksować Twoją stronę!

### 5.4 Przetestuj Rich Results

1. Przejdź do [Rich Results Test](https://search.google.com/test/rich-results)
2. Wklej URL: `https://adwokat-luty.netlify.app`
3. Kliknij **"Test URL"**
4. Sprawdź czy Google rozpoznaje dane strukturalne (Attorney, LegalService)

---

## Krok 6: Automatyczne wdrożenia

### Jak to działa?

Po połączeniu GitHub + Netlify, każda zmiana w kodzie automatycznie wdraża nową wersję:

1. Edytujesz plik (np. zmiana tekstu)
2. Commituj zmiany:
   ```bash
   git add .
   git commit -m "Aktualizacja treści"
   git push
   ```
3. Netlify automatycznie:
   - Wykrywa nowy commit
   - Buduje projekt
   - Wdraża na stronę live
   - Zajmuje to ~2-3 minuty

---

## Krok 7: Monitoring i analityka

### 7.1 Google Analytics (opcjonalnie)

1. Utwórz konto w [Google Analytics](https://analytics.google.com)
2. Dodaj nową właściwość (GA4)
3. Skopiuj ID śledzenia (np. `G-XXXXXXXXXX`)
4. Dodaj skrypt do `/index.html` przed `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### 7.2 Netlify Analytics

Netlify oferuje własną analitykę (płatną):
- Dokładne statystyki odwiedzin
- Nie wymaga cookies (zgodne z RODO)
- Włącz w **"Site settings"** → **"Analytics"**

---

## Częste problemy i rozwiązania

### ❌ Problem: Strona nie buduje się na Netlify

**Rozwiązanie:**
1. Sprawdź logi budowania w Netlify
2. Upewnij się, że `package.json` ma poprawne skrypty:
   ```json
   "scripts": {
     "dev": "vite",
     "build": "tsc && vite build",
     "preview": "vite preview"
   }
   ```

### ❌ Problem: Zdjęcia nie wyświetlają się

**Rozwiązanie:**
1. Sprawdź czy folder `public/` istnieje w głównym katalogu
2. Upewnij się, że zdjęcia są w `public/` (nie w `src/`)
3. Ścieżki powinny zaczynać się od `/` np. `/portrait1.jpg`

### ❌ Problem: 404 po odświeżeniu strony

**Rozwiązanie:**
Plik `netlify.toml` już zawiera przekierowania, ale sprawdź czy jest w głównym katalogu:
```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### ❌ Problem: DNS nie działa

**Rozwiązanie:**
1. Poczekaj do 24-48h na propagację DNS
2. Sprawdź DNS narzędziem: [whatsmydns.net](https://www.whatsmydns.net)
3. Upewnij się, że rekordy DNS są poprawnie ustawione

---

## ✅ Checklist przed wdrożeniem

- [ ] Projekt działa lokalnie (`npm run dev`)
- [ ] Wszystkie zdjęcia są dodane do `public/`
- [ ] Dane kontaktowe są aktualne
- [ ] README.md jest zaktualizowane
- [ ] `.gitignore` jest poprawny
- [ ] Kod jest na GitHub
- [ ] Strona jest wdrożona na Netlify
- [ ] HTTPS jest włączony
- [ ] Sitemap jest przesłany do Google Search Console
- [ ] Google Analytics jest skonfigurowany (opcjonalnie)

---

## 📞 Pomoc techniczna

Jeśli napotkasz problemy:

1. **Dokumentacja Netlify**: https://docs.netlify.com
2. **Dokumentacja Vite**: https://vitejs.dev
3. **Stack Overflow**: Szukaj rozwiązań na forum

---

**Gratulacje!** 🎉 Twoja strona jest teraz live i zoptymalizowana pod SEO!
