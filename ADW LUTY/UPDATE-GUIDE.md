# 🔄 Jak aktualizować stronę?

Ten przewodnik pokazuje jak wprowadzać zmiany na stronie po jej wdrożeniu.

---

## Szybkie linki do najczęstszych zmian

1. [Zmiana numeru telefonu lub emaila](#1-zmiana-danych-kontaktowych)
2. [Zmiana tekstu na stronie](#2-zmiana-tekstu-na-stronie)
3. [Dodanie nowej usługi](#3-dodanie-nowej-usługi)
4. [Zmiana zdjęć](#4-zmiana-zdjęć)
5. [Aktualizacja statystyk](#5-aktualizacja-statystyk)
6. [Dodanie nowej sekcji](#6-dodanie-nowej-sekcji)

---

## 🔧 Podstawowy workflow (dla każdej zmiany)

```bash
# 1. Otwórz projekt w edytorze (VS Code)
cd adwokat-luty

# 2. Upewnij się że masz najnowszą wersję
git pull

# 3. Wprowadź zmiany w plikach (patrz niżej)

# 4. Przetestuj lokalnie
npm run dev
# Otwórz http://localhost:5173 i sprawdź zmiany

# 5. Zatwierdź zmiany
git add .
git commit -m "Opis zmian (np. Aktualizacja numeru telefonu)"

# 6. Wypchnij na GitHub
git push

# 7. Poczekaj 2-3 minuty → Netlify automatycznie wdroży zmiany
```

**WAŻNE:** Zawsze testuj lokalnie przed push'em!

---

## 1. Zmiana danych kontaktowych

### Telefon, email, adres, godziny

**Plik:** `/src/config/contact.ts`

```typescript
export const contactInfo = {
  contact: {
    phone: "+48 XXX XXX XXX",        // ← ZMIEŃ TUTAJ
    email: "nowy.email@wsla.pl",     // ← ZMIEŃ TUTAJ
  },
  
  address: {
    street: "ul. Nowa 1/1",          // ← ZMIEŃ TUTAJ
    postalCode: "31-999",
    city: "Kraków",
  },
  
  openingHours: {
    weekdays: "Pon-Pt: 9:00 - 18:00", // ← ZMIEŃ TUTAJ
  }
};
```

**Po zmianie:**
1. Zapisz plik
2. Przetestuj (`npm run dev`)
3. Push na GitHub

**Gdzie jeszcze zaktualizować:**
- Google My Business (ręcznie)
- Katalogi prawnicze (jeśli jesteś zarejestrowany)

---

## 2. Zmiana tekstu na stronie

### Nagłówki, opisy, paragrafy

**Plik:** `/src/app/App.tsx`

**Przykład - zmiana nagłówka Hero:**

Znajdź linię ~70:
```tsx
<h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
  Adwokat <span className="text-amber-400">Wojciech Luty</span>
</h1>
```

Zmień tekst:
```tsx
<h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
  Twój nowy nagłówek <span className="text-amber-400">tutaj</span>
</h1>
```

**Przykład - zmiana opisu w sekcji "O mnie":**

Znajdź linię ~200:
```tsx
<p className="text-gray-600 mb-4">
  Jestem adwokatem z ponad 10-letnim doświadczeniem...
</p>
```

Zmień treść między `<p>` i `</p>`.

**Szybkie wyszukiwanie w VS Code:**
- `Ctrl+F` (Windows) lub `Cmd+F` (Mac)
- Wpisz fragment tekstu do znalezienia
- Zmień i zapisz

---

## 3. Dodanie nowej usługi

**Plik:** `/src/app/App.tsx`

Znajdź sekcję "Services" (~linia 300-400)

**Skopiuj istniejącą kartę usługi:**

```tsx
<Card className="p-8 hover:shadow-xl transition-shadow border-t-4 border-t-rose-600">
  <div className="w-14 h-14 bg-rose-100 rounded-full flex items-center justify-center mb-6">
    <Heart className="w-7 h-7 text-rose-700" />
  </div>
  <h3 className="text-xl text-slate-800 mb-4">
    Nazwa nowej usługi
  </h3>
  <p className="text-gray-600">
    Opis nowej usługi...
  </p>
</Card>
```

**Zmień:**
- `border-t-rose-600` → kolor (np. `border-t-blue-600`)
- `bg-rose-100` → kolor tła ikony
- `Heart` → ikona (sprawdź [Lucide Icons](https://lucide.dev))
- Tekst nagłówka i opisu

**Importuj nową ikonę** (jeśli potrzeba) na początku pliku:
```tsx
import { Heart, Shield, ..., NowaIkona } from 'lucide-react';
```

---

## 4. Zmiana zdjęć

### Opcja A: Użyj nowych zdjęć z Unsplash

**Plik:** `/src/app/App.tsx`

Znajdź linie 10-14:
```typescript
const lawyerPortrait1 = "https://images.unsplash.com/...";
const lawyerPortrait2 = "https://images.unsplash.com/...";
const lawyerPortrait3 = "https://images.unsplash.com/...";
```

Wejdź na [Unsplash.com](https://unsplash.com), znajdź nowe zdjęcie, skopiuj URL i wklej.

### Opcja B: Użyj własnych zdjęć

1. **Dodaj zdjęcia do `/public/`**
   ```
   /public/portrait1.jpg
   /public/portrait2.jpg
   /public/portrait3.jpg
   ```

2. **Zaktualizuj ścieżki:**
   ```typescript
   const lawyerPortrait1 = "/portrait1.jpg";
   const lawyerPortrait2 = "/portrait2.jpg";
   const lawyerPortrait3 = "/portrait3.jpg";
   ```

3. **Push na GitHub** - Netlify automatycznie wdroży

---

## 5. Aktualizacja statystyk

### Lata doświadczenia, liczba spraw

**Plik:** `/src/config/contact.ts`

```typescript
stats: {
  yearsOfExperience: "15+",     // ← ZMIEŃ TUTAJ
  casesCompleted: "1000+",      // ← ZMIEŃ TUTAJ
  successRate: "100%"
}
```

**Gdzie jeszcze:**
- `/src/app/App.tsx` - sekcja Hero (~linia 100)
- `/src/app/App.tsx` - sekcja "Dlaczego warto" (~linia 550)

Użyj `Ctrl+F` i wyszukaj "800+" lub "10+" aby znaleźć wszystkie wystąpienia.

---

## 6. Dodanie nowej sekcji

### Przykład: Dodanie sekcji "Opinie klientów"

**Plik:** `/src/app/App.tsx`

1. **Znajdź miejsce** (np. po sekcji "Dlaczego warto", przed "Kontakt")

2. **Dodaj nową sekcję:**

```tsx
{/* Testimonials Section */}
<section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl lg:text-5xl text-slate-800 mb-6">
        Opinie klientów
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Zobacz co mówią o mnie zadowoleni klienci
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      {/* Opinia 1 */}
      <Card className="p-6">
        <div className="flex items-center mb-4">
          <div className="text-amber-500">★★★★★</div>
        </div>
        <p className="text-gray-600 mb-4">
          "Profesjonalna pomoc w trudnym czasie. Polecam!"
        </p>
        <p className="text-sm text-gray-500">- Jan K.</p>
      </Card>

      {/* Skopiuj dla kolejnych opinii */}
    </div>
  </div>
</section>
```

3. **Dodaj link w nawigacji:**

Znajdź sekcję `<nav>` (~linia 40) i dodaj:
```tsx
<button
  onClick={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })}
  className="px-4 py-2 text-slate-700 hover:text-amber-700 transition-colors"
>
  Opinie
</button>
```

4. **Dodaj ID do sekcji:**
```tsx
<section id="testimonials" className="py-20...">
```

---

## 🎨 Zmiana kolorów

**Plik:** `/src/styles/theme.css`

```css
@theme {
  /* Główny kolor (aktualnie: ciemnoszary) */
  --color-slate-800: #1e293b;
  
  /* Kolor akcent (aktualnie: złoty) */
  --color-amber-700: #b45309;
  --color-amber-800: #92400e;
}
```

Lub zmień bezpośrednio w komponentach:
- `slate-800` → `blue-800` (niebieski)
- `amber-700` → `emerald-700` (zielony)
- `amber-800` → `teal-800` (morski)

[Zobacz wszystkie kolory Tailwind](https://tailwindcss.com/docs/customizing-colors)

---

## 📝 Aktualizacja SEO

### Zmiana title i description

**Plik:** `/index.html`

```html
<title>Nowy tytuł strony - do 60 znaków</title>
<meta name="description" content="Nowy opis - do 160 znaków">
```

**Plik:** `/public/sitemap.xml`

Zaktualizuj datę `<lastmod>`:
```xml
<lastmod>2026-02-01</lastmod>  <!-- Dzisiejsza data -->
```

**Po zmianie:**
- Push na GitHub
- Poczekaj na indeksację Google (2-7 dni)
- Sprawdź w Google Search Console

---

## 🐛 Rozwiązywanie problemów

### Problem: Zmiany nie są widoczne na stronie live

**Rozwiązanie:**
1. Sprawdź czy push przeszedł: `git status`
2. Sprawdź Netlify deploy log (deploys w panelu)
3. Wyczyść cache przeglądarki (`Ctrl+Shift+R`)
4. Sprawdź czy build się udał (brak błędów)

### Problem: Strona się nie buduje na Netlify

**Rozwiązanie:**
1. Sprawdź logi build w Netlify
2. Sprawdź czy lokalnie działa: `npm run build`
3. Sprawdź czy nie ma błędów TypeScript
4. Sprawdź czy wszystkie importy są poprawne

### Problem: Obrazki się nie wyświetlają

**Rozwiązanie:**
1. Sprawdź czy są w folderze `/public/`
2. Sprawdź ścieżki (zaczynają się od `/`)
3. Sprawdź wielkość plików (max 5MB)
4. Sprawdź format (jpg, png, svg)

---

## 💾 Backup przed większymi zmianami

Przed wprowadzeniem większych zmian:

```bash
# Utwórz branch z backup
git checkout -b backup-before-changes

# Push backup na GitHub
git push -u origin backup-before-changes

# Wróć do main i wprowadź zmiany
git checkout main
```

Jeśli coś pójdzie nie tak:
```bash
git checkout backup-before-changes
git checkout -b main
git push -f origin main
```

---

## 📞 Pomoc

Jeśli utkniesz:
1. Przeczytaj dokumentację w `/README.md`
2. Sprawdź `/DEPLOYMENT.md`
3. Szukaj błędu na Stack Overflow
4. Sprawdź logi w Netlify

---

## ✅ Checklist przed każdą aktualizacją

- [ ] Zmiany przetestowane lokalnie (`npm run dev`)
- [ ] Strona wygląda dobrze na desktop
- [ ] Strona wygląda dobrze na mobile
- [ ] Wszystkie linki działają
- [ ] Brak błędów w konsoli (F12)
- [ ] Commit message jest opisowy
- [ ] Push wykonany
- [ ] Netlify deploy zakończony sukcesem
- [ ] Strona live sprawdzona

---

**Pro tip:** Rób małe, częste zmiany zamiast jednej dużej aktualizacji. Łatwiej znaleźć błędy!

**Pamiętaj:** `git push` = automatyczny deployment. Zmiana na GitHub = zmiana na stronie live (po 2-3 min).

🎉 **Gotowe! Teraz możesz swobodnie aktualizować swoją stronę.**
