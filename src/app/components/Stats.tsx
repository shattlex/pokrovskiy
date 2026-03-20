import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const stats = [
  {
    value: "12+",
    label: "лет на рынке",
    description: "Успешной работы"
  },
  {
    value: "200+",
    label: "клиентов",
    description: "Доверяют нам"
  },
  {
    value: "20+",
    label: "направлений",
    description: "Юридических услуг"
  },
  {
    value: "98%",
    label: "выигранных дел",
    description: "В арбитражных судах"
  }
];

export function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group cursor-default"
            >
              <div className="mb-3">
                <div className="inline-block text-[#0B1C2C] mb-2" style={{ 
                  fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', 
                  fontWeight: 800,
                  letterSpacing: '-0.02em'
                }}>
                  {stat.value}
                </div>
                <div className="h-1 w-16 mx-auto bg-gradient-to-r from-[#C8A96A] to-[#D4B67A] group-hover:w-24 transition-all duration-300" />
              </div>
              <div className="text-[#0B1C2C] font-semibold text-lg mb-1">
                {stat.label}
              </div>
              <div className="text-[#6B7280] text-sm">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
