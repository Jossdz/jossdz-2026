import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  // TODO: Add the correct site URL here.
  site: "https://example.com",
  vite: { plugins: [tailwindcss()] },
  prefetch: { prefetchAll: false, defaultStrategy: "hover" },
  integrations: [react(), sitemap()],
});
