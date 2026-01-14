# 🚀 Wdrożenie strony BEZ ŻADNYCH ZMIAN

## ⚡ Najprościej jak się da - 3 kroki

Jeśli **nie chcesz** nic zmieniać w kodzie, możesz wdrożyć stronę **od razu**.  
Wszystkie zmiany (telefon, zdjęcia, domenę) zrobisz **później**.

---

## Krok 1: Pobierz projekt

1. W Figma Make kliknij przycisk **"Download"** (u góry po prawej)
2. Zapisz plik ZIP na dysku (np. w `Pobrane`)
3. Rozpakuj ZIP (prawy przycisk → "Wypakuj tutaj")
4. Otwórz folder - zobaczysz pliki projektu

---

## Krok 2: Wrzuć na GitHub

### A) Utwórz konto GitHub (jeśli nie masz)
1. Wejdź na [github.com](https://github.com)
2. Kliknij **"Sign up"**
3. Uzupełnij formularz (email, hasło, nazwa użytkownika)
4. Zweryfikuj email

### B) Utwórz nowe repozytorium

1. Zaloguj się na GitHub
2. Kliknij **zielony przycisk "New"** (lub "+" → "New repository")
3. Wypełnij:
   - **Repository name:** `adwokat-luty` (lub dowolna nazwa)
   - **Description:** "Strona internetowa adwokata"
   - **Visibility:** Wybierz **Private** (prywatne) lub **Public** (publiczne)
   - ❌ **NIE zaznaczaj** "Add a README file"
4. Kliknij **"Create repository"**

### C) Wypchnij kod na GitHub

🎯 **POLECAM: GitHub Desktop (БEZ terminala!)** ⭐

**Szczegółowa instrukcja:** Zobacz plik `JAK-WRZUCIC-NA-GITHUB-BEZ-TERMINALA.md`

**Krótka wersja:**
1. Pobierz [GitHub Desktop](https://desktop.github.com)
2. Zainstaluj i zaloguj się
3. Kliknij **"Add" → "Add existing repository"**
4. Wybierz folder z projektem
5. Kliknij **"Create repository"** (jeśli poprosi)
6. Wpisz commit message: "Pierwsza wersja strony"
7. Kliknij **"Commit to main"**
8. Kliknij **"Publish repository"**

✅ **Gotowe! Kod jest na GitHub!**

---

**Alternatywnie: Terminal (dla zaawansowanych)**

Jeśli KONIECZNIE chcesz użyć terminala:

1. **Otwórz terminal** w folderze projektu (jak? → Zobacz `JAK-OTWORZYC-TERMINAL.md`)
2. Wpisz komendy (po kolei, po każdej Enter):

```bash
git init
git add .
git commit -m "Pierwsza wersja strony"
git branch -M main
git remote add origin https://github.com/TWOJA-NAZWA/adwokat-luty.git
git push -u origin main
```

**⚠️ Zamień:** `TWOJA-NAZWA` na swoją nazwę użytkownika GitHub!

**Przykład:**
Jeśli Twoja nazwa to `jan-kowalski`, wpisz:
```bash
git remote add origin https://github.com/jan-kowalski/adwokat-luty.git
```

**Gotowe!** Kod jest na GitHub ✅

---

## Krok 3: Wdróż na Netlify (SUPER ŁATWE!)

### A) Utwórz konto Netlify

1. Wejdź na [netlify.com](https://www.netlify.com)
2. Kliknij **"Sign up"**
3. Wybierz **"Sign up with GitHub"** (autoryzuj)

### B) Dodaj nową stronę

1. Po zalogowaniu kliknij **"Add new site"**
2. Wybierz **"Import an existing project"**
3. Wybierz **"Deploy with GitHub"**
4. Netlify poprosi o dostęp - kliknij **"Authorize Netlify"**
5. Znajdź i **wybierz** swoje repozytorium (`adwokat-luty`)

### C) Konfiguracja (automatyczna)

Netlify samo wypełni:
- **Branch to deploy:** `main` ✅
- **Build command:** `npm run build` ✅
- **Publish directory:** `dist` ✅

**Kliknij "Deploy [nazwa-strony]"**

### D) Poczekaj (1-3 minuty)

Netlify zbuduje stronę. Zobaczysz:
- ⏳ Building... (żółty)
- ✅ Published (zielony) - **GOTOWE!**

---

## 🎉 STRONA JEST LIVE!

Twoja strona jest dostępna pod adresem:
```
https://LOSOWA-NAZWA.netlify.app
```

**Przykład:** `https://dancing-unicorn-abc123.netlify.app`

---

## 🔧 Co możesz teraz zrobić?

### 1. Zmień nazwę strony (opcjonalnie)

W panelu Netlify:
1. Kliknij **"Site settings"**
2. Kliknij **"Change site name"**
3. Wpisz np. `adwokat-luty`
4. Teraz strona będzie pod: `https://adwokat-luty.netlify.app` ✅

### 2. Zmień dane kontaktowe

Zobacz plik: `INSTRUKCJA-KROK-PO-KROKU.md`

Gdy zmienisz coś w plikach:
1. Zapisz (`Ctrl+S`)
2. Wrzuć zmiany na GitHub (w GitHub Desktop: "Commit" → "Push")
3. Netlify **automatycznie** wdroży nową wersję (2-3 minuty)

### 3. Dodaj własną domenę

Zobacz: `DEPLOYMENT.md` → sekcja "Własna domena"

---

## ✅ Checklist

- [ ] Projekt pobrany z Figma Make
- [ ] Repozytorium utworzone na GitHub
- [ ] Kod wypchnięty na GitHub
- [ ] Konto Netlify utworzone
- [ ] Strona wdrożona na Netlify
- [ ] Strona działa (kliknij URL i sprawdź)

---

## 🆘 Problemy?

### ❌ "npm: command not found"
**Rozwiązanie:** To normalne! Netlify zainstaluje to za Ciebie. Ignoruj ten błąd.

### ❌ Build failed na Netlify
**Rozwiązanie:**
1. Sprawdź logi build (w panelu Netlify)
2. Upewnij się że wypchnąłeś WSZYSTKIE pliki na GitHub
3. Sprawdź czy `package.json` istnieje w repozytorium

### ❌ Strona pokazuje błąd 404
**Rozwiązanie:**
1. Sprawdź czy build się zakończył (zielony checkmark)
2. Poczekaj 5 minut i odśwież stronę
3. Wyczyść cache przeglądarki (`Ctrl+Shift+R`)

### ❌ Zdjęcia się nie wyświetlają
**Rozwiązanie:**
To normalne jeśli nie dodałeś swoich zdjęć. Strona używa zdjęć z Unsplash - powinny działać.

---

## 📞 Dalsze kroki (po wdrożeniu)

1. **Google Search Console** - dodaj stronę (zobacz `SEO-GUIDE.md`)
2. **Google My Business** - utwórz wizytówkę
3. **Własne zdjęcia** - dodaj (zobacz `INSTRUKCJA-KROK-PO-KROKU.md`)
4. **Zmień dane kontaktowe** - jeśli potrzeba

---

## 🎊 GRATULACJE!

Twoja strona jest **LIVE** i dostępna w internecie! 🚀

Teraz możesz:
- Udostępnić link klientom
- Dodać do wizytówek
- Promować w Google

**URL strony:** _____________________________________

**Data wdrożenia:** _____________________________________

---

**Potrzebujesz pomocy?** Zapytaj konkretnie czego nie rozumiesz! 😊