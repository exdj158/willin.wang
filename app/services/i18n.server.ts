import { Backend, RemixI18Next } from 'remix-i18next';
import { pick } from 'accept-language-parser';
import { fallbackLng, supportedLngs } from '~/i18n.config';
import { createCookieSession } from '~/utils/session.server';
import * as translations from '~/i18n';

type Translations = {
  [locale: string]: {
    [namespace: string]: {
      [key: string]: string;
    };
  };
};
class InMemoryBackend implements Backend {
  // eslint-disable-next-line no-useless-constructor
  constructor(private readonly data: Translations) {}

  getTranslations(namespace: string, locale: string) {
    return (
      this.data?.[locale]?.[namespace] || this.data[fallbackLng][namespace]
    );
  }
}

export const cookieI18nSession = createCookieSession('i18next');

export const i18nSessionResolver = async (request: Request) => {
  const session = await cookieI18nSession.getSession(
    request.headers.get('Cookie')
  );
  let locale = session.get('lng') as string;
  if (!locale) {
    locale = pick(
      supportedLngs,
      request.headers.get('Accept-Language') ?? fallbackLng,
      {
        loose: true
      }
    );
    session.set('lng', locale);
    return {
      locale,
      commit: () => cookieI18nSession.commitSession(session)
    };
  }
  return {
    locale
  };
};

export const i18n = new RemixI18Next(
  new InMemoryBackend(translations as Translations),
  {
    fallbackLng,
    supportedLanguages: supportedLngs,
    sessionStorage: cookieI18nSession
  }
);
