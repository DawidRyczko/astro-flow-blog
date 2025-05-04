import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date().default(new Date()),
    tags: z.array(z.string()).default([]),
    isPublished: z.boolean().default(true),
  }),
});

export const collections = { blog };
