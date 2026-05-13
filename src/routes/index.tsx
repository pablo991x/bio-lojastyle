import { createFileRoute } from "@tanstack/react-router";
import { Instagram, Twitter, Youtube, Globe, Mail, Github } from "lucide-react";
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
  { label: "Website", href: "https://example.com", icon: Globe },
  { label: "Instagram", href: "https://instagram.com", icon: Instagram },
  { label: "Twitter / X", href: "https://twitter.com", icon: Twitter },
  { label: "YouTube", href: "https://youtube.com", icon: Youtube },
  { label: "GitHub", href: "https://github.com", icon: Github },
  { label: "Contato", href: "mailto:hello@example.com", icon: Mail },
];

const socials = [
  { label: "Instagram", href: "https://instagram.com", icon: Instagram },
  { label: "Twitter", href: "https://twitter.com", icon: Twitter },
  { label: "YouTube", href: "https://youtube.com", icon: Youtube },
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

      <div className="mx-auto flex min-h-screen w-full max-w-md flex-col items-center px-6 py-16">
        {/* Avatar / Logo */}
        <div className="relative mb-6">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[oklch(0.6_0.22_280)] to-[oklch(0.65_0.18_200)] blur-xl opacity-60" />
          <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-white/10 bg-white/5 p-3 backdrop-blur-sm">
            <img src={logo} alt="Logo" className="h-full w-full object-contain" />
          </div>
        </div>

        <h1 className="text-2xl font-semibold tracking-tight">@username</h1>
        <p className="mt-2 text-center text-sm text-muted-foreground">
          Bem-vindo. Encontre todos os meus links abaixo.
        </p>

        {/* Links */}
        <nav className="mt-10 flex w-full flex-col gap-3" aria-label="Links">
          {links.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-between overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/[0.06] hover:-translate-y-0.5"
            >
              <span className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <span className="flex items-center gap-3">
                <Icon className="h-5 w-5 text-foreground/80" />
                <span className="font-medium">{label}</span>
              </span>
              <span className="text-xs text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100">
                Abrir →
              </span>
            </a>
          ))}
        </nav>

        {/* Socials */}
        <div className="mt-10 flex items-center gap-4">
          {socials.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-foreground/80 transition-all hover:scale-110 hover:border-white/20 hover:bg-white/[0.08] hover:text-foreground"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>

        <footer className="mt-auto pt-12 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Todos os direitos reservados
        </footer>
      </div>
    </main>
  );
}
