# 🚀 Szybki start - Wdrożenie strony

## Opcja 1: Netlify (Zalecane - Najprostsze)

### Krok 1: GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/TWOJA-NAZWA/adwokat-luty.git
git push -u origin main
```

### Krok 2: Netlify
1. Zaloguj się na [netlify.com](https://netlify.com)
2. "Add new site" → "Import from Git"
3. Wybierz repozytorium
4. Deploy! ✅

**Gotowe!** Strona jest live w 2 minuty.

---

## Opcja 2: Vercel (Alternatywa)

```bash
npm install -g vercel
vercel
```

Postępuj zgodnie z instrukcjami CLI.

---

## Opcja 3: Własny serwer (Zaawansowane)

### Build lokalny
```bash
npm run build
```

### Upload `dist/` folder na serwer przez FTP/SSH

### Nginx config
```nginx
server {
    listen 80;
    server_name adwokat-luty.pl;
    root /var/www/adwokat-luty/dist;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

---

## 📋 Checklist po wdrożeniu

- [ ] Strona działa
- [ ] HTTPS jest włączony
- [ ] Sitemap przesłany do Google Search Console
- [ ] Google Analytics podpięty (opcjonalnie)
- [ ] Własna domena skonfigurowana (opcjonalnie)

---

**Potrzebujesz pomocy?** Zobacz pełną instrukcję w [DEPLOYMENT.md](./DEPLOYMENT.md)
