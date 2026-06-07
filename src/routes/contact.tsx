import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import site from "@/data/site.json";
import { Mail, MessageCircle, Send, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact - Sentellix" },
      { name: "description", content: "Tell us about your workflow bottleneck. We'll respond within one business day." },
      { property: "og:title", content: "Contact - Sentellix" },
      { property: "og:description", content: "Get in touch with Sentellix." },
    ],
  }),
  component: ContactPage,
});

interface FormState {
  name: string;
  email: string;
  whatsapp: string;
  challenge: string;
  tried: string;
  timing: string;
}

const initial: FormState = {
  name: "",
  email: "",
  whatsapp: "",
  challenge: "",
  tried: "",
  timing: "",
};

function ContactPage() {
  const [form, setForm] = useState<FormState>(initial);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState<string>("");

  const update = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.challenge.trim()) {
      setError("Please fill in your name, email, and biggest challenge.");
      return;
    }
    setError("");
    setStatus("sending");
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      if (!serviceId || serviceId.startsWith("VITE_")) {
        throw new Error("EmailJS is not configured yet. Update .env.local with your EmailJS credentials.");
      }
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          reply_to: form.email,
          whatsapp: form.whatsapp || "Not provided",
          challenge: form.challenge,
          tried: form.tried,
          timing: form.timing,
        },
        { publicKey },
      );
      setStatus("sent");
      setForm(initial);
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong. Please email us directly.");
    }
  };

  return (
    <div>
      <section className="bg-hero text-navy-foreground">
        <div className="mx-auto max-w-4xl px-6 py-20 md:py-24">
          <h1 className="font-display text-4xl font-bold md:text-5xl">Let's talk about your workflow</h1>
          <p className="mt-4 max-w-2xl text-lg text-navy-muted">
            Tell us about the manual work eating your time. If we can help, we'll send a free audit. If we can't, we'll tell you straight.
          </p>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto grid max-w-5xl gap-12 px-6 md:grid-cols-[1fr_2fr]">
          <aside className="space-y-6">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-accent">Email</div>
              <a href={`mailto:${site.email}`} className="mt-1 inline-flex items-center gap-2 text-foreground hover:text-accent">
                <Mail className="h-4 w-4" /> {site.email}
              </a>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-accent">Response time</div>
              <div className="mt-1 text-sm text-muted-foreground">Within one business day, every time.</div>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-accent">What happens next</div>
              <ol className="mt-2 space-y-2 text-sm text-muted-foreground">
                <li>1. We read your message carefully.</li>
                <li>2. If we're a fit, we send a 30 minute call link.</li>
                <li>3. On the call, you get a free workflow audit.</li>
              </ol>
            </div>
          </aside>

          <form onSubmit={onSubmit} className="space-y-5 rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)]">
            {status === "sent" ? (
              <div className="flex flex-col items-center gap-3 py-10 text-center">
                <CheckCircle2 className="h-12 w-12 text-accent" />
                <h2 className="text-xl font-bold">Message received</h2>
                <p className="max-w-sm text-sm text-muted-foreground">
                  Thanks for reaching out. We'll be in touch within one business day.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-2 text-sm text-accent underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <div className="grid gap-4 md:grid-cols-2">
                  <Field label="Name *" value={form.name} onChange={update("name")} placeholder="Jane Doe" />
                  <Field label="Email *" type="email" value={form.email} onChange={update("email")} placeholder="jane@company.com" />
                </div>
                <Field
                  label="WhatsApp (optional)"
                  value={form.whatsapp}
                  onChange={update("whatsapp")}
                  placeholder="+1 555 123 4567"
                  icon={<MessageCircle className="h-4 w-4" />}
                />
                <TextArea
                  label="What is the biggest challenge you're trying to solve right now? *"
                  value={form.challenge}
                  onChange={update("challenge")}
                  rows={3}
                />
                <TextArea
                  label="What have you already tried?"
                  value={form.tried}
                  onChange={update("tried")}
                  rows={3}
                />
                <TextArea
                  label="Why is now the right time to address this?"
                  value={form.timing}
                  onChange={update("timing")}
                  rows={3}
                />

                {error && <div className="rounded-md bg-destructive/10 px-3 py-2 text-sm text-destructive">{error}</div>}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-navy px-5 py-3 text-sm font-semibold text-navy-foreground transition-opacity hover:opacity-90 disabled:opacity-50"
                >
                  {status === "sending" ? "Sending..." : (<>Send message <Send className="h-4 w-4" /></>)}
                </button>
              </>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  icon,
}: {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
  icon?: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium">{label}</span>
      <div className="relative">
        {icon && <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">{icon}</span>}
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none ring-ring transition-shadow focus:ring-2 ${icon ? "pl-10" : ""}`}
        />
      </div>
    </label>
  );
}

function TextArea({
  label,
  value,
  onChange,
  rows = 3,
}: {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  rows?: number;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium">{label}</span>
      <textarea
        value={value}
        onChange={onChange}
        rows={rows}
        className="w-full resize-y rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none ring-ring transition-shadow focus:ring-2"
      />
    </label>
  );
}
