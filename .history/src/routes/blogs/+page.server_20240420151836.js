import  posts  from "./data.js";

export function load() {
  return {
    summaries: posts.map((post) => ({
      author: post.author,
      title: post.title,
      content: post.content.slice(0, 200),
      date: post.date,
      slug: post.slug,


    }))
  };
}