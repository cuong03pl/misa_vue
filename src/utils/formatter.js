export const formatter = {
  date: (date) => formatDate(date),
  phone: (phone) => formatPhone(phone),
  text: (text) => text,
}

/**
 * Hàm định dạng thời gian
 * @param date - Thời gian cần định dạng
 * @returns {string} - Thời gian đã được định dạng
 * createdby: hkc
 */
const formatDate = (date) => {
  return new Date(date).toLocaleDateString('vi-VN')
}

/**
 * Hàm định dạng số điện thoại
 * @param phone - Số điện thoại cần định dạng
 * @returns {string} - Số điện thoại đã được định dạng
 * createdby: hkc
 */
const formatPhone = (phone) => {
  if (!phone) return ''

  let digits = phone.toString().replace(/\D/g, '')

  if (digits.startsWith('84')) digits = '0' + digits.slice(2)

  digits = digits.slice(-10)

  if (digits.length === 10) {
    return digits.replace(/(\d{4})(\d{3})(\d{3})/, '$1 $2 $3')
  }

  return digits
}
