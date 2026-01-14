# ✅ TODO - Lista zadań po pobraniu projektu

## 🔴 KRYTYCZNE (zrób przed wdrożeniem)

- [ ] **Zmień URL w package.json**
  - Otwórz `/package.json`
  - Zmień `https://github.com/TWOJA-NAZWA-UZYTKOWNIKA/adwokat-luty.git` na swoją nazwę użytkownika GitHub

- [ ] **Zaktualizuj URL w index.html**
  - Otwórz `/index.html`
  - Zamień `https://adwokat-luty.netlify.app` na swój docelowy URL (jeśli znasz)
  - Lub zostaw i zmień później gdy będziesz mieć domenę

- [ ] **Zaktualizuj sitemap.xml**
  - Otwórz `/public/sitemap.xml`
  - Zamień wszystkie wystąpienia `https://adwokat-luty.netlify.app` na swój URL
  - Zaktualizuj datę `<lastmod>` na dzisiejszą

- [ ] **Zaktualizuj robots.txt**
  - Otwórz `/public/robots.txt`
  - Zamień `https://adwokat-luty.netlify.app/sitemap.xml` na swój URL

---

## 🟡 WAŻNE (zrób w pierwszym tygodniu)

- [ ] **Dodaj własne zdjęcia**
  - Utwórz folder `/public/`
  - Dodaj: `portrait1.jpg`, `portrait2.jpg`, `portrait3.jpg`, `logo.png`
  - Zaktualizuj ścieżki w `/src/app/App.tsx` (linie 10-14)

- [ ] **Dodaj obrazek Open Graph**
  - Stwórz obraz `og-image.jpg` (1200x630px)
  - Umieść w `/public/og-image.jpg`
  - Powinien zawierać: nazwisko, specjalizację, numer telefonu

- [ ] **Dodaj favicon i ikony**
  - `favicon.svg` - już jest (możesz zastąpić własnym)
  - `apple-touch-icon.png` (180x180px) - dodaj własny

- [ ] **Zweryfikuj dane kontaktowe**
  - Sprawdź czy telefon, email, adres są poprawne w `/src/config/contact.ts`
  - Sprawdź czy godziny otwarcia są aktualne

---

## 🟢 OPCJONALNE (możesz zrobić później)

- [ ] **Google Analytics**
  - Utwórz konto w Google Analytics
  - Dodaj tracking code do `/index.html`
  - Skonfiguruj cele konwersji (kliknięcia w "Umów konsultację")

- [ ] **Google Search Console**
  - Dodaj stronę do Search Console
  - Zweryfikuj własność
  - Prześlij sitemap

- [ ] **Własna domena**
  - Kup domenę (np. `adwokat-luty.pl`)
  - Skonfiguruj DNS w Netlify
  - Włącz HTTPS

- [ ] **Formularz kontaktowy (backend)**
  - Opcja 1: Netlify Forms (darmowe)
  - Opcja 2: EmailJS
  - Opcja 3: Własny backend (Node.js/Supabase)

- [ ] **Blog prawniczy**
  - Rozważ dodanie sekcji z artykułami (SEO boost)
  - Możesz użyć Markdown + SSG

- [ ] **Opinie klientów**
  - Dodaj sekcję z opiniami/referencjami
  - Zbierz 5-10 opinii od zadowolonych klientów

---

## 📝 Notatki

### Przed pierwszym commitem do GitHub:
```bash
# 1. Zainicjuj repozytorium
git init

# 2. Dodaj wszystkie pliki
git add .

# 3. Pierwszy commit
git commit -m "Initial commit - strona adwokata Wojciecha Luty"

# 4. Połącz z GitHub (zamień URL!)
git remote add origin https://github.com/TWOJA-NAZWA/adwokat-luty.git

# 5. Push
git branch -M main
git push -u origin main
```

### Po wdrożeniu na Netlify:
1. Zmień nazwę strony w ustawieniach Netlify
2. Włącz HTTPS (automatyczne)
3. Dodaj custom domain (jeśli masz)
4. Skonfiguruj email notifications dla deployments

### Testowanie przed live:
- [ ] Sprawdź wszystkie linki
- [ ] Przetestuj formularz kontaktowy
- [ ] Sprawdź na mobile (różne rozmiary)
- [ ] Przetestuj w różnych przeglądarkach (Chrome, Firefox, Safari, Edge)
- [ ] Sprawdź szybkość ładowania (PageSpeed Insights)
- [ ] Zweryfikuj SEO (Rich Results Test)

---

## 🔧 Polecenia pomocnicze

```bash
# Uruchom lokalnie
npm install
npm run dev

# Build produkcyjny
npm run build

# Preview buildu
npm run preview

# Aktualizacja zależności
npm update

# Sprawdź czy są przestarzałe pakiety
npm outdated
```

---

## 📞 Kontakt w razie problemów

Jeśli napotkasz problemy:
1. Sprawdź dokumentację w DEPLOYMENT.md
2. Przeczytaj CONTRIBUTING.md
3. Szukaj na Stack Overflow
4. Napisz do mnie: Wojciech.luty@wsla.pl

---

**Data stworzenia:** 14 stycznia 2026  
**Wersja projektu:** 1.0.0  
**Status:** Gotowy do wdrożenia ✅
