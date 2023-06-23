import { defineConfig } from "astro/config";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/static";
// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  adapter: vercel({
    analytics: true,
  }),
  vite: {
    ssr: {
      noExternal: ["path-to-regexp"],
    },
  },
});
