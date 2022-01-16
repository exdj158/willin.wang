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
    <div>
      <h2>demo</h2>
      {data.posts.map((post) => (
        <div key={post.title}>
          <h1>
            <Link to={`/zh/posts/${post.slug}`}>{post.title}</Link>
          </h1>

          <pre>{JSON.stringify(post, null, 2)}</pre>
        </div>
      ))}
    </div>
  );
}
