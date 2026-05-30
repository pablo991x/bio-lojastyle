import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, ShoppingBag, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Style Shop" },
      { name: "description", content: "WhatsApp, catálogo e localização." },
    ],
  }),
  component: Index,
});

const links = [
  {
    label: "WhatsApp",
    sublabel: "(62) 99611-9964",
    href: "https://wa.me/5562996119964",
    icon: MessageCircle,
    accent: "oklch(0.68 0.17 152)",
  },
  {
    label: "Catálogo de produtos",
    sublabel: "lojastyle.shop",
    href: "https://lojastyle.shop",
    icon: ShoppingBag,
    accent: "oklch(0.78 0.04 270)",
  },
  {
    label: "Nossa localização",
    sublabel: "Abrir no Google Maps",
    href: "https://share.google/ViFg28XnnnbgOIe1d",
    icon: MapPin,
    accent: "oklch(0.65 0.2 25)",
  },
];

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto flex min-h-screen w-full max-w-md flex-col px-6 py-12">
        {/* Logo */}
        <div className="mx-auto mb-8 w-full max-w-[240px]">
          <img src={logo} alt="Style Shop" className="h-auto w-full object-contain" />
        </div>

        {/* Links */}
        <nav className="flex flex-col gap-3" aria-label="Links">
          {links.map(({ label, sublabel, href, icon: Icon, accent }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-4 rounded-xl border border-white/5 bg-white/[0.03] px-5 py-4 transition-all duration-300 hover:scale-[1.02] hover:bg-white/[0.05] shadow-[0_0_20px_rgba(59,130,246,0.1)] hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]"
            >
              <div className="absolute -inset-1 -z-10 rounded-2xl bg-blue-500/15 blur-xl transition-opacity duration-300 opacity-100" />
              <span
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg"
                style={{ backgroundColor: `color-mix(in oklab, ${accent} 18%, transparent)`, color: accent }}
              >
                <Icon className="h-5 w-5" strokeWidth={2} />
              </span>
              <span className="flex min-w-0 flex-col">
                <span className="truncate text-[15px] font-medium text-foreground">{label}</span>
                <span className="truncate text-[13px] text-muted-foreground">{sublabel}</span>
              </span>
            </a>
          ))}
        </nav>

        <footer className="mt-auto pt-12 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Style Shop
        </footer>
      </div>
    </main>
  );
}
