import { useLoaderData, useMatches, Outlet, Link } from 'remix';
import type { MetaFunction } from 'remix';

export const meta: MetaFunction = ({ data }) => ({
  title: 'Willin Wang',
  description: JSON.stringify(data)
});

export default function PageComponent() {
  const matches = useMatches();
  const data = useLoaderData<Record<string, unknown>>();

  return (
    <main className='prose max-w-none'>
      <h1>Hello World</h1>
      <h2>
        <Link to='/posts'>Posts</Link>
      </h2>
      <pre>{JSON.stringify(matches)}</pre>
      <pre>{JSON.stringify(data)}</pre>
      <Outlet></Outlet>
    </main>
  );
}
