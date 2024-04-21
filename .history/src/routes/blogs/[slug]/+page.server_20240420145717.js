import { error } from '@sveltejs/kit';
async function

export function load({ params }) {
  const post = posts.find((post) => post.slug === params.slug);

  if (!post) throw error(404);

  return;
}
