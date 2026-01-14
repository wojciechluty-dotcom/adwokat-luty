# ⚠️ WAŻNE - Naprawa struktury plików po pobraniu

## Problem

Podczas edycji, 2 pliki stały się folderami:
- `LICENSE` (powinien być plikiem)
- `public/_redirects` (powinien być plikiem)

## ✅ Jak naprawić (po pobraniu projektu)

### Krok 1: Usuń błędne foldery

Po rozpakowaniu projektu, otwórz folder główny i:

1. **Usuń folder `LICENSE/`** (cały folder z zawartością)
2. **Usuń folder `public/_redirects/`** (cały folder z zawartością)

### Krok 2: Utwórz poprawne pliki

#### A) Utwórz plik `LICENSE` (w głównym katalogu)

Kliknij prawym przyciskiem myszy w głównym folderze → "New File" → nazwij: `LICENSE` (bez rozszerzenia)

Otwórz ten plik i wklej:

```
Copyright © 2026 Adwokat Wojciech Luty
Wszystkie prawa zastrzeżone.

LICENCJA WŁASNOŚCIOWA

Niniejszy projekt stanowi własność intelektualną Adwokata Wojciecha Luty.

ZAKAZ:
1. Kopiowania, modyfikowania lub rozpowszechniania kodu źródłowego bez pisemnej zgody właściciela.
2. Używania kodu, treści lub elementów graficznych w innych projektach komercyjnych.
3. Udostępniania kodu osobom trzecim bez autoryzacji.

DOZWOLONE:
1. Przeglądanie kodu w celach edukacyjnych.
2. Modyfikacje wyłącznie na potrzeby strony Adwokata Wojciecha Luty.

W przypadku pytań dotyczących licencji, prosimy o kontakt:
Email: Wojciech.luty@wsla.pl
Telefon: +48 694 491 095

---

NOTA PRAWNA:
Wszelkie treści, grafiki, zdjęcia i teksty zamieszczone na stronie są chronione prawem autorskim.
Nieuprawnione użycie może skutkować odpowiedzialnością prawną.
```

Zapisz plik.

---

#### B) Utwórz plik `_redirects` (w folderze `public/`)

1. Otwórz folder `public/`
2. Kliknij prawym przyciskiem myszy → "New File" → nazwij: `_redirects` (bez rozszerzenia)

Otwórz ten plik i wklej:

```
# Netlify redirects for SPA (Single Page Application)
# This ensures all routes are handled by index.html

/*    /index.html   200
```

Zapisz plik.

---

### Krok 3: Sprawdź strukturę

Twoja struktura powinna teraz wyglądać tak:

```
adwokat-luty/
├── LICENSE                    ← PLIK (nie folder!)
├── README.md
├── package.json
├── ...
└── public/
    ├── _redirects             ← PLIK (nie folder!)
    ├── robots.txt
    ├── sitemap.xml
    └── favicon.svg
```

---

## ✅ Gotowe!

Teraz możesz kontynuować wdrożenie zgodnie z instrukcją w `WDROZENIE-BEZ-ZMIAN.md`.

---

## 🆘 Nadal problem?

Jeśli po pobraniu nadal widzisz foldery zamiast plików:

1. Usuń całą zawartość folderu `LICENSE/`
2. Usuń całą zawartość folderu `public/_redirects/`
3. Usuń same foldery
4. Utwórz poprawne pliki jak w instrukcji powyżej

---

**UWAGA:** Ten problem wystąpił tylko w środowisku Figma Make. Po poprawie wszystko będzie działać prawidłowo!
