import { motion } from 'framer-motion'
import { cn } from '../lib/cn'

const bullets = [
  'Появилась “занавеска” или плотная пелена',
  'Стало резко больше мушек или черных точек',
  'Появились вспышки, молнии, искры',
  'Возникли радужные круги вокруг света и боль',
  'Появилось выпадение части изображения',
  'Была травма глаза или удар по голове',
] as const

export function Block3() {
  return (
    <section id="urgent" className="bg-[color:var(--bg-3)]">
      <div className="mx-auto max-w-[1180px] px-5 py-12 lg:px-6 lg:py-16">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className={cn(
            'relative overflow-hidden rounded-[22px] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)]',
            'lg:rounded-[28px]',
          )}
        >
          <div className="pointer-events-none absolute inset-y-0 left-0 w-[4px] bg-[color:var(--c-danger)] lg:w-[6px]" />

          <div className="grid grid-cols-1 gap-6 p-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10 lg:p-10">
            <div className="lg:pr-4">
              <h2 className="font-[Inter] text-[28px] font-semibold leading-[1.15] text-[color:var(--c-title)] lg:text-[34px]">
                Когда нужно срочно
                <br />
                обратиться к офтальмологу
              </h2>

              <p className="mt-4 text-[14px] leading-[1.35] text-[color:var(--c-danger)] lg:text-[15px]">
                Если зрение изменилось внезапно, важно исключить разрыв
                сетчатки, отслойку, острый приступ глаукомы и другие
                состояния, при которых счет может идти на часы:
              </p>

              <ul className="mt-5 space-y-3">
                {bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-[14px] leading-[1.3] text-[#222222]">
                    <img
                      src="/img/B3_1.png"
                      alt=""
                      className="mt-[2px] h-4 w-4 shrink-0"
                      aria-hidden="true"
                    />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#consult"
                className={cn(
                  'mt-7 inline-flex w-full items-center justify-center rounded-2xl bg-[color:var(--c-danger)] px-7 py-4',
                  'font-[Inter] text-[15px] font-semibold text-white shadow-sm',
                  'transition-transform hover:-translate-y-0.5 active:translate-y-0 lg:mt-8 lg:w-auto lg:py-3',
                )}
              >
                Срочная консультация
              </a>
            </div>

            <div className="order-last lg:order-none">
              <div className="overflow-hidden rounded-[18px] lg:rounded-[22px]">
                <picture>
                  <source srcSet="/img/B3_2.webp" type="image/webp" />
                  <img
                    src="/img/B3_2.png"
                    alt=""
                    className="h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

