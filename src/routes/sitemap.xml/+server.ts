import type { RequestHandler } from "./$types";

export const prerender = true;

const SITE = "https://thdxg.dev";

const pages: { path: string; changefreq: string; priority: string }[] = [
  { path: "/", changefreq: "monthly", priority: "1.0" },
  { path: "/resume", changefreq: "monthly", priority: "0.8" },
];

export const GET: RequestHandler = () => {
  const urls = pages
    .map(
      ({ path, changefreq, priority }) => `  <url>
    <loc>${SITE}${path}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`,
    )
    .join("\n");

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
