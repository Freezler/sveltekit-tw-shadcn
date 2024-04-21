
import { error } from '@sveltejs/kit';

type posts = {
  title: string;
  content: string;
  author: string;
  date: string;
  version: string;
  slu
};


async function load({ params }: { params: { slug: string } }) {
  const post = data.find((post) => post.slug === params.slug);

  if (!post) throw error(404);

  return {
    post
  };
}

export { load };