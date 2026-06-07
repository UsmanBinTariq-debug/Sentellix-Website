import { createFileRoute } from "@tanstack/react-router";
import faq from "@/data/faq.json";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ - Sentellix" },
      { name: "description", content: "Common questions about Sentellix - what we build, pricing, timelines, and tools." },
      { property: "og:title", content: "FAQ - Sentellix" },
      { property: "og:description", content: "Honest answers about how we work." },
    ],
  }),
  component: FAQPage,
});

function FAQPage() {
  return (
    <div>
      <section className="bg-hero text-navy-foreground">
        <div className="mx-auto max-w-4xl px-6 py-20 md:py-24">
          <h1 className="font-display text-4xl font-bold md:text-5xl">{faq.title}</h1>
          <p className="mt-4 text-lg text-navy-muted">{faq.subtitle}</p>
        </div>
      </section>
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-3xl space-y-4 px-6">
          {faq.items.map((item, i) => (
            <details
              key={i}
              className="group rounded-xl border border-border bg-card p-6 transition-shadow open:shadow-[var(--shadow-card)]"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-base font-semibold">
                {item.q}
                <span className="ml-2 mt-1 text-accent transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
