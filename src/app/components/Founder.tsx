import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Award, BookOpen, Globe } from "lucide-react";

const achievements = [
  {
    icon: Award,
    title: "Реестр адвокатов СПб",
    description: "Регистрационный номер в реестре адвокатов: 78/7878.",
  },
  {
    icon: BookOpen,
    title: "Адвокатская практика с 2009 года",
    description:
      "Работает в составе Санкт-Петербургской объединенной коллегии адвокатов.",
  },
  {
    icon: Globe,
    title: "Управление и развитие",
    description:
      "С 2020 года возглавляет «Покровский и партнеры», с 2025 года развивает ООО «ЛегалМед».",
  },
];

export function Founder() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://static.tildacdn.com/tild3665-3365-4839-a465-313065343936/DSC04109.jpg"
                alt="Филипп Покровский"
                className="w-full h-auto"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2C]/20 to-transparent" />
            </div>

            <div className="absolute -top-8 -left-8 w-32 h-32 bg-[#C8A96A]/10 rounded-full blur-2xl -z-10" />
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-[#C8A96A]/10 rounded-full blur-2xl -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-[#C8A96A]/10 border border-[#C8A96A]/30 rounded-full text-[#C8A96A] text-sm font-semibold">
                Глава компании
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
              Филипп Покровский
            </h2>

            <div className="text-[#C8A96A] text-xl font-semibold mb-6">
              Глава компании «Покровский и партнеры»
            </div>

            <div className="space-y-4 mb-8">
              <p className="text-[#6B7280] text-lg leading-relaxed">
                Выпускник Всероссийского государственного университета юстиции
                (РПА Минюста России), г. Москва. Профиль: административное право.
              </p>

              <p className="text-[#6B7280] text-lg leading-relaxed">
                Специализируется на банкротстве юридических и физических лиц,
                уголовно-правовой защите бизнеса, гражданских спорах,
                представительстве в арбитражных судах и сопровождении сделок с
                недвижимостью.
              </p>

              <p className="text-[#6B7280] text-lg leading-relaxed">
                Также ведет семейные и наследственные споры, выстраивая
                персональную правовую стратегию под задачу доверителя.
              </p>
            </div>

            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-4 p-4 bg-[#F7F8FA] rounded-lg hover:bg-[#C8A96A]/5 transition-colors"
                >
                  <div className="p-3 bg-[#0B1C2C] rounded-lg flex-shrink-0">
                    <achievement.icon className="w-6 h-6 text-[#C8A96A]" />
                  </div>
                  <div>
                    <div className="text-[#0B1C2C] font-bold mb-1">{achievement.title}</div>
                    <div className="text-[#6B7280] text-sm">{achievement.description}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
