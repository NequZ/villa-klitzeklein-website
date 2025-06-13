
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Star, Award, Users, Home, Flower2 } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-green-50">
      <Navigation />
      
      <div className="pt-24 px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Über uns
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Lernen Sie uns kennen und erfahren Sie mehr über die Geschichte der Villa Klitzeklein
            </p>
          </div>

          {/* Main About Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Willkommen in der Villa Klitzeklein</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Herzlich willkommen! Ich bin <strong>Claudia Schelhas-Bloch</strong> und freue mich, 
                  Sie in unserer charmanten Ferienwohnung "Villa Klitzeklein" begrüßen zu dürfen.
                </p>
                <p>
                  Was einst als kleines Familienhaus begann, haben wir mit viel Liebe zum Detail in eine 
                  moderne und gemütliche Ferienwohnung verwandelt. Der Name "Klitzeklein" mag bescheiden 
                  klingen, aber dahinter verbirgt sich ein großes Herz für Gastfreundschaft.
                </p>
                <p>
                  Bad Belzig und der Hohe Fläming sind unsere Heimat, und wir möchten Ihnen die Schönheit 
                  dieser Region näherbringen. Von Wanderungen durch ursprüngliche Natur bis hin zu 
                  kulturellen Ausflügen nach Potsdam - hier gibt es viel zu entdecken.
                </p>
                <p>
                  Unser Ziel ist es, dass Sie sich bei uns wie zu Hause fühlen und mit wunderbaren 
                  Erinnerungen wieder abreisen.
                </p>
              </div>
            </div>
            <div 
              className="h-80 rounded-2xl bg-cover bg-center shadow-xl"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1472396961693-142e6e269027?w=600&h=400&fit=crop')`,
              }}
            ></div>
          </div>

          {/* Values Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Was uns wichtig ist</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Heart,
                  title: "Persönliche Betreuung",
                  description: "Wir sind immer für Sie da und helfen gerne mit Tipps und Empfehlungen für Ihren Aufenthalt.",
                  color: "text-red-500"
                },
                {
                  icon: Star,
                  title: "Qualität & Sauberkeit",
                  description: "Höchste Standards bei Reinigung und Ausstattung sind für uns selbstverständlich.",
                  color: "text-yellow-500"
                },
                {
                  icon: Home,
                  title: "Wie zu Hause fühlen",
                  description: "Gemütlichkeit und Komfort stehen bei uns an erster Stelle - Sie sollen sich wohlfühlen.",
                  color: "text-blue-500"
                }
              ].map((value, index) => (
                <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-8">
                    <value.icon className={`w-12 h-12 mx-auto mb-4 ${value.color}`} />
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <Card className="shadow-lg mb-16">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Unsere Erfahrung</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-6 text-center">
                {[
                  { icon: Award, number: "5+", text: "Jahre Vermietung", color: "text-amber-600" },
                  { icon: Users, number: "200+", text: "Zufriedene Gäste", color: "text-green-600" },
                  { icon: Star, number: "4.9", text: "Durchschnittsbewertung", color: "text-blue-600" },
                  { icon: Heart, number: "100%", text: "Herzblut", color: "text-red-600" }
                ].map((stat, index) => (
                  <div key={index} className="space-y-2">
                    <stat.icon className={`w-8 h-8 mx-auto ${stat.color}`} />
                    <p className="text-3xl font-bold text-gray-800">{stat.number}</p>
                    <p className="text-gray-600">{stat.text}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Region Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div 
              className="h-80 rounded-2xl bg-cover bg-center shadow-xl"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=600&h=400&fit=crop')`,
              }}
            ></div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Bad Belzig & der Hohe Fläming</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Bad Belzig ist eine charmante Kleinstadt im Herzen des Naturparks Hoher Fläming. 
                  Die Region besticht durch ihre ursprüngliche Natur, historische Sehenswürdigkeiten 
                  und die Nähe zu Potsdam und Berlin.
                </p>
                <p>
                  Als Gastgeberin kenne ich die schönsten Wanderwege, die besten Restaurants und 
                  die versteckten Geheimtipps der Region. Gerne teile ich mein Wissen mit Ihnen 
                  und helfe bei der Planung Ihrer Ausflüge.
                </p>
                <p>
                  Ob Sie Ruhe und Entspannung suchen oder aktiv die Natur erkunden möchten - 
                  Bad Belzig bietet für jeden Geschmack das Richtige.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Call-to-Action */}
          <div className="mt-16 text-center">
            <Card className="shadow-lg bg-gradient-to-r from-amber-50 to-green-50 border-0">
              <CardContent className="p-8">
                <Flower2 className="w-12 h-12 mx-auto mb-4 text-amber-600" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Haben Sie Fragen?</h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Ich stehe Ihnen gerne persönlich zur Verfügung und beantworte alle Ihre Fragen 
                  rund um Ihren Aufenthalt in der Villa Klitzeklein.
                </p>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Claudia Schelhas-Bloch</strong></p>
                  <p>villaklitzeklein22@web.de</p>
                  <p>+49 162 6994200</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
