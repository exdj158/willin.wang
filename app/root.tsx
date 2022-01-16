import { Outlet, useCatch } from 'remix';
import type { LinksFunction, LoaderFunction } from 'remix';
import tailwindStyles from '~/styles/global.css';
import { themeSessionResolver } from '~/services/theme.server';
import Document from '~/components/document';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: tailwindStyles },
  { rel: 'shortcut icon', type: 'image/jpg', href: '/favicon.png' }
];

export const loader: LoaderFunction = async ({ request }) => {
  const { getTheme } = await themeSessionResolver(request);
  return {
    theme: getTheme()
  };
};

export default function App() {
  return <Outlet />;
}

export function CatchBoundary() {
  const caught = useCatch();
  console.error('CatchBoundary', caught);

  if (caught.status === 404) {
    return (
      <Document>
        <h1>Oh no...</h1>
        <p>404</p>
      </Document>
    );
  }
  throw new Error(`Unhandled error: ${caught.status}`);
}

// best effort, last ditch error boundary. This should only catch root errors
// all other errors should be caught by the index route which will include
// the footer and stuff, which is much better.
export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);
  return (
    <Document>
      <h1>Oh no...</h1>
      <p>500</p>
    </Document>
  );
}
