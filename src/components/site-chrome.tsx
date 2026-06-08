import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
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

const nav = [
  { to: "/", label: "Home" },
  { to: "/portfolio", label: "Work" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/blog", label: "Blog" },
  { to: "/faq", label: "FAQ" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur">
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

        {/* Mobile Menu Button */}
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
              <SheetContent side="right" className="w-64">
                <SheetHeader>
                  <SheetTitle>Navigation</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-4 mt-6">
                  {nav.map((n) => (
                    <Link
                      key={n.to}
                      to={n.to}
                      onClick={() => setOpen(false)}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground py-2"
                      activeProps={{ className: "text-foreground font-medium" }}
                      activeOptions={{ exact: n.to === "/" }}
                    >
                      {n.label}
                    </Link>
                  ))}
                  <Link
                    to="/contact"
                    onClick={() => setOpen(false)}
                    className="inline-flex items-center rounded-md bg-navy px-4 py-2 text-sm font-medium text-navy-foreground transition-opacity hover:opacity-90 mt-4"
                  >
                    Contact
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </>
        ) : (
          <Link
            to="/contact"
            className="inline-flex items-center rounded-md bg-navy px-4 py-2 text-sm font-medium text-navy-foreground transition-opacity hover:opacity-90"
          >
            Contact
          </Link>
        )}
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-navy text-navy-foreground">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 md:flex-row md:items-center md:justify-between">
        <div>
          <img src={logoLight} alt={`${site.name} logo`} className="h-40 w-auto" />
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
