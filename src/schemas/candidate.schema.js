import * as yup from 'yup'

export const candidateSchema = (t) => {
  return yup.object({
    fullname: yup.string().required(t('candidate.errors.fullname_required')),
    phone: yup.string().required(t('candidate.errors.phone_required')),
    email: yup
      .string()
      .email(t('candidate.errors.email_invalid'))
      .required(t('candidate.errors.email_required')),
    position: yup.string().required(t('candidate.errors.position_required')),
  })
}
