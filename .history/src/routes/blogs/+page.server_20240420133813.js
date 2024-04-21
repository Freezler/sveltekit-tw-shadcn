import { data } from './data.js'; 

export function load() {
  return {
    summaries: data.map((/** @type {{ slug: any; title: any; }} */ data) => ({
      slug: data.slug,
      title: data.title
    }))
  };
}