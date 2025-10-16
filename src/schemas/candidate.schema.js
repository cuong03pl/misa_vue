import * as yup from 'yup'

export const candidateSchema = yup.object({
  fullname: yup.string().required('Họ và tên không được để trống'),
  phone: yup.string().required('Số điện thoại không được để trống'),
  email: yup.string().email('Email không đúng định dạng').required('Email không được để trống'),
  position: yup.string().required('Vị trí không được để trống'),
})
