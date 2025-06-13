
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Wifi, 
  Car, 
  Grill, 
  Users, 
  Bed, 
  Bath, 
  Coffee, 
  Tv, 
  AirVent, 
  PawPrint, 
  Cigarette, 
  CheckCircle,
  Home,
  Trees,
  Utensils
} from "lucide-react";

const Amenities = () => {
  const amenityCategories = [
    {
      title: "Unterkunft",
      icon: Home,
      color: "text-blue-600",
      items: [
        { icon: Users, text: "Bis zu 4 Gäste" },
        { icon: Bed, text: "2 Schlafzimmer mit Doppelbetten" },
        { icon: Bath, text: "1 Badezimmer mit Dusche" },
        { icon: Home, text: "Wohnzimmer mit Sitzecke" },
      ]
    },
    {
      title: "Küche & Verpflegung",
      icon: Utensils,
      color: "text-green-600",
      items: [
        { icon: Coffee, text: "Voll ausgestattete Küche" },
        { icon: Coffee, text: "Kaffeemaschine" },
        { icon: Utensils, text: "Geschirr und Besteck" },
        { icon: Grill, text: "Grill im Garten" },
      ]
    },
    {
      title: "Ausstattung & Komfort",
      icon: Tv,
      color: "text-purple-600",
      items: [
        { icon: Wifi, text: "Kostenloses WLAN" },
        { icon: Tv, text: "Fernseher" },
        { icon: AirVent, text: "Heizung" },
        { icon: Car, text: "Kostenloser Parkplatz" },
      ]
    },
    {
      title: "Außenbereich",
      icon: Trees,
      color: "text-orange-600",
      items: [
        { icon: Trees, text: "Großer Garten" },
        { icon: Grill, text: "Grillplatz" },
        { icon: Trees, text: "Gartenmöbel" },
        { icon: Trees, text: "Ruhige Lage" },
      ]
    }
  ];

  const houseRules = [
    { icon: CheckCircle, text: "Nichtraucher-Wohnung", allowed: true },
    { icon: PawPrint, text: "Haustiere nach Absprache", allowed: true },
    { icon: Users, text: "Check-in: 16:00 - 20:00", allowed: true },
    { icon: Users, text: "Check-out: bis 10:00", allowed: true },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-green-50">
      <Navigation />
      
      <div className="pt-24 px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Ausstattung & Komfort
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Alles was Sie für einen entspannten und komfortablen Aufenthalt benötigen
            </p>
          </div>

          {/* Amenity Categories */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {amenityCategories.map((category, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <category.icon className={`w-6 h-6 ${category.color}`} />
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center gap-3">
                        <item.icon className="w-5 h-5 text-gray-600" />
                        <span className="text-gray-700">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* House Rules */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Hausregeln & Wichtige Informationen</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {houseRules.map((rule, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <rule.icon className={`w-5 h-5 ${rule.allowed ? 'text-green-600' : 'text-red-600'}`} />
                    <span className="text-gray-700">{rule.text}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-amber-50 rounded-lg border border-amber-200">
                <h3 className="text-lg font-semibold text-amber-800 mb-3">Zusätzliche Informationen</h3>
                <ul className="space-y-2 text-amber-700">
                  <li>• Bettwäsche und Handtücher sind inklusive</li>
                  <li>• Endreinigung ist im Preis enthalten</li>
                  <li>• Ruhestunden: 22:00 - 07:00 Uhr</li>
                  <li>• Bei Fragen stehen wir Ihnen gerne zur Verfügung</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Location Highlights */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Lage & Umgebung</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Bad Belzig Zentrum",
                  distance: "5 Min zu Fuß",
                  description: "Restaurants, Cafés und Einkaufsmöglichkeiten"
                },
                {
                  title: "Potsdam",
                  distance: "30 Min mit dem Auto",
                  description: "Sanssouci, Neues Palais und weitere Sehenswürdigkeiten"
                },
                {
                  title: "Naturpark Hoher Fläming",
                  distance: "Direkt vor der Tür",
                  description: "Wanderwege, Radtouren und Naturerlebnisse"
                }
              ].map((location, index) => (
                <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{location.title}</h3>
                    <p className="text-amber-600 font-medium mb-3">{location.distance}</p>
                    <p className="text-gray-600 text-sm">{location.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Amenities;
