import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { Q as Quote, S as Star } from "../_libs/lucide-react.mjs";
const title = "What clients say";
const subtitle = "Real results from real businesses we have worked with.";
const items = [{ "name": "Maria Alvarez", "role": "Owner, Bloom Hair Studio", "location": "Austin, TX", "quote": "Sentellix completely changed the way we book appointments and send reminders. The number of people who do not show up decreased by 40 percent in one month. Now I have my evenings free again because Sentellix rebuilt our booking and reminder flow.", "rating": 5 }, { "name": "James Carter", "role": "Realtor", "location": "Manchester, UK", "quote": "Their AI follow-up system reached out to 60 leads that I thought were a lost cause. Two of them actually turned into deals within six weeks. That was enough to cover the cost, for the year.", "rating": 5 }, { "name": "Priya Shah", "role": "Brokerage owner", "location": "Dallas, TX", "quote": "What I liked the most was the honesty. They said to us that we did not need a custom agent we just needed an automation. This saved the company thousands of dollars. The honesty, from them was really great. They told us that a smarter automation was the way to go, not a custom agent.", "rating": 5 }, { "name": "Sophie Bennett", "role": "Salon manager", "location": "London, UK", "quote": "Setup was painless and the handover documentation is genuinely good. We run the system ourselves now and it just works.", "rating": 5 }];
const data = {
  title,
  subtitle,
  items
};
function TestimonialsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-hero text-navy-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl px-6 py-20 md:py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl font-bold md:text-5xl", children: data.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-lg text-navy-muted", children: data.subtitle })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background py-16 md:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-2", children: data.items.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "relative rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "absolute right-6 top-6 h-8 w-8 text-secondary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 text-accent", children: Array.from({
        length: t.rating
      }).map((_, k) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4 fill-current" }, k)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 text-lg leading-relaxed text-foreground", children: [
        '"',
        t.quote,
        '"'
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 border-t border-border pt-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: t.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-muted-foreground", children: [
          t.role,
          ", ",
          t.location
        ] })
      ] })
    ] }, i)) }) })
  ] });
}
export {
  TestimonialsPage as component
};
