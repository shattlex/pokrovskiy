import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const allServices = [
  {
    category: "Корпоративное право",
    items: [
      "M&A сделки и due diligence",
      "Создание и реорганизация компаний",
      "Корпоративное управление",
      "Акционерные соглашения",
      "Корпоративные споры",
    ]
  },
  {
    category: "Арбитражные споры",
    items: [
      "Представительство в арбитражных судах",
      "Взыскание задолженности",
      "Банкротство",
      "Административные споры",
      "Международный арбитраж",
    ]
  },
  {
    category: "Недвижимость и строительство",
    items: [
      "Сделки с коммерческой недвижимостью",
      "Строительные контракты",
      "Земельное право",
      "Инвестиционные проекты",
      "Сопровождение девелоперских проектов",
    ]
  },
  {
    category: "Налоговое право",
    items: [
      "Налоговое планирование",
      "Налоговые споры",
      "Tax compliance",
      "Трансфертное ценообразование",
      "Налоговый аудит",
    ]
  },
  {
    category: "Интеллектуальная собственность",
    items: [
      "Регистрация товарных знаков",
      "Защита авторских прав",
      "Патентное право",
      "Лицензирование",
      "IT-право",
    ]
  },
  {
    category: "Трудовое право",
    items: [
      "Кадровый аудит",
      "Трудовые споры",
      "Миграционное право",
      "HR-документация",
      "Увольнение сотрудников",
    ]
  },
];

export function AllServices() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-[#0B1C2C] mb-4" style={{ 
            fontSize: 'clamp(2rem, 4vw, 3rem)', 
            fontWeight: 700,
            letterSpacing: '-0.02em'
          }}>
            Полный спектр услуг
          </h2>
          <p className="text-[#6B7280] max-w-2xl mx-auto text-lg">
            Более 20 направлений юридической практики
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {allServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-gray-200 rounded-xl overflow-hidden bg-white hover:shadow-lg transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-[#0B1C2C] font-bold text-xl">
                  {service.category}
                </span>
                <ChevronDown 
                  className={`w-6 h-6 text-[#C8A96A] transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <motion.div
                initial={false}
                animate={{ 
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-8 pb-6 pt-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {service.items.map((item, itemIndex) => (
                      <div 
                        key={itemIndex}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#F7F8FA] transition-colors"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-[#C8A96A] mt-2 flex-shrink-0" />
                        <span className="text-[#6B7280]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
