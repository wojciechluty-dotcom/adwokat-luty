# 🔍 Poradnik SEO - Optymalizacja strony dla Google

## ✅ Co już jest zrobione

Twoja strona jest już zoptymalizowana pod SEO! Oto lista wdrożonych elementów:

### 1. Meta tagi ✅
- ✅ Title tag (tytuł w wynikach wyszukiwania)
- ✅ Meta description (opis pod linkiem)
- ✅ Meta keywords (słowa kluczowe)
- ✅ Canonical URL (preferowany adres strony)
- ✅ Language tag (język: polski)
- ✅ Viewport (responsywność)

### 2. Open Graph (Media społecznościowe) ✅
- ✅ Facebook sharing (jak wygląda link na FB)
- ✅ Twitter Card (jak wygląda link na X/Twitter)
- ✅ Image preview (obrazek podglądu)

### 3. Structured Data (JSON-LD) ✅
- ✅ Schema.org Attorney (informacje o adwokacie)
- ✅ Schema.org LegalService (kancelaria prawna)
- ✅ Schema.org WebPage (struktura strony)
- ✅ Breadcrumbs (ścieżka nawigacji)
- ✅ Geo coordinates (lokalizacja w Krakowie)

### 4. Pliki SEO ✅
- ✅ `sitemap.xml` - mapa strony dla Google
- ✅ `robots.txt` - instrukcje dla robotów
- ✅ `favicon.svg` - ikona strony

### 5. Optymalizacja techniczna ✅
- ✅ Semantyczne tagi HTML (`<nav>`, `<section>`, `<footer>`)
- ✅ Alt texts dla obrazków
- ✅ Responsive design (mobile-friendly)
- ✅ Fast loading (Vite + optymalizacja)

---

## 📝 Co powinieneś zrobić po wdrożeniu

### 1. Google Search Console (MUST HAVE)

**Dlaczego?** Google pozwoli Ci zobaczyć jak Twoja strona jest widoczna w wynikach wyszukiwania.

**Jak to zrobić:**

1. Przejdź do [Google Search Console](https://search.google.com/search-console)
2. Kliknij **"Dodaj zasób"**
3. Wpisz URL: `https://adwokat-luty.netlify.app` (lub Twoją domenę)
4. **Weryfikacja właściciela:**
   - Wybierz metodę: "Tag HTML"
   - Skopiuj meta tag
   - Dodaj go do `/index.html` w sekcji `<head>`
   - Push do GitHub → Netlify wdroży zmiany
   - Wróć do Search Console i kliknij "Weryfikuj"

5. **Prześlij sitemap:**
   - W menu wybierz **"Mapy witryny"**
   - Kliknij **"Dodaj nowy sitemap"**
   - Wpisz: `https://adwokat-luty.netlify.app/sitemap.xml`
   - Kliknij **"Prześlij"**

**Co to daje:**
- Google zacznie indeksować Twoją stronę
- Zobaczysz na jakie frazy ludzie Cię znajdują
- Dostaniesz raporty o błędach (jeśli będą)

---

### 2. Google My Business (MUST HAVE dla lokalnego SEO)

**Dlaczego?** 80% klientów szuka prawników w swojej okolicy. GMB sprawia, że pojawisz się w mapach Google.

**Jak to zrobić:**

1. Przejdź do [Google My Business](https://www.google.com/business/)
2. Kliknij **"Zarządzaj teraz"**
3. Wpisz nazwę firmy: **"Adwokat Wojciech Luty"**
4. Wybierz kategorię: **"Adwokat"** lub **"Kancelaria prawna"**
5. Dodaj adres: **ul. Krupnicza 14/9, 31-123 Kraków**
6. Zweryfikuj wizytówkę (pocztą lub telefonem)

**Wypełnij profil:**
- Dodaj zdjęcia (twoje, biura, logo)
- Godziny otwarcia
- Numer telefonu
- Link do strony
- Opis działalności (150-750 znaków)
- Atrybuty (np. "Konsultacje online", "Parking")

**Co to daje:**
- Pojawisz się na mapach Google
- Ludzie zobaczą opinię klientów
- Łatwiejszy kontakt (jeden klik → telefon)

---

### 3. Google Analytics (RECOMMENDED)

**Dlaczego?** Zobaczysz ile osób odwiedza stronę, skąd przychodzą, co robią.

**Jak to zrobić:**

1. Przejdź do [Google Analytics](https://analytics.google.com)
2. Utwórz konto
3. Dodaj nową właściwość (GA4)
4. Skopiuj "Measurement ID" (np. `G-XXXXXXXXXX`)
5. Dodaj kod śledzenia do `/index.html` przed `</head>`:

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

**Co to daje:**
- Statystyki odwiedzin
- Źródła ruchu (Google, Facebook, bezpośrednio)
- Najpopularniejsze strony
- Konwersje (kliknięcia w "Umów konsultację")

---

### 4. Opinie online (KLUCZOWE)

**Dlaczego?** 90% ludzi czyta opinie przed kontaktem z prawnikiem.

**Gdzie zbierać opinie:**
- ✅ Google My Business (najważniejsze!)
- ✅ Facebook
- ✅ Katalogi prawnicze (adwokatura.pl, prawo.pl)

**Jak prosić o opinie:**
1. Po zakończonej sprawie (zadowolony klient)
2. Wyślij email:
   > "Dziękuję za zaufanie. Jeśli jesteś zadowolony z mojej pomocy, będę wdzięczny za opinię na Google: [link]"
3. Link do opinii Google znajdziesz w GMB

**Cel:**
- Minimum 10 opinii (5 gwiazdek)
- Odpowiadaj na wszystkie opinie (nawet negatywne)

---

### 5. Lokalne katalogi (EASY WINS)

Zarejestruj się w katalogach prawniczych:

**Darmowe:**
- [Adwokatura.pl](https://adwokatura.pl) - Baza adwokatów ORA
- [Prawo.pl](https://www.prawo.pl) - Portal prawniczy
- [Katalog prawników](https://www.prawnicy.pl)
- [Panorama firm](https://panoramafirm.pl)

**Płatne (opcjonalnie):**
- [GoWork.pl](https://www.gowork.pl)
- [Sprawnymarketing.pl](https://sprawnymarketing.pl/prawnik/)

**Co wpisać:**
- Nazwa: Adwokat Wojciech Luty
- Adres: ul. Krupnicza 14/9, 31-123 Kraków
- Telefon: +48 694 491 095
- Email: Wojciech.luty@wsla.pl
- Link: https://adwokat-luty.netlify.app
- Specjalizacja: prawo rodzinne, rozwody

**Co to daje:**
- Linki zwrotne (backlinks) → wyższa pozycja w Google
- Dodatkowe źródła ruchu
- Większa widoczność

---

## 🎯 Słowa kluczowe - na co się pozycjonować?

### Główne frazy (wysokie wyszukiwanie):
1. **adwokat Kraków** (5400/mies.)
2. **rozwód Kraków** (1300/mies.)
3. **prawo rodzinne Kraków** (480/mies.)
4. **adwokat rodzinny Kraków** (320/mies.)
5. **alimenty adwokat Kraków** (210/mies.)

### Long-tail frazy (łatwiejsza pozycja):
1. **ile kosztuje rozwód w Krakowie**
2. **jak ustalić alimenty na dziecko**
3. **adwokat od rozwodów Kraków opinie**
4. **jak podzielić mieszkanie po rozwodzie**
5. **przemoc w rodzinie co robić Kraków**

### Lokalne frazy:
1. **adwokat Kraków Krupnicza**
2. **prawnik rozwodowy Kraków centrum**
3. **kancelaria rodzinna Kraków**

**Gdzie używać tych fraz:**
- ✅ Title tag (tytuł strony)
- ✅ Meta description
- ✅ Nagłówki H1, H2, H3
- ✅ Pierwszy akapit tekstu
- ✅ Alt text obrazków
- ✅ URL (jeśli dodasz podstrony/blog)

---

## 📊 Narzędzia do monitoringu SEO

### Darmowe:
1. **Google Search Console** - wyniki w Google
2. **Google Analytics** - statystyki ruchu
3. **Google PageSpeed Insights** - szybkość strony
4. **Google Mobile-Friendly Test** - responsywność
5. **Google Rich Results Test** - structured data

### Płatne (opcjonalnie):
1. **Senuto** (polski) - analiza pozycji i konkurencji
2. **SEMrush** - kompleksowe SEO
3. **Ahrefs** - backlinki i konkurencja

---

## 📝 Content Marketing - pomysły na treści SEO

### 1. Blog prawniczy (HIGHLY RECOMMENDED)

Dodaj sekcję bloga i pisz artykuły na tematy:

**Przykładowe artykuły:**
- "Ile kosztuje rozwód w Krakowie w 2026 roku?"
- "Rozwód za porozumieniem stron - krok po kroku"
- "Jak ustalić alimenty na dziecko? Poradnik"
- "Podział majątku po rozwodzie - najważniejsze zasady"
- "Przemoc w rodzinie - gdzie szukać pomocy w Krakowie?"
- "Opieka nad dzieckiem po rozwodzie - co musisz wiedzieć"

**Dlaczego?**
- Każdy artykuł to nowa strona do indeksowania
- Ludzie szukają odpowiedzi na pytania → trafią na Twoją stronę
- Pokażesz ekspercką wiedzę
- Long-tail SEO (łatwiejsza pozycja)

**Jak często pisać:**
- Minimum 1 artykuł miesięcznie
- Długość: 1500-2500 słów
- Z obrazkami, nagłówkami, listami

---

### 2. FAQ (Często zadawane pytania)

Dodaj sekcję FAQ z pytaniami jak:
- Ile kosztuje konsultacja?
- Jak długo trwa rozwód?
- Czy można ustalić alimenty bez sądu?
- Co potrzebuję do rozwodu?
- Jak przygotować się do pierwszej wizyty?

**Dlaczego?**
- Google uwielbia FAQ (często pokazuje w wynikach)
- Structured data FAQ może być wyświetlone jako "rich snippet"
- Odpowiadasz na pytania zanim klient zadzwoni

---

### 3. Case studies (Studia przypadków)

Opisz anonymizowane sprawy:
- "Rozwód z podziałem majątku - jak przebiegała sprawa?"
- "Ustalenie alimentów - studium przypadku"
- "Zmiana opieki nad dzieckiem - historia sukcesu"

**Anonimizuj dane!** Nie ujawniaj tożsamości klientów.

---

## 🚀 Quick Wins - łatwe usprawnienia SEO

### 1. Szybkość strony
✅ Już zoptymalizowane (Vite jest szybki)

**Sprawdź:**
- [PageSpeed Insights](https://pagespeed.web.dev/)
- Cel: 90+ punktów na mobile i desktop

### 2. Alt texty obrazków
✅ Już dodane w kodzie

**Upewnij się że każdy obrazek ma:**
```html
<img src="portrait.jpg" alt="Adwokat Wojciech Luty - prawnik rodzinny Kraków">
```

### 3. Strukturalne nagłówki
✅ Już używamy H1, H2, H3

**Zasada:**
- Jeden H1 na stronie (tytuł główny)
- H2 dla sekcji (O mnie, Usługi, Kontakt)
- H3 dla podsekcji

### 4. Internal linking
Dodaj linki wewnętrzne:
```html
<a href="#services">Zobacz zakres usług</a>
<a href="#contact">Umów konsultację</a>
```

### 5. External linking
Linkuj do wiarygodnych źródeł:
- Kodeks rodzinny (isap.sejm.gov.pl)
- Okręgowa Rada Adwokacka
- GOV.PL (e-sąd)

---

## ✅ Checklist SEO (wykonaj w kolejności)

### Tydzień 1:
- [ ] Dodaj własne zdjęcia (+ alt texts)
- [ ] Google Search Console (zweryfikuj + prześlij sitemap)
- [ ] Google My Business (utwórz wizytówkę)
- [ ] Zarejestruj się w 3 katalogach prawniczych

### Miesiąc 1:
- [ ] Google Analytics (zainstaluj tracking)
- [ ] Zbierz pierwsze 5 opinii na Google
- [ ] Napisz 1 artykuł na blog
- [ ] Dodaj sekcję FAQ (minimum 10 pytań)

### Miesiąc 2-3:
- [ ] Napisz 2-3 kolejne artykuły
- [ ] Zbierz 10+ opinii na Google
- [ ] Monitoruj pozycje w Google (Search Console)
- [ ] Dodaj custom domain (jeśli masz)

### Miesiąc 4-6:
- [ ] Blog: 1 artykuł tygodniowo
- [ ] Zbierz 20+ opinii
- [ ] Lokalne SEO (katalogi, portale)
- [ ] Link building (gościnne artykuły?)

---

## 📈 Jak mierzyć sukces?

### Metryki do śledzenia:

1. **Pozycja w Google** (Search Console)
   - Cel: TOP 3 dla "adwokat Kraków prawo rodzinne"
   - Cel: TOP 10 dla "rozwód Kraków"

2. **Ruch organiczny** (Analytics)
   - Miesiąc 1: 50-100 wizyt
   - Miesiąc 3: 200-500 wizyt
   - Miesiąc 6: 500-1000 wizyt

3. **Konwersje** (Analytics)
   - Kliknięcia w "Umów konsultację"
   - Wysłane formularze kontaktowe
   - Telefony (ask clients "skąd pan/pani o nas wie?")

4. **Opinie** (Google My Business)
   - Cel: 20+ opinii z średnią 4.8+ gwiazdek

---

## 💡 Pro Tips

### 1. **Regularność > Perfekcja**
Lepiej publikować 1 artykuł miesięcznie przez rok, niż 10 artykułów naraz i potem cisza.

### 2. **Lokalne SEO to klucz**
Dla prawnika w Krakowie ważniejsze jest "adwokat Kraków" niż "adwokat Polska".

### 3. **Mobile-first**
70% ludzi wyszukuje prawników z telefonu. Twoja strona jest responsywna ✅

### 4. **E-A-T (Expertise, Authority, Trust)**
Google ocenia Twoje doświadczenie:
- Wykaż ekspertyzę (lata praktyki, specjalizacje)
- Buduj autorytet (opinie, publikacje)
- Zaufanie (certyfikaty, ORA, referencje)

### 5. **NAP Consistency (Name, Address, Phone)**
Wszędzie te same dane:
- Strona internetowa
- Google My Business
- Katalogi
- Social media

---

## 🎓 Materiały do nauki

### Kursy:
- [Google SEO Starter Guide](https://developers.google.com/search/docs/beginner/seo-starter-guide)
- [Moz Beginner's Guide to SEO](https://moz.com/beginners-guide-to-seo)

### Blogi:
- [Senuto Blog](https://www.senuto.com/pl/blog/) (polski)
- [Sprawny Marketing](https://sprawnymarketing.pl/blog/) (polski)

---

**Powodzenia!** 🚀 Pamiętaj: SEO to maraton, nie sprint. Efekty zobaczysz po 3-6 miesiącach.
