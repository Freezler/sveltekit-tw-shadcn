import  posts  from "./data.js";

export function load() {
  return {
    summaries: posts.map((post) => ({
      slug: post.aut,
      title: post.title,
      content: post.content.slice(0, 200)

    }))
  };
}