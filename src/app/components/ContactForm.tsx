import { useState } from 'react';
import { Send, Shield } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

interface ContactFormProps {
  onOpenPrivacy?: () => void;
  onOpenRodo?: () => void;
}

export function ContactForm({ onOpenPrivacy, onOpenRodo }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    loanType: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(false);

    try {
      // Wysyłanie przez Netlify Forms
      const form = e.currentTarget;
      const formDataToSend = new FormData(form);

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formDataToSend as any).toString(),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          loanType: '',
          message: '',
        });
        setTimeout(() => setSubmitted(false), 8000);
      } else {
        setError(true);
      }
    } catch (err) {
      console.error('Error submitting form:', err);
      setError(true);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-100">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl mb-4 text-slate-800">
          Umów się na konsultację
        </h2>
        <p className="text-gray-600 text-lg">
          Skontaktuj się ze mną – odpowiem na Twoje pytania i omówimy Twoją sytuację
        </p>
      </div>

      {submitted ? (
        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-8 text-center">
          <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl text-emerald-900 mb-2">Dziękujemy!</h3>
          <p className="text-emerald-700">
            Twoja wiadomość została wysłana. Skontaktujemy się z Tobą wkrótce.
          </p>
        </div>
      ) : (
        <form 
          onSubmit={handleSubmit} 
          className="space-y-6"
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          {/* Ukryte pola wymagane przez Netlify Forms */}
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="bot-field" />

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
              <p className="text-red-700">
                Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie lub skontaktuj się telefonicznie.
              </p>
            </div>
          )}

          <div>
            <Label htmlFor="name" className="text-gray-700 mb-2 block">
              Imię i Nazwisko *
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              className="h-12 text-base"
              placeholder="Jan Kowalski"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="email" className="text-gray-700 mb-2 block">
                Email *
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className="h-12 text-base"
                placeholder="jan.kowalski@example.com"
              />
            </div>

            <div>
              <Label htmlFor="phone" className="text-gray-700 mb-2 block">
                Telefon *
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                className="h-12 text-base"
                placeholder="+48 123 456 789"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="loanType" className="text-gray-700 mb-2 block">
              Rodzaj sprawy *
            </Label>
            <Select 
              name="loanType" 
              value={formData.loanType} 
              onValueChange={(value) => handleChange('loanType', value)} 
              required
            >
              <SelectTrigger className="h-12 text-base">
                <SelectValue placeholder="Wybierz rodzaj sprawy" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="divorce">Rozwód</SelectItem>
                <SelectItem value="separation">Separacja</SelectItem>
                <SelectItem value="alimony">Alimenty</SelectItem>
                <SelectItem value="custody">Opieka nad dzieckiem</SelectItem>
                <SelectItem value="property">Podział majątku</SelectItem>
                <SelectItem value="contacts">Kontakty z dzieckiem</SelectItem>
                <SelectItem value="other">Inna sprawa rodzinna</SelectItem>
              </SelectContent>
            </Select>
            {/* Ukryte pole dla Netlify - Select nie jest natywnym HTML select */}
            <input type="hidden" name="loanType" value={formData.loanType} />
          </div>

          <div>
            <Label htmlFor="message" className="text-gray-700 mb-2 block">
              Dodatkowe informacje
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={(e) => handleChange('message', e.target.value)}
              className="min-h-32 text-base"
              placeholder="Opisz swoją sytuację lub zadaj pytanie..."
            />
          </div>

          <div className="bg-gray-50 p-4 rounded-lg flex items-start gap-3">
            <Shield className="w-5 h-5 text-slate-700 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-gray-600">
              Twoje dane są chronione zgodnie z RODO. Używamy ich wyłącznie w celu kontaktu i analizy sprawy. 
              Nie przekazujemy danych osobowych stronom trzecim.{' '}
              <button
                type="button"
                onClick={onOpenPrivacy}
                className="text-amber-700 hover:text-amber-800 underline font-medium"
              >
                Polityka prywatności
              </button>
              {' '}i{' '}
              <button
                type="button"
                onClick={onOpenRodo}
                className="text-amber-700 hover:text-amber-800 underline font-medium"
              >
                informacje RODO
              </button>
              .
            </p>
          </div>

          <Button 
            type="submit" 
            className="w-full h-14 text-lg bg-amber-700 hover:bg-amber-800 text-white"
          >
            <Send className="w-5 h-5 mr-2" />
            Wyślij zapytanie
          </Button>
        </form>
      )}
    </div>
  );
}
