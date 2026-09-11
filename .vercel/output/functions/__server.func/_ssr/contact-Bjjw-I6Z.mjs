import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { e as emailjs } from "../_libs/emailjs__browser.mjs";
import { B as BookCallButton, s as site } from "./router-CGlDbCKy.mjs";
import { b as Mail, c as CircleCheck, d as MessageCircle, e as Send } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/radix-ui__react-dialog.mjs";
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
const initial = {
  name: "",
  email: "",
  whatsapp: "",
  challenge: "",
  tried: "",
  timing: ""
};
function ContactPage() {
  const [form, setForm] = reactExports.useState(initial);
  const [status, setStatus] = reactExports.useState("idle");
  const [error, setError] = reactExports.useState("");
  const update = (k) => (e) => setForm((f) => ({
    ...f,
    [k]: e.target.value
  }));
  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.challenge.trim()) {
      setError("Please fill in your name, email, and biggest challenge.");
      return;
    }
    setError("");
    setStatus("sending");
    try {
      const serviceId = "service_k0mf9wc";
      const templateId = "template_0ixheuc";
      const publicKey = "ihaXdVcv1L96Q6O1e";
      if (!serviceId || serviceId.startsWith("VITE_")) {
        throw new Error("EmailJS is not configured yet. Update .env.local with your EmailJS credentials.");
      }
      await emailjs.send(serviceId, templateId, {
        from_name: form.name,
        reply_to: form.email,
        whatsapp: form.whatsapp || "Not provided",
        challenge: form.challenge,
        tried: form.tried,
        timing: form.timing
      }, {
        publicKey
      });
      setStatus("sent");
      setForm(initial);
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong. Please email us directly.");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-hero text-navy-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl px-6 py-20 md:py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl font-bold md:text-5xl", children: "Let's talk about your workflow" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-2xl text-lg text-navy-muted", children: "Tell us about the manual work eating your time. If we can help, we'll send a free audit. If we can't, we'll tell you straight." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(BookCallButton, { size: "lg", variant: "accent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `mailto:${site.email}`, className: "inline-flex items-center rounded-md border border-white/20 px-5 py-3 text-sm font-medium text-navy-foreground transition-colors hover:bg-white/5", children: "Email us instead" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background py-16 md:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-5xl gap-12 px-6 md:grid-cols-[1fr_2fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold uppercase tracking-wider text-accent", children: "Email" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `mailto:${site.email}`, className: "mt-1 inline-flex items-center gap-2 text-foreground hover:text-accent", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4" }),
            " ",
            site.email
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold uppercase tracking-wider text-accent", children: "Response time" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-sm text-muted-foreground", children: "Within one business day, every time." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold uppercase tracking-wider text-accent", children: "What happens next" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: "mt-2 space-y-2 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "1. We read your message carefully." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "2. If we're a fit, we send a 30 minute call link." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "3. On the call, you get a free workflow audit." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-secondary p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold uppercase tracking-wider text-accent mb-2", children: "Prefer to skip the form?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-4", children: "Book a free 30-minute discovery call directly on our calendar." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(BookCallButton, { size: "default", variant: "outline", className: "w-full" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("form", { onSubmit, className: "space-y-5 rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)]", children: status === "sent" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-3 py-10 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-12 w-12 text-accent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold", children: "Message received" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-sm text-sm text-muted-foreground", children: "Thanks for reaching out. We'll be in touch within one business day." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setStatus("idle"), className: "mt-2 text-sm text-accent underline", children: "Send another message" })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 md:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Name *", value: form.name, onChange: update("name"), placeholder: "Jane Doe" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email *", type: "email", value: form.email, onChange: update("email"), placeholder: "jane@company.com" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "WhatsApp (optional)", value: form.whatsapp, onChange: update("whatsapp"), placeholder: "+1 555 123 4567", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-4 w-4" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TextArea, { label: "What is the biggest challenge you're trying to solve right now? *", value: form.challenge, onChange: update("challenge"), rows: 3 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TextArea, { label: "What have you already tried?", value: form.tried, onChange: update("tried"), rows: 3 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TextArea, { label: "Why is now the right time to address this?", value: form.timing, onChange: update("timing"), rows: 3 }),
        error && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-md bg-destructive/10 px-3 py-2 text-sm text-destructive", children: error }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", disabled: status === "sending", className: "inline-flex items-center justify-center gap-2 rounded-md bg-navy px-5 py-3 text-sm font-semibold text-navy-foreground transition-opacity hover:opacity-90 disabled:opacity-50", children: status === "sending" ? "Sending..." : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          "Send message ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4 w-4" })
        ] }) })
      ] }) })
    ] }) })
  ] });
}
function Field({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  icon
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mb-1.5 block text-sm font-medium", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      icon && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground", children: icon }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type, value, onChange, placeholder, className: `w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none ring-ring transition-shadow focus:ring-2 ${icon ? "pl-10" : ""}` })
    ] })
  ] });
}
function TextArea({
  label,
  value,
  onChange,
  rows = 3
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mb-1.5 block text-sm font-medium", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { value, onChange, rows, className: "w-full resize-y rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none ring-ring transition-shadow focus:ring-2" })
  ] });
}
export {
  ContactPage as component
};
