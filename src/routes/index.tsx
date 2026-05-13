import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, ShoppingBag, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Links" },
      { name: "description", content: "All my links in one place." },
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
    className:
      "border-[oklch(0.55_0.18_150)]/40 bg-[oklch(0.5_0.17_150)]/20 hover:bg-[oklch(0.55_0.18_150)]/30 hover:border-[oklch(0.6_0.18_150)]/60",
    iconClassName: "text-[oklch(0.85_0.18_150)]",
  },
  {
    label: "Veja nosso catálogo de produtos",
    sublabel: "lojastyle.shop",
    href: "https://lojastyle.shop",
    icon: ShoppingBag,
    className:
      "border-white/10 bg-white/[0.04] hover:bg-white/[0.08] hover:border-white/20",
    iconClassName: "text-foreground/80",
  },
  {
    label: "Nossa localização",
    sublabel: "Abrir no Google Maps",
    href: "https://share.google/ViFg28XnnnbgOIe1d",
    icon: MapPin,
    className:
      "border-[oklch(0.6_0.22_25)]/40 bg-[oklch(0.5_0.2_25)]/20 hover:bg-[oklch(0.55_0.22_25)]/30 hover:border-[oklch(0.65_0.22_25)]/60",
    iconClassName: "text-[oklch(0.85_0.18_25)]",
  },
];

function Index() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[oklch(0.55_0.22_280)] opacity-20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-[oklch(0.65_0.18_200)] opacity-10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="mx-auto flex min-h-screen w-full max-w-md flex-col items-center px-6 py-12">
        {/* Logo */}
        <div className="mb-8 w-full max-w-[260px]">
          <img src={logo} alt="Logo" className="h-auto w-full object-contain" />
        </div>

        {/* Links */}
        <nav className="flex w-full flex-col gap-4" aria-label="Links">
          {links.map(({ label, sublabel, href, icon: Icon, className, iconClassName }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center gap-4 rounded-2xl border px-5 py-4 backdrop-blur-sm transition-all hover:-translate-y-0.5 ${className}`}
            >
              <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 ${iconClassName}`}>
                <Icon className="h-5 w-5" />
              </span>
              <span className="flex flex-col text-left">
                <span className="font-medium leading-tight">{label}</span>
                <span className="text-xs text-muted-foreground">{sublabel}</span>
              </span>
            </a>
          ))}
        </nav>

        <footer className="mt-auto pt-12 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Todos os direitos reservados
        </footer>
      </div>
    </main>
  );
}
