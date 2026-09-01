import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { projects } from "../src/data/content";

const pageSource = readFileSync(fileURLToPath(new URL("../src/pages/index.astro", import.meta.url)), "utf8");
const projectStyles = readFileSync(fileURLToPath(new URL("../src/styles/project-accordion.css", import.meta.url)), "utf8");

describe("links individuais do portfólio", () => {
  it("usa publicações específicas, válidas e sem duplicação", () => {
    const urls = projects.map((project) => project.instagramPostUrl);

    expect(urls).toHaveLength(new Set(urls).size);
    for (const url of urls) {
      const parsed = new URL(url);
      expect(parsed.hostname).toBe("www.instagram.com");
      expect(parsed.pathname).toMatch(/^\/luzoliveirainteriores\/(p|reel)\/[A-Za-z0-9_-]+\/$/);
      expect(parsed.pathname).not.toBe("/luzoliveirainteriores/");
    }
  });

  it("mantém a correspondência entre cada projeto e sua publicação confirmada", () => {
    expect(projects.map(({ title, instagramPostUrl }) => [title, instagramPostUrl])).toEqual([
      ["Escritório de advocacia", "https://www.instagram.com/luzoliveirainteriores/reel/DTbLcwxAR5q/"],
      ["Escritório imobiliário", "https://www.instagram.com/luzoliveirainteriores/reel/DAliPiNJIwq/"],
      ["Quarto infantil", "https://www.instagram.com/luzoliveirainteriores/reel/C5i4QslLroV/"],
    ]);
  });
});

describe("acesso ao portfólio completo", () => {
  it("oferece um CTA acessível para as coleções em 360° no Kuula", () => {
    expect(pageSource).toContain('class="projects-portfolio-link"');
    expect(pageSource).toContain('href="https://kuula.co/profile/luzoliveira/collections"');
    expect(pageSource).toContain("Ver portfólio completo em 360°");
    expect(pageSource).toContain('target="_blank" rel="noreferrer"');
    expect(projectStyles).toMatch(/\.projects-portfolio-link\s*\{[^}]*background:\s*#a85269;/s);
    expect(projectStyles).toMatch(/\.projects-portfolio-link\s*\{[^}]*color:\s*#fff;/s);
  });
});
