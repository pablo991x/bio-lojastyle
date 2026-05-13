import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, ShoppingBag, MapPin, ArrowUpRight } from "lucide-react";
import logo from "@/assets/logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Style Shop — Links" },
      { name: "description", content: "WhatsApp, catálogo e localização." },
    ],
  }),
  component: Index,
});

type LinkItem = {
  label: string;
  sublabel: string;
  href: string;
  icon: typeof MessageCircle;
  gradient: string;
  glow: string;
  iconBg: string;
  ring: string;
};

const links: LinkItem[] = [
  {
    label: "WhatsApp",
    sublabel: "Fale conosco — (62) 99611-9964",
    href: "https://wa.me/5562996119964",
    icon: MessageCircle,
    gradient: "from-[oklch(0.7_0.19_150)] via-[oklch(0.6_0.2_155)] to-[oklch(0.5_0.18_160)]",
    glow: "bg-[oklch(0.65_0.2_152)]",
    iconBg: "bg-gradient-to-br from-[oklch(0.75_0.2_150)] to-[oklch(0.55_0.2_158)]",
    ring: "ring-[oklch(0.7_0.2_152)]/30",
  },
  {
    label: "Catálogo de produtos",
    sublabel: "Veja todas as novidades — lojastyle.shop",
    href: "https://lojastyle.shop",
    icon: ShoppingBag,
    gradient: "from-[oklch(0.75_0.18_85)] via-[oklch(0.7_0.2_55)] to-[oklch(0.65_0.22_30)]",
    glow: "bg-[oklch(0.7_0.2_60)]",
    iconBg: "bg-gradient-to-br from-[oklch(0.8_0.18_80)] to-[oklch(0.65_0.22_45)]",
    ring: "ring-[oklch(0.7_0.2_60)]/30",
  },
  {
    label: "Nossa localização",
    sublabel: "Abra a rota no Google Maps",
    href: "https://share.google/ViFg28XnnnbgOIe1d",
    icon: MapPin,
    gradient: "from-[oklch(0.7_0.22_25)] via-[oklch(0.6_0.24_20)] to-[oklch(0.5_0.22_15)]",
    glow: "bg-[oklch(0.6_0.24_22)]",
    iconBg: "bg-gradient-to-br from-[oklch(0.75_0.22_25)] to-[oklch(0.55_0.24_18)]",
    ring: "ring-[oklch(0.65_0.24_22)]/30",
  },
];

function Index() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      {/* Animated ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[oklch(0.55_0.22_280)] opacity-25 blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[420px] w-[420px] rounded-full bg-[oklch(0.65_0.22_25)] opacity-15 blur-[120px]" />
        <div className="absolute bottom-[20%] left-[-10%] h-[360px] w-[360px] rounded-full bg-[oklch(0.65_0.2_150)] opacity-15 blur-[120px]" />
        {/* grid */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
          }}
        />
        {/* noise */}
        <div
          className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "3px 3px",
          }}
        />
      </div>

      <div className="mx-auto flex min-h-screen w-full max-w-md flex-col items-center px-6 py-10">
        {/* Logo */}
        <div className="mb-2 w-full max-w-[280px] animate-fade-in">
          <img
            src={logo}
            alt="Style Shop"
            className="h-auto w-full object-contain drop-shadow-[0_0_40px_oklch(0.7_0.2_280/0.35)]"
          />
        </div>

        {/* Tagline */}
        <div className="mb-10 flex flex-col items-center gap-2 animate-fade-in">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-foreground/70 backdrop-blur-sm">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[oklch(0.7_0.2_150)] opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[oklch(0.7_0.2_150)]" />
            </span>
            Online agora
          </span>
          <p className="text-center text-sm text-muted-foreground">
            Tudo que você precisa em um só lugar
          </p>
        </div>

        {/* Links */}
        <nav className="flex w-full flex-col gap-4" aria-label="Links">
          {links.map(({ label, sublabel, href, icon: Icon, gradient, glow, iconBg, ring }, i) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ animationDelay: `${i * 90}ms`, animationFillMode: "both" }}
              className="group relative block animate-fade-in"
            >
              {/* Outer glow */}
              <span
                className={`pointer-events-none absolute -inset-px rounded-2xl ${glow} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-40`}
              />

              {/* Gradient border wrapper */}
              <span
                className={`relative block rounded-3xl bg-gradient-to-r p-[2px] ${gradient} transition-transform duration-300 group-hover:-translate-y-1 group-active:translate-y-0`}
              >
                {/* Card surface */}
                <span className="relative flex items-center gap-5 overflow-hidden rounded-[22px] bg-[oklch(0.16_0.02_270)]/90 px-5 py-6 backdrop-blur-xl">
                  {/* Shimmer */}
                  <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                  {/* Icon */}
                  <span
                    className={`relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-white shadow-lg ring-1 ${ring} ${iconBg}`}
                  >
                    <Icon className="h-6 w-6" strokeWidth={2.25} />
                  </span>

                  {/* Text */}
                  <span className="flex min-w-0 flex-1 flex-col text-left">
                    <span className="truncate text-base font-semibold leading-tight text-foreground">
                      {label}
                    </span>
                    <span className="truncate pt-1 text-[13px] text-muted-foreground">
                      {sublabel}
                    </span>
                  </span>

                  {/* Arrow */}
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/[0.06] text-foreground/70 transition-all duration-300 group-hover:bg-white/15 group-hover:text-foreground group-hover:rotate-0 -rotate-45">
                    <ArrowUpRight className="h-4.5 w-4.5" strokeWidth={2.5} />
                  </span>
                </span>
              </span>
            </a>
          ))}
        </nav>

        <footer className="mt-auto flex flex-col items-center gap-1 pt-12 text-[11px] text-muted-foreground">
          <span>© {new Date().getFullYear()} Style Shop</span>
          <span className="opacity-60">Todos os direitos reservados</span>
        </footer>
      </div>
    </main>
  );
}
