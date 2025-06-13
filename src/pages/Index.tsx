import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Star, Users, Wifi, Car, Flame, Flower2 } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-green-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=1200&h=800&fit=crop')`,
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
            Villa Klitzeklein
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            Charmante Ferienwohnung in Bad Belzig, modern eingerichtet, mit Garten und Grillmöglichkeit. 
            Perfekte Lage für Ausflüge nach Potsdam und Umgebung.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              asChild
              size="lg" 
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              <Link to="/pricing">Jetzt buchen</Link>
            </Button>
            <Button 
              asChild
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-gray-800 px-8 py-4 text-lg font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              <Link to="/contact">Verfügbarkeit prüfen</Link>
            </Button>
          </div>
          <div className="flex items-center justify-center gap-2 text-amber-200">
            <MapPin className="w-5 h-5" />
            <span className="text-lg">Bad Belzig • Nähe Potsdam</span>
          </div>
        </div>
      </section>

      {/* Quick Features */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Users, text: "Bis zu 4 Gäste", color: "text-blue-600" },
              { icon: Wifi, text: "Kostenloses WLAN", color: "text-green-600" },
              { icon: Car, text: "Kostenloser Parkplatz", color: "text-purple-600" },
              { icon: Flame, text: "Garten & Grill", color: "text-orange-600" }
            ].map((feature, index) => (
              <Card key={index} className="text-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-0">
                  <feature.icon className={`w-8 h-8 mx-auto mb-3 ${feature.color}`} />
                  <p className="font-semibold text-gray-700">{feature.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Preview Sections */}
      <section className="py-16 px-4 bg-white/60 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Moderne Ausstattung trifft Gemütlichkeit</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Unsere liebevoll eingerichtete Ferienwohnung bietet Ihnen alles, was Sie für einen entspannten Aufenthalt benötigen. 
                Von der voll ausgestatteten Küche bis zum gemütlichen Wohnbereich - hier fühlen Sie sich sofort wie zu Hause.
              </p>
              <Button asChild className="bg-green-600 hover:bg-green-700 rounded-full px-8">
                <Link to="/amenities">Ausstattung entdecken</Link>
              </Button>
            </div>
            <div 
              className="h-80 rounded-2xl bg-cover bg-center shadow-xl"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=400&fit=crop')`,
              }}
            ></div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div 
              className="h-80 rounded-2xl bg-cover bg-center shadow-xl order-2 md:order-1"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop')`,
              }}
            ></div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Erleben Sie Bad Belzig</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Bad Belzig liegt im Herzen des Naturparks Hoher Fläming und bietet unzählige Möglichkeiten für Wanderungen, 
                Radtouren und Ausflüge. Potsdam mit seinen berühmten Schlössern ist nur eine kurze Fahrt entfernt.
              </p>
              <Button asChild variant="outline" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white rounded-full px-8">
                <Link to="/gallery">Bildergalerie ansehen</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-amber-100 to-green-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">Was unsere Gäste sagen</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                text: "Wunderschöne, saubere Wohnung in ruhiger Lage. Perfekt für einen erholsamen Urlaub!",
                author: "Familie Schmidt",
                rating: 5
              },
              {
                text: "Tolle Ausstattung und sehr gastfreundliche Vermieter. Gerne wieder!",
                author: "M. Weber",
                rating: 5
              }
            ].map((review, index) => (
              <Card key={index} className="p-6 shadow-lg bg-white border-0">
                <CardContent className="p-0">
                  <div className="flex justify-center mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{review.text}"</p>
                  <p className="font-semibold text-gray-800">- {review.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Flower2 className="w-6 h-6 text-amber-400" />
                Villa Klitzeklein
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Ihre perfekte Ferienwohnung in Bad Belzig für einen unvergesslichen Aufenthalt im Fläming.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
              <p className="text-gray-300 mb-2">villaklitzeklein22@web.de</p>
              <p className="text-gray-300 mb-2">+49 162 6994200</p>
              <p className="text-gray-300">Bad Belzig, Deutschland</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Navigation</h4>
              <div className="space-y-2">
                <Link to="/gallery" className="block text-gray-300 hover:text-white transition-colors">Galerie</Link>
                <Link to="/amenities" className="block text-gray-300 hover:text-white transition-colors">Ausstattung</Link>
                <Link to="/pricing" className="block text-gray-300 hover:text-white transition-colors">Preise</Link>
                <Link to="/contact" className="block text-gray-300 hover:text-white transition-colors">Kontakt</Link>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Villa Klitzeklein. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
