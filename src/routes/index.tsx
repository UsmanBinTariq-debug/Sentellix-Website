import { createFileRoute, Link } from "@tanstack/react-router";
import landing from "@/data/landing.json";
import site from "@/data/site.json";
import { ArrowRight, Check, Zap, Workflow, Bot, Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sentellix - AI integration that delivers real results" },
      { name: "description", content: "AI integration partner for SMBs in the US and UK. We build, test, and hand over AI systems that save time and recover revenue." },
      { property: "og:title", content: "Sentellix - AI integration that delivers real results" },
      { property: "og:description", content: "We don't sell AI strategy. We build AI systems that work." },
    ],
  }),
  component: Landing,
});

const icons = [Bot, Workflow, Zap, Sparkles];

function Landing() {
  return (
    <div>
      <section className="bg-hero relative overflow-hidden text-navy-foreground">
        <div className="mx-auto max-w-6xl px-6 pb-24 pt-20 md:pt-28">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-navy-muted">
              {landing.hero.eyebrow}
            </span>
            <h1 className="mt-6 font-display text-4xl font-bold leading-tight md:text-6xl">
              {landing.hero.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-navy-muted md:text-xl">
              {landing.hero.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to={landing.hero.primaryCta.href}
                className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
              >
                {landing.hero.primaryCta.label} <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to={landing.hero.secondaryCta.href}
                className="inline-flex items-center rounded-md border border-white/20 px-5 py-3 text-sm font-medium text-navy-foreground transition-colors hover:bg-white/5"
              >
                {landing.hero.secondaryCta.label}
              </Link>
            </div>
          </div>

          <div className="mt-16 grid gap-6 border-t border-white/10 pt-10 sm:grid-cols-3">
            {landing.stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-3xl font-bold text-navy-foreground md:text-4xl">{s.value}</div>
                <div className="mt-1 text-sm text-navy-muted">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold md:text-4xl">What we build</h2>
            <p className="mt-3 text-muted-foreground">
              Focused services for businesses that need AI to do real work, not generate slides.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {landing.services.map((s, i) => {
              const Icon = icons[i % icons.length];
              return (
                <div
                  key={s.title}
                  className="group rounded-2xl border border-border bg-card p-7 transition-shadow hover:shadow-[var(--shadow-card)]"
                >
                  <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-secondary text-navy">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold md:text-4xl">How we work</h2>
            <p className="mt-3 text-muted-foreground">A short, focused engagement designed to ship.</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {landing.process.map((p) => (
              <div key={p.step} className="rounded-xl border border-border bg-card p-6">
                <div className="font-display text-sm font-bold text-accent">{p.step}</div>
                <h3 className="mt-2 text-base font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">What we believe</h2>
            <p className="mt-4 text-muted-foreground">{landing.founding}</p>
          </div>
          <ul className="space-y-5">
            {landing.values.map((v) => (
              <li key={v.title} className="flex gap-4">
                <div className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-navy text-navy-foreground">
                  <Check className="h-3.5 w-3.5" />
                </div>
                <div>
                  <div className="font-semibold">{v.title}</div>
                  <p className="text-sm text-muted-foreground">{v.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-navy text-navy-foreground">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center md:py-28">
          <h2 className="text-3xl font-bold md:text-4xl">{landing.finalCta.title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-navy-muted">{landing.finalCta.subtitle}</p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground"
          >
            {landing.finalCta.label} <ArrowRight className="h-4 w-4" />
          </Link>
          <p className="mt-6 text-xs text-navy-muted">Or email us at {site.email}</p>
        </div>
      </section>
    </div>
  );
}
