import { useState, useEffect } from "react";
import { Scale, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { trackButtonClick } from "../lib/api";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Услуги", href: "#services" },
    { label: "Команда", href: "#team" },
    { label: "О нас", href: "#about" },
    { label: "Контакты", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-lg shadow-lg py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className={`p-2 rounded-lg transition-colors ${
                isScrolled ? "bg-[#0B1C2C]" : "bg-[#C8A96A]"
              }`}
            >
              <Scale className={`w-6 h-6 ${isScrolled ? "text-[#C8A96A]" : "text-[#0B1C2C]"}`} />
            </div>
            <span
              className={`text-lg font-bold transition-colors ${
                isScrolled ? "text-[#0B1C2C]" : "text-white"
              }`}
            >
              Покровский и партнеры
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`font-medium transition-colors hover:text-[#C8A96A] ${
                  isScrolled ? "text-[#0B1C2C]" : "text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => trackButtonClick({ buttonId: "navbar_consultation_desktop" })}
              className={`px-6 py-2.5 rounded-lg font-semibold transition-all hover:scale-105 ${
                isScrolled
                  ? "bg-[#0B1C2C] text-white hover:bg-[#C8A96A] hover:text-[#0B1C2C]"
                  : "bg-[#C8A96A] text-[#0B1C2C] hover:bg-white"
              }`}
            >
              Консультация
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 transition-colors ${isScrolled ? "text-[#0B1C2C]" : "text-white"}`}
            aria-label={isMobileMenuOpen ? "Закрыть меню" : "Открыть меню"}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-[#0B1C2C] font-medium py-2 hover:text-[#C8A96A] transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => {
                  trackButtonClick({ buttonId: "navbar_consultation_mobile" });
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full px-6 py-3 bg-[#0B1C2C] text-white rounded-lg font-semibold hover:bg-[#C8A96A] hover:text-[#0B1C2C] transition-all text-center"
              >
                Консультация
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
