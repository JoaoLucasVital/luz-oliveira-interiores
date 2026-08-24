import { defineConfig } from "astro/config";

const publicSiteUrl = process.env.PUBLIC_SITE_URL?.trim();

export default defineConfig({
  output: "static",
  site: publicSiteUrl || "https://luz-oliveira-interiores.pages.dev",
  vite: {
    server: {
      allowedHosts: [".trycloudflare.com"],
    },
  },
});
