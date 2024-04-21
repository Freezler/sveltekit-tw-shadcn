import { posts } from "../data.js";
import { error } from '@sveltejs/kit';

type pos = {
  title: string;
  content: string;
  author: string;
  date: string;
  version: string;
};


async function load({ params }: { params: { slug: string } }) {
  const post = posts.find((post) => post.slug === params.slug);

  if (!post) throw error(404);

  return {
    post
  };
}

export { load };