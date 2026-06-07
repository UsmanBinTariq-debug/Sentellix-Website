import { createFileRoute, Link } from "@tanstack/react-router";
import { getAllPosts } from "@/lib/blog";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog - Sentellix" },
      { name: "description", content: "Practical writing on AI integration, automation, and workflow design for SMBs." },
      { property: "og:title", content: "Blog - Sentellix" },
      { property: "og:description", content: "Practical writing on AI integration for SMBs." },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const posts = getAllPosts();
  return (
    <div>
      <section className="bg-hero text-navy-foreground">
        <div className="mx-auto max-w-4xl px-6 py-20 md:py-24">
          <h1 className="font-display text-4xl font-bold md:text-5xl">Field notes</h1>
          <p className="mt-4 text-lg text-navy-muted">
            Practical writing on AI integration, automation, and the unglamorous work of making systems run.
          </p>
        </div>
      </section>
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto grid max-w-5xl gap-6 px-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              to="/blog/$slug"
              params={{ slug: post.slug }}
              className="group rounded-2xl border border-border bg-card p-7 transition-shadow hover:shadow-[var(--shadow-card)]"
            >
              <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                <time>{post.frontmatter.date}</time>
                {post.frontmatter.tags.map((t) => (
                  <span key={t} className="rounded-md bg-secondary px-2 py-0.5">{t}</span>
                ))}
              </div>
              <h2 className="mt-3 text-xl font-bold group-hover:text-accent">{post.frontmatter.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{post.frontmatter.description}</p>
            </Link>
          ))}
          {posts.length === 0 && <p className="text-muted-foreground">No posts yet. Add markdown files to src/content/blog/.</p>}
        </div>
      </section>
    </div>
  );
}
