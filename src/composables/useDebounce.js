import { ref, watch } from 'vue'
import debounce from 'lodash/debounce'

export function useDebounce(value) {
  const debouncedValue = ref(value)
  console.log(value)

  const setDebouncedValue = debounce((value) => {
    debouncedValue.value = value
  }, 300)
  watch(debouncedValue, (newVal) => setDebouncedValue(newVal))
  return {
    debouncedValue,
  }
}
