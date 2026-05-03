import { motion } from 'framer-motion'
import { cn } from '../lib/cn'

const cards = [
  {
    title: 'Деструкция стекловидного тела',
    text: 'Самая частая причина плавающих мушек и ниточек. Обычно это возрастные\nизменения внутри глаза',
    span: 'lg:col-span-2',
    tone: 'default',
  },
  {
    title: 'Задняя отслойка стекловидного\nтела',
    text: 'Может сопровождаться вспышками\nсвета и резким увеличением числа\nмушек',
    span: 'lg:col-span-1',
    tone: 'default',
  },
  {
    title: 'Разрыв или отслойка сетчатки',
    text: 'Подозреваются при “занавеске”,\nвспышках, новых мушках и\nвыпадении части поля зрения.\nКритическое состояние',
    span: 'lg:col-span-1',
    tone: 'danger',
  },
  {
    title: 'Катаракта',
    text: 'Часто вызывает постепенный туман,\nблики, ощущение пленки и снижение\nчеткости',
    span: 'lg:col-span-1',
    tone: 'default',
  },
  {
    title: 'Глаукома',
    text: 'Может проявляться туманом, радужными\nореолами, болью и снижением зрения',
    span: 'lg:col-span-1',
    tone: 'default',
  },
  {
    title: 'Синдром сухого глаза',
    text: 'Дает ощущение пленки, песка,\nкратковременного тумана, особенно\nза экраном',
    span: 'lg:col-span-1',
    tone: 'default',
  },
  {
    title: 'Патология макулы и нерва',
    text: 'Часто проявляется пятном,\nискажением линий,\nрасплывчатостью центрального\nзрения',
    span: 'lg:col-span-1',
    tone: 'default',
  },
] as const

export function Block5() {
  return (
    <section id="causes" className="bg-[color:var(--bg-3)]">
      <div className="mx-auto max-w-[1180px] px-5 py-12 lg:px-6 lg:py-16">
        <div className="text-center">
          <h2 className="font-[Inter] text-[28px] font-semibold leading-[1.15] text-[color:var(--c-title)] lg:text-[34px]">
            Причины появления симптомов
          </h2>
          <p className="mx-auto mt-4 max-w-[760px] text-[14px] leading-[1.35] text-[#6b7280] lg:text-[15px]">
            Один и тот же симптом может быть связан как с безобидными изменениями,
            так и с состояниями, требующими срочного лечения. Точную причину можно
            определить только после осмотра и диагностики.
          </p>
        </div>

        <div className="mt-9 grid grid-cols-1 gap-4 lg:mt-11 lg:grid-cols-4 lg:gap-5">
          {cards.map((c, idx) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.4, ease: 'easeOut', delay: idx * 0.03 }}
              className={cn(
                'rounded-2xl border border-black/5 bg-white px-5 py-5 shadow-[0_10px_25px_rgba(0,0,0,0.05)]',
                c.tone === 'danger' &&
                  'border-[color:color-mix(in oklab, var(--c-danger) 25%, transparent)] bg-[#f1d9dc]/60',
                c.span,
              )}
            >
              <div
                className={cn(
                  'font-[Inter] text-[14px] font-semibold leading-[1.25] lg:text-[15px]',
                  c.tone === 'danger' ? 'text-[color:var(--c-danger)]' : 'text-[color:var(--c-title)]',
                )}
              >
                {c.title}
              </div>
              <div
                className={cn(
                  'mt-3 whitespace-pre-line text-[13px] leading-[1.25] lg:text-[13px]',
                  c.tone === 'danger' ? 'text-[color:var(--c-danger)]' : 'text-[#6b7280]',
                )}
              >
                {c.text}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

