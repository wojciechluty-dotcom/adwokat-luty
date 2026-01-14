# Współpraca przy projekcie

Dziękujemy za zainteresowanie rozwojem strony Adwokata Wojciecha Luty!

## 🚀 Jak zacząć?

### 1. Sklonuj repozytorium
```bash
git clone https://github.com/TWOJA-NAZWA-UZYTKOWNIKA/adwokat-luty.git
cd adwokat-luty
```

### 2. Zainstaluj zależności
```bash
npm install
# lub
pnpm install
```

### 3. Uruchom serwer deweloperski
```bash
npm run dev
```

Strona będzie dostępna pod adresem: `http://localhost:5173`

---

## 📝 Zasady modyfikacji kodu

### Struktura projektu

```
adwokat-luty/
├── public/              # Pliki statyczne (zdjęcia, favicon, sitemap)
├── src/
│   ├── app/
│   │   ├── components/  # Komponenty React
│   │   │   ├── ui/      # Komponenty UI (shadcn)
│   │   │   ├── ContactForm.tsx
│   │   │   ├── PrivacyPolicy.tsx
│   │   │   └── ...
│   │   └── App.tsx      # Główny komponent aplikacji
│   ├── config/          # Konfiguracja (dane kontaktowe)
│   └── styles/          # Style CSS
├── index.html           # HTML z meta tagami SEO
├── netlify.toml         # Konfiguracja Netlify
├── sitemap.xml          # Mapa strony dla Google
└── robots.txt           # Instrukcje dla robotów
```

### Konwencje nazewnictwa

- **Komponenty**: PascalCase (np. `ContactForm.tsx`)
- **Pliki konfiguracyjne**: camelCase (np. `contact.ts`)
- **Style**: kebab-case (np. `theme.css`)
- **Zmienne**: camelCase (np. `lawyerPortrait1`)
- **Stałe**: UPPER_SNAKE_CASE (np. `MAX_FILE_SIZE`)

### Stylowanie

- Używamy **Tailwind CSS v4**
- Preferencja dla utility classes inline
- Custom CSS tylko gdy Tailwind nie wystarcza
- Theme colors z `/src/styles/theme.css`

---

## 🔧 Typowe zadania

### Zmiana danych kontaktowych

Edytuj plik `/src/config/contact.ts`:

```typescript
export const contactInfo = {
  contact: {
    phone: "+48 XXX XXX XXX",
    email: "nowy.email@example.com"
  },
  // ...
};
```

### Zmiana zdjęć

1. Dodaj nowe zdjęcia do folderu `public/`
2. Zaktualizuj ścieżki w `/src/app/App.tsx`:
   ```typescript
   const lawyerPortrait1 = "/twoje-zdjecie.jpg";
   ```

### Aktualizacja treści

Edytuj plik `/src/app/App.tsx` i znajdź odpowiednią sekcję:
- Hero: ~linia 50
- O mnie: ~linia 150
- Usługi: ~linia 300
- Kontakt: ~linia 600

### Dodanie nowej sekcji

1. Stwórz nowy komponent w `/src/app/components/`
2. Zaimportuj w `App.tsx`
3. Dodaj do odpowiedniego miejsca w JSX
4. Dodaj link w nawigacji

---

## 🌿 Git Workflow

### Tworzenie zmian

1. **Utwórz nowy branch** (jeśli pracujesz w zespole):
   ```bash
   git checkout -b feature/nazwa-funkcji
   # lub
   git checkout -b fix/nazwa-poprawki
   ```

2. **Wykonaj zmiany** i testuj lokalnie

3. **Commit ze znaczącą wiadomością**:
   ```bash
   git add .
   git commit -m "feat: dodanie sekcji FAQ"
   # lub
   git commit -m "fix: naprawa responsywności na mobile"
   ```

4. **Push do GitHub**:
   ```bash
   git push origin feature/nazwa-funkcji
   ```

5. **Utwórz Pull Request** (jeśli pracujesz w zespole)

### Konwencja commitów

Używamy [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` - nowa funkcjonalność
- `fix:` - naprawa błędu
- `docs:` - zmiany w dokumentacji
- `style:` - formatowanie, brak zmian w logice
- `refactor:` - refaktoryzacja kodu
- `test:` - dodanie testów
- `chore:` - zmiany w build, dependencies

**Przykłady:**
```bash
git commit -m "feat: dodanie sekcji z opiniami klientów"
git commit -m "fix: naprawa formularza kontaktowego na iOS"
git commit -m "docs: aktualizacja README z nowymi instrukcjami"
git commit -m "style: poprawka wcięć w App.tsx"
```

---

## ✅ Checklist przed commitem

- [ ] Kod działa lokalnie (`npm run dev`)
- [ ] Build przechodzi bez błędów (`npm run build`)
- [ ] Brak błędów TypeScript
- [ ] Strona jest responsywna (sprawdź mobile, tablet, desktop)
- [ ] Wszystkie linki działają
- [ ] Formularz kontaktowy działa
- [ ] SEO meta tagi są aktualne
- [ ] Kod jest sformatowany i czytelny
- [ ] Commit message jest opisowy

---

## 🧪 Testowanie

### Testowanie lokalne

```bash
# Serwer deweloperski
npm run dev

# Build produkcyjny
npm run build

# Preview buildu
npm run preview
```

### Testowanie responsywności

1. Otwórz DevTools (F12)
2. Przełącz na widok mobile (Ctrl+Shift+M)
3. Przetestuj różne rozdzielczości:
   - iPhone SE (375px)
   - iPhone 12 Pro (390px)
   - iPad (768px)
   - Desktop (1280px+)

### Testowanie SEO

- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)

---

## 📚 Pomocne zasoby

### Dokumentacja
- [React](https://react.dev)
- [TypeScript](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Vite](https://vitejs.dev)
- [Netlify](https://docs.netlify.com)

### Narzędzia
- [Lucide Icons](https://lucide.dev) - ikony
- [Shadcn/ui](https://ui.shadcn.com) - komponenty UI
- [Unsplash](https://unsplash.com) - darmowe zdjęcia

---

## 🐛 Zgłaszanie błędów

Jeśli znajdziesz błąd:

1. Sprawdź czy nie został już zgłoszony (Issues na GitHub)
2. Utwórz nowy Issue z:
   - Opisem problemu
   - Krokami do reprodukcji
   - Oczekiwanym zachowaniem
   - Zrzutami ekranu (jeśli potrzebne)
   - Informacją o przeglądarce i systemie

---

## 💡 Sugestie funkcjonalności

Chcesz zaproponować nową funkcjonalność?

1. Otwórz Issue na GitHub
2. Opisz funkcjonalność i jej korzyści
3. Dodaj mockupy/szkice (jeśli masz)
4. Poczekaj na feedback

---

## 📞 Kontakt

W razie pytań skontaktuj się z zespołem:

- Email: Wojciech.luty@wsla.pl
- Telefon: +48 694 491 095

---

**Dziękujemy za wkład w rozwój projektu!** 🙏
