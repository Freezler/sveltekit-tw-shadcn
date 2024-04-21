import { data } from './data.js'; 

export function load() {
  return {
    summaries: data.map((data) => ({
      slug: data.slug,
      title: data.title
    }))
  };
}