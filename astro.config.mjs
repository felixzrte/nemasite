import { defineConfig } from 'astro/config';
import vercelStatic from '@astrojs/vercel/static'

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercelStatic(),
  integrations: [tailwind()]
});
