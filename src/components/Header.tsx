import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'
import { cn } from '../lib/cn'

const navItems = [
  { href: '#symptoms', label: 'Симптомы' },
  { href: '#causes', label: 'Причины' },
  { href: '#diagnostics', label: 'Диагностика' },
  { href: '#appointment', label: 'Прием' },
  { href: '#doctor', label: 'Врач' },
  { href: '#faq', label: 'Популярные вопросы' },
  { href: '#contacts', label: 'Контакты' },
] as const

export function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  const list = useMemo(() => navItems, [])

  return (
    <header className="bg-white">
      <div className="mx-auto flex max-w-[1180px] items-center gap-6 px-5 py-4 lg:gap-8 lg:px-6">
        <a href="#top" className="flex shrink-0 items-center">
          <img
            src="/img/B1Logo.png"
            alt="Бахарев Алексей Викторович"
            className="h-10 w-auto lg:h-12"
            loading="eager"
            decoding="async"
          />
        </a>

        <nav className="hidden flex-1 items-center justify-center lg:flex">
          <ul className="flex items-center gap-7 font-[Inter] text-[15px] font-medium text-[#222222]">
            {list.map((item) => (
              <li key={item.href}>
                <a
                  className="transition-colors hover:text-[color:var(--c-title)]"
                  href={item.href}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-3">
          <a
            href="#consult"
            className={cn(
              'hidden rounded-full px-6 py-2.5 font-[Inter] text-[14px] font-semibold text-white',
              'bg-[color:var(--c-btn-blue)] shadow-sm transition-transform hover:-translate-y-0.5 active:translate-y-0',
              'lg:inline-flex',
            )}
          >
            Записаться
          </a>

          <button
            type="button"
            aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="relative inline-flex h-11 w-11 items-center justify-center rounded-lg lg:hidden"
          >
            <span className="sr-only">Меню</span>
            <span
              className={cn(
                'absolute h-[2px] w-6 rounded-full bg-[#222222] transition-transform',
                open ? 'translate-y-0 rotate-45' : '-translate-y-2',
              )}
            />
            <span
              className={cn(
                'absolute h-[2px] w-6 rounded-full bg-[#222222] transition-opacity',
                open ? 'opacity-0' : 'opacity-100',
              )}
            />
            <span
              className={cn(
                'absolute h-[2px] w-6 rounded-full bg-[#222222] transition-transform',
                open ? 'translate-y-0 -rotate-45' : 'translate-y-2',
              )}
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-black/5 bg-white lg:hidden"
          >
            <div className="mx-auto max-w-[1180px] px-5 pb-5 pt-4">
              <ul className="flex flex-col gap-3 text-[16px] font-medium text-[#222222]">
                {list.map((item) => (
                  <li key={item.href}>
                    <a
                      className="block py-2 transition-colors hover:text-[color:var(--c-title)]"
                      href={item.href}
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>

              <a
                href="#consult"
                className="mt-4 inline-flex w-full items-center justify-center rounded-2xl bg-[color:var(--c-btn-blue)] py-4 text-[16px] font-semibold text-white"
                onClick={() => setOpen(false)}
              >
                Записаться
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

