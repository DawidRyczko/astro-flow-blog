import type { CollectionEntry } from "astro:content";

export function getAllTags(posts: CollectionEntry<"blog">[]): string[] {
  return Array.from(new Set(posts.flatMap((post) => post.data.tags)));
}

export function getPublishedPosts(posts: CollectionEntry<"blog">[]): CollectionEntry<"blog">[] {
  return posts.filter((post) => post.data.isPublished);
}

export function getPostsByTag(posts: CollectionEntry<"blog">[], tag: string): CollectionEntry<"blog">[] {
  return posts.filter((post) => post.data.tags.includes(tag));
}

export function sortPostsByDate(posts: CollectionEntry<"blog">[]): CollectionEntry<"blog">[] {
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}
