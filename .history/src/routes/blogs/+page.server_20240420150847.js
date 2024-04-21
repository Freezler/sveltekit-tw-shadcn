import  posts  from "./data.js";

export function load() {
  return {
    summaries: posts.map((post) => ({
      slug: post.au,
      title: post.title,
      content: post.content.slice(0, 200)

    }))
  };
}