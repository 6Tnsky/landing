import { motion } from 'framer-motion'
import { cn } from '../lib/cn'

const features = [
  {
    title: 'Точность',
    text: 'Точная диагностика причин\nсимптомов',
    icon: '/img/B2_1.png',
    offset: 'lg:-translate-y-5',
  },
  {
    title: 'Опыт',
    text: 'Приём ведёт опытный\nофтальмолог',
    icon: '/img/B2_2.png',
    offset: 'lg:translate-y-3',
  },
  {
    title: 'Оборудование',
    text: 'Современное диагностическое\nоборудование',
    icon: '/img/B2_3.png',
    offset: 'lg:translate-y-3',
  },
  {
    title: 'Скорость',
    text: 'Помощь без долгого ожидания',
    icon: '/img/B2_4.png',
    offset: 'lg:translate-y-10',
  },
] as const

export function Block2() {
  return (
    <section id="top" className="bg-[color:var(--bg-2)]">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-10 px-5 pb-12 pt-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-12 lg:px-6 lg:pb-16 lg:pt-16">
        <div className="text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className={cn(
              'font-[Inter] text-[40px] font-semibold leading-[1.08]',
              'text-[color:var(--c-title)] lg:text-[56px]',
            )}
          >
            Мушки, точки, вспышки
            <br />
            и пелена...
          </motion.h1>

          <p className="mx-auto mt-5 max-w-[560px] whitespace-pre-line text-[16px] leading-[1.35] text-[#222222] lg:mx-0 lg:mt-6 lg:text-[18px]">
            Определим, опасен ли симптом, проверим сетчатку,
            стекловидное тело, внутриглазное давление и подберем
            тактику лечения.
          </p>

          <div className="relative mx-auto mt-6 flex items-start gap-3 rounded-xl bg-[#ead9dc]/70 px-4 py-3 lg:mx-0 lg:mt-7 lg:max-w-[560px]">
            <div className="absolute inset-y-0 left-0 w-[3px] rounded-l-xl bg-[color:var(--c-danger)]" />
            <img
              src="/img/B2_att.png"
              alt=""
              className="mt-[2px] h-5 w-5 shrink-0"
              aria-hidden="true"
            />
            <p className="text-[13px] leading-[1.35] text-[color:var(--c-danger)] lg:text-[14px]">
              Вспышки света с резким увеличением мушек или радужные
              круги с болью требуют срочного осмотра.
            </p>
          </div>

          <a
            href="#diagnostics"
            className="mx-auto mt-7 inline-flex w-full items-center justify-center rounded-2xl bg-[color:var(--c-btn-blue)] px-8 py-4 font-[Inter] text-[15px] font-semibold text-white shadow-sm transition-transform hover:-translate-y-0.5 active:translate-y-0 lg:mx-0 lg:mt-8 lg:w-auto lg:py-3.5 lg:text-[15px]"
          >
            Записаться на диагностику
          </a>
        </div>

        <div className="grid grid-cols-2 gap-5 lg:gap-6">
          {features.map((f, idx) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, ease: 'easeOut', delay: idx * 0.05 }}
              className={cn(
                'rounded-2xl bg-white px-5 py-6 text-center shadow-[0_10px_25px_rgba(0,0,0,0.06)]',
                f.offset,
              )}
            >
              <img
                src={f.icon}
                alt=""
                className="mx-auto h-7 w-7"
                aria-hidden="true"
                decoding="async"
              />
              <div className="mt-3 font-[Inter] text-[16px] font-semibold text-[color:var(--c-title)]">
                {f.title}
              </div>
              <div className="mt-2 whitespace-pre-line text-[13px] leading-[1.25] text-[#222222]">
                {f.text}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

