import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, ShoppingBag, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";
import background from "@/assets/background.jpg?url";

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
    <main className="relative min-h-screen text-foreground overflow-hidden">
      <div className="fixed inset-0 -z-20 overflow-hidden">
        <div 
          className="h-full w-full"
          style={{ 
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(8px) brightness(0.6)',
            transform: 'scale(1.1)'
          }}
        />
      </div>
      <div className="mx-auto flex min-h-screen w-full max-w-md flex-col justify-end pb-[2%] px-6 pt-12">
        {/* Logo */}
        <div className="mx-auto mb-8 w-full max-w-[192px]">
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
              className="group relative flex items-center gap-4 rounded-xl border border-white/10 bg-black px-5 py-4 transition-all duration-300 hover:scale-[1.02]"
            >
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
