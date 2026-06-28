import { useEffect, useRef, useState } from 'react'

type Theme = 'dark' | 'light'

/** Persisted dark/light theme applied to <html data-theme>. */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('theme') as Theme | null
    if (saved) return saved
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
  return { theme, toggle }
}

/** True once the page is scrolled past `offset` px. */
export function useScrolled(offset = 12) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > offset)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [offset])
  return scrolled
}

/** Adds class `in` to a `.reveal` element when it scrolls into view. */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('in')
          io.disconnect()
        }
      },
      { threshold: 0.12 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return ref
}

/** Typewriter effect that cycles through a list of phrases. */
export function useTyped(phrases: readonly string[], speed = 70, pause = 1600) {
  const [text, setText] = useState('')
  useEffect(() => {
    let phraseIdx = 0
    let charIdx = 0
    let deleting = false
    let timer: number

    const tick = () => {
      const current = phrases[phraseIdx]
      if (!deleting) {
        charIdx++
        setText(current.slice(0, charIdx))
        if (charIdx === current.length) {
          deleting = true
          timer = window.setTimeout(tick, pause)
          return
        }
      } else {
        charIdx--
        setText(current.slice(0, charIdx))
        if (charIdx === 0) {
          deleting = false
          phraseIdx = (phraseIdx + 1) % phrases.length
        }
      }
      timer = window.setTimeout(tick, deleting ? speed / 2 : speed)
    }

    timer = window.setTimeout(tick, speed)
    return () => window.clearTimeout(timer)
  }, [phrases, speed, pause])

  return text
}
