import { describe, expect, it } from "vitest";
import { projects } from "../src/data/content";

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
