import { motion } from 'framer-motion'
import { useState } from 'react'
import { cn } from '../lib/cn'

const faqs = [
  {
    q: 'Что означают мушки перед глазами?',
    a: 'Чаще всего это плавающие помутнения стекловидного тела. Обычно они безопасны, если стабильны и не сопровождаются вспышками или пеленой.',
  },
  {
    q: 'Когда мушки опасны?',
    a: 'Когда их становится резко больше, появляются вспышки света, «занавеска» или выпадение части изображения.',
  },
  {
    q: 'Что значит пелена перед глазами?',
    a: 'Причины могут быть разными: от сухого глаза и катаракты до глаукомы и патологии сетчатки. Особенно опасна внезапная пелена.',
  },
  {
    q: 'Почему один глаз видит мутно?',
    a: 'Это может быть связано с катарактой, макулярной патологией, воспалением, нарушением слезной пленки или другими причинами. Нужен осмотр.',
  },
  {
    q: 'Можно ли убрать мушки совсем?',
    a: 'Иногда мозг адаптируется и они становятся менее заметными. В отдельных случаях врач может обсуждать специальные методы лечения, если они сильно снижают качество жизни.',
  },
  {
    q: 'Что нельзя делать до приема врача?',
    a: 'Не трите глаз, избегайте сильной физической нагрузки и не садитесь за руль, если зрение внезапно ухудшилось.',
  },
  {
    q: 'Когда нужно обращаться срочно?',
    a: 'При вспышках, резком увеличении мушек, «занавеске», выпадении поля зрения, боли и радужных кругах.',
  },
  {
    q: 'К кому идти сначала — к офтальмологу или неврологу?',
    a: 'При визуальных симптомах первично лучше начать с офтальмолога, чтобы исключить опасные причины со стороны глаза.',
  },
]

function Icon({ open }: { open: boolean }) {
  return (
    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/35 font-[Inter] text-[18px] font-semibold text-[#222222]">
      {open ? '−' : '+'}
    </span>
  )
}

export function Block10() {
  const [openIdx, setOpenIdx] = useState<number>(0)

  return (
    <section id="faq" className="bg-white">
      <div className="mx-auto max-w-[1180px] px-5 py-12 lg:px-6 lg:py-16">
        <div className="text-center">
          <div className="font-[Inter] text-[12px] font-semibold tracking-[0.16em] text-[color:var(--c-subtitle)]">
            FAQ
          </div>
          <h2 className="mt-3 font-[Inter] text-[28px] font-semibold leading-[1.15] text-[color:var(--c-title)] lg:text-[36px]">
            Частые вопросы
          </h2>
        </div>

        <div className="mx-auto mt-9 max-w-[760px] space-y-3 lg:mt-10">
          {faqs.map((item, idx) => {
            const open = idx === openIdx
            return (
              <motion.div
                key={item.q}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.35, ease: 'easeOut', delay: idx * 0.03 }}
                className="rounded-2xl bg-[#d8f0ef] p-5 lg:p-6"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx((v) => (v === idx ? -1 : idx))}
                  className="flex w-full items-center justify-between gap-4 text-left"
                >
                  <span className="font-[Inter] text-[15px] font-semibold text-[#222222] lg:text-[16px]">
                    {item.q}
                  </span>
                  <Icon open={open} />
                </button>

                <div
                  className={cn(
                    'grid transition-[grid-template-rows,opacity] duration-200 ease-out',
                    open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
                  )}
                >
                  <div className="overflow-hidden">
                    {item.a ? (
                      <p className="mt-4 text-[13px] leading-[1.35] text-[#222222] lg:text-[14px]">
                        {item.a}
                      </p>
                    ) : null}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

