import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const robotsPath = fileURLToPath(new URL("../dist/robots.txt", import.meta.url));
const homePath = fileURLToPath(new URL("../dist/index.html", import.meta.url));

describe("indexação do site final", () => {
  it("autoriza rastreamento e informa o sitemap aos buscadores", () => {
    const robots = readFileSync(robotsPath, "utf8");

    expect(robots).toBe(
      "User-agent: *\nAllow: /\nSitemap: https://luz-oliveira-interiores.pages.dev/sitemap.xml\n",
    );
  });

  it("permite que a página principal seja indexada", () => {
    const html = readFileSync(homePath, "utf8");

    expect(html).toContain(
      'name="robots" content="index, follow, max-image-preview:large"',
    );
  });
});
