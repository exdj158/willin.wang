import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { fallbackLng, supportedLngs } from '~/i18n.config';

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

export function getRealPath(path: string): string {
  console.log(path);
  const arr = path.split('/');
  arr.shift();
  if (supportedLngs.includes(arr[0])) {
    arr.shift();
  }
  return `/${arr.join('/')}`;
}
