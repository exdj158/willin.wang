import { Link, LoaderFunction, useLoaderData } from 'remix';
import { getPosts } from '~/utils/posts';

export const loader: LoaderFunction = () => {
  const posts = getPosts();
  return {
    posts
  };
};

export default function PostsPage() {
  const data = useLoaderData();

  return (
    <main>
      <h2>
        <Link to='/'>Home Page</Link>
      </h2>

      {data.posts.map((post) => (
        <div key={post.title}>
          <h1>
            <Link to={`/posts/${post.slug}`}>{post.title}</Link>
          </h1>

          <pre>{JSON.stringify(post, null, 2)}</pre>
        </div>
      ))}
    </main>
  );
}
