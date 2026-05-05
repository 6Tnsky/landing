import { motion } from 'framer-motion'

const contacts = [
  { label: '8-903-718-04-02', href: 'tel:+79037180402' },
  { label: 'baharevkatarakta@yandex.ru', href: 'mailto:baharevkatarakta@yandex.ru' },
  {
    label: 'MAX',
    href: 'https://max.ru/u/f9LHodD0cOKObE2jq2zKXEvSchYJEzXzgb7n51ov5hU08C5XxpKuxveFGhQ',
  },
] as const

export function Block11() {
  return (
    <footer id="contacts" className="bg-[color:var(--bg-dark)] text-white">
      <div className="mx-auto max-w-[1180px] px-5 py-12 lg:px-6 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="font-[Inter] text-[32px] font-semibold leading-none lg:text-[40px]"
          >
            Контакты
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, ease: 'easeOut', delay: 0.05 }}
            className="font-[Inter] text-[26px] font-semibold leading-[1.1] text-white/55 lg:text-right lg:text-[34px]"
          >
            Свяжитесь с нами
            <br />
            удобным способом
          </motion.div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 lg:mt-12 lg:grid-cols-3 lg:gap-5">
          {contacts.map((c, idx) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.4, ease: 'easeOut', delay: idx * 0.04 }}
              className="flex items-center justify-center rounded-2xl bg-[color:var(--bg-dark-card)] px-6 py-6 font-[Inter] text-[18px] font-semibold text-white shadow-sm transition-colors hover:bg-white/10"
            >
              {c.label}
            </motion.a>
          ))}
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-[12px] text-white/40 lg:mt-14">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div>© 2026 Все права защищены</div>
            <a
              href="https://katarakta.ru/politika-ispolzovaniya-kukis.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2"
            >
              Политика использования Cookies
            </a>
            <a
              href="https://katarakta.ru/politika.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2"
            >
              Политика конфиденциальности
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

