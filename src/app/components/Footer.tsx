import { Scale } from "lucide-react";
import { trackButtonClick } from "../lib/api";

export function Footer() {
  return (
    <footer className="bg-[#0B1C2C] text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-[#C8A96A] rounded-lg">
                <Scale className="w-6 h-6 text-[#0B1C2C]" />
              </div>
              <span className="text-xl font-bold">Покровский и партнеры</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Комплексные юридические решения для бизнеса и частных доверителей.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Навигация</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#services" className="hover:text-[#C8A96A] transition-colors">
                  Услуги
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-[#C8A96A] transition-colors">
                  Команда
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#C8A96A] transition-colors">
                  О нас
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#C8A96A] transition-colors">
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Контакты</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="tel:+79112756620" className="hover:text-[#C8A96A] transition-colors">
                  +7 (911) 275-66-20
                </a>
              </li>
              <li>
                <a
                  href="mailto:law@advokat-pokrovskii.ru"
                  className="hover:text-[#C8A96A] transition-colors"
                >
                  law@advokat-pokrovskii.ru
                </a>
              </li>
              <li className="text-sm">Санкт-Петербург, Лиговский пр., 150</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm">© 2026 Покровский и партнеры. Все права защищены.</div>
          <div className="flex gap-6 text-sm text-gray-400">
            <a
              href="https://pokrovskii-partners.ru/privacypolicy"
              target="_blank"
              rel="noreferrer"
              onClick={() => trackButtonClick({ buttonId: "footer_privacy_policy" })}
              className="hover:text-[#C8A96A] transition-colors"
            >
              Политика конфиденциальности
            </a>
            <a
              href="https://pokrovskii-partners.ru/soglasie"
              target="_blank"
              rel="noreferrer"
              onClick={() => trackButtonClick({ buttonId: "footer_consent" })}
              className="hover:text-[#C8A96A] transition-colors"
            >
              Согласие на обработку данных
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
