const allowIndexing = import.meta.env.PUBLIC_ALLOW_INDEXING === "true";
const siteOrigin = (import.meta.env.PUBLIC_SITE_URL || "https://luz-oliveira-interiores.pages.dev").replace(/\/$/, "");

export function GET() {
  const body = allowIndexing
    ? `User-agent: *\nAllow: /\nSitemap: ${siteOrigin}/sitemap.xml\n`
    : "User-agent: *\nDisallow: /\n";

  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
