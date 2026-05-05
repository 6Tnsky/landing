import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'
import { useEffect, useMemo, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { cn } from '../lib/cn'

const RECAPTCHA_SITE_KEY = '6LeIIBMTAAAAAPZ-S5Uq8ro2CZ2FTED2Z_sFDdLL'
const FORM_ENDPOINT = 'https://katarakta.ru/ajax/landing_form.php'

type Grecaptcha = {
  render: (
    container: HTMLElement | string,
    params: {
      sitekey: string
      theme?: 'light' | 'dark'
      size?: 'normal' | 'compact' | 'invisible'
    },
  ) => number
  reset: (widgetId?: number) => void
  getResponse: (widgetId?: number) => string
}

const schema = z.object({
  name: z.string().trim().min(1),
  phone: z.string().trim().min(1),
  email: z.string().trim().optional().or(z.literal('')),
})

type FormValues = z.infer<typeof schema>

export function Block9() {
  const [serverMsg, setServerMsg] = useState<string | null>(null)
  const [captchaReady, setCaptchaReady] = useState(false)
  const [captchaError, setCaptchaError] = useState<string | null>(null)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const recaptchaHostRef = useRef<HTMLDivElement | null>(null)
  const recaptchaWidgetIdRef = useRef<number | null>(null)

  useEffect(() => {
    let cancelled = false

    const tryRender = () => {
      const host = recaptchaHostRef.current
      const grecaptcha = (window as unknown as { grecaptcha?: Grecaptcha }).grecaptcha
      if (!host || !grecaptcha) return false
      if (recaptchaWidgetIdRef.current !== null) return true

      try {
        recaptchaWidgetIdRef.current = grecaptcha.render(host, {
          sitekey: RECAPTCHA_SITE_KEY,
          theme: 'light',
        })
        setCaptchaReady(true)
        return true
      } catch {
        return false
      }
    }

    const t0 = window.setInterval(() => {
      if (cancelled) return
      if (tryRender()) window.clearInterval(t0)
    }, 200)

    // safety timeout (don’t block the form UI forever)
    const t1 = window.setTimeout(() => {
      if (cancelled) return
      const grecaptcha = (window as unknown as { grecaptcha?: Grecaptcha }).grecaptcha
      if (!grecaptcha) setCaptchaError('Капча не загрузилась. Попробуйте обновить страницу.')
      window.clearInterval(t0)
    }, 8000)

    return () => {
      cancelled = true
      window.clearInterval(t0)
      window.clearTimeout(t1)
    }
  }, [])

  const defaultValues = useMemo<FormValues>(
    () => ({ name: '', phone: '', email: '' }),
    [],
  )

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(
      schema.superRefine((v, ctx) => {
        if (v.email && !z.string().email().safeParse(v.email).success) {
          ctx.addIssue({
            code: 'custom',
            path: ['email'],
            message: 'Введите корректный email',
          })
        }
      }),
    ),
    defaultValues,
    mode: 'onSubmit',
  })

  const requiredMissing = Boolean(errors.name || errors.phone)

  const onSubmit = async (values: FormValues) => {
    setServerMsg(null)
    setSubmitError(null)

    const grecaptcha = (window as unknown as { grecaptcha?: Grecaptcha }).grecaptcha
    const widgetId = recaptchaWidgetIdRef.current ?? undefined
    const captchaToken = grecaptcha?.getResponse(widgetId) ?? ''

    if (!captchaToken) {
      setSubmitError('Подтвердите, что вы не робот')
      return
    }

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: values.name,
          phone: values.phone,
          email: values.email ?? '',
          captcha_token: captchaToken,
        }),
      })

      if (!res.ok) {
        setSubmitError('Не удалось отправить заявку. Попробуйте позже.')
        return
      }

      setServerMsg('Спасибо! Заявка принята.')
      reset(defaultValues)
      grecaptcha?.reset(widgetId)
    } catch {
      setSubmitError('Не удалось отправить заявку. Проверьте подключение к интернету.')
    }
  }

  return (
    <section id="consult" className="bg-[color:var(--bg-2)]">
      <div className="mx-auto max-w-[1180px] px-5 py-12 lg:px-6 lg:py-16">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="overflow-hidden rounded-[26px] bg-white shadow-[0_14px_40px_rgba(0,0,0,0.07)]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr]">
            <div className="bg-[color:var(--bg-dark)] px-7 py-10 text-white lg:px-10 lg:py-12">
              <h2 className="text-center font-[Inter] text-[30px] font-semibold leading-[1.12] lg:text-left lg:text-[34px]">
                Не откладывайте
                <br />
                осмотр, если зрение
                <br />
                изменилось внезапно
              </h2>
              <p className="mx-auto mt-6 text-center text-[14px] leading-[1.35] text-white/80 lg:mx-0 lg:max-w-[420px] lg:text-left">
                Мушки, вспышки, пелена, мерцание и выпадение части изображения могут
                быть как безобидным симптомом, так и признаком состояния, которое
                требует помощи сегодня. Точную причину можно определить только после
                очного осмотра и диагностики.
              </p>
            </div>

            <div className="px-7 py-10 lg:px-10 lg:py-12">
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="space-y-5">
                  <label className="block">
                    <div className="text-[12px] font-semibold text-[#9ca3af]">
                      Ваше имя<span className="text-[color:var(--c-danger)]">*</span>
                    </div>
                    <input
                      className={cn(
                        'mt-2 w-full rounded-2xl bg-[#eef0f3] px-5 py-3.5 text-[14px] text-[#222222] outline-none',
                        'placeholder:text-[#9ca3af] focus:ring-2 focus:ring-[color:color-mix(in oklab, var(--c-title) 35%, transparent)]',
                      )}
                      placeholder="Введите ваше имя"
                      {...register('name')}
                    />
                  </label>

                  <label className="block">
                    <div className="text-[12px] font-semibold text-[#9ca3af]">
                      Номер телефона<span className="text-[color:var(--c-danger)]">*</span>
                    </div>
                    <input
                      className={cn(
                        'mt-2 w-full rounded-2xl bg-[#eef0f3] px-5 py-3.5 text-[14px] text-[#222222] outline-none',
                        'placeholder:text-[#9ca3af] focus:ring-2 focus:ring-[color:color-mix(in oklab, var(--c-title) 35%, transparent)]',
                      )}
                      placeholder="+7 (000) 000-00-00"
                      inputMode="tel"
                      {...register('phone')}
                    />
                  </label>

                  <label className="block">
                    <div className="text-[12px] font-semibold text-[#9ca3af]">Электронная почта</div>
                    <input
                      className={cn(
                        'mt-2 w-full rounded-2xl bg-[#eef0f3] px-5 py-3.5 text-[14px] text-[#222222] outline-none',
                        'placeholder:text-[#9ca3af] focus:ring-2 focus:ring-[color:color-mix(in oklab, var(--c-title) 35%, transparent)]',
                      )}
                      placeholder="example@mail.ru"
                      inputMode="email"
                      {...register('email')}
                    />
                    {errors.email?.message ? (
                      <div className="mt-2 text-[12px] text-[color:var(--c-danger)]">
                        {errors.email.message}
                      </div>
                    ) : null}
                  </label>
                </div>

                {requiredMissing ? (
                  <div className="mt-4 text-[13px] font-medium text-[color:var(--c-danger)]">
                    Заполните обязательные поля
                  </div>
                ) : null}

                {serverMsg ? (
                  <div className="mt-4 text-[13px] font-medium text-[color:var(--c-subtitle)]">
                    {serverMsg}
                  </div>
                ) : null}
                {submitError ? (
                  <div className="mt-4 text-[13px] font-medium text-[color:var(--c-danger)]">
                    {submitError}
                  </div>
                ) : null}

                <div className="mt-6">
                  <div ref={recaptchaHostRef} />
                  {!captchaReady && !captchaError ? (
                    <div className="mt-2 text-[12px] text-[#6b7280]">Загрузка капчи…</div>
                  ) : null}
                  {captchaError ? (
                    <div className="mt-2 text-[12px] text-[color:var(--c-danger)]">
                      {captchaError}
                    </div>
                  ) : null}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    'mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-[color:var(--c-title)] py-4 font-[Inter] text-[16px] font-semibold text-white',
                    'transition-transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 disabled:hover:translate-y-0',
                  )}
                >
                  Записаться на консультацию
                </button>

                <p className="mt-4 text-[11px] leading-[1.35] text-[#6b7280]">
                  Нажимая кнопку &quot;Записаться&quot;, вы даете свое согласие на обработку
                  данных согласно{' '}
                  <a
                    href="https://katarakta.ru/politika.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2"
                  >
                    политике конфиденциальности
                  </a>
                </p>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

