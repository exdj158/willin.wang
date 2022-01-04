import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

export const fallbackLng = 'en';
export const supportedLngs = ['en', 'zh'];

export function init() {
  return i18next.use(initReactI18next).init({
    fallbackLng,
    supportedLngs,
    keySeparator: false,
    nsSeparator: false,
    defaultNS: 'common',
    react: { useSuspense: false }
  });
}
