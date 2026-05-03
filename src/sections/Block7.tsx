import { motion } from 'framer-motion'

const steps = [
  {
    n: '1',
    title: 'Беседа с врачом',
    text: 'Уточняем симптомы, анамнез и факторы риска',
  },
  {
    n: '2',
    title: 'Диагностика зрения',
    text: 'Проводим осмотр и подбираем объём обследования',
  },
  {
    n: '3',
    title: 'Дополнительные исследования',
    text: 'ОКТ, УЗИ, периметрия — при необходимости',
  },
  {
    n: '4',
    title: 'Заключение и рекомендации',
    text: 'Объясняем причину симптома и дальнейшую тактику',
  },
] as const

export function Block7() {
  return (
    <section id="appointment" className="bg-[color:var(--bg-2)]">
      <div className="mx-auto max-w-[1180px] px-5 py-12 lg:px-6 lg:py-16">
        <div className="text-center">
          <div className="font-[Inter] text-[12px] font-semibold tracking-[0.16em] text-[color:var(--c-subtitle)]">
            КАК ПРОХОДИТ ПРИЕМ
          </div>
          <h2 className="mt-3 font-[Inter] text-[28px] font-semibold leading-[1.15] text-[color:var(--c-title)] lg:text-[36px]">
            Что вас ждет на приеме у офтальмолога
          </h2>
        </div>

        {/* desktop */}
        <div className="relative mt-10 hidden lg:block">
          <div className="absolute left-0 right-0 top-[22px] border-t border-dashed border-black/15" />
          <div className="grid grid-cols-4 gap-6">
            {steps.map((s, idx) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.4, ease: 'easeOut', delay: idx * 0.04 }}
                className="text-center"
              >
                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-[color:var(--c-title)] font-[Inter] text-[14px] font-semibold text-white">
                  {s.n}
                </div>
                <div className="mt-5 font-[Inter] text-[15px] font-semibold text-[#222222]">
                  {s.title}
                </div>
                <div className="mt-2 text-[13px] leading-[1.25] text-[#6b7280]">
                  {s.text}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* mobile */}
        <div className="relative mt-9 lg:hidden">
          <div className="absolute left-1/2 top-8 h-[calc(100%-64px)] -translate-x-1/2 border-l border-dashed border-black/15" />
          <div className="space-y-12">
            {steps.map((s, idx) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.4, ease: 'easeOut', delay: idx * 0.04 }}
                className="relative text-center"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[color:var(--c-title)] font-[Inter] text-[14px] font-semibold text-white">
                  {s.n}
                </div>
                <div className="mt-5 font-[Inter] text-[16px] font-semibold text-[#222222]">
                  {s.title}
                </div>
                <div className="mt-2 text-[13px] leading-[1.25] text-[#6b7280]">
                  {s.text}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

