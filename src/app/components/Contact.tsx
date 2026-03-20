import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { submitContact, trackButtonClick } from "../lib/api";

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<{
    type: "idle" | "success" | "error";
    message: string;
  }>({ type: "idle", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);
    setSubmitState({ type: "idle", message: "" });

    try {
      trackButtonClick({ buttonId: "contact_form_submit" });
      const response = await submitContact(formData);
      setSubmitState({ type: "success", message: response.message });
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Не удалось отправить заявку. Попробуйте еще раз.";
      setSubmitState({ type: "error", message });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={ref} className="py-24 bg-[#F7F8FA]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-[#C8A96A]/10 border border-[#C8A96A]/30 rounded-full text-[#C8A96A] text-sm font-semibold">
              Контакты
            </span>
          </div>
          <h2
            className="text-[#0B1C2C] mb-4"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
            }}
          >
            Свяжитесь с нами
          </h2>
          <p className="text-[#6B7280] max-w-2xl mx-auto text-lg">
            Оставьте заявку, и команда свяжется с вами для первичной консультации.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-[#0B1C2C] text-2xl font-bold mb-6">Наш офис</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#0B1C2C] rounded-lg flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#C8A96A]" />
                  </div>
                  <div>
                    <div className="text-[#0B1C2C] font-semibold mb-1">Адрес</div>
                    <div className="text-[#6B7280]">Санкт-Петербург, Лиговский пр., 150</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#0B1C2C] rounded-lg flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#C8A96A]" />
                  </div>
                  <div>
                    <div className="text-[#0B1C2C] font-semibold mb-1">Телефон</div>
                    <a href="tel:+79112756620" className="text-[#6B7280] hover:text-[#0B1C2C] transition-colors">
                      +7 (911) 275-66-20
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#0B1C2C] rounded-lg flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#C8A96A]" />
                  </div>
                  <div>
                    <div className="text-[#0B1C2C] font-semibold mb-1">Email</div>
                    <a
                      href="mailto:law@advokat-pokrovskii.ru"
                      className="text-[#6B7280] hover:text-[#0B1C2C] transition-colors"
                    >
                      law@advokat-pokrovskii.ru
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="text-[#0B1C2C] font-semibold mb-3">Режим работы</div>
                <div className="text-[#6B7280] space-y-1">
                  <div>Пн-Пт: 9:00 - 19:00</div>
                  <div>Сб-Вс: по предварительной записи</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.7 }}
          >
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-[#0B1C2C] text-2xl font-bold mb-6">Оставьте заявку</h3>

              <div className="space-y-5">
                <div>
                  <label className="block text-[#0B1C2C] font-semibold mb-2">Ваше имя *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-[#F7F8FA] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8A96A] focus:border-transparent transition-all"
                    placeholder="Иван Иванов"
                  />
                </div>

                <div>
                  <label className="block text-[#0B1C2C] font-semibold mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-[#F7F8FA] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8A96A] focus:border-transparent transition-all"
                    placeholder="ivan@example.com"
                  />
                </div>

                <div>
                  <label className="block text-[#0B1C2C] font-semibold mb-2">Телефон *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-[#F7F8FA] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8A96A] focus:border-transparent transition-all"
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>

                <div>
                  <label className="block text-[#0B1C2C] font-semibold mb-2">Сообщение *</label>
                  <textarea
                    required
                    minLength={10}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 bg-[#F7F8FA] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8A96A] focus:border-transparent transition-all resize-none"
                    placeholder="Опишите вашу ситуацию..."
                  />
                  <p className="text-[#6B7280] text-xs mt-2">
                    Минимум 10 символов
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full group px-8 py-4 bg-[#0B1C2C] text-white rounded-lg hover:bg-[#C8A96A] hover:text-[#0B1C2C] transition-all duration-300 font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Отправка..." : "Отправить заявку"}
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                {submitState.type !== "idle" && (
                  <p
                    className={`text-sm text-center ${
                      submitState.type === "success" ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {submitState.message}
                  </p>
                )}

                <p className="text-[#6B7280] text-sm text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
