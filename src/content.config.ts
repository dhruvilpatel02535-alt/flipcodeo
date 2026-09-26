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
    addon1_name: z.string(),
    addon1_note: z.string(),
    addon1_price: z.string(),
    addon2_name: z.string(),
    addon2_note: z.string(),
    addon2_price: z.string(),
    addon3_name: z.string(),
    addon3_note: z.string(),
    addon3_price: z.string(),
    addon4_name: z.string(),
    addon4_note: z.string(),
    addon4_price: z.string(),
    addon5_name: z.string(),
    addon5_note: z.string(),
    addon5_price: z.string(),
    addon6_name: z.string(),
    addon6_note: z.string(),
    addon6_price: z.string(),
  }),
});

const process = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/process' }),
  schema: z.object({
    step1_title: z.string(),
    step1_desc: z.string(),
    step2_title: z.string(),
    step2_desc: z.string(),
    step3_title: z.string(),
    step3_desc: z.string(),
    step4_title: z.string(),
    step4_desc: z.string(),
    step5_title: z.string(),
    step5_desc: z.string(),
  }),
});

export const collections = { portfolio, hero, about, services, pricing, addons, process };