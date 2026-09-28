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

const why = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/why' }),
  schema: z.object({
    icon: z.string(),
    title: z.string(),
    description: z.string(),
    order: z.number().default(0),
  }),
});

const faq = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/faq' }),
  schema: z.object({
    question: z.string(),
    answer: z.string(),
    order: z.number().default(0),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    tag: z.string(),
    title: z.string(),
    excerpt: z.string(),
    body: z.string(),
    order: z.number().default(0),
  }),
});

const contact = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/contact' }),
  schema: z.object({
    heading: z.string(),
    description: z.string(),
    email: z.string(),
    phone: z.string(),
    phone_note: z.string(),
    location: z.string(),
    whatsapp_number: z.string(),
  }),
});

const footer = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/footer' }),
  schema: z.object({
    logo_text: z.string(),
    logo_sub: z.string(),
    copyright: z.string(),
    facebook: z.string(),
    linkedin: z.string(),
    instagram: z.string(),
    twitter: z.string(),
  }),
});

const domainInfo = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/domainInfo' }),
  schema: z.object({
    heading: z.string(),
    description: z.string(),
    rows: z.array(z.object({
      label: z.string(),
      value: z.string(),
    })),
  }),
});

const testimonials = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/testimonials' }),
  schema: z.object({
    client_name: z.string(),
    business_name: z.string(),
    city: z.string(),
    review: z.string(),
    rating: z.number().default(5),
    date: z.string(),
    project_type: z.string(),
    photo: z.string().optional(),
    screenshot: z.string().optional(),
    order: z.number().default(0),
  }),
});

export const collections = { portfolio, hero, about, services, pricing, addons, process, why, faq, blog, contact, footer, domainInfo, testimonials };