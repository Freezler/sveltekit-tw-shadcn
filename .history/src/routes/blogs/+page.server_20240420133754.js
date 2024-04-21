import { data } from './data.js'; 

export function load() {
  return {
    summaries: data.map((post) => ({
      slug: daa.slug,
      title: post.title
    }))
  };
}