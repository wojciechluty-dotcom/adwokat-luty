# 🎉 Jak wrzucić projekt na GitHub BEZ TERMINALA

## ✅ Najprostsza metoda - GitHub Desktop (polecam!)

### Krok 1: Pobierz GitHub Desktop

1. Wejdź na: [https://desktop.github.com](https://desktop.github.com)
2. Kliknij **"Download for Windows"** (lub Mac/Linux)
3. Zainstaluj program (klikaj "Dalej", "Dalej", "Zainstaluj")
4. Uruchom GitHub Desktop

---

### Krok 2: Zaloguj się

1. Po uruchomieniu zobaczysz ekran powitalny
2. Kliknij **"Sign in to GitHub.com"**
3. Wpisz swój login i hasło do GitHub
4. Kliknij **"Authorize desktop"**

✅ **Jesteś zalogowany!**

---

### Krok 3: Dodaj projekt

1. W GitHub Desktop kliknij **"File"** (lewy górny róg)
2. Wybierz **"Add local repository"** (Dodaj lokalny projekt)
3. Kliknij **"Choose..."** (Wybierz...)
4. Znajdź i wybierz folder z Twoim projektem (rozpakowany z Figma Make)
5. Kliknij **"Select Folder"** (Wybierz folder)

**UWAGA:** Jeśli zobaczysz błąd "This directory does not appear to be a Git repository":
1. Kliknij **"create a repository"** (utwórz repozytorium)
2. Pojawi się okno - **NIE ZMIENIAJ NICZEGO**
3. Kliknij **"Create repository"**

✅ **Projekt został dodany!**

---

### Krok 4: Pierwszy commit (zapisanie zmian)

Teraz zobaczysz listę plików po lewej stronie.

1. W polu **"Summary"** (na dole, po lewej) wpisz:
   ```
   Pierwsza wersja strony
   ```

2. Kliknij niebieski przycisk **"Commit to main"**

✅ **Zmiany zapisane lokalnie!**

---

### Krok 5: Opublikuj na GitHub

1. W górnej części zobaczysz przycisk **"Publish repository"**
2. Kliknij ten przycisk
3. Pojawi się okno z opcjami:
   - **Name:** zostaw `adwokat-luty` (lub zmień nazwę)
   - **Description:** wpisz "Strona internetowa adwokata" (opcjonalnie)
   - **Keep this code private:** zaznacz jeśli chcesz prywatne repo ✅
4. Kliknij **"Publish repository"**

⏳ **Czekaj 10-30 sekund...**

✅ **GOTOWE! Kod jest na GitHub!** 🎉

---

### Krok 6: Sprawdź czy działa

1. Wejdź na [github.com](https://github.com)
2. Zaloguj się
3. Kliknij swoją ikonkę (prawy górny róg)
4. Wybierz **"Your repositories"**
5. Powinieneś zobaczyć **"adwokat-luty"** na liście!

✅ **Wszystko działa!**

---

## 🔄 Jak zaktualizować kod (gdy coś zmienisz)?

### Krok 1: Edytuj pliki
Otwórz pliki w edytorze (VS Code, Notepad++), zmień co chcesz, zapisz.

### Krok 2: Otwórz GitHub Desktop
Zobaczysz listę zmienionych plików po lewej.

### Krok 3: Commit (zapisz zmiany)
1. W polu **"Summary"** wpisz co zmieniłeś, np:
   ```
   Zmiana numeru telefonu
   ```
2. Kliknij **"Commit to main"**

### Krok 4: Push (wypchnij na GitHub)
1. U góry zobaczysz przycisk **"Push origin"**
2. Kliknij ten przycisk

⏳ **Czekaj 5 sekund...**

✅ **Zmiany są na GitHub!**

**BONUS:** Netlify automatycznie wdroży nową wersję strony (2-3 minuty)!

---

## 🆘 Częste problemy

### ❌ "This directory does not appear to be a Git repository"

**Rozwiązanie:**
1. Kliknij link **"create a repository"** w komunikacie błędu
2. Kliknij **"Create repository"**
3. Gotowe!

---

### ❌ Nie widzę przycisku "Publish repository"

**Rozwiązanie:**
1. Sprawdź czy zrobiłeś **Commit** (Krok 4)
2. Jeśli tak, przycisk powinien się pojawić

---

### ❌ Pojawia się błąd przy publikacji

**Rozwiązanie:**
1. Sprawdź połączenie z internetem
2. Sprawdź czy jesteś zalogowany (Account → Sign out → Sign in)
3. Spróbuj ponownie

---

## 🎓 Słowniczek

- **Repository** = Projekt/folder z kodem
- **Commit** = Zapisanie zmian (jak "Save" w grze)
- **Push** = Wysłanie zmian na GitHub (z komputera do internetu)
- **Pull** = Pobranie zmian z GitHub (z internetu na komputer)

---

## ✅ Gotowe!

Teraz możesz przejść do wdrożenia na Netlify!

**Następny krok:** Otwórz plik `WDROZENIE-BEZ-ZMIAN.md` i przejdź do "Krok 3: Wdróż na Netlify"

---

## 💡 Pro Tip

GitHub Desktop jest **dużo łatwiejszy** niż terminal!
- Widzisz co się dzieje (graficzny interfejs)
- Nie musisz pamiętać komend
- Trudniej o błąd

**Polecam używać GitHub Desktop zamiast terminala!** 👍
