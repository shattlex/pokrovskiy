import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Phone, Mail, Clock, ArrowRight } from "lucide-react";
import { trackButtonClick } from "../lib/api";

export function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      className="py-24 bg-gradient-to-br from-[#0B1C2C] via-[#0F2338] to-[#0B1C2C] relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-[#C8A96A]/10 border border-[#C8A96A]/30 rounded-full text-[#C8A96A] text-sm font-semibold">
                Бесплатная консультация
              </span>
            </div>

            <h2
              className="text-white mb-6"
              style={{
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
              }}
            >
              Получите экспертную консультацию
            </h2>

            <p className="text-gray-300 mb-12 text-lg max-w-2xl mx-auto">
              Обсудим вашу ситуацию, оценим перспективы и предложим оптимальную стратегию.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                { icon: Phone, text: "Ответим на все вопросы" },
                { icon: Clock, text: "В течение 24 часов" },
                { icon: Mail, text: "Конфиденциально" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="p-3 bg-[#C8A96A]/10 rounded-lg mb-3">
                    <item.icon className="w-6 h-6 text-[#C8A96A]" />
                  </div>
                  <span className="text-white font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <a
                href="#contact"
                onClick={() => trackButtonClick({ buttonId: "cta_consultation" })}
                className="group px-10 py-5 bg-[#C8A96A] text-[#0B1C2C] rounded-lg hover:bg-[#D4B67A] transition-all duration-300 font-bold text-lg flex items-center gap-3 mx-auto shadow-xl hover:shadow-2xl hover:scale-105 w-fit"
              >
                Получить консультацию
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </a>

              <p className="text-gray-400 text-sm mt-4">
                Или позвоните нам: <span className="text-[#C8A96A] font-semibold">+7 (911) 275-66-20</span>
              </p>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute top-1/4 left-10 w-64 h-64 bg-[#C8A96A]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-[#C8A96A]/10 rounded-full blur-3xl" />
      </div>
    </section>
  );
}
