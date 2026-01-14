import { X } from 'lucide-react';
import { Button } from './ui/button';

interface RodoInfoProps {
  onClose: () => void;
}

export function RodoInfo({ onClose }: RodoInfoProps) {
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto my-8">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-8 py-6 flex items-center justify-between">
          <h2 className="text-3xl text-slate-800">Informacje RODO</h2>
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
            <h3 className="text-xl text-slate-800 mb-3">Klauzula informacyjna RODO</h3>
            <p className="mb-3">
              Zgodnie z art. 13 ust. 1 i 2 Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 
              z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem 
              danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 
              95/46/WE (ogólne rozporządzenie o ochronie danych – RODO), informujemy że:
            </p>
          </section>

          <section>
            <h3 className="text-xl text-slate-800 mb-3">1. Administrator danych osobowych</h3>
            <p className="mb-3">
              Administratorem Pani/Pana danych osobowych jest:
            </p>
            <div className="bg-slate-50 p-4 rounded-lg">
              <p className="mb-2"><strong>Steidler, Luty, Adamski – Adwokaci i Radcowie Prawni s.c.</strong></p>
              <p>ul. Krupnicza 14/9, 31-123 Kraków</p>
              <p>Email: Wojciech.luty@wsla.pl</p>
              <p>Tel: +48 694 491 095</p>
            </div>
          </section>

          <section>
            <h3 className="text-xl text-slate-800 mb-3">2. Cel i podstawa prawna przetwarzania danych</h3>
            <p className="mb-3">
              Pani/Pana dane osobowe będą przetwarzane w następujących celach:
            </p>
            <ul className="list-disc list-inside space-y-3 ml-4">
              <li>
                <strong>Świadczenie usług prawniczych</strong> – na podstawie art. 6 ust. 1 lit. b RODO 
                (wykonanie umowy) oraz art. 9 ust. 2 lit. f RODO w zakresie danych szczególnych kategorii
              </li>
              <li>
                <strong>Kontakt z klientem</strong> – na podstawie art. 6 ust. 1 lit. f RODO 
                (prawnie uzasadniony interes administratora)
              </li>
              <li>
                <strong>Realizacja obowiązków prawnych</strong> – na podstawie art. 6 ust. 1 lit. c RODO, 
                w tym obowiązków wynikających z prawa adwokackiego, podatkowego i rachunkowego
              </li>
              <li>
                <strong>Dochodzenie roszczeń</strong> – na podstawie art. 6 ust. 1 lit. f RODO 
                (prawnie uzasadniony interes administratora)
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl text-slate-800 mb-3">3. Okres przechowywania danych</h3>
            <p className="mb-3">
              Pani/Pana dane osobowe będą przechowywane przez okres:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Niezbędny do realizacji usługi prawniczej oraz dochodzenia roszczeń z niej wynikających</li>
              <li>Wymagany przepisami prawa, w szczególności:
                <ul className="list-circle list-inside ml-6 mt-2 space-y-1">
                  <li>5 lat – zgodnie z przepisami podatkowymi</li>
                  <li>Do czasu przedawnienia roszczeń wynikających z umowy</li>
                  <li>Zgodnie z Kodeksem Etyki Adwokackiej i przepisami o adwokaturze</li>
                </ul>
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl text-slate-800 mb-3">4. Odbiorcy danych osobowych</h3>
            <p className="mb-3">
              Pani/Pana dane osobowe mogą być przekazywane następującym kategoriom odbiorców:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Sądom i organom państwowym – w zakresie wymaganym przepisami prawa</li>
              <li>Podmiotom świadczącym usługi IT i hostingowe</li>
              <li>Biurom rachunkowym i księgowym</li>
              <li>Innym adwokatom lub radcom prawnym w ramach zastępstwa procesowego lub konsultacji</li>
              <li>Podmiotom uprawnionym na podstawie przepisów prawa</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl text-slate-800 mb-3">5. Prawa osób, których dane dotyczą</h3>
            <p className="mb-3">
              W związku z przetwarzaniem danych osobowych przysługują Pani/Panu następujące prawa:
            </p>
            <ul className="list-disc list-inside space-y-3 ml-4">
              <li>
                <strong>Prawo dostępu</strong> do swoich danych osobowych (art. 15 RODO)
              </li>
              <li>
                <strong>Prawo do sprostowania</strong> danych (art. 16 RODO)
              </li>
              <li>
                <strong>Prawo do usunięcia</strong> danych „prawo do bycia zapomnianym" (art. 17 RODO)
              </li>
              <li>
                <strong>Prawo do ograniczenia przetwarzania</strong> (art. 18 RODO)
              </li>
              <li>
                <strong>Prawo do przenoszenia</strong> danych (art. 20 RODO)
              </li>
              <li>
                <strong>Prawo do sprzeciwu</strong> wobec przetwarzania danych (art. 21 RODO)
              </li>
              <li>
                <strong>Prawo do cofnięcia zgody</strong> w dowolnym momencie, jeżeli przetwarzanie 
                odbywa się na podstawie zgody
              </li>
              <li>
                <strong>Prawo do wniesienia skargi</strong> do organu nadzorczego – Prezesa Urzędu 
                Ochrony Danych Osobowych
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl text-slate-800 mb-3">6. Wymóg podania danych</h3>
            <p>
              Podanie danych osobowych jest dobrowolne, jednak niezbędne do zawarcia i wykonania umowy 
              o świadczenie usług prawniczych. Niepodanie danych uniemożliwi świadczenie usługi.
            </p>
          </section>

          <section>
            <h3 className="text-xl text-slate-800 mb-3">7. Zautomatyzowane podejmowanie decyzji</h3>
            <p>
              Pani/Pana dane nie będą przetwarzane w sposób zautomatyzowany, w tym w formie profilowania.
            </p>
          </section>

          <section>
            <h3 className="text-xl text-slate-800 mb-3">8. Tajemnica zawodowa</h3>
            <p className="mb-3">
              Informujemy, że wszystkie dane przekazane adwokatowi w związku ze świadczeniem pomocy 
              prawnej są objęte <strong>tajemnicą adwokacką</strong>, która jest chroniona przepisami 
              ustawy Prawo o adwokaturze oraz Kodeksu Etyki Adwokackiej.
            </p>
            <p>
              Tajemnica adwokacka jest bezwzględna i obejmuje wszystkie informacje uzyskane w związku 
              z udzielaniem pomocy prawnej, niezależnie od źródła ich pochodzenia.
            </p>
          </section>

          <section>
            <h3 className="text-xl text-slate-800 mb-3">9. Realizacja praw</h3>
            <p className="mb-3">
              W celu realizacji swoich praw prosimy o kontakt:
            </p>
            <div className="bg-slate-50 p-4 rounded-lg">
              <p>Email: Wojciech.luty@wsla.pl</p>
              <p>Telefon: +48 694 491 095</p>
              <p>Adres: ul. Krupnicza 14/9, 31-123 Kraków</p>
            </div>
          </section>

          <section className="bg-amber-50 border-l-4 border-amber-600 p-6 rounded">
            <h4 className="text-lg text-slate-800 mb-3">Prezes Urzędu Ochrony Danych Osobowych</h4>
            <p className="text-sm">
              W przypadku uznania, że przetwarzanie danych osobowych narusza przepisy RODO, 
              przysługuje Pani/Panu prawo wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych 
              (ul. Stawki 2, 00-193 Warszawa).
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