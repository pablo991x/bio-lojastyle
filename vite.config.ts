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
      const cssFiles = new Set<string>([
        ...(entry.css ?? []),
        ...((entry.assets ?? []) as string[]).filter((a) => a.endsWith(".css")),
      ]);
      for (const e of Object.values(manifest) as any[]) {
        if (e.file && typeof e.file === "string" && e.file.endsWith(".css")) {
          cssFiles.add(e.file);
        }
      }
      const logoFile = manifest["src/assets/logo.png"]?.file ?? "";
      const bgFile = manifest["src/assets/background.webp"]?.file ?? "";
      const cssLinks = Array.from(cssFiles)
        .map((href) => `<link rel="stylesheet" href="/${href}">`)
        .join("\n    ");
      const logoMarkup = logoFile
        ? `<div class="mx-auto mb-6 pt-16 w-full max-w-[240px]">
        <img src="/${logoFile}" alt="Style Shop" class="h-auto w-full object-contain" />
      </div>`
        : "";
      const html = `<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" href="/favicon.ico" />
    <title>Style Shop</title>
    <meta name="description" content="WhatsApp, catálogo e localização." />
    ${cssLinks}
  </head>
  <body>
    <main class="relative min-h-screen text-foreground overflow-hidden">
      <div class="fixed inset-0 z-0 bg-black" style="${bgFile ? `background-image: url('/${bgFile}'); ` : ""}background-size: cover; background-position: center; filter: blur(8.64px) brightness(0.3); transform: scale(1.1);"></div>
      <div class="relative z-10 mx-auto flex min-h-screen w-full max-w-md flex-col justify-start pb-[4%] px-6 pt-16 md:pt-20">
        ${logoMarkup}
        <nav class="flex flex-col gap-3" aria-label="Links">
          <a href="https://wa.me/5562996119964" target="_blank" rel="noopener noreferrer" class="group relative flex items-center gap-4 rounded-xl border border-white/10 bg-black/80 px-5 py-4 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] backdrop-blur-sm">
            <span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg" style="background-color: color-mix(in oklab, oklch(0.68 0.17 152) 18%, transparent); color: oklch(0.68 0.17 152)">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
            </span>
            <span class="flex min-w-0 flex-col"><span class="truncate text-[15px] font-medium text-foreground">WhatsApp</span><span class="truncate text-[13px] text-muted-foreground">(62) 99611-9964</span></span>
          </a>
          <a href="https://lojastyle.shop" target="_blank" rel="noopener noreferrer" class="group relative flex items-center gap-4 rounded-xl border border-white/10 bg-black/80 px-5 py-4 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] backdrop-blur-sm">
            <span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg" style="background-color: color-mix(in oklab, oklch(0.78 0.04 270) 18%, transparent); color: oklch(0.78 0.04 270)">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
            </span>
            <span class="flex min-w-0 flex-col"><span class="truncate text-[15px] font-medium text-foreground">Catálogo de produtos</span><span class="truncate text-[13px] text-muted-foreground">lojastyle.shop</span></span>
          </a>
          <a href="https://share.google/ViFg28XnnnbgOIe1d" target="_blank" rel="noopener noreferrer" class="group relative flex items-center gap-4 rounded-xl border border-white/10 bg-black/80 px-5 py-4 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] backdrop-blur-sm">
            <span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg" style="background-color: color-mix(in oklab, oklch(0.65 0.2 25) 18%, transparent); color: oklch(0.65 0.2 25)">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            </span>
            <span class="flex min-w-0 flex-col"><span class="truncate text-[15px] font-medium text-foreground">Nossa localização</span><span class="truncate text-[13px] text-muted-foreground">Abrir no Google Maps</span></span>
          </a>
        </nav>
        <footer class="mt-auto pt-12 text-center text-xs text-muted-foreground">© 2026 Style Shop</footer>
      </div>
    </main>
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
