import { motion } from 'framer-motion'
import { cn } from '../lib/cn'

const items = [
  {
    icon: '/img/B4_1.svg',
    tag: 'ПЛАНОВО',
    tagTone: 'neutral',
    title: 'Мушки и черные точки',
    text: 'Плавающие помутнения, ниточки,\nпаутинки, тени на светлом фоне',
  },
  {
    icon: '/img/B4_2.svg',
    tag: 'СРОЧНО',
    tagTone: 'danger',
    title: 'Вспышки и “молнии”',
    text: 'Краткие световые феномены, искры,\nблики, фотопсии',
  },
  {
    icon: '/img/B4_3.svg',
    tag: 'СРОЧНО',
    tagTone: 'danger',
    title: 'Пелена и туман',
    text: 'Ощущение мутности, пленки,\nрасплывчатости изображения',
  },
  {
    icon: '/img/B4_4.svg',
    tag: 'ПЛАНОВО',
    tagTone: 'neutral',
    title: 'Мерцание и зигзаги',
    text: 'Рябь, мерцающие контуры,\nзвездочки перед глазами',
  },
  {
    icon: '/img/B4_5.svg',
    tag: 'СРОЧНО',
    tagTone: 'danger',
    title: 'Неподвижное пятно',
    text: 'Черное, белое или мутное пятно,\nкоторое не “уплывает”',
  },
  {
    icon: '/img/B4_6.svg',
    tag: 'ПЛАНОВО',
    tagTone: 'neutral',
    title: 'Радужные круги вокруг света',
    text: 'Особенно важно при сочетании с\nболью и покраснением',
  },
  {
    icon: '/img/B4_7.svg',
    tag: 'ПЛАНОВО',
    tagTone: 'neutral',
    title: 'Ощущение песка в глазах',
    text: 'Может быть связано с сухим глазом\nили воспалением поверхности глаза',
  },
  {
    icon: '/img/B4_8.svg',
    tag: 'СРОЧНО',
    tagTone: 'danger',
    title: 'Один глаз видит мутно',
    text: 'Односторонние симптомы требуют\nособенно внимательной диагностики',
  },
] as const

function Tag({ tone, children }: { tone: 'neutral' | 'danger'; children: string }) {
  const cls =
    tone === 'danger'
      ? 'bg-[#f1d9dc] text-[color:var(--c-danger)]'
      : 'bg-[#eef0f3] text-[#6b7280]'
  return (
    <span className={cn('rounded-full px-3 py-1 font-[Inter] text-[11px] font-semibold', cls)}>
      {children}
    </span>
  )
}

export function Block4() {
  return (
    <section id="symptoms" className="bg-[color:var(--bg-2)]">
      <div className="mx-auto max-w-[1180px] px-5 py-12 lg:px-6 lg:py-16">
        <div className="text-center">
          <div className="font-[Inter] text-[12px] font-semibold tracking-[0.16em] text-[color:var(--c-subtitle)]">
            СИМПТОМЫ
          </div>
          <h2 className="mt-3 font-[Inter] text-[26px] font-semibold leading-[1.15] text-[color:var(--c-title)] lg:text-[34px]">
            С какими жалобами обращаются чаще всего
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 lg:mt-10 lg:grid-cols-4 lg:gap-5">
          {items.map((it, idx) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.4, ease: 'easeOut', delay: idx * 0.03 }}
              className="rounded-2xl bg-white px-5 py-5 shadow-[0_12px_28px_rgba(0,0,0,0.06)]"
            >
              <div className="flex items-start justify-between gap-4">
                <img src={it.icon} alt="" className="h-7 w-7" aria-hidden="true" />
                <Tag tone={it.tagTone}>{it.tag}</Tag>
              </div>
              <div className="mt-4 font-[Inter] text-[15px] font-semibold text-[#222222]">
                {it.title}
              </div>
              <div className="mt-2 whitespace-pre-line text-[13px] leading-[1.25] text-[#6b7280]">
                {it.text}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-7 lg:hidden">
          <a
            href="#consult"
            className="inline-flex w-full items-center justify-center rounded-2xl bg-[color:var(--c-btn-blue)] py-4 font-[Inter] text-[16px] font-semibold text-white"
          >
            Записаться на консультацию
          </a>
        </div>
      </div>
    </section>
  )
}

