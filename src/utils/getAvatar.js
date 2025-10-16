export const getAvatar = (fullName) => {
  const firstName = fullName.split(' ')[0]
  const lastName = fullName.split(' ')[1]
  return firstName.charAt(0) + lastName.charAt(0)
}
