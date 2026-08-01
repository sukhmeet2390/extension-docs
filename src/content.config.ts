import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    updated: z.string().optional(),
    tags: z.array(z.string()).optional(),
    canonical: z.string().optional(),
    image: z.string().optional(),
    draft: z.boolean().optional(),
    relatedProducts: z.array(z.string()).optional(),
    relatedPosts: z.array(z.string()).optional(),
  }),
});

const comparisons = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/comparisons' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    product: z.string(),
    competitor: z.string(),
    competitorUrl: z.string(),
    competitorStatus: z.enum(['active', 'dead']),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { blog, comparisons };
