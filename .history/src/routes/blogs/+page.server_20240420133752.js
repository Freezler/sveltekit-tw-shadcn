import { data } from './data.js'; 

export function load() {
  return {
    summaries: data.map((post) => ({
      slug: post.slug,
      title: post.title
    }))
  };
}