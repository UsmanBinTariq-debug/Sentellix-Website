import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getPost } from "@/lib/blog";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.post.frontmatter.title} - Sentellix Blog` },
          { name: "description", content: loaderData.post.frontmatter.description },
          { property: "og:title", content: loaderData.post.frontmatter.title },
          { property: "og:description", content: loaderData.post.frontmatter.description },
          { property: "article:published_time", content: loaderData.post.frontmatter.date },
        ]
      : [],
  }),
  component: PostPage,
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-6 py-24 text-center">
      <h1 className="text-2xl font-bold">Post not found</h1>
      <Link to="/blog" className="mt-4 inline-block text-accent">Back to blog</Link>
    </div>
  ),
});

function PostPage() {
  const { post } = Route.useLoaderData();
  return (
    <article>
      <header className="bg-hero text-navy-foreground">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-navy-muted hover:text-navy-foreground">
            <ArrowLeft className="h-4 w-4" /> All posts
          </Link>
          <h1 className="mt-6 font-display text-3xl font-bold md:text-5xl">{post.frontmatter.title}</h1>
          <div className="mt-4 text-sm text-navy-muted">
            {post.frontmatter.author} - {post.frontmatter.date}
          </div>
        </div>
      </header>
      <div className="bg-background py-16">
        <div className="mx-auto max-w-3xl px-6">
          <div className="prose-blog">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.body}</ReactMarkdown>
          </div>
        </div>
      </div>
    </article>
  );
}
