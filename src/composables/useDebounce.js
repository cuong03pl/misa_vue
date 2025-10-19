import { ref, watch } from 'vue'
import debounce from 'lodash/debounce'

/**
 * Hàm delay việc thay đổi giá trị
 * @param value -  Giá trị cần debounce
 * @param delay Thời gian delay tính bằng ms
 * @returns {debouncedValue} - Giá trị đã được debounce
 * createdby: hkc
 */
export function useDebounce(value, delay = 300) {
  const debouncedValue = ref(value)

  const setDebouncedValue = debounce((value) => {
    debouncedValue.value = value
  }, delay)
  watch(value, (newVal) => setDebouncedValue(newVal))
  return {
    debouncedValue,
  }
}
