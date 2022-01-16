import { Page } from 'contentlayer.config';
import { Link, LoaderFunction, useLoaderData } from 'remix';
import { useMdxComponent } from '~/components/mdx';
import { getPosts } from '~/utils/posts';

export const loader: LoaderFunction = () => {
  const posts = getPosts();
  console.log(posts[1]);
  return {
    post: posts[1]
  };
};

export default function PostsPage() {
  const data = useLoaderData();
  console.log(data);

  const Component = useMdxComponent(data.post.body.code);

  return (
    <div>
      <h2>demo</h2>
      <main className='prose dark:prose-invert prose-slate'>
        <Component />
      </main>
    </div>
  );
}
