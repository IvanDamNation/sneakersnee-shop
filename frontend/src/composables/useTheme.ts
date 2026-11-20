import { ref } from 'vue'

const isDark = ref(document.documentElement.classList.contains('dark'))
let listenerAttached = false

const applyTheme = (dark: boolean) => {
  isDark.value = dark
  document.documentElement.classList.toggle('dark', dark)
  localStorage.setItem('theme', dark ? 'dark' : 'light')
}

const toggleTheme = () => {
  applyTheme(!isDark.value)
}

if (typeof window !== 'undefined' && !listenerAttached) {
  window.addEventListener('keydown', (e: KeyboardEvent) => {
    if (e.altKey && e.shiftKey && e.code === 'KeyT') {
      e.preventDefault()
      toggleTheme()
    }
  })
  listenerAttached = true
}

export function useTheme() {
  return {
    isDark,
    toggleTheme,
  }
}
