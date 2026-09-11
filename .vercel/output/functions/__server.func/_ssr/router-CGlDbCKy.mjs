import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { Q as notFound } from "../_libs/tanstack__router-core.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { R as Root, P as Portal, C as Content, a as Close, T as Title, O as Overlay, D as Description } from "../_libs/radix-ui__react-dialog.mjs";
import { M as Menu, P as Phone, C as Calendar, X } from "../_libs/lucide-react.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/@radix-ui/react-use-escape-keydown+[...].mjs";
import "../_libs/radix-ui__react-focus-scope.mjs";
import "../_libs/radix-ui__react-portal.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-focus-guards.mjs";
import "../_libs/react-remove-scroll.mjs";
import "tslib";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
import "../_libs/aria-hidden.mjs";
const appCss = "/assets/styles-DkWhNrTD.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
const name = "Sentellix";
const tagline = "AI systems that actually work for SMBs";
const email = "contact@sentellix.com";
const site = {
  name,
  tagline,
  email
};
const logoDark = "/assets/logo-dark-BUcnsol-.png";
const logoLight = "/assets/logo-light-BE-G1hLT.png";
const MOBILE_BREAKPOINT = 768;
function useIsMobile() {
  const [isMobile, setIsMobile] = reactExports.useState(void 0);
  reactExports.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);
  return !!isMobile;
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = reactExports.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
const Sheet = Root;
const SheetPortal = Portal;
const SheetOverlay = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Overlay,
  {
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props,
    ref
  }
));
SheetOverlay.displayName = Overlay.displayName;
const sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
      }
    },
    defaultVariants: {
      side: "right"
    }
  }
);
const SheetContent = reactExports.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(SheetPortal, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(SheetOverlay, {}),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(Content, { ref, className: cn(sheetVariants({ side }), className), ...props, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Close" })
    ] }),
    children
  ] })
] }));
SheetContent.displayName = Content.displayName;
const SheetHeader = ({ className, ...props }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("flex flex-col space-y-2 text-center sm:text-left", className), ...props });
SheetHeader.displayName = "SheetHeader";
const SheetTitle = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Title,
  {
    ref,
    className: cn("text-lg font-semibold text-foreground", className),
    ...props
  }
));
SheetTitle.displayName = Title.displayName;
const SheetDescription = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
SheetDescription.displayName = Description.displayName;
const CALENDLY_URL = "https://calendly.com/tariqusman664/sentellix-discovery-call";
const nav = [
  { to: "/", label: "Home" },
  { to: "/portfolio", label: "Work" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/blog", label: "Blog" },
  { to: "/faq", label: "FAQ" }
];
function BookCallButton({
  variant = "accent",
  size = "default",
  className = ""
}) {
  const sizeClasses = {
    sm: "px-3.5 py-1.5 text-xs gap-1.5",
    default: "px-4 py-2 text-sm gap-2",
    lg: "px-6 py-3 text-sm gap-2"
  };
  const variantClasses = {
    accent: "bg-accent text-accent-foreground hover:-translate-y-0.5 hover:shadow-[0_4px_20px_oklch(0.72_0.16_200/0.4)]",
    outline: "border border-border bg-background text-foreground hover:bg-secondary hover:-translate-y-0.5",
    "ghost-light": "border border-white/25 bg-white/8 text-navy-foreground hover:bg-white/15 hover:-translate-y-0.5"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "a",
    {
      href: CALENDLY_URL,
      target: "_blank",
      rel: "noopener noreferrer",
      className: `inline-flex items-center justify-center rounded-md font-semibold transition-all duration-200 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4" }),
        "Book a Call"
      ]
    }
  );
}
function Header() {
  const [open, setOpen] = reactExports.useState(false);
  const [scrolled, setScrolled] = reactExports.useState(false);
  const isMobile = useIsMobile();
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "header",
    {
      className: `sticky top-0 z-40 w-full border-b border-border/60 bg-background/85 backdrop-blur transition-shadow duration-200 ${scrolled ? "shadow-[0_1px_16px_oklch(0.18_0.06_260/0.08)]" : ""}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex h-16 max-w-6xl items-center justify-between px-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "flex items-center gap-2", "aria-label": site.name, children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logoDark, alt: `${site.name} logo`, className: "h-18 w-auto" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden items-center gap-7 md:flex", children: nav.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: n.to,
            className: "text-sm text-muted-foreground transition-colors hover:text-foreground",
            activeProps: { className: "text-foreground font-medium" },
            activeOptions: { exact: n.to === "/" },
            children: n.label
          },
          n.to
        )) }),
        isMobile ? /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Sheet, { open, onOpenChange: setOpen, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "ghost",
              size: "icon",
              onClick: () => setOpen(true),
              className: "md:hidden",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-5 w-5" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(SheetContent, { side: "right", className: "w-72", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SheetHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SheetTitle, { children: "Navigation" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "flex flex-col gap-1 mt-6", children: [
              nav.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: n.to,
                  onClick: () => setOpen(false),
                  className: "text-sm text-muted-foreground transition-colors hover:text-foreground py-2.5 px-2 rounded-md hover:bg-secondary",
                  activeProps: { className: "text-foreground font-medium bg-secondary" },
                  activeOptions: { exact: n.to === "/" },
                  children: n.label
                },
                n.to
              )),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex flex-col gap-2.5 pt-4 border-t border-border", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Link,
                  {
                    to: "/contact",
                    onClick: () => setOpen(false),
                    className: "inline-flex items-center justify-center rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary",
                    children: "Contact"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(BookCallButton, { size: "default", variant: "accent", className: "w-full" })
              ] })
            ] })
          ] })
        ] }) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/contact",
              className: "inline-flex items-center rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary",
              children: "Contact"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(BookCallButton, { size: "default", variant: "accent" })
        ] })
      ] })
    }
  );
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "border-t border-border bg-navy text-navy-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-6xl flex-col gap-8 px-6 py-14 md:flex-row md:items-start md:justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logoLight, alt: `${site.name} logo`, className: "h-40 w-auto" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-navy-muted leading-relaxed", children: site.tagline }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-navy-muted mb-2.5 uppercase tracking-wide font-medium", children: "Ready to automate?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(BookCallButton, { size: "default", variant: "ghost-light" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-6 md:flex-row md:gap-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-navy-muted uppercase tracking-wide font-medium mb-3", children: "Pages" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2.5 text-sm text-navy-muted", children: [
            nav.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: n.to, className: "hover:text-navy-foreground transition-colors", children: n.label }, n.to)),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "hover:text-navy-foreground transition-colors", children: "Contact" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-navy-muted uppercase tracking-wide font-medium mb-3", children: "Get started" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2.5 text-sm text-navy-muted", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: CALENDLY_URL,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "hover:text-navy-foreground transition-colors flex items-center gap-1.5",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-3.5 w-3.5" }),
                  "Discovery call"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: `mailto:${site.email}`,
                className: "hover:text-navy-foreground transition-colors",
                children: site.email
              }
            )
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-6 py-4 flex items-center justify-between text-xs text-navy-muted", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " ",
        site.name,
        ". All rights reserved."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: CALENDLY_URL,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "hover:text-navy-foreground transition-colors flex items-center gap-1.5",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-3 w-3" }),
            "Book a free call"
          ]
        }
      )
    ] }) })
  ] });
}
function FloatingCTA() {
  const [visible, setVisible] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: `fixed bottom-6 right-6 z-50 transition-all duration-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: CALENDLY_URL,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-[0_4px_24px_oklch(0.72_0.16_200/0.5)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_6px_32px_oklch(0.72_0.16_200/0.6)]",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-4 w-4" }),
            "Book a Free Call"
          ]
        }
      )
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$7 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Sentellix - AI systems that actually work for SMBs" },
      { name: "description", content: "Sentellix is an AI integration partner for small and mid-size businesses in the US and UK. We build practical AI systems that save time and recover revenue." },
      { name: "author", content: "Sentellix" },
      { property: "og:title", content: "Sentellix - AI systems that actually work for SMBs" },
      { property: "og:description", content: "Practical AI integration for SMBs. We build, document, and hand over systems that work." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Sora:wght@600;700;800&display=swap" }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$7.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-screen flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingCTA, {})
  ] }) });
}
const $$splitComponentImporter$6 = () => import("./testimonials-Dz4_82_d.mjs");
const Route$6 = createFileRoute("/testimonials")({
  head: () => ({
    meta: [{
      title: "Testimonials - Sentellix"
    }, {
      name: "description",
      content: "Real results from real businesses we have worked with."
    }, {
      property: "og:title",
      content: "Testimonials - Sentellix"
    }, {
      property: "og:description",
      content: "What clients say about working with Sentellix."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./portfolio-DOUJCVAy.mjs");
const Route$5 = createFileRoute("/portfolio")({
  head: () => ({
    meta: [{
      title: "Portfolio - Sentellix"
    }, {
      name: "description",
      content: "Selected AI integration projects. The problems, the systems, and the outcomes."
    }, {
      property: "og:title",
      content: "Portfolio - Sentellix"
    }, {
      property: "og:description",
      content: "Selected work from Sentellix."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./faq-DaFB6d5f.mjs");
const Route$4 = createFileRoute("/faq")({
  head: () => ({
    meta: [{
      title: "FAQ - Sentellix"
    }, {
      name: "description",
      content: "Common questions about Sentellix - what we build, pricing, timelines, and tools."
    }, {
      property: "og:title",
      content: "FAQ - Sentellix"
    }, {
      property: "og:description",
      content: "Honest answers about how we work."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./contact-Bjjw-I6Z.mjs");
const Route$3 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact - Sentellix"
    }, {
      name: "description",
      content: "Tell us about your workflow bottleneck. We'll respond within one business day."
    }, {
      property: "og:title",
      content: "Contact - Sentellix"
    }, {
      property: "og:description",
      content: "Get in touch with Sentellix."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./index-0P9miifE.mjs");
const Route$2 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Sentellix - AI integration that delivers real results"
    }, {
      name: "description",
      content: "AI integration partner for SMBs in the US and UK. We build, test, and hand over AI systems that save time and recover revenue."
    }, {
      property: "og:title",
      content: "Sentellix - AI integration that delivers real results"
    }, {
      property: "og:description",
      content: "We don't sell AI strategy. We build AI systems that work."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./blog.index-B2DV_7Fy.mjs");
const Route$1 = createFileRoute("/blog/")({
  head: () => ({
    meta: [{
      title: "Blog - Sentellix"
    }, {
      name: "description",
      content: "Practical writing on AI integration, automation, and workflow design for SMBs."
    }, {
      property: "og:title",
      content: "Blog - Sentellix"
    }, {
      property: "og:description",
      content: "Practical writing on AI integration for SMBs."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const __vite_glob_0_0 = '---\r\ntitle: "Five workflows every salon should automate before hiring more staff"\r\ndescription: "Before you add another receptionist, automate the repetitive work that is eating 15 hours a week."\r\ndate: "2026-04-22"\r\nauthor: "Sentellix Team"\r\ntags: ["salons", "automation", "operations"]\r\ncover: ""\r\n---\r\n\r\nIf you own a salon, you are probably the owner, manager, receptionist, and marketer all at once. Hiring another person is not always the answer. Often, the bottleneck is repetitive work that a well-built automation can handle for a fraction of the cost.\r\n\r\n## 1. Missed-call text-back\r\n\r\nWhen a call goes unanswered, an automated SMS goes out within seconds offering to book online. Recovered bookings often pay for the system in week one.\r\n\r\n## 2. Appointment reminders\r\n\r\nTwo-way SMS reminders 24 hours and 2 hours before the appointment. Confirmations update your calendar automatically.\r\n\r\n## 3. Review requests\r\n\r\nA polite text 2 hours after the appointment with a single tap to leave a Google review. Most salons see a 3-5x increase in review volume.\r\n\r\n## 4. Rebook nudges\r\n\r\nA 6-week reminder for colour clients, an 8-week reminder for cuts. Personalised, not spammy.\r\n\r\n## 5. No-show recovery\r\n\r\nWhen someone no-shows, an automated follow-up offers a discounted slot in the next 48 hours. Many of these get rebooked.\r\n\r\nThe pattern is clear: automate the predictable, save your human energy for the work that actually needs you.\r\n';
const __vite_glob_0_1 = '---\r\ntitle: "Why SMBs are losing money in the first 60 seconds of a lead"\r\ndescription: "Speed-to-lead is the single biggest unforced error in small-business sales. Here is how to fix it without buying a new CRM."\r\ndate: "2026-05-12"\r\nauthor: "Sentellix Team"\r\ntags: ["lead response", "automation", "real estate"]\r\ncover: ""\r\n---\r\n\r\nThe average real estate agent takes 917 minutes to respond to a new lead. AI-assisted teams respond in under 60 seconds. The gap between those two numbers is where deals are won and lost.\r\n\r\n## The math of slow response\r\n\r\nA lead from Zillow that waits 11 hours for a callback has typically already spoken to three other agents. By the time you dial, you are pitching to someone who has mentally moved on.\r\n\r\n- Sub-1-minute response: 391% higher conversion\r\n- 5-minute response: still 21x better than 30-minute response\r\n- 30-minute+ response: the lead is effectively cold\r\n\r\n## Why most SMBs cannot fix this manually\r\n\r\nSolo agents and small teams cannot sit by their phones at 9pm on a Sunday. The problem is not desire, it is staffing.\r\n\r\n## What an AI response layer actually does\r\n\r\n1. Detects the new lead from any source - Zillow, Realtor.com, Instagram DMs, contact forms.\r\n2. Texts a personalised message in under 60 seconds.\r\n3. Qualifies via natural conversation.\r\n4. Books a call directly on your calendar.\r\n5. Routes to you only when the lead is hot.\r\n\r\nNo new CRM. No platform migration. Just the missing layer on top of what you already have.\r\n';
function parseFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) return { fm: {}, body: raw };
  const fm = {};
  for (const line of match[1].split("\n")) {
    const idx = line.indexOf(":");
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    let val = line.slice(idx + 1).trim();
    if (val.startsWith("[") && val.endsWith("]")) {
      fm[key] = val.slice(1, -1).split(",").map((s) => s.trim().replace(/^["']|["']$/g, "")).filter(Boolean);
    } else {
      fm[key] = val.replace(/^["']|["']$/g, "");
    }
  }
  return { fm, body: match[2] };
}
const modules = /* @__PURE__ */ Object.assign({
  "/src/content/blog/salon-automations.md": __vite_glob_0_0,
  "/src/content/blog/speed-to-lead.md": __vite_glob_0_1
});
const posts = Object.entries(modules).map(([path, raw]) => {
  const slug = path.split("/").pop().replace(/\.md$/, "");
  const { fm, body } = parseFrontmatter(raw);
  return {
    slug,
    frontmatter: {
      title: fm.title ?? slug,
      description: fm.description ?? "",
      date: fm.date ?? "",
      author: fm.author ?? "Sentellix",
      tags: fm.tags ?? [],
      cover: fm.cover ?? ""
    },
    body
  };
}).sort((a, b) => a.frontmatter.date < b.frontmatter.date ? 1 : -1);
function getAllPosts() {
  return posts;
}
function getPost(slug) {
  return posts.find((p) => p.slug === slug);
}
const $$splitNotFoundComponentImporter = () => import("./blog._slug-fBvWuMIJ.mjs");
const $$splitComponentImporter = () => import("./blog._slug-B4yO5rjG.mjs");
const Route = createFileRoute("/blog/$slug")({
  loader: ({
    params
  }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return {
      post
    };
  },
  head: ({
    loaderData
  }) => ({
    meta: loaderData ? [{
      title: `${loaderData.post.frontmatter.title} - Sentellix Blog`
    }, {
      name: "description",
      content: loaderData.post.frontmatter.description
    }, {
      property: "og:title",
      content: loaderData.post.frontmatter.title
    }, {
      property: "og:description",
      content: loaderData.post.frontmatter.description
    }, {
      property: "article:published_time",
      content: loaderData.post.frontmatter.date
    }] : []
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component"),
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent")
});
const TestimonialsRoute = Route$6.update({
  id: "/testimonials",
  path: "/testimonials",
  getParentRoute: () => Route$7
});
const PortfolioRoute = Route$5.update({
  id: "/portfolio",
  path: "/portfolio",
  getParentRoute: () => Route$7
});
const FaqRoute = Route$4.update({
  id: "/faq",
  path: "/faq",
  getParentRoute: () => Route$7
});
const ContactRoute = Route$3.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$7
});
const IndexRoute = Route$2.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$7
});
const BlogIndexRoute = Route$1.update({
  id: "/blog/",
  path: "/blog/",
  getParentRoute: () => Route$7
});
const BlogSlugRoute = Route.update({
  id: "/blog/$slug",
  path: "/blog/$slug",
  getParentRoute: () => Route$7
});
const rootRouteChildren = {
  IndexRoute,
  ContactRoute,
  FaqRoute,
  PortfolioRoute,
  TestimonialsRoute,
  BlogSlugRoute,
  BlogIndexRoute
};
const routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  BookCallButton as B,
  Route as R,
  getAllPosts as g,
  router as r,
  site as s
};
