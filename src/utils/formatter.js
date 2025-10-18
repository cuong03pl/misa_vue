export const formatter = {
  date: (date) => formatDate(date),
  phone: (phone) => formatPhone(phone),
  text: (text) => text,
}

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('vi-VN')
}
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
