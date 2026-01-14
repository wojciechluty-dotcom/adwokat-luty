# 📝 INSTRUKCJA KROK PO KROKU - Dokładnie co zmienić

## 🎯 **NIE MUSISZ TEGO ROBIĆ TERAZ!**

Możesz **najpierw** wdrożyć stronę z domyślnymi ustawieniami, a **potem** zmienić te rzeczy.

Ale jeśli chcesz zmienić teraz, oto dokładna instrukcja:

---

## Krok 1: Zmień URL GitHub (opcjonalnie)

### Gdzie? 
Plik: `/package.json`

### Co zmienić?
Otwórz plik i znajdź linię 9 (możesz użyć `Ctrl+G` w VS Code i wpisać "9"):

**PRZED:**
```json
"url": "https://github.com/TWOJA-NAZWA-UZYTKOWNIKA/adwokat-luty.git"
```

**PO:** (zamień `jan-kowalski` na swoją nazwę użytkownika GitHub)
```json
"url": "https://github.com/jan-kowalski/adwokat-luty.git"
```

**PRZYKŁAD:**
- Jeśli Twoja nazwa użytkownika GitHub to `wojtekluty`, zmień na:
  ```json
  "url": "https://github.com/wojtekluty/adwokat-luty.git"
  ```

### Jak znaleźć swoją nazwę użytkownika GitHub?
1. Zaloguj się na GitHub.com
2. Kliknij swoją ikonkę w prawym górnym rogu
3. Zobacz nazwę pod Twoim zdjęciem - to jest Twoja nazwa użytkownika

---

## Krok 2: Zmień URL domeny (TYLKO jeśli już masz domenę!)

### ⚠️ UWAGA: Możesz pominąć ten krok!

Jeśli **NIE MASZ** jeszcze własnej domeny (np. `adwokat-luty.pl`), **zostaw domyślny URL** (`adwokat-luty.netlify.app`).

### Jeśli MASZ domenę, zmień w 3 plikach:

#### A) Plik `/index.html`

Znajdź WSZYSTKIE wystąpienia (użyj `Ctrl+H` w VS Code):

**Znajdź:** `adwokat-luty.netlify.app`  
**Zamień na:** `twoja-domena.pl` (np. `adwokat-luty.pl`)

Kliknij "Replace All" (Zamień wszystkie)

---

#### B) Plik `/public/sitemap.xml`

**Znajdź:** `https://adwokat-luty.netlify.app`  
**Zamień na:** `https://twoja-domena.pl`

Użyj `Ctrl+H` i "Replace All"

---

#### C) Plik `/public/robots.txt`

Znajdź linię:
```
Sitemap: https://adwokat-luty.netlify.app/sitemap.xml
```

Zamień na:
```
Sitemap: https://twoja-domena.pl/sitemap.xml
```

---

## Krok 3: Dodaj własne zdjęcia (opcjonalnie)

### Masz własne zdjęcia? Tak ✅ / Nie ❌

#### Jeśli TAK:

1. **Przygotuj zdjęcia:**
   - Nazwij je: `portrait1.jpg`, `portrait2.jpg`, `portrait3.jpg`, `logo.png`
   - Umieść w folderze głównym projektu (tymczasowo)

2. **Utwórz folder `/public/`:**
   - W głównym katalogu projektu (tam gdzie jest `package.json`)
   - Kliknij prawym przyciskiem myszy → "New Folder" → nazwij: `public`

3. **Przenieś zdjęcia:**
   - Przeciągnij swoje 4 pliki do folderu `/public/`
   - Struktura powinna wyglądać tak:
     ```
     public/
     ├── portrait1.jpg
     ├── portrait2.jpg
     ├── portrait3.jpg
     └── logo.png
     ```

4. **Zaktualizuj ścieżki w kodzie:**

   **Plik:** `/src/app/App.tsx`
   
   Znajdź linie 10-14 (będą wyglądać mniej więcej tak):
   ```typescript
   const lawyerPortrait1 = "https://images.unsplash.com/...";
   const lawyerPortrait2 = "https://images.unsplash.com/...";
   const lawyerPortrait3 = "https://images.unsplash.com/...";
   const logoImage = "https://images.unsplash.com/...";
   ```

   **ZAMIEŃ NA:**
   ```typescript
   const lawyerPortrait1 = "/portrait1.jpg";
   const lawyerPortrait2 = "/portrait2.jpg";
   const lawyerPortrait3 = "/portrait3.jpg";
   const logoImage = "/logo.png";
   ```

#### Jeśli NIE (nie masz zdjęć):

**Nic nie rób!** Strona będzie używać zdjęć z Unsplash (już są w kodzie).

---

## Krok 4: Sprawdź dane kontaktowe

### Plik: `/src/config/contact.ts`

Otwórz ten plik i sprawdź czy dane są poprawne:

```typescript
export const contactInfo = {
  lawyer: {
    firstName: "Wojciech",          // ← Imię (sprawdź)
    lastName: "Luty",                // ← Nazwisko (sprawdź)
  },

  contact: {
    phone: "+48 694 491 095",        // ← TELEFON - czy poprawny?
    email: "Wojciech.luty@wsla.pl",  // ← EMAIL - czy poprawny?
  },

  address: {
    street: "ul. Krupnicza 14/9",    // ← ADRES - czy poprawny?
    postalCode: "31-123",            // ← KOD POCZTOWY
    city: "Kraków",                  // ← MIASTO
  },
};
```

**Jeśli coś jest źle, po prostu zmień wartość między `" "`**

Przykład:
- Jeśli telefon to `+48 600 123 456`, zmień:
  ```typescript
  phone: "+48 600 123 456",
  ```

---

## ✅ To wszystko! Teraz:

### Opcja A: Zapisz zmiany lokalnie

1. Zapisz wszystkie pliki (`Ctrl+S` lub File → Save All)
2. Przetestuj stronę lokalnie:
   ```bash
   npm run dev
   ```
3. Otwórz `http://localhost:5173` i sprawdź czy wszystko działa

### Opcja B: Wrzuć na GitHub bez testowania

Jeśli nie masz zainstalowanego Node.js, po prostu:
1. Zapisz pliki
2. Przejdź do instrukcji wdrożenia w `QUICKSTART.md`

---

## 🆘 Nadal nie rozumiesz?

**Możesz POMINĄĆ wszystkie te kroki!** 

Wystarczy że:
1. Pobierzesz projekt (Download w Figma Make)
2. Wrzucisz na GitHub (instrukcja w `QUICKSTART.md`)
3. Wdrożysz na Netlify

**Te zmiany możesz zrobić PÓŹNIEJ**, gdy strona już będzie działać!

---

## 🎓 Słowniczek

- **URL** = adres strony (np. `https://adwokat-luty.pl`)
- **GitHub** = miejsce gdzie trzymasz kod strony
- **Netlify** = serwis który publikuje Twoją stronę w internecie
- **Domena** = własny adres (np. `adwokat-luty.pl`), trzeba kupić osobno
- **`/public/`** = folder na zdjęcia i pliki publiczne
- **`package.json`** = plik konfiguracyjny projektu

---

## 📞 Dalsze pytania?

Jeśli nadal coś jest niejasne, zapytaj konkretnie:
- "Jak zmienić telefon?"
- "Gdzie dodać logo?"
- "Jak zmienić nazwę domeny?"

Odpowiem krok po kroku! 😊
