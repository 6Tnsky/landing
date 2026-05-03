import { motion } from 'framer-motion'

const list = [
  'астигматизм',
  'близорукость (миопия)',
  'дальнозоркость (гиперметропия)',
  'конъюнктивит (вирусный, бактериальный, аллергический)',
  'косоглазие, ячмень',
] as const

function CheckIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="#0B3B73" opacity="0.15" />
      <circle cx="12" cy="12" r="10" fill="none" stroke="#0B3B73" strokeWidth="2" />
      <path
        d="M7.3 12.5l3 3 6.6-7"
        fill="none"
        stroke="#0B3B73"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Block8() {
  return (
    <section id="doctor" className="bg-[color:var(--bg-3)]">
      <div className="mx-auto max-w-[1180px] px-5 py-12 lg:grid lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-12 lg:px-6 lg:py-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.05 }}
          className="lg:order-2"
        >
          <div className="font-[Inter] text-[12px] font-semibold tracking-[0.16em] text-[color:var(--c-subtitle)]">
            ВРАЧ
          </div>
          <h2 className="mt-3 font-[Inter] text-[28px] font-semibold leading-[1.15] text-[color:var(--c-title)] lg:text-[36px]">
            Прием ведет офтальмолог
            <br />
            Бахарев Алексей Викторович
          </h2>

          <p className="mt-5 text-[14px] leading-[1.35] text-[#222222] lg:text-[15px]">
            Проводит диагностику, профилактику и лечение таких заболеваний глаз, как:
          </p>

          <ul className="mt-4 space-y-3">
            {list.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[14px] text-[#222222]">
                <span className="mt-[1px] shrink-0">
                  <CheckIcon />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p className="mt-5 text-[14px] leading-[1.35] text-[#222222] lg:text-[15px]">
            Занимается проверкой зрения, а также подбором очков и контактных линз.
          </p>

          <a
            href="#consult"
            className="mt-8 inline-flex w-full items-center justify-center rounded-2xl bg-[color:var(--c-title)] py-4 text-[16px] font-semibold text-white shadow-sm transition-transform hover:-translate-y-0.5 active:translate-y-0 lg:w-auto lg:px-12 lg:py-3.5 lg:text-[14px]"
          >
            Записаться на консультацию
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="relative mx-auto mt-10 max-w-[420px] lg:order-1 lg:mt-0 lg:max-w-none"
        >
          <div className="relative mx-auto aspect-square w-[320px] overflow-hidden rounded-full border-[10px] border-white shadow-[0_12px_30px_rgba(0,0,0,0.08)] lg:w-[420px]">
            <picture>
              <source srcSet="/img/B8_1.webp" type="image/webp" />
              <img
                src="/img/B8_1.png"
                alt="Офтальмолог Бахарев Алексей Викторович"
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </picture>
          </div>

          <div className="absolute right-0 top-0 rounded-xl bg-[color:var(--c-title)] px-5 py-3 text-white shadow-sm lg:right-10 lg:top-5">
            <div className="font-[Inter] text-[26px] font-semibold leading-none">20+</div>
            <div className="mt-1 text-[11px] font-medium text-white/85">лет практики</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

