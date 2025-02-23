import { mdsvex } from "mdsvex";
import rehypeSlug from 'rehype-slug'
import adapter from "@sveltejs/adapter-static"
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte"

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://svelte.dev/docs/kit/integrations
  // for more information about preprocessors
  preprocess: [
    vitePreprocess(), 
    mdsvex({
      extensions: [".md", ".svx"],
      rehypePlugins: [
        rehypeSlug
      ],
    })
  ],

  kit: {
    adapter: adapter(),
  },

  extensions: [".svelte", ".svx", ".md"],
};

export default config
