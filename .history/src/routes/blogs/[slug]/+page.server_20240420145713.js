import { error } from '@sveltejs/kit';
asu

export function load({ params }) {
  const post = posts.find((post) => post.slug === params.slug);

  if (!post) throw error(404);

  return;
}
