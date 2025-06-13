
import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Euro, Users, CheckCircle, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Booking request submitted:", {
      checkIn,
      checkOut,
      guests,
      name,
      email,
      phone,
      message
    });
    // Here you would typically send the data to your booking system
    alert("Vielen Dank für Ihre Anfrage! Wir melden uns schnellstmöglich bei Ihnen.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-green-50">
      <Navigation />
      
      <div className="pt-24 px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Preise & Buchung
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Faire Preise für Ihren perfekten Urlaub in Bad Belzig
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Pricing Information */}
            <div className="space-y-8">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <Euro className="w-6 h-6 text-green-600" />
                    Unsere Preise
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid gap-4">
                    <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                      <div>
                        <h3 className="font-semibold text-gray-800">Nebensaison</h3>
                        <p className="text-sm text-gray-600">November - März</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-green-600">75€</p>
                        <p className="text-sm text-gray-600">pro Nacht</p>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center p-4 bg-amber-50 rounded-lg">
                      <div>
                        <h3 className="font-semibold text-gray-800">Hauptsaison</h3>
                        <p className="text-sm text-gray-600">April - Oktober</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-amber-600">95€</p>
                        <p className="text-sm text-gray-600">pro Nacht</p>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center p-4 bg-purple-50 rounded-lg">
                      <div>
                        <h3 className="font-semibold text-gray-800">Feiertage & Events</h3>
                        <p className="text-sm text-gray-600">Weihnachten, Ostern, etc.</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-purple-600">110€</p>
                        <p className="text-sm text-gray-600">pro Nacht</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <h3 className="font-semibold text-gray-800 mb-4">Inklusive Leistungen</h3>
                    <div className="space-y-2">
                      {[
                        "Bettwäsche und Handtücher",
                        "Endreinigung",
                        "WLAN",
                        "Parkplatz",
                        "Garten- und Grillnutzung"
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-blue-600" />
                    Buchungskonditionen
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 text-sm">
                    <div>
                      <h4 className="font-semibold text-gray-800">Mindestaufenthalt</h4>
                      <p className="text-gray-600">2 Nächte (in der Hauptsaison 3 Nächte)</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Check-in / Check-out</h4>
                      <p className="text-gray-600">Anreise: 16:00 - 20:00 Uhr • Abreise: bis 10:00 Uhr</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Stornierung</h4>
                      <p className="text-gray-600">Bis 14 Tage vor Anreise kostenfrei</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Anzahlung</h4>
                      <p className="text-gray-600">30% bei Buchung, Rest bei Anreise</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Booking Form */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Calendar className="w-6 h-6 text-amber-600" />
                  Buchungsanfrage
                </CardTitle>
                <p className="text-gray-600">Senden Sie uns Ihre unverbindliche Anfrage</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="checkin">Anreise</Label>
                      <Input
                        id="checkin"
                        type="date"
                        value={checkIn}
                        onChange={(e) => setCheckIn(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="checkout">Abreise</Label>
                      <Input
                        id="checkout"
                        type="date"
                        value={checkOut}
                        onChange={(e) => setCheckOut(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="guests">Anzahl Gäste</Label>
                    <select
                      id="guests"
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      required
                    >
                      <option value="1">1 Gast</option>
                      <option value="2">2 Gäste</option>
                      <option value="3">3 Gäste</option>
                      <option value="4">4 Gäste</option>
                    </select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">E-Mail *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone">Telefon</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Nachricht</Label>
                    <Textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Besondere Wünsche oder Fragen..."
                      rows={4}
                    />
                  </div>

                  <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-lg py-6">
                    Unverbindliche Anfrage senden
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    * Pflichtfelder. Ihre Daten werden vertraulich behandelt.
                  </p>
                </form>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">Direkter Kontakt</h3>
                  <p className="text-blue-700 text-sm mb-2">
                    Sie können uns auch direkt kontaktieren:
                  </p>
                  <div className="space-y-1 text-sm">
                    <p><strong>E-Mail:</strong> villaklitzeklein22@web.de</p>
                    <p><strong>Telefon:</strong> +49 162 6994200</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
