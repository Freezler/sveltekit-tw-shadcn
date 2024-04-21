import { error } from '@sveltejs/kit';
fetch('https://jsonplaceholder.typicode.com/posts')

export function load({ params }) {
  const post = posts.find((post) => post.slug === params.slug);

  if (!post) throw error(404);

  return;
}
