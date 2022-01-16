import { json, useLoaderData, Link, useMatches, redirect } from 'remix';
import type { LoaderFunction, MetaFunction } from 'remix';
import { useTranslation } from 'react-i18next';
import { useRemixI18Next } from 'remix-i18next';
import { supportedLngs, fallbackLng } from '~/i18n.config';
import Document from '~/components/document';
import { i18n, i18nSessionResolver } from '~/services/i18n.server';
import { getRealPath } from '~/utils/i18next';

export const loader: LoaderFunction = async ({ params, request }) => {
  const { lang } = params;
  const session = await i18nSessionResolver(request);
  const { locale } = session;

  // if (!lang && localeChanged && locale !== fallbackLng) {
  //   return redirect(`/${locale}`, {
  //     headers: {
  //       'Set-Cookie': await session.commit?.()
  //     }
  //   });
  // }
  if (lang && !supportedLngs.includes(lang)) {
    throw new Response('Not Found', {
      status: 404
    });
  }

  // if (lang === fallbackLng) {
  //   const url = new URL(request.url);
  //   return redirect(getRealPath(url.pathname), {
  //     headers: {
  //       'Set-Cookie': await session.commit?.()
  //     }
  //   });
  // }
  return json({
    locale: lang ?? locale,
    i18n: await i18n.getTranslations(lang ?? locale, ['site'])
  });
};

export const meta: MetaFunction = ({ data }) => ({
  title: 'Willin Wang',
  description: JSON.stringify(data)
});

export default function HomePage() {
  const matches = useMatches();
  const data = useLoaderData<Record<string, unknown>>();
  const { locale } = useLoaderData<{ locale: string }>();
  useRemixI18Next(locale);

  const { t } = useTranslation('site');
  return (
    <Document>
      <h1>{t('description')}</h1>
      <Link to='/lang'>Home Lang</Link>
      <main className='prose max-w-none'>
        <pre>{JSON.stringify(matches)}</pre>
        <pre>{JSON.stringify(data)}</pre>
      </main>
    </Document>
  );
}
