import bun from "svelte-adapter-bun";
import vercel from "@sveltejs/adapter-vercel";

// The homelab k3s deployment runs the Bun server output (`bun ./build/index.js`
// in the Dockerfile), so Bun stays the default adapter. Vercel sets VERCEL=1 in
// its build environment; there we emit Vercel's own output format instead.
const adapter = process.env.VERCEL
  ? // Pinned so the build does not depend on whatever Node the build machine runs.
    vercel({ runtime: "nodejs24.x" })
  : bun();

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
