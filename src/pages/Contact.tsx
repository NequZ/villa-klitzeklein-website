
import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, Car, Train } from "lucide-react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", { name, email, subject, message });
    alert("Vielen Dank für Ihre Nachricht! Wir melden uns schnellstmöglich bei Ihnen.");
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-green-50">
      <Navigation />
      
      <div className="pt-24 px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Kontakt & Anfahrt
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Wir freuen uns auf Ihre Nachricht und helfen Ihnen gerne bei allen Fragen weiter
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Kontaktinformationen</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center gap-4">
                    <Mail className="w-6 h-6 text-amber-600" />
                    <div>
                      <h3 className="font-semibold text-gray-800">E-Mail</h3>
                      <a href="mailto:villaklitzeklein22@web.de" className="text-amber-600 hover:text-amber-700">
                        villaklitzeklein22@web.de
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <Phone className="w-6 h-6 text-green-600" />
                    <div>
                      <h3 className="font-semibold text-gray-800">Telefon</h3>
                      <a href="tel:+491626994200" className="text-green-600 hover:text-green-700">
                        +49 162 6994200
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <MapPin className="w-6 h-6 text-blue-600" />
                    <div>
                      <h3 className="font-semibold text-gray-800">Adresse</h3>
                      <p className="text-gray-600">
                        Villa Klitzeklein<br />
                        Bad Belzig<br />
                        Brandenburg, Deutschland
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <Clock className="w-6 h-6 text-purple-600" />
                    <div>
                      <h3 className="font-semibold text-gray-800">Erreichbarkeit</h3>
                      <p className="text-gray-600">
                        Montag - Sonntag<br />
                        9:00 - 20:00 Uhr
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Map */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Unsere Lage</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                    <div className="text-center text-gray-600">
                      <MapPin className="w-12 h-12 mx-auto mb-2" />
                      <p>Interaktive Karte</p>
                      <p className="text-sm">Bad Belzig, Brandenburg</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-4">
                    Die genaue Adresse teilen wir Ihnen nach bestätigter Buchung mit.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Nachricht senden</CardTitle>
                <p className="text-gray-600">Wir antworten innerhalb von 24 Stunden</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="contact-name">Name *</Label>
                      <Input
                        id="contact-name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="contact-email">E-Mail *</Label>
                      <Input
                        id="contact-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="contact-subject">Betreff</Label>
                    <select
                      id="contact-subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    >
                      <option value="">Bitte wählen...</option>
                      <option value="booking">Buchungsanfrage</option>
                      <option value="question">Allgemeine Frage</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Sonstiges</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="contact-message">Nachricht *</Label>
                    <Textarea
                      id="contact-message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Ihre Nachricht an uns..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-lg py-6">
                    Nachricht senden
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    * Pflichtfelder. Ihre Daten werden vertraulich behandelt und nicht an Dritte weitergegeben.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Travel Information */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Anfahrt</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Car className="w-5 h-5 text-blue-600" />
                    Mit dem Auto
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-800">Aus Berlin:</h3>
                    <p className="text-gray-600">A9 Richtung Leipzig, Abfahrt Bad Belzig (ca. 1 Stunde)</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Aus Potsdam:</h3>
                    <p className="text-gray-600">B1 Richtung Bad Belzig (ca. 30 Minuten)</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Parkplatz:</h3>
                    <p className="text-gray-600">Kostenloser Parkplatz direkt am Haus</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Train className="w-5 h-5 text-green-600" />
                    Mit der Bahn
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-800">Bahnhof Bad Belzig:</h3>
                    <p className="text-gray-600">Regionalbahn von Berlin oder Potsdam</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Vom Bahnhof:</h3>
                    <p className="text-gray-600">5 Minuten zu Fuß oder Taxi/Bus</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Abholung:</h3>
                    <p className="text-gray-600">Auf Anfrage holen wir Sie gerne ab</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
