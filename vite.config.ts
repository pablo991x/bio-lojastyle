// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import fs from "node:fs";
import path from "node:path";

function vercelStaticIndex() {
  return {
    name: "vercel-static-index",
    apply: "build" as const,
    closeBundle() {
      const clientDir = path.resolve("dist/client");
      const manifestPath = path.join(clientDir, ".vite/manifest.json");
      if (!fs.existsSync(manifestPath)) return;
      const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
      const entry = Object.values(manifest).find(
        (e: any) => e.isEntry,
      ) as any;
      if (!entry) return;
      const cssLinks = (entry.css ?? [])
        .map((href: string) => `<link rel="stylesheet" href="/${href}">`)
        .join("\n    ");
      const html = `<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" href="/favicon.ico" />
    <title>Style Store</title>
    ${cssLinks}
    <script type="module" crossorigin src="/${entry.file}"></script>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>`;
      fs.writeFileSync(path.join(clientDir, "index.html"), html);
    },
  };
}

// Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
// @cloudflare/vite-plugin builds from this — wrangler.jsonc main alone is insufficient.
export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  vite: {
    build: { manifest: true },
    plugins: [vercelStaticIndex()],
  },
});
