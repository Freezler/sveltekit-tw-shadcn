import { posts } from "../data";

export function load() {
  return {
    summaries: posts.map((post) => ({
      slug: post.slug,
      title: post.title,
      content: post.content.slice(0, 200)

    }))
  };
}