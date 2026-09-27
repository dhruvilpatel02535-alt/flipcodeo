import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const portfolio = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/portfolio' }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    image: z.string(),
    order: z.number().default(0),
  }),
});

const hero = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/hero' }),
  schema: z.object({
    tagline: z.string(),
    title: z.string(),
    subtitle: z.string(),
    description: z.string(),
    price: z.string(),
    btn1_text: z.string(),
    btn1_link: z.string(),
    btn2_text: z.string(),
    btn2_link: z.string(),
  }),
});

const about = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/about' }),
  schema: z.object({
    heading: z.string(),
    image: z.string(),
    paragraph1: z.string(),
    paragraph2: z.string(),
    skills: z.string(),
  }),
});

const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.object({
    icon: z.string(),
    title: z.string(),
    description: z.string(),
    order: z.number().default(0),
  }),
});

const pricing = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pricing' }),
  schema: z.object({
    name: z.string(),
    price: z.string(),
    note: z.string(),
    features: z.string(),
    muted: z.string(),
    popular: z.boolean(),
    order: z.number().default(0),
  }),
});

const addons = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/addons' }),
  schema: z.object({
    name: z.string(),
    note: z.string(),
    price: z.string(),
    order: z.number().default(0),
  }),
});

const process = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/process' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number().default(0),
  }),
});

export const collections = { portfolio, hero, about, services, pricing, addons, process };