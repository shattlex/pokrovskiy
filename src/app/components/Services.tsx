import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { 
  Scale, 
  Building2, 
  FileText, 
  Shield, 
  Users, 
  Briefcase,
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: Scale,
    title: "Корпоративное право",
    description: "Сопровождение сделок M&A, реорганизация, корпоративные споры",
  },
  {
    icon: Building2,
    title: "Недвижимость",
    description: "Сопровождение сделок с недвижимостью, строительное право",
  },
  {
    icon: FileText,
    title: "Договорное право",
    description: "Разработка и экспертиза договоров любой сложности",
  },
  {
    icon: Shield,
    title: "Защита бизнеса",
    description: "Антимонопольное право, налоговые споры, комплаенс",
  },
  {
    icon: Users,
    title: "Трудовое право",
    description: "Кадровый аудит, трудовые споры, HR-консалтинг",
  },
  {
    icon: Briefcase,
    title: "Арбитражные споры",
    description: "Представительство в судах всех инстанций",
  },
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

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
              Наши услуги
            </span>
          </div>
          <h2 className="text-[#0B1C2C] mb-4" style={{ 
            fontSize: 'clamp(2rem, 4vw, 3rem)', 
            fontWeight: 700,
            letterSpacing: '-0.02em'
          }}>
            Комплексные юридические решения
          </h2>
          <p className="text-[#6B7280] max-w-2xl mx-auto text-lg">
            Мы предоставляем полный спектр юридических услуг для бизнеса любого масштаба
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white p-8 rounded-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#C8A96A]/30 cursor-pointer"
            >
              <div className="mb-6 inline-flex p-4 bg-[#0B1C2C] rounded-lg group-hover:bg-[#C8A96A] transition-all duration-300">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-[#0B1C2C] text-xl font-bold mb-3 group-hover:text-[#C8A96A] transition-colors">
                {service.title}
              </h3>
              
              <p className="text-[#6B7280] mb-4 leading-relaxed">
                {service.description}
              </p>

              <div className="flex items-center text-[#C8A96A] font-semibold group-hover:gap-2 transition-all">
                Подробнее
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
