import { createFileRoute } from "@tanstack/react-router";
import data from "@/data/testimonials.json";
import { Star, Quote } from "lucide-react";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials - Sentellix" },
      { name: "description", content: "Real results from real businesses we have worked with." },
      { property: "og:title", content: "Testimonials - Sentellix" },
      { property: "og:description", content: "What clients say about working with Sentellix." },
    ],
  }),
  component: TestimonialsPage,
});

function TestimonialsPage() {
  return (
    <div>
      <section className="bg-hero text-navy-foreground">
        <div className="mx-auto max-w-4xl px-6 py-20 md:py-24">
          <h1 className="font-display text-4xl font-bold md:text-5xl">{data.title}</h1>
          <p className="mt-4 text-lg text-navy-muted">{data.subtitle}</p>
        </div>
      </section>
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-2">
          {data.items.map((t, i) => (
            <article key={i} className="relative rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)]">
              <Quote className="absolute right-6 top-6 h-8 w-8 text-secondary" />
              <div className="flex gap-1 text-accent">
                {Array.from({ length: t.rating }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-lg leading-relaxed text-foreground">"{t.quote}"</p>
              <div className="mt-6 border-t border-border pt-4">
                <div className="font-semibold">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.role}, {t.location}</div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
