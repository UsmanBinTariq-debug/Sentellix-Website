import { Link } from "@tanstack/react-router";
import site from "@/data/site.json";
import logoDark from "@/assets/logo-dark.png";
import logoLight from "@/assets/logo-light.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/portfolio", label: "Work" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/blog", label: "Blog" },
  { to: "/faq", label: "FAQ" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2" aria-label={site.name}>
          <img src={logoDark} alt={`${site.name} logo`} className="h-9 w-auto" />
        </Link>
        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground font-medium" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/contact"
          className="inline-flex items-center rounded-md bg-navy px-4 py-2 text-sm font-medium text-navy-foreground transition-opacity hover:opacity-90"
        >
          Contact
        </Link>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-navy text-navy-foreground">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 md:flex-row md:items-center md:justify-between">
        <div>
          <img src={logoLight} alt={`${site.name} logo`} className="h-12 w-auto" />
          <p className="mt-3 max-w-md text-sm text-navy-muted">{site.tagline}</p>
        </div>
        <div className="flex flex-wrap gap-6 text-sm text-navy-muted">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className="hover:text-navy-foreground">
              {n.label}
            </Link>
          ))}
          <Link to="/contact" className="hover:text-navy-foreground">Contact</Link>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-4 text-xs text-navy-muted">
          (c) {new Date().getFullYear()} {site.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
