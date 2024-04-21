import { data } from './data.js'; 

export function load() {
  return {
    summaries: data.map((post) => ({
      slug: data.slug,
      title: post.title
    }))
  };
}