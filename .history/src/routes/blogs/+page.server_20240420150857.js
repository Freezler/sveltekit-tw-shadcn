import  posts  from "./data.js";

export function load() {
  return {
    summaries: posts.map((post) => ({
      auth: post.author,
      title: post.title,
      content: post.content.slice(0, 200)

    }))
  };
}