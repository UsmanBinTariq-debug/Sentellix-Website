import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X, Calendar, Phone } from "lucide-react";
import site from "@/data/site.json";
import logoDark from "@/assets/logo-dark.png";
import logoLight from "@/assets/logo-light.png";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

const CALENDLY_URL = "https://calendly.com/tariqusman664/sentellix-discovery-call";

const nav = [
  { to: "/", label: "Home" },
  { to: "/portfolio", label: "Work" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/blog", label: "Blog" },
  { to: "/faq", label: "FAQ" },
];

export function BookCallButton({
  variant = "accent",
  size = "default",
  className = "",
}: {
  variant?: "accent" | "outline" | "ghost-light";
  size?: "default" | "sm" | "lg";
  className?: string;
}) {
  const sizeClasses = {
    sm: "px-3.5 py-1.5 text-xs gap-1.5",
    default: "px-4 py-2 text-sm gap-2",
    lg: "px-6 py-3 text-sm gap-2",
  };

  const variantClasses = {
    accent:
      "bg-accent text-accent-foreground hover:-translate-y-0.5 hover:shadow-[0_4px_20px_oklch(0.72_0.16_200/0.4)]",
    outline:
      "border border-border bg-background text-foreground hover:bg-secondary hover:-translate-y-0.5",
    "ghost-light":
      "border border-white/25 bg-white/8 text-navy-foreground hover:bg-white/15 hover:-translate-y-0.5",
  };

  return (
    <a
      href={CALENDLY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-md font-semibold transition-all duration-200 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      <Calendar className={size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4"} />
      Book a Call
    </a>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full border-b border-border/60 bg-background/85 backdrop-blur transition-shadow duration-200 ${
        scrolled ? "shadow-[0_1px_16px_oklch(0.18_0.06_260/0.08)]" : ""
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2" aria-label={site.name}>
          <img src={logoDark} alt={`${site.name} logo`} className="h-18 w-auto" />
        </Link>

        {/* Desktop Navigation */}
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

        {/* Desktop CTAs */}
        {isMobile ? (
          <>
            <Sheet open={open} onOpenChange={setOpen}>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setOpen(true)}
                className="md:hidden"
              >
                <Menu className="h-5 w-5" />
              </Button>
              <SheetContent side="right" className="w-72">
                <SheetHeader>
                  <SheetTitle>Navigation</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-1 mt-6">
                  {nav.map((n) => (
                    <Link
                      key={n.to}
                      to={n.to}
                      onClick={() => setOpen(false)}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground py-2.5 px-2 rounded-md hover:bg-secondary"
                      activeProps={{ className: "text-foreground font-medium bg-secondary" }}
                      activeOptions={{ exact: n.to === "/" }}
                    >
                      {n.label}
                    </Link>
                  ))}
                  <div className="mt-5 flex flex-col gap-2.5 pt-4 border-t border-border">
                    <Link
                      to="/contact"
                      onClick={() => setOpen(false)}
                      className="inline-flex items-center justify-center rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary"
                    >
                      Contact
                    </Link>
                    <BookCallButton size="default" variant="accent" className="w-full" />
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </>
        ) : (
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              Contact
            </Link>
            <BookCallButton size="default" variant="accent" />
          </div>
        )}
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-navy text-navy-foreground">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-14 md:flex-row md:items-start md:justify-between">
        <div className="max-w-xs">
          <img src={logoLight} alt={`${site.name} logo`} className="h-40 w-auto" />
          <p className="mt-3 text-sm text-navy-muted leading-relaxed">{site.tagline}</p>
          <div className="mt-6">
            <p className="text-xs text-navy-muted mb-2.5 uppercase tracking-wide font-medium">
              Ready to automate?
            </p>
            <BookCallButton size="default" variant="ghost-light" />
          </div>
        </div>

        <div className="flex flex-col gap-6 md:flex-row md:gap-14">
          <div>
            <p className="text-xs text-navy-muted uppercase tracking-wide font-medium mb-3">Pages</p>
            <div className="flex flex-col gap-2.5 text-sm text-navy-muted">
              {nav.map((n) => (
                <Link key={n.to} to={n.to} className="hover:text-navy-foreground transition-colors">
                  {n.label}
                </Link>
              ))}
              <Link to="/contact" className="hover:text-navy-foreground transition-colors">Contact</Link>
            </div>
          </div>
          <div>
            <p className="text-xs text-navy-muted uppercase tracking-wide font-medium mb-3">Get started</p>
            <div className="flex flex-col gap-2.5 text-sm text-navy-muted">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-navy-foreground transition-colors flex items-center gap-1.5"
              >
                <Phone className="h-3.5 w-3.5" />
                Discovery call
              </a>
              <a
                href={`mailto:${site.email}`}
                className="hover:text-navy-foreground transition-colors"
              >
                {site.email}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between text-xs text-navy-muted">
          <span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-navy-foreground transition-colors flex items-center gap-1.5"
          >
            <Calendar className="h-3 w-3" />
            Book a free call
          </a>
        </div>
      </div>
    </footer>
  );
}

/* Floating "Book a Call" pill — appears after scrolling past the hero */
export function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <a
        href={CALENDLY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-[0_4px_24px_oklch(0.72_0.16_200/0.5)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_6px_32px_oklch(0.72_0.16_200/0.6)]"
      >
        <Calendar className="h-4 w-4" />
        Book a Free Call
      </a>
    </div>
  );
}
