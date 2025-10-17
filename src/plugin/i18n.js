import { createI18n } from 'vue-i18n'
import viCommon from '@/locales/vi/common.json'
import viHeader from '@/locales/vi/header.json'
import viCandidate from '@/locales/vi/candidate.json'
const messages = {
  vi: {
    common: viCommon,
    header: viHeader,
    candidate: viCandidate,
  },
}

export const i18n = createI18n({
  legacy: false,
  locale: 'vi',
  fallbackLocale: 'vi',
  messages,
})
