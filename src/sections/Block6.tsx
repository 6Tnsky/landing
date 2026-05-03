import { motion } from 'framer-motion'
import { cn } from '../lib/cn'

const cards = [
  {
    n: '01',
    title: 'Консультация офтальмолога',
    text: 'Подбираем объём обследования по жалобам: от осмотра до расширенной диагностики сетчатки, стекловидного тела и зрительного нерва',
  },
  {
    n: '02',
    title: 'Осмотр глазного дна',
    text: 'Позволяет оценить состояние сетчатки, стекловидного тела и периферии глаза',
  },
  {
    n: '03',
    title: 'Измерение внутриглазного давления',
    text: 'Важно при тумане, боли, радужных кругах и подозрении на глаукому',
  },
  {
    n: '04',
    title: 'УЗИ глаза',
    text: 'Назначается при непрозрачных средах и для оценки состояния стекловидного тела и сетчатки',
  },
  {
    n: '05',
    title: 'Периметрия',
    text: 'Нужна при выпадении участков поля зрения и подозрении на глаукому или неврологические причины',
  },
] as const

export function Block6() {
  return (
    <section id="diagnostics" className="bg-[color:var(--bg-dark)]">
      <div className="mx-auto max-w-[1180px] px-5 py-12 text-white lg:px-6 lg:py-16">
        <div className="text-center">
          <div className="font-[Inter] text-[12px] font-semibold tracking-[0.16em] text-[color:var(--c-subtitle)]">
            ДИАГНОСТИКА
          </div>
          <h2 className="mt-3 font-[Inter] text-[28px] font-semibold leading-[1.15] lg:text-[36px]">
            Как мы определяем причину симптомов
          </h2>
          <p className="mx-auto mt-4 max-w-[760px] text-[14px] leading-[1.35] text-white/75 lg:text-[15px]">
            Подбираем объём обследования по жалобам: от осмотра до расширенной
            диагностики сетчатки, стекловидного тела и зрительного нерва
          </p>
        </div>

        <div className="mt-9 grid grid-cols-1 gap-4 lg:mt-11 lg:grid-cols-3 lg:gap-5">
          {cards.map((c, idx) => (
            <motion.div
              key={c.n}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.4, ease: 'easeOut', delay: idx * 0.03 }}
              className={cn(
                'relative overflow-hidden rounded-2xl bg-[color:var(--bg-dark-card)] px-6 py-6',
                c.n === '04' && 'lg:col-span-1',
                c.n === '05' && 'lg:col-span-2',
              )}
            >
              <div className="absolute left-5 top-4 select-none font-[Inter] text-[48px] font-semibold leading-none text-[#466B96]/55">
                {c.n}
              </div>
              <div className="relative mt-10 font-[Inter] text-[14px] font-semibold lg:text-[15px]">
                {c.title}
              </div>
              <div className="relative mt-3 text-[13px] leading-[1.25] text-white/75">
                {c.text}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-9 flex justify-center lg:mt-10">
          <a
            href="#consult"
            className="inline-flex items-center justify-center rounded-2xl bg-white px-10 py-3.5 font-[Inter] text-[14px] font-semibold text-[color:var(--c-btn-blue)] shadow-sm transition-transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Записаться на консультацию
          </a>
        </div>
      </div>
    </section>
  )
}

