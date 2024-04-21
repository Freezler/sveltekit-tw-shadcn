import { posts } from './data.js';

export async function load({ params }) {
  return {
    summaries: posts.map((post) => ({
      slug: post.slug,
      title: post.title,
      content: post.content
    }))
  };
}