import { ref } from 'vue'

export type ThemeMode = 'light' | 'dark'

const theme = ref<ThemeMode>('light')

function setHtmlTheme(mode: ThemeMode) {
  const html = document.documentElement
  html.classList.toggle('dark', mode === 'dark')
  html.classList.toggle('light', mode === 'light')
}

export function initTheme() {
  const saved = (localStorage.getItem('theme') as ThemeMode | null)

  if (saved === 'dark' || saved === 'light') {
    theme.value = saved
    setHtmlTheme(saved)
    return
  }

  const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)')?.matches ?? false
  theme.value = prefersDark ? 'dark' : 'light'
  setHtmlTheme(theme.value)
}

export function useTheme() {
  function apply(mode: ThemeMode) {
    theme.value = mode
    setHtmlTheme(mode)
    localStorage.setItem('theme', mode)
  }

  function toggle() {
    apply(theme.value === 'dark' ? 'light' : 'dark')
  }

  return { theme, apply, toggle }
}
