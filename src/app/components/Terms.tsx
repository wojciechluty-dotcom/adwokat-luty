import { X } from 'lucide-react';
import { Button } from './ui/button';

interface TermsProps {
  onClose: () => void;
}

export function Terms({ onClose }: TermsProps) {
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto my-8">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-8 py-6 flex items-center justify-between">
          <h2 className="text-3xl text-slate-800">Regulamin Świadczenia Usług</h2>
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
            <h3 className="text-xl text-slate-800 mb-3">§ 1. Postanowienia ogólne</h3>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>
                Niniejszy Regulamin określa zasady świadczenia usług prawniczych przez 
                Steidler, Luty, Adamski – Adwokaci i Radcowie Prawni s.c., zwaną dalej „Kancelarią".
              </li>
              <li>
                Kancelaria prowadzi działalność pod adresem: ul. Krupnicza 14/9, 31-123 Kraków, 
                email: Wojciech.luty@wsla.pl, tel: +48 694 491 095.
              </li>
              <li>
                Adwokaci kancelarii są wpisani na listę adwokatów prowadzoną przez Okręgową Radę Adwokacką w Krakowie.
              </li>
              <li>
                Działalność Kancelarii podlega przepisom ustawy Prawo o adwokaturze oraz 
                Kodeksowi Etyki Adwokackiej.
              </li>
            </ol>
          </section>

          <section>
            <h3 className="text-xl text-slate-800 mb-3">§ 2. Zakres usług</h3>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>
                Kancelaria świadczy usługi prawnicze w zakresie prawa rodzinnego, w szczególności:
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>Sprawy rozwodowe i separacyjne</li>
                  <li>Sprawy dotyczące władzy rodzicielskiej i opieki nad dziećmi</li>
                  <li>Sprawy alimentacyjne</li>
                  <li>Podział majątku wspólnego</li>
                  <li>Ustalenie kontaktów z dzieckiem</li>
                  <li>Sprawy o przemoc domową</li>
                  <li>Inne sprawy z zakresu prawa rodzinnego</li>
                </ul>
              </li>
              <li>
                Szczegółowy zakres usług oraz sposób ich świadczenia jest określany indywidualnie 
                w umowie zawieranej z Klientem.
              </li>
            </ol>
          </section>

          <section>
            <h3 className="text-xl text-slate-800 mb-3">§ 3. Nawiązanie współpracy</h3>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>
                Kontakt z Adwokatem można nawiązać poprzez:
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>Formularz kontaktowy na stronie internetowej</li>
                  <li>Email: Wojciech.luty@wsla.pl</li>
                  <li>Telefon: +48 694 491 095</li>
                  <li>Wizytę w kancelarii po wcześniejszym umówieniu</li>
                </ul>
              </li>
              <li>
                Podstawą świadczenia usług jest umowa zawarta między Klientem a Adwokatem 
                (umowa o świadczenie pomocy prawnej).
              </li>
              <li>
                Umowa może być zawarta w formie pisemnej, elektronicznej lub ustnej, 
                zgodnie z przepisami prawa.
              </li>
            </ol>
          </section>

          <section>
            <h3 className="text-xl text-slate-800 mb-3">§ 4. Wynagrodzenie</h3>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>
                Wysokość wynagrodzenia Adwokata jest ustalana indywidualnie z Klientem 
                przed rozpoczęciem świadczenia usług.
              </li>
              <li>
                Wynagrodzenie może być ustalone jako:
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>Wynagrodzenie ryczałtowe za prowadzenie sprawy</li>
                  <li>Wynagrodzenie godzinowe</li>
                  <li>Wynagrodzenie według stawek minimalnych określonych w rozporządzeniu</li>
                </ul>
              </li>
              <li>
                Zasady i terminy płatności wynagrodzenia określa umowa zawarta z Klientem.
              </li>
            </ol>
          </section>

          <section>
            <h3 className="text-xl text-slate-800 mb-3">§ 5. Obowiązki Klienta</h3>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>
                Klient zobowiązuje się do:
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>Przekazania pełnych i prawdziwych informacji dotyczących sprawy</li>
                  <li>Dostarczenia niezbędnych dokumentów i materiałów</li>
                  <li>Terminowego uiszczania wynagrodzenia</li>
                  <li>Współpracy z Adwokatem w toku prowadzenia sprawy</li>
                  <li>Informowania o wszelkich zmianach istotnych dla sprawy</li>
                </ul>
              </li>
              <li>
                Klient ponosi odpowiedzialność za prawdziwość przekazanych informacji.
              </li>
            </ol>
          </section>

          <section>
            <h3 className="text-xl text-slate-800 mb-3">§ 6. Obowiązki Adwokata</h3>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>
                Adwokat zobowiązuje się do:
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>Świadczenia usług z należytą starannością</li>
                  <li>Działania zgodnie z przepisami prawa i zasadami etyki zawodowej</li>
                  <li>Zachowania w tajemnicy wszystkich informacji uzyskanych od Klienta</li>
                  <li>Informowania Klienta o przebiegu sprawy</li>
                  <li>Lojalnego reprezentowania interesów Klienta</li>
                </ul>
              </li>
              <li>
                Adwokat może odmówić podjęcia sprawy lub odstąpić od umowy w przypadkach 
                określonych w przepisach prawa o adwokaturze i Kodeksie Etyki Adwokackiej.
              </li>
            </ol>
          </section>

          <section>
            <h3 className="text-xl text-slate-800 mb-3">§ 7. Tajemnica zawodowa</h3>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>
                Wszystkie informacje uzyskane przez Adwokata w związku ze świadczeniem pomocy 
                prawnej są objęte bezwzględną tajemnicą adwokacką.
              </li>
              <li>
                Tajemnica adwokacka obowiązuje bez ograniczenia w czasie.
              </li>
              <li>
                Adwokat nie może być zwolniony z tajemnicy zawodowej nawet przez Klienta, 
                z wyjątkiem przypadków określonych w przepisach prawa.
              </li>
            </ol>
          </section>

          <section>
            <h3 className="text-xl text-slate-800 mb-3">§ 8. Rozwiązanie umowy</h3>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>
                Klient może w każdym czasie odstąpić od umowy ze skutkiem natychmiastowym.
              </li>
              <li>
                W przypadku odstąpienia od umowy przez Klienta, Adwokatowi przysługuje 
                wynagrodzenie za czynności dotychczas wykonane.
              </li>
              <li>
                Adwokat może odstąpić od umowy w przypadkach określonych w przepisach 
                prawa o adwokaturze i Kodeksie Etyki Adwokackiej, w szczególności gdy:
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>Klient narusza postanowienia umowy</li>
                  <li>Klient wprowadza Adwokata w błąd</li>
                  <li>Reprezentowanie Klienta byłoby sprzeczne z prawem lub zasadami etyki</li>
                  <li>Wystąpi konflikt interesów</li>
                </ul>
              </li>
            </ol>
          </section>

          <section>
            <h3 className="text-xl text-slate-800 mb-3">§ 9. Ochrona danych osobowych</h3>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>
                Dane osobowe Klientów są przetwarzane zgodnie z przepisami RODO oraz 
                Polityką Prywatności dostępną na stronie internetowej.
              </li>
              <li>
                Szczegółowe informacje dotyczące przetwarzania danych osobowych zawiera 
                klauzula informacyjna RODO.
              </li>
            </ol>
          </section>

          <section>
            <h3 className="text-xl text-slate-800 mb-3">§ 10. Reklamacje</h3>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>
                Klient ma prawo zgłaszać reklamacje dotyczące świadczonych usług.
              </li>
              <li>
                Reklamacje należy zgłaszać w formie pisemnej na adres kancelarii lub 
                elektronicznej na adres: Wojciech.luty@wsla.pl.
              </li>
              <li>
                Adwokat rozpatrzy reklamację w terminie 14 dni od jej otrzymania i udzieli 
                odpowiedzi na piśmie lub drogą elektroniczną.
              </li>
              <li>
                W przypadku niezadowolenia z rozpatrzenia reklamacji, Klient może złożyć 
                skargę do Okręgowej Rady Adwokackiej w Krakowie.
              </li>
            </ol>
          </section>

          <section>
            <h3 className="text-xl text-slate-800 mb-3">§ 11. Odpowiedzialność</h3>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>
                Adwokat odpowiada za szkodę wyrządzoną Klientowi w związku ze świadczeniem 
                pomocy prawnej na zasadach określonych w przepisach Kodeksu cywilnego.
              </li>
              <li>
                Adwokat posiada obowiązkowe ubezpieczenie odpowiedzialności cywilnej.
              </li>
              <li>
                Adwokat nie gwarantuje określonego wyniku postępowania, zobowiązuje się 
                jednak do działania z należytą starannością.
              </li>
            </ol>
          </section>

          <section>
            <h3 className="text-xl text-slate-800 mb-3">§ 12. Postanowienia końcowe</h3>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>
                W sprawach nieuregulowanych niniejszym Regulaminem stosuje się przepisy 
                Kodeksu cywilnego, ustawy Prawo o adwokaturze oraz Kodeksu Etyki Adwokackiej.
              </li>
              <li>
                Adwokat zastrzega sobie prawo do zmiany Regulaminu. Zmiany nie dotyczą 
                umów zawartych przed ich wejściem w życie.
              </li>
              <li>
                Wszelkie spory wynikłe w związku ze świadczeniem usług będą rozstrzygane 
                przez sąd właściwy według przepisów Kodeksu postępowania cywilnego.
              </li>
              <li>
                Regulamin wchodzi w życie z dniem publikacji na stronie internetowej.
              </li>
            </ol>
          </section>

          <section className="bg-slate-50 border-l-4 border-slate-700 p-6 rounded">
            <h4 className="text-lg text-slate-800 mb-3">Informacja o ubezpieczeniu OC</h4>
            <p className="text-sm">
              Adwokat Wojciech Luty posiada obowiązkowe ubezpieczenie odpowiedzialności cywilnej 
              na wypadek szkody wyrządzonej w związku z wykonywaniem czynności zawodowych, 
              zgodnie z wymogami ustawy Prawo o adwokaturze.
            </p>
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