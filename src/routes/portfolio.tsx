import { createFileRoute } from "@tanstack/react-router";
import data from "@/data/portfolio.json";
import { Check } from "lucide-react";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio - Sentellix" },
      { name: "description", content: "Selected AI integration projects. The problems, the systems, and the outcomes." },
      { property: "og:title", content: "Portfolio - Sentellix" },
      { property: "og:description", content: "Selected work from Sentellix." },
    ],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <div>
      <section className="bg-hero text-navy-foreground">
        <div className="mx-auto max-w-4xl px-6 py-20 md:py-24">
          <h1 className="font-display text-4xl font-bold md:text-5xl">{data.title}</h1>
          <p className="mt-4 text-lg text-navy-muted">{data.subtitle}</p>
        </div>
      </section>
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-8 px-6">
          {data.items.map((p, i) => (
            <article key={i} className="grid gap-6 rounded-2xl border border-border bg-card p-8 md:grid-cols-3">
              <div className="md:col-span-1">
                <div className="text-xs font-semibold uppercase tracking-wider text-accent">{p.industry}</div>
                <h2 className="mt-2 text-xl font-bold">{p.title}</h2>
                <div className="mt-1 text-sm text-muted-foreground">{p.client}</div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="rounded-md bg-secondary px-2 py-1 text-xs text-secondary-foreground">{s}</span>
                  ))}
                </div>
              </div>
              <div className="md:col-span-2">
                <p className="text-foreground">{p.summary}</p>
                <ul className="mt-5 space-y-2">
                  {p.outcomes.map((o) => (
                    <li key={o} className="flex items-start gap-3 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
