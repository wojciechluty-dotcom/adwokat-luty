import { X } from 'lucide-react';
import { Button } from './ui/button';

interface PrivacyPolicyProps {
  onClose: () => void;
}

export function PrivacyPolicy({ onClose }: PrivacyPolicyProps) {
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto my-8">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-8 py-6 flex items-center justify-between">
          <h2 className="text-3xl text-slate-800">Polityka Prywatności</h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="rounded-full"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        <div className="px-8 py-6 space-y-6 text-gray-600">
          <section>
            <h3 className="text-xl text-slate-800 mb-3">1. Postanowienia ogólne</h3>
            <p className="mb-3">
              Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony danych osobowych 
              przekazanych przez Użytkowników w związku z korzystaniem ze strony internetowej prowadzonej 
              przez Steidler, Luty, Adamski – Adwokaci i Radcowie Prawni s.c.
            </p>
            <p>
              Administratorem danych osobowych jest Steidler, Luty, Adamski – Adwokaci i Radcowie Prawni s.c., 
              ul. Krupnicza 14/9, 31-123 Kraków, email: Wojciech.luty@wsla.pl, 
              tel: +48 694 491 095.
            </p>
          </section>

          <section>
            <h3 className="text-xl text-slate-800 mb-3">2. Rodzaj przetwarzanych danych</h3>
            <p className="mb-3">Administrator przetwarza następujące dane osobowe:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Imię i nazwisko</li>
              <li>Adres email</li>
              <li>Numer telefonu</li>
              <li>Informacje podane w formularzu kontaktowym</li>
              <li>Dane techniczne (adres IP, typ przeglądarki, system operacyjny)</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl text-slate-800 mb-3">3. Cel i podstawa prawna przetwarzania danych</h3>
            <p className="mb-3">Dane osobowe są przetwarzane w celu:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Udzielenia odpowiedzi na zapytanie przesłane przez formularz kontaktowy (art. 6 ust. 1 lit. f RODO - prawnie uzasadniony interes)</li>
              <li>Świadczenia usług prawniczych (art. 6 ust. 1 lit. b RODO - wykonanie umowy)</li>
              <li>Wywiązania się z obowiązków prawnych ciążących na Administratorze (art. 6 ust. 1 lit. c RODO)</li>
              <li>Marketingu bezpośredniego (art. 6 ust. 1 lit. f RODO - za zgodą użytkownika)</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl text-slate-800 mb-3">4. Okres przechowywania danych</h3>
            <p>
              Dane osobowe przechowywane są przez okres niezbędny do realizacji celów, dla których 
              zostały zebrane, a także zgodnie z obowiązującymi przepisami prawa, w tym przepisami 
              o archiwizacji dokumentów. Po upływie tego okresu dane są usuwane lub anonimizowane.
            </p>
          </section>

          <section>
            <h3 className="text-xl text-slate-800 mb-3">5. Udostępnianie danych</h3>
            <p className="mb-3">
              Dane osobowe mogą być przekazywane podmiotom uprawnionym do ich otrzymania na mocy 
              obowiązujących przepisów prawa oraz podmiotom współpracującym z Administratorem, tj.:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Dostawcom usług IT i hostingowych</li>
              <li>Dostawcom usług księgowych i prawnych</li>
              <li>Organom państwowym na podstawie przepisów prawa</li>
            </ul>
            <p className="mt-3">
              Administrator nie przekazuje danych osobowych do państw trzecich ani organizacji międzynarodowych.
            </p>
          </section>

          <section>
            <h3 className="text-xl text-slate-800 mb-3">6. Prawa osób, których dane dotyczą</h3>
            <p className="mb-3">Użytkownikowi przysługuje prawo do:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Dostępu do swoich danych osobowych</li>
              <li>Sprostowania danych</li>
              <li>Usunięcia danych</li>
              <li>Ograniczenia przetwarzania danych</li>
              <li>Przenoszenia danych</li>
              <li>Wniesienia sprzeciwu wobec przetwarzania danych</li>
              <li>Cofnięcia zgody w dowolnym momencie</li>
              <li>Wniesienia skargi do organu nadzorczego (Prezes Urzędu Ochrony Danych Osobowych)</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl text-slate-800 mb-3">7. Pliki cookies</h3>
            <p className="mb-3">
              Strona internetowa używa plików cookies (ciasteczka) w celu zapewnienia prawidłowego 
              funkcjonowania serwisu, analizy ruchu oraz dostosowania treści do preferencji użytkownika.
            </p>
            <p>
              Użytkownik może w każdej chwili zmienić ustawienia dotyczące plików cookies w swojej 
              przeglądarce internetowej.
            </p>
          </section>

          <section>
            <h3 className="text-xl text-slate-800 mb-3">8. Bezpieczeństwo danych</h3>
            <p>
              Administrator stosuje odpowiednie środki techniczne i organizacyjne zapewniające ochronę 
              przetwarzanych danych osobowych, w szczególności zabezpiecza dane przed ich udostępnieniem 
              osobom nieupoważnionym, utratą czy uszkodzeniem.
            </p>
          </section>

          <section>
            <h3 className="text-xl text-slate-800 mb-3">9. Zmiany polityki prywatności</h3>
            <p>
              Administrator zastrzega sobie prawo do wprowadzania zmian w Polityce Prywatności. 
              O wszelkich zmianach użytkownicy będą informowani poprzez publikację zaktualizowanej 
              wersji na stronie internetowej.
            </p>
          </section>

          <section>
            <h3 className="text-xl text-slate-800 mb-3">10. Kontakt</h3>
            <p className="mb-3">
              W sprawach związanych z ochroną danych osobowych można się kontaktować:
            </p>
            <ul className="list-none space-y-2">
              <li><strong>Email:</strong> Wojciech.luty@wsla.pl</li>
              <li><strong>Telefon:</strong> +48 694 491 095</li>
              <li><strong>Adres:</strong> ul. Krupnicza 14/9, 31-123 Kraków</li>
            </ul>
          </section>

          <p className="text-sm text-gray-500 mt-8 pt-6 border-t border-gray-200">
            Ostatnia aktualizacja: 12 stycznia 2026
          </p>
        </div>

        <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 px-8 py-4">
          <Button
            onClick={onClose}
            className="w-full bg-slate-800 hover:bg-slate-700 text-white"
          >
            Zamknij
          </Button>
        </div>
      </div>
    </div>
  );
}