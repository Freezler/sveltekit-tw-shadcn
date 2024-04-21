import { posts } from './data.js';

export as function load() {
  return {
    summaries: posts.map((post) => ({
      slug: post.slug,
      title: post.title,
      content: post.content
    }))
  };
}