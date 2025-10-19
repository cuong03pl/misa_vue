/**
 * Hàm random avt theo tên
 * @param fullName - Họ và tên đầy đủ
 * @returns {string} - Chữ cái đại diện cho avatar
 * createdby: hkc
 */

export const getAvatar = (fullName) => {
  const parts = fullName.trim().split(' ').filter(Boolean)
  if (parts.length === 0) return ''
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase()
  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase()
}
