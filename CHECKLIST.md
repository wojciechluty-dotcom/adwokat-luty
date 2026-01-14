# ✅ Checklist wdrożenia strony - Wydrukuj i odhacz

## 📦 PRZED WDROŻENIEM

### Krok 1: Przygotowanie projektu
- [ ] Projekt pobrany z Figma Make
- [ ] Folder rozpakowany
- [ ] VS Code (lub inny edytor) otwarty

### Krok 2: Edycja plików
- [ ] `package.json` - zmieniony URL GitHub na swój
- [ ] `index.html` - zmieniony URL domeny (jeśli znany)
- [ ] `public/sitemap.xml` - zmienione wszystkie URL
- [ ] `public/robots.txt` - zmieniony URL sitemap
- [ ] `/src/config/contact.ts` - sprawdzone dane kontaktowe

### Krok 3: Własne zdjęcia (opcjonalnie)
- [ ] Folder `/public/` utworzony
- [ ] `portrait1.jpg` dodany (800x1000px)
- [ ] `portrait2.jpg` dodany (800x1000px)
- [ ] `portrait3.jpg` dodany (800x1000px)
- [ ] `logo.png` dodany (400x150px)
- [ ] `og-image.jpg` dodany (1200x630px)
- [ ] Ścieżki w `App.tsx` zaktualizowane (linie 10-14)

### Krok 4: Test lokalny
- [ ] `npm install` - zależności zainstalowane
- [ ] `npm run dev` - strona działa lokalnie
- [ ] Sprawdzone wszystkie sekcje
- [ ] Sprawdzone na mobile (F12 → Responsive)
- [ ] Formularz kontaktowy przetestowany
- [ ] Wszystkie linki działają

---

## 🐙 GITHUB

### Krok 1: Utworzenie repozytorium
- [ ] Zalogowany na GitHub.com
- [ ] Nowe repozytorium utworzone
- [ ] Nazwa: `adwokat-luty` (lub inna)
- [ ] Visibility: Private/Public wybrany

### Krok 2: Push kodu
- [ ] `git init` wykonany
- [ ] `git add .` wykonany
- [ ] `git commit -m "Initial commit"` wykonany
- [ ] `git remote add origin [URL]` wykonany
- [ ] `git branch -M main` wykonany
- [ ] `git push -u origin main` wykonany
- [ ] Kod widoczny na GitHub ✅

---

## 🚀 NETLIFY

### Krok 1: Utworzenie konta
- [ ] Zalogowany na Netlify.com
- [ ] Konto połączone z GitHub

### Krok 2: Import projektu
- [ ] "Add new site" kliknięty
- [ ] "Import from Git" wybrany
- [ ] Repozytorium wybrane
- [ ] Build settings sprawdzone:
  - [ ] Build command: `npm run build`
  - [ ] Publish directory: `dist`
  - [ ] Node version: `18`

### Krok 3: Deploy
- [ ] "Deploy site" kliknięty
- [ ] Build zakończony sukcesem
- [ ] Strona LIVE! 🎉
- [ ] URL zapisany: ___________________________

### Krok 4: Konfiguracja
- [ ] Nazwa strony zmieniona (Site settings)
- [ ] HTTPS włączony (automatyczny)
- [ ] Custom domain dodany (jeśli masz)

---

## 🔍 SEO - GOOGLE

### Krok 1: Google Search Console (MUST)
- [ ] Zalogowany na search.google.com/search-console
- [ ] Nowa właściwość dodana
- [ ] URL: ___________________________
- [ ] Weryfikacja HTML tag dodana do `index.html`
- [ ] Strona zweryfikowana ✅
- [ ] Sitemap przesłany: `[URL]/sitemap.xml`
- [ ] Google rozpoczął indeksowanie

### Krok 2: Google My Business (MUST)
- [ ] Zalogowany na google.com/business
- [ ] Wizytówka utworzona:
  - [ ] Nazwa: Adwokat Wojciech Luty
  - [ ] Kategoria: Adwokat / Kancelaria prawna
  - [ ] Adres: ul. Krupnicza 14/9, 31-123 Kraków
  - [ ] Telefon: +48 694 491 095
  - [ ] Strona WWW: [URL]
- [ ] Zdjęcia dodane (minimum 5)
- [ ] Godziny otwarcia ustawione
- [ ] Weryfikacja rozpoczęta (pocztą/telefonem)

### Krok 3: Google Analytics (RECOMMENDED)
- [ ] Zalogowany na analytics.google.com
- [ ] Nowa właściwość utworzona (GA4)
- [ ] Measurement ID skopiowany: ___________________
- [ ] Tracking code dodany do `index.html`
- [ ] Kod wdrożony na produkcję
- [ ] Śledzenie działa (sprawdź w Real-Time)

---

## 📝 CONTENT & MARKETING

### Tydzień 1:
- [ ] Pierwsze 3 opinie na Google zebrane
- [ ] Zarejestrowany w Adwokatura.pl
- [ ] Zarejestrowany w Prawo.pl
- [ ] Zarejestrowany w Panorama Firm

### Miesiąc 1:
- [ ] 5+ opinii na Google
- [ ] Pierwszy artykuł na blog napisany (opcjonalnie)
- [ ] FAQ dodany do strony (opcjonalnie)
- [ ] Facebook Business Page utworzony (opcjonalnie)

---

## 🔒 BEZPIECZEŃSTWO & BACKUP

- [ ] Repozytorium GitHub jest prywatne (lub publiczne)
- [ ] `.env` (jeśli istnieje) w `.gitignore`
- [ ] Backup kodu lokalnie zapisany
- [ ] Zdjęcia oryginalne zachowane

---

## 📞 MONITORING (co tydzień przez pierwsze 2 miesiące)

### Google Search Console:
- [ ] Sprawdź "Coverage" - czy są błędy?
- [ ] Sprawdź "Performance" - ile wyświetleń?
- [ ] Sprawdź pozycje dla kluczowych fraz

### Google Analytics:
- [ ] Ile wizyt w tym tygodniu?
- [ ] Skąd przychodzą użytkownicy?
- [ ] Które strony są najpopularniejsze?

### Google My Business:
- [ ] Ile wyświetleń wizytówki?
- [ ] Ile kliknięć w telefon/stronę?
- [ ] Nowe opinie? (odpowiedz na nie!)

---

## 🎯 CELE (zapisz i sprawdzaj)

### Miesiąc 1:
- [ ] 50+ wizyt organicznych
- [ ] 5+ opinii Google (4.5+ gwiazdek)
- [ ] 3+ kontakty z formularza/telefonu

### Miesiąc 3:
- [ ] 200+ wizyt organicznych
- [ ] 10+ opinii Google (4.7+ gwiazdek)
- [ ] 10+ kontaktów z formularza/telefonu
- [ ] TOP 10 dla "adwokat Kraków prawo rodzinne"

### Miesiąc 6:
- [ ] 500+ wizyt organicznych
- [ ] 20+ opinii Google (4.8+ gwiazdek)
- [ ] 20+ kontaktów miesięcznie
- [ ] TOP 3 dla głównej frazy

---

## 📅 UTRZYMANIE (miesięcznie)

- [ ] Sprawdź czy strona działa (uptime)
- [ ] Zaktualizuj godziny otwarcia (jeśli się zmieniły)
- [ ] Odpowiedz na wszystkie opinie Google
- [ ] Napisz 1 artykuł na blog (jeśli masz)
- [ ] Sprawdź statystyki (Analytics + Search Console)
- [ ] Backup kodu (git push)
- [ ] Aktualizuj zależności: `npm update` (raz na 3 mies.)

---

## 🆘 KONTAKTY W RAZIE PROBLEMÓW

**Hosting (Netlify):**
- Docs: https://docs.netlify.com
- Support: https://answers.netlify.com

**Google:**
- Search Console Help: https://support.google.com/webmasters
- GMB Help: https://support.google.com/business

**Kod:**
- Stack Overflow: https://stackoverflow.com
- GitHub Issues: (w Twoim repo)

---

## ✅ KOŃCOWA WERYFIKACJA

- [ ] Strona jest LIVE i działa
- [ ] Wszystkie linki działają
- [ ] Formularz wysyła wiadomości
- [ ] Zdjęcia się wyświetlają
- [ ] Mobile wersja wygląda dobrze
- [ ] HTTPS jest włączony (kłódka w przeglądarce)
- [ ] Google Search Console: sitemap przesłany
- [ ] Google My Business: wizytówka aktywna
- [ ] Mam zapisane wszystkie hasła i dane dostępowe

---

**Data wdrożenia:** ___________________

**URL strony:** ___________________________________

**Deployment ID (Netlify):** _______________________

**Google Measurement ID:** ________________________

---

🎉 **GRATULACJE! Twoja strona jest LIVE!**

Teraz monitoruj statystyki i czekaj na pierwsze kontakty od klientów. Powodzenia! 🚀

---

**Wydrukuj tę stronę i odhaczaj kolejne kroki!**
