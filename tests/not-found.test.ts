import { existsSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const notFoundPath = fileURLToPath(new URL("../dist/404.html", import.meta.url));

describe("página de endereço não encontrado", () => {
  it("gera uma saída estática recuperável e fora da indexação", () => {
    expect(existsSync(notFoundPath)).toBe(true);

    const html = readFileSync(notFoundPath, "utf8");

    expect(html).toContain('data-page="not-found"');
    expect(html).toContain('name="robots" content="noindex, nofollow"');
    expect(html).toMatch(/Este ambiente\s*<em>ainda não existe\.<\/em>/);
    expect(html).toMatch(/href="\/"[^>]*>[^<]*Voltar ao início/s);
    expect(html).toMatch(/href="\/#projetos"[^>]*>[^<]*Conhecer projetos/s);
  });
});
