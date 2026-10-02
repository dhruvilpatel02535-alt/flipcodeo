// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://flipcodeo.in',
  integrations: [sitemap({ prefix: 'sm' })],
});
