import bun from "svelte-adapter-bun";
import cloudflare from "@sveltejs/adapter-cloudflare";

const adapter = process.env.CF_PAGES ? cloudflare() : bun();

/** @type {import('@sveltejs/kit').Config} */
const config = {
  compilerOptions: {
    // Force runes mode for the project, except for libraries. Can be removed in svelte 6.
    runes: ({ filename }) =>
      filename.split(/[/\\]/).includes("node_modules") ? undefined : true,
  },
  kit: {
    adapter,
  },
};

export default config;
