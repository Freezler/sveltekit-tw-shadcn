import { error } from '@sveltejs/kit';
const data = await fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json());
const posts = data.slice(0, 10);
export function load({ params }) {
  const post = posts.find((post) => post.slug === params.slug);

  if (!post) throw error(404);

  return {
    post
  };
}
