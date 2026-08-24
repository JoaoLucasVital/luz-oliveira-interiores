import { copyFile, mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const projectRoot = resolve(import.meta.dirname, "..");
const serverDir = resolve(projectRoot, "dist/server");
const metadataDir = resolve(projectRoot, "dist/.openai");

const workerSource = `export default {
  async fetch(request, env) {
    const response = await env.ASSETS.fetch(request);
    if (response.status !== 404 || request.method !== "GET") return response;

    const url = new URL(request.url);
    if (url.pathname.includes(".")) return response;

    return env.ASSETS.fetch(new Request(new URL("/index.html", url), request));
  },
};
`;

await mkdir(serverDir, { recursive: true });
await mkdir(metadataDir, { recursive: true });
await writeFile(resolve(serverDir, "index.js"), workerSource, "utf8");
await copyFile(resolve(projectRoot, ".openai/hosting.json"), resolve(metadataDir, "hosting.json"));
