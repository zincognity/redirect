// @ts-check
import { defineConfig } from "astro/config";
import node from "@astrojs/node";
import tailwindcss from "@tailwindcss/vite";
import { site } from "./src/core/config";

// https://astro.build/config
export default defineConfig({
    site: site,
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
