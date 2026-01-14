import { Heart, Shield, FileText, Users, Scale, Award, Clock, Phone, Mail, MapPin, ChevronRight, Home, Baby, Coins, UserCheck, Handshake, Gavel } from 'lucide-react';
import { Button } from './components/ui/button';
import { Card } from './components/ui/card';
import { ContactForm } from './components/ContactForm';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { RodoInfo } from './components/RodoInfo';
import { Terms } from './components/Terms';
import { useState } from 'react';

// Zdjęcia z folderu /public/images/
const lawyerPortrait1 = "/images/wojciech-luty-biuro.jpg";
const lawyerPortrait2 = "/images/wojciech-luty-portret.jpg";
const lawyerPortrait3 = "/images/wojciech-luty-praca.jpg";
const logoImage = "/images/logo.png";

export default function App() {
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [showRodoInfo, setShowRodoInfo] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-32">
            <div className="flex items-center gap-4">
              <img 
                src={logoImage} 
                alt="Steidler Luty Adamski Bućko" 
                className="h-[110px] w-auto mix-blend-multiply"
              />
            </div>
            
            <div className="hidden lg:flex items-center gap-1">
              <button
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-4 py-2 text-slate-700 hover:text-amber-700 transition-colors"
              >
                O mnie
              </button>
              <button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-4 py-2 text-slate-700 hover:text-amber-700 transition-colors"
              >
                Specjalizacja
              </button>
              <button
                onClick={() => document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-4 py-2 text-slate-700 hover:text-amber-700 transition-colors"
              >
                Współpraca
              </button>
              <button
                onClick={() => document.getElementById('why')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-4 py-2 text-slate-700 hover:text-amber-700 transition-colors"
              >
                Dlaczego ja?
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-4 py-2 text-slate-700 hover:text-amber-700 transition-colors"
              >
                Kontakt
              </button>
            </div>

            <Button 
              onClick={scrollToContact}
              className="bg-amber-700 hover:bg-amber-800 text-white"
            >
              Umów konsultację
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-block bg-amber-700/20 border border-amber-600/50 rounded-full px-4 py-2 mb-6">
                <span className="text-amber-200 text-sm">✓ Doświadczenie · Empatia · Dyskrecja</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
                Adwokat <span className="text-amber-400">Wojciech Luty</span>
              </h1>
              
              <h2 className="text-2xl md:text-3xl mb-6 text-slate-100">
                Prawo Rodzinne i Rozwody w Krakowie
              </h2>
              
              <p className="text-xl text-slate-200 mb-8 leading-relaxed">
                Profesjonalna pomoc prawna w najtrudniejszych momentach życia. Specjalizuję się w sprawach 
                rozwodowych, alimentacyjnych i opiekuńczych. Zapewniam pełne wsparcie i dyskrecję.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  onClick={scrollToContact}
                  size="lg" 
                  className="bg-amber-700 hover:bg-amber-800 text-white text-lg h-14 px-8"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Umów konsultację
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-slate-300 text-slate-900 bg-white hover:bg-slate-100 text-lg h-14 px-8"
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  O mnie
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-600">
                <div>
                  <div className="text-3xl mb-1 text-amber-400">10+</div>
                  <div className="text-sm text-slate-300">Lat praktyki</div>
                </div>
                <div>
                  <div className="text-3xl mb-1 text-amber-400">800+</div>
                  <div className="text-sm text-slate-300">Spraw sądowych</div>
                </div>
                <div>
                  <div className="text-3xl mb-1 text-amber-400">100%</div>
                  <div className="text-sm text-slate-300">Zaangażowania</div>
                </div>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute inset-0 bg-amber-700/10 rounded-3xl blur-3xl"></div>
                <img
                  src={lawyerPortrait1}
                  alt="Adwokat Wojciech Luty"
                  className="relative rounded-3xl shadow-2xl object-cover object-top w-full h-[700px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-slate-800 mb-6">
              O mnie
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Jestem adwokatem z wieloletnim doświadczeniem w prawie rodzinnym. 
              Pomagam rozwiązywać trudne sprawy z empatią i profesjonalizmem.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={lawyerPortrait2}
                alt="Adwokat Wojciech Luty - portret"
                className="rounded-2xl shadow-xl object-cover object-top w-full h-[600px]"
              />
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl text-slate-800 mb-4">Wojciech Luty</h3>
                <p className="text-gray-600 mb-4">
                  Jestem adwokatem z ponad 10-letnim doświadczeniem w prawie rodzinnym. 
                  Jestem wspólnikiem i założycielem kancelarii Steidler Luty Adamski Bućko - 
                  Adwokaci i Radcowie Prawni w Krakowie, gdzie specjalizuję się w sprawach rozwodowych, 
                  alimentacyjnych i dotyczących opieki nad dziećmi.
                </p>
                <p className="text-gray-600 mb-4">
                  Rozumiem, że sprawy rodzinne są często najtrudniejszymi momentami w życiu. 
                  Dlatego zapewniam nie tylko fachową pomoc prawną, ale także empatię i wsparcie 
                  na każdym etapie postępowania. Moje doświadczenie pozwala mi skutecznie bronić 
                  interesów klientów, jednocześnie dbając o to, by proces prawny przebiegał 
                  w sposób jak najmniej stresujący.
                </p>
                <p className="text-gray-600">
                  Wierzę, że kluczem do sukcesu jest połączenie głębokiej wiedzy prawniczej 
                  z indywidualnym podejściem do każdej sprawy. Staram się być dla moich klientów 
                  nie tylko prawnikiem, ale także wsparciem w trudnych chwilach.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-slate-700">
                <h4 className="text-lg text-slate-800 mb-3">Wykształcenie i kwalifikacje</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-700 mt-1">✓</span>
                    <span>Studia prawnicze - Uniwersytet Jagielloński w Krakowie</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-700 mt-1">✓</span>
                    <span>Aplikacja adwokacka - Okręgowa Rada Adwokacka w Krakowie</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-700 mt-1">✓</span>
                    <span>Egzamin adwokacki zdany z wyróżnieniem</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-700 mt-1">✓</span>
                    <span>Wspólnik i założyciel kancelarii Steidler Luty Adamski Bućko</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-700 mt-1">✓</span>
                    <span>Specjalizacja w prawie rodzinnym i opiekuńczym</span>
                  </li>
                </ul>
              </div>

              <div className="bg-amber-50 p-6 rounded-xl border-l-4 border-amber-700">
                <h4 className="text-lg text-slate-800 mb-3">Moja misja</h4>
                <p className="text-gray-600">
                  Pomagam klientom przejść przez trudne chwile z godnością i spokojem. 
                  Dążę do rozwiązań, które są najlepsze dla wszystkich stron, 
                  zwłaszcza gdy w grę wchodzą dzieci.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-slate-800 mb-6">
              Zakres pomocy prawnej
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferuję kompleksową obsługę w sprawach z zakresu prawa rodzinnego
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card className="p-8 hover:shadow-xl transition-shadow border-t-4 border-t-rose-600">
              <div className="w-14 h-14 bg-rose-100 rounded-full flex items-center justify-center mb-6">
                <Heart className="w-7 h-7 text-rose-700" />
              </div>
              <h3 className="text-xl text-slate-800 mb-4">
                Rozwód i separacja
              </h3>
              <p className="text-gray-600">
                Pomoc w przeprowadzeniu postępowania rozwodowego lub separacyjnego. 
                Rozwód za porozumieniem stron lub z orzekaniem o winie.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow border-t-4 border-t-slate-600">
              <div className="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center mb-6">
                <Baby className="w-7 h-7 text-slate-700" />
              </div>
              <h3 className="text-xl text-slate-800 mb-4">
                Opieka nad dziećmi
              </h3>
              <p className="text-gray-600">
                Ustalenie miejsca zamieszkania dziecka, władzy rodzicielskiej oraz 
                kontaktów z dzieckiem. Reprezentacja w sądzie.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow border-t-4 border-t-amber-600">
              <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                <Coins className="w-7 h-7 text-amber-700" />
              </div>
              <h3 className="text-xl text-slate-800 mb-4">
                Alimenty
              </h3>
              <p className="text-gray-600">
                Ustalenie i zmiana wysokości alimentów na dzieci i małżonka. 
                Egzekucja zaległych alimentów.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow border-t-4 border-t-indigo-600">
              <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                <Home className="w-7 h-7 text-indigo-700" />
              </div>
              <h3 className="text-xl text-slate-800 mb-4">
                Podział majątku
              </h3>
              <p className="text-gray-600">
                Podział majątku wspólnego po rozwodzie lub separacji. 
                Wycena i podział nieruchomości, rachunków i innych składników.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow border-t-4 border-t-teal-600">
              <div className="w-14 h-14 bg-teal-100 rounded-full flex items-center justify-center mb-6">
                <UserCheck className="w-7 h-7 text-teal-700" />
              </div>
              <h3 className="text-xl text-slate-800 mb-4">
                Ustalenie ojcostwa
              </h3>
              <p className="text-gray-600">
                Postępowania o ustalenie lub zaprzeczenie ojcostwa. 
                Reprezentacja w sprawach o uznanie ojcostwa.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow border-t-4 border-t-emerald-600">
              <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-emerald-700" />
              </div>
              <h3 className="text-xl text-slate-800 mb-4">
                Przemoc w rodzinie
              </h3>
              <p className="text-gray-600">
                Reprezentacja w sprawach o przemoc domową. Pomoc w uzyskaniu 
                zakazu zbliżania się. Ochrona ofiar przemocy rodzinnej.
              </p>
            </Card>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 text-center">
            <p className="text-lg text-slate-800 mb-4">
              <strong>Potrzebujesz pomocy prawnej w sprawie rodzinnej?</strong>
            </p>
            <p className="text-gray-600 mb-6">
              Umów się na konsultację. Omówimy Twoją sytuację i zaproponuję najlepsze rozwiązanie.
            </p>
            <Button 
              onClick={scrollToContact}
              className="bg-amber-700 hover:bg-amber-800 text-white text-lg h-12 px-8"
            >
              Umów konsultację
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="process" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-800 to-slate-700">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-white mb-6">
              Jak przebiega współpraca?
            </h2>
            <p className="text-xl text-slate-200 max-w-3xl mx-auto">
              Proces współpracy jest przejrzysty i dostosowany do Twoich potrzeb
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-amber-700 rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-6 shadow-lg">
                1
              </div>
              <h3 className="text-xl text-white mb-4">Pierwsza konsultacja</h3>
              <p className="text-slate-300">
                Rozmowa telefoniczna lub spotkanie w kancelarii. Omówimy Twoją sytuację.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-amber-700 rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-6 shadow-lg">
                2
              </div>
              <h3 className="text-xl text-white mb-4">Analiza sprawy</h3>
              <p className="text-slate-300">
                Dokładnie przeanalizuję Twoją sprawę i przedstawię możliwe rozwiązania prawne.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-amber-700 rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-6 shadow-lg">
                3
              </div>
              <h3 className="text-xl text-white mb-4">Przygotowanie</h3>
              <p className="text-slate-300">
                Przygotowanie dokumentacji, pism procesowych i strategii postępowania.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-amber-700 rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-6 shadow-lg">
                4
              </div>
              <h3 className="text-xl text-white mb-4">Reprezentacja</h3>
              <p className="text-slate-300">
                Pełna reprezentacja w sądzie i na wszystkich etapach postępowania.
              </p>
            </div>
          </div>

          <div className="mt-16 bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <Shield className="w-16 h-16 text-amber-400" />
              </div>
              <div className="text-center md:text-left flex-1">
                <h3 className="text-2xl text-white mb-2">
                  Pełna dyskrecja i poufność
                </h3>
                <p className="text-slate-200">
                  Wszystkie informacje, które mi przekażesz, są objęte tajemnicą adwokacką. 
                  Twoja prywatność jest dla mnie priorytetem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Me Section */}
      <section id="why" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-slate-800 mb-6">
              Dlaczego warto mi zaufać?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Łączę wieloletnie doświadczenie z indywidualnym podejściem do każdego klienta
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <img
                src={lawyerPortrait3}
                alt="Adwokat Wojciech Luty"
                className="rounded-2xl shadow-xl object-cover object-top w-full h-[600px]"
              />
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-amber-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl text-slate-800 mb-2">Ponad 13 lat doświadczenia</h3>
                  <p className="text-gray-600">
                    Wieloletnia praktyka w prawie rodzinnym i kilkaset przeprowadzonych spraw sądowych 
                    pozwala mi skutecznie reprezentować klientów nawet w najbardziej skomplikowanych sprawach.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center">
                    <Heart className="w-6 h-6 text-amber-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl text-slate-800 mb-2">Empatia i zrozumienie</h3>
                  <p className="text-gray-600">
                    Rozumiem, że sprawy rodzinne są emocjonalnie trudne. 
                    Zapewniam wsparcie i pomoc nie tylko prawną, ale także ludzką.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-amber-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl text-slate-800 mb-2">Indywidualne podejście</h3>
                  <p className="text-gray-600">
                    Każda sprawa jest inna. Dostosowuję strategię do Twojej konkretnej 
                    sytuacji i potrzeb. Dbam o Twoje interesy.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center">
                    <Gavel className="w-6 h-6 text-amber-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl text-slate-800 mb-2">Skuteczność</h3>
                  <p className="text-gray-600">
                    Prowadzę sprawy z pełnym zaangażowaniem, dążąc do najlepszych 
                    możliwych rozwiązań dla moich klientów.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-amber-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl text-slate-800 mb-2">Dyskrecja</h3>
                  <p className="text-gray-600">
                    Twoja prywatność jest dla mnie najważniejsza. Wszystkie informacje 
                    są objęte tajemnicą adwokacką.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-amber-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl text-slate-800 mb-2">Dostępność</h3>
                  <p className="text-gray-600">
                    Jestem dostępny dla moich klientów. Regularnie informuję o postępach 
                    w sprawie i odpowiadam na pytania.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center border-t-4 border-t-amber-600">
              <div className="text-5xl text-amber-700 mb-4">800+</div>
              <h4 className="text-xl text-slate-800 mb-2">Przeprowadzonych spraw</h4>
              <p className="text-gray-600">
                Wieloletnia praktyka i kilkaset przeprowadzonych spraw sądowych
              </p>
            </Card>

            <Card className="p-8 text-center border-t-4 border-t-slate-600">
              <div className="text-5xl text-slate-700 mb-4">10+</div>
              <h4 className="text-xl text-slate-800 mb-2">Lat w zawodzie prawnika</h4>
              <p className="text-gray-600">
                Ponad 13 lat doświadczenia w praktyce prawniczej
              </p>
            </Card>

            <Card className="p-8 text-center border-t-4 border-t-emerald-600">
              <div className="text-5xl text-emerald-700 mb-4">100%</div>
              <h4 className="text-xl text-slate-800 mb-2">Zaangażowania</h4>
              <p className="text-gray-600">
                Każdą sprawę traktuję z pełnym profesjonalizmem
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <ContactForm 
            onOpenPrivacy={() => setShowPrivacyPolicy(true)}
            onOpenRodo={() => setShowRodoInfo(true)}
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-8">
            <div>
              <div className="mb-2">
                <img 
                  src={logoImage} 
                  alt="Steidler Luty Adamski Bućko" 
                  className="h-[100px] w-auto object-contain"
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
              </div>
              <p className="text-slate-300 text-sm">
                Kancelaria adwokacka w Krakowie specjalizująca się w prawie rodzinnym. 
                Profesjonalna pomoc w sprawach rozwodowych, alimentacyjnych i opiekuńczych.
              </p>
            </div>

            <div>
              <h4 className="text-lg mb-4">Kontakt</h4>
              <div className="space-y-3 text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+48 694 491 095</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>Wojciech.luty@wsla.pl</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>ul. Krupnicza 14/9, 31-123 Kraków</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg mb-4">Godziny pracy</h4>
              <div className="space-y-2 text-sm text-slate-300">
                <div>Poniedziałek - Piątek: 9:00 - 18:00</div>
                <div>Sobota: po wcześniejszym umówieniu</div>
                <div>Niedziela: Nieczynne</div>
                <div className="mt-4 pt-4 border-t border-slate-600">
                  <strong className="text-white">Możliwość spotkań online</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-600 pt-8 mt-8">
            <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-300">
              <div>
                © 2026 Adwokat Wojciech Luty. Wszelkie prawa zastrzeżone.
              </div>
              <div className="md:text-right space-x-4">
                <button onClick={(e) => { e.preventDefault(); setShowPrivacyPolicy(true); }} className="hover:text-white transition-colors">
                  Polityka prywatności
                </button>
                <span>•</span>
                <button onClick={(e) => { e.preventDefault(); setShowRodoInfo(true); }} className="hover:text-white transition-colors">
                  RODO
                </button>
                <span>•</span>
                <button onClick={(e) => { e.preventDefault(); setShowTerms(true); }} className="hover:text-white transition-colors">
                  Regulamin
                </button>
              </div>
            </div>

            <div className="mt-6 text-xs text-slate-400 bg-slate-700/50 p-4 rounded-lg">
              <strong>Zastrzeżenie prawne:</strong> Informacje zawarte na tej stronie mają charakter wyłącznie informacyjny 
              i nie stanowią porady prawnej. Każda sprawa jest rozpatrywana indywidualnie. Kancelaria nie gwarantuje 
              określonego wyniku postępowania. Treści zamieszczone na stronie nie zastępują indywidualnej konsultacji prawnej.
            </div>
          </div>
        </div>
      </footer>

      {/* Privacy Policy Modal */}
      {showPrivacyPolicy && <PrivacyPolicy onClose={() => setShowPrivacyPolicy(false)} />}

      {/* RODO Info Modal */}
      {showRodoInfo && <RodoInfo onClose={() => setShowRodoInfo(false)} />}

      {/* Terms Modal */}
      {showTerms && <Terms onClose={() => setShowTerms(false)} />}
    </div>
  );
}
