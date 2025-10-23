/**
 * Hàm định dạng thời gian
 * @param date - Thời gian cần định dạng
 * @returns {string} - Thời gian đã được định dạng
 * createdby: hkc
 */
export const formatDate = (date) => {
  return new Date(date).toLocaleDateString('vi-VN')
}

export const formatBirthday = (date) => {
  if (!date) return null
  return new Date(date).toISOString().split('T')[0]
}
