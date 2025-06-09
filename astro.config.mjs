// @ts-check
import node from "@astrojs/node";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import { site } from "./src/core/config";

// https://astro.build/config
export default defineConfig({
    site: site,
    integrations: [react()],
    vite: {
        plugins: [tailwindcss()],
    },
    output: "static",
    adapter: node({
        mode: "standalone",
    }),
    server: {
        host: true,
    },
});
