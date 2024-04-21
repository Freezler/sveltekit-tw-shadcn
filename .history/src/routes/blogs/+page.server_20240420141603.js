import { posts } from './data.js';

export async function load(page, f) {
  return {
    summaries: posts.map((post) => ({
      slug: post.slug,
      title: post.title,
      content: post.content
    }))
  };
}