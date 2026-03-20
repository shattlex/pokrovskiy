import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { trackButtonClick } from "../lib/api";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0B1C2C] via-[#0F2338] to-[#0B1C2C]">
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
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-[#C8A96A]/10 border border-[#C8A96A]/30 rounded-full text-[#C8A96A] text-sm font-medium">
                Премиальные юридические услуги
              </span>
            </div>

            <h1
              className="text-white mb-6"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              Сопровождаем бизнес
              <br />и защищаем ваши интересы
            </h1>

            <p className="text-gray-300 mb-10 max-w-2xl mx-auto" style={{ fontSize: "1.25rem", lineHeight: 1.6 }}>
              Юридическая поддержка бизнеса и частных доверителей. Сфокусированы на
              результате, прозрачной коммуникации и практических решениях.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#contact"
                onClick={() => trackButtonClick({ buttonId: "hero_consultation" })}
                className="group px-8 py-4 bg-[#C8A96A] text-[#0B1C2C] rounded-lg hover:bg-[#D4B67A] transition-all duration-300 font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Получить консультацию
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#services"
                onClick={() => trackButtonClick({ buttonId: "hero_services" })}
                className="px-8 py-4 border-2 border-white/20 text-white rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold backdrop-blur-sm"
              >
                Наши услуги
              </a>
            </div>
          </motion.div>

          <motion.div
            className="absolute top-1/4 left-10 w-72 h-72 bg-[#C8A96A]/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#C8A96A]/10 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.3, 0.5],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
