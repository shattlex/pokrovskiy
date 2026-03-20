import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Mail, Send } from "lucide-react";

type TeamMember = {
  name: string;
  role: string;
  image: string;
  description: string;
  email: string;
  social: string;
};

const team: TeamMember[] = [
  {
    name: "Анна Ермоленко",
    role: "Юрисконсульт",
    image:
      "https://static.tildacdn.com/tild6632-3261-4636-b164-353562383261/DSC03958.jpg",
    description:
      "Сопровождает клиентов по гражданским и корпоративным вопросам, готовит процессуальные документы и правовые позиции.",
    email: "law@advokat-pokrovskii.ru",
    social: "https://t.me/advokatpokrovskii",
  },
  {
    name: "Елизавета Аристова",
    role: "Маркетолог",
    image:
      "https://static.tildacdn.com/tild6536-3339-4062-a233-303237343564/DSC04431.jpg",
    description:
      "Отвечает за коммуникации компании, контент в медиа и digital-продвижение юридических практик.",
    email: "law@advokat-pokrovskii.ru",
    social: "https://t.me/advokatpokrovskii",
  },
  {
    name: "Антонина Шуклина",
    role: "Юрисконсульт",
    image:
      "https://static.tildacdn.com/tild3963-6431-4239-b237-303436393133/DSC03976.jpg",
    description:
      "Ведет клиентские запросы по договорной работе, правовой экспертизе и досудебному урегулированию споров.",
    email: "law@advokat-pokrovskii.ru",
    social: "https://t.me/advokatpokrovskii",
  },
  {
    name: "Георгий Смирнов",
    role: "Юрисконсульт",
    image:
      "https://static.tildacdn.com/tild3534-6130-4461-a533-613338316137/DSC04068.jpg",
    description:
      "Участвует в судебном сопровождении дел и подготовке правовых заключений по вопросам защиты интересов доверителей.",
    email: "law@advokat-pokrovskii.ru",
    social: "https://t.me/advokatpokrovskii",
  },
  {
    name: "Владислав Абрамов",
    role: "Юрисконсульт",
    image:
      "https://static.tildacdn.com/tild3633-3032-4831-b232-373939356134/DSC04039.jpg",
    description:
      "Сопровождает гражданско-правовые и арбитражные споры, помогает в подготовке претензионной и судебной документации.",
    email: "law@advokat-pokrovskii.ru",
    social: "https://t.me/advokatpokrovskii",
  },
  {
    name: "Екатерина Старикова",
    role: "Юрисконсульт",
    image:
      "https://static.tildacdn.com/tild6138-3133-4530-b762-643036353636/DSC04237_1.jpg",
    description:
      "Работает с вопросами сопровождения клиентов и правового анализа, контролирует подготовку процессуальных документов.",
    email: "law@advokat-pokrovskii.ru",
    social: "https://t.me/advokatpokrovskii",
  },
];

export function Team() {
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
              Наша команда
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
            Команда «Покровский и партнеры»
          </h2>
          <p className="text-[#6B7280] max-w-2xl mx-auto text-lg">
            Практикующие специалисты компании, которые ежедневно сопровождают
            доверителей по ключевым юридическим направлениям.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-[4/5]">
                <img
                  src={member.image}
                  alt={`${member.name}, ${member.role}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2C]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute bottom-4 left-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <a
                    href={`mailto:${member.email}?subject=${encodeURIComponent(
                      `Запрос для ${member.name}`,
                    )}`}
                    aria-label={`Написать ${member.name}`}
                    className="p-2 bg-white/90 rounded-lg hover:bg-[#C8A96A] hover:text-white transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                  <a
                    href={member.social}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Перейти к каналу компании для связи с ${member.name}`}
                    className="p-2 bg-white/90 rounded-lg hover:bg-[#C8A96A] hover:text-white transition-colors"
                  >
                    <Send className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-[#0B1C2C] text-xl font-bold mb-1">{member.name}</h3>
                <div className="text-[#C8A96A] font-semibold mb-2">{member.role}</div>
                <p className="text-[#6B7280] text-sm leading-relaxed">{member.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
