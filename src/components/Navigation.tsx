
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Flower2 } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { to: "/", label: "Start" },
    { to: "/gallery", label: "Galerie" },
    { to: "/amenities", label: "Ausstattung" },
    { to: "/pricing", label: "Preise & Buchung" },
    { to: "/contact", label: "Kontakt" },
    { to: "/about", label: "Über uns" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 font-bold text-xl text-gray-800 hover:text-amber-600 transition-colors">
            <Flower2 className="w-6 h-6 text-amber-600" />
            <span>Villa Klitzeklein</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`font-medium transition-colors hover:text-amber-600 ${
                  isActive(item.to) ? "text-amber-600" : "text-gray-700"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="bg-amber-600 hover:bg-amber-700 rounded-full">
              <Link to="/pricing">Jetzt buchen</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-amber-600"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive(item.to)
                      ? "text-amber-600 bg-amber-50"
                      : "text-gray-700 hover:text-amber-600 hover:bg-gray-50"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Button asChild className="w-full bg-amber-600 hover:bg-amber-700 rounded-full">
                  <Link to="/pricing" onClick={() => setIsOpen(false)}>Jetzt buchen</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
