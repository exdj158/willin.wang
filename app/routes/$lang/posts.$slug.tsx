import { Link, LoaderFunction, useLoaderData } from 'remix';
import { useMdxComponent } from '~/utils/mdx';
import { getPosts } from '~/utils/posts';

export const loader: LoaderFunction = () => {
  const posts = getPosts();
  return {
    post: posts[1]
  };
};

export default function PostsPage() {
  const data = useLoaderData();

  let Component = null;
  if (typeof window !== 'undefined' && code) {
    Component = useMdxComponent(data.post.body.raw);
  }
  return (
    <div>
      <h2>demo</h2>
      <>
        {Component ? (
          <main className='prose dark:prose-invert prose-slate'>
            <Component />
          </main>
        ) : (
          <main
            className='prose dark:prose-invert prose-slate'
            dangerouslySetInnerHTML={{ __html: data.post.body.html }}
          />
        )}
      </>
    </div>
  );
}