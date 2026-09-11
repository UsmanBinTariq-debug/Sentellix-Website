import { j as jsxRuntimeExports } from "../_libs/react.mjs";
const title = "Frequently asked questions";
const subtitle = "Honest answers about how we work, what we charge, and what to expect.";
const items = [{ "q": "What exactly does Sentellix do?", "a": "We integrate practical AI into the daily operations of small and mid-size businesses. Lead response, bookings, follow-ups, review collection, CRM workflows. We scope, build, test, document, and hand over the system." }, { "q": "How is this different from buying an AI SaaS tool?", "a": "SaaS tools give you a login and a setup guide. We give you a working system. We do the configuration, train it on your services and scripts, and connect it to the tools you already use." }, { "q": "What does it cost?", "a": "Projects typically range from 500 to 2,500 USD. Optional retainers for ongoing support and iteration range from 200 to 500 USD per month." }, { "q": "How long does a project take?", "a": "Most engagements are scoped, built, and handed over in 2 to 4 weeks depending on complexity and integrations required." }, { "q": "What tools do you build on?", "a": "Whatever you already use. Common stacks include GoHighLevel, Follow Up Boss, Vagaro, Calendly, Twilio, OpenAI, n8n, Make, and Zapier." }, { "q": "Do I own the system after you build it?", "a": "Yes. You get full documentation of every tool used. Note that any third-party tools we build on (such as Twilio, OpenAI, or your CRM) require their own ongoing subscriptions paid directly by you in the form of a retainer fees to keep the system running." }, { "q": "Which industries do you specialise in?", "a": "Hair and beauty salons in the US and London UK, and residential real estate agents and small brokerages in the US and UK. We do take on other industries case by case." }, { "q": "What if the system breaks?", "a": "Clients on a retainer get monitoring and fixes included. Project-only clients can engage us hourly or scope a maintenance block." }, { "q": "Do you offer a free consultation?", "a": "Yes. The first call is a free workflow audit. If we can't deliver real ROI, we'll tell you directly instead of selling you something." }];
const faq = {
  title,
  subtitle,
  items
};
function FAQPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-hero text-navy-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl px-6 py-20 md:py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl font-bold md:text-5xl", children: faq.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-lg text-navy-muted", children: faq.subtitle })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background py-16 md:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-3xl space-y-4 px-6", children: faq.items.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "group rounded-xl border border-border bg-card p-6 transition-shadow open:shadow-[var(--shadow-card)]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("summary", { className: "flex cursor-pointer list-none items-start justify-between gap-4 text-base font-semibold", children: [
        item.q,
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2 mt-1 text-accent transition-transform group-open:rotate-45", children: "+" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm leading-relaxed text-muted-foreground", children: item.a })
    ] }, i)) }) })
  ] });
}
export {
  FAQPage as component
};
