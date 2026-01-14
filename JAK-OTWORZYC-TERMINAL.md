# 💻 Jak otworzyć terminal na swoim komputerze?

## ⚠️ UWAGA: GitHub to strona internetowa, nie ma tam terminala!

**Terminal otwierasz NA SWOIM KOMPUTERZE** (Windows, Mac lub Linux).

---

## 🪟 **WINDOWS** (3 sposoby)

### Sposób 1: Najłatwiejszy - z folderu projektu

1. **Otwórz folder** z projektem (rozpakowany z Figma Make)
2. **Kliknij w pasek adresu** (tam gdzie jest ścieżka folderu)
3. **Wpisz:** `cmd` i naciśnij **Enter**
4. ✅ Terminal się otworzy w tym folderze!

**GIF (wyobraź sobie):**
```
C:\Users\Twoja_Nazwa\Downloads\adwokat-luty  ← Kliknij tutaj
↓
cmd  ← Wpisz to
↓
Enter ← Naciśnij
↓
Terminal otwarty! ✅
```

---

### Sposób 2: Prawy przycisk myszy (Windows 11)

1. **Otwórz folder** z projektem
2. **Kliknij prawy przycisk myszy** w pustym miejscu
3. Wybierz **"Otwórz w terminalu"** (lub "Open in Terminal")
4. ✅ Terminal się otworzy!

**UWAGA:** Jeśli nie widzisz tej opcji, masz Windows 10 - użyj Sposobu 1.

---

### Sposób 3: Menu Start

1. Naciśnij klawisz **Windows** (na klawiaturze, lewy dolny róg)
2. Wpisz: `cmd` lub `powershell`
3. Naciśnij **Enter**
4. Terminal się otworzy (ale NIE w folderze projektu!)
5. **Musisz przejść do folderu:**
   ```
   cd C:\Users\Twoja_Nazwa\Downloads\adwokat-luty
   ```
   (Zamień ścieżkę na swoją!)

---

## 🍎 **MAC** (2 sposoby)

### Sposób 1: Najłatwiejszy - z folderu projektu

1. **Otwórz Finder**
2. **Znajdź folder** z projektem
3. **Kliknij prawy przycisk myszy** na folderze
4. Przytrzymaj klawisz **Option** (⌥)
5. Zobaczysz opcję: **"Copy [folder name] as Pathname"**
6. Otwórz **Terminal** (Aplikacje → Narzędzia → Terminal)
7. Wpisz: `cd ` (ze spacją na końcu)
8. Naciśnij **Cmd+V** (wklej ścieżkę)
9. Naciśnij **Enter**

---

### Sposób 2: Launchpad

1. Naciśnij **Cmd+Spacja** (otworzy się Spotlight)
2. Wpisz: `terminal`
3. Naciśnij **Enter**
4. Terminal się otworzy
5. **Przejdź do folderu:**
   ```bash
   cd ~/Downloads/adwokat-luty
   ```

---

## 🐧 **LINUX** (Ubuntu, Mint, Fedora...)

### Sposób 1: Najłatwiejszy - z folderu projektu

1. **Otwórz menedżer plików**
2. **Znajdź folder** z projektem
3. **Kliknij prawy przycisk myszy** w pustym miejscu
4. Wybierz **"Open in Terminal"** (lub "Otwórz w terminalu")
5. ✅ Terminal się otworzy!

---

### Sposób 2: Skrót klawiaturowy

1. Naciśnij **Ctrl+Alt+T**
2. Terminal się otworzy
3. **Przejdź do folderu:**
   ```bash
   cd ~/Downloads/adwokat-luty
   ```

---

## ✅ Jak sprawdzić czy jestem w dobrym folderze?

Po otwarciu terminala wpisz:

### Windows:
```
dir
```

### Mac/Linux:
```bash
ls
```

Powinieneś zobaczyć listę plików:
```
package.json
README.md
index.html
src/
public/
...
```

✅ **Jeśli widzisz te pliki - jesteś w dobrym miejscu!**

❌ **Jeśli NIE widzisz - musisz przejść do folderu projektu:**

```bash
cd ŚCIEŻKA/DO/FOLDERU
```

---

## 🆘 Nadal problem?

### Opcja 1: Użyj GitHub Desktop (БEZ terminala!)

**Polecam!** Przeczytaj plik: `JAK-WRZUCIC-NA-GITHUB-BEZ-TERMINALA.md`

To dużo łatwiejsze - klikasz przyciski zamiast pisać komendy!

---

### Opcja 2: Zrób zrzut ekranu i zapytaj

Jeśli nadal nie możesz otworzyć terminala:
1. Zrób zrzut ekranu (PrintScreen)
2. Opisz co dokładnie robisz
3. Napisz jaką masz wersję Windows/Mac/Linux

---

## 🎓 Podstawowe komendy terminala

Gdy już otworzysz terminal:

### Sprawdź gdzie jesteś:
```bash
pwd    # Mac/Linux
cd     # Windows
```

### Zobacz co jest w folderze:
```bash
ls     # Mac/Linux
dir    # Windows
```

### Przejdź do folderu:
```bash
cd nazwa_folderu
```

### Wróć do folderu wyżej:
```bash
cd ..
```

### Wyczyść ekran:
```bash
clear   # Mac/Linux
cls     # Windows
```

---

## 💡 Pro Tip

**Nie lubisz terminala?** Użyj **GitHub Desktop**!

To graficzny program - klikasz przyciski, nie piszesz komend.

**Instrukcja:** `JAK-WRZUCIC-NA-GITHUB-BEZ-TERMINALA.md`

---

## 📞 Pytania?

Jeśli coś jest niejasne, zapytaj konkretnie:
- Jaki masz system? (Windows 10/11, Mac, Linux?)
- Co widzisz po otwarciu terminala?
- Jaki błąd się pojawia?

Pomogę krok po kroku! 😊
