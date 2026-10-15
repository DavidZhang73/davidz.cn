import { ref } from 'vue'

export const isDark = ref(false)
export function setDarkMode(value: boolean) {
  isDark.value = value
  document.documentElement.classList.toggle('dark', value)
}
export function toggleMode() {
  setDarkMode(!isDark.value)
}
