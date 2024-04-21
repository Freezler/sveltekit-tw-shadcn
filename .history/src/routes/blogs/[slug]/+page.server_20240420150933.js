import { posts } from "";
import { error } from '@sveltejs/kit';

async function load({ params }: { params: { slug: string } }) {
  const post = posts.find((post) => post.slug === params.slug);

  if (!post) throw error(404);

  return {
    post
  };
}

export { load };