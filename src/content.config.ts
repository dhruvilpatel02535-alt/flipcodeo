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
    service1_icon: z.string(),
    service1_title: z.string(),
    service1_desc: z.string(),
    service2_icon: z.string(),
    service2_title: z.string(),
    service2_desc: z.string(),
    service3_icon: z.string(),
    service3_title: z.string(),
    service3_desc: z.string(),
    service4_icon: z.string(),
    service4_title: z.string(),
    service4_desc: z.string(),
    service5_icon: z.string(),
    service5_title: z.string(),
    service5_desc: z.string(),
    service6_icon: z.string(),
    service6_title: z.string(),
    service6_desc: z.string(),
  }),
});

export const collections = { portfolio, hero, about, services };