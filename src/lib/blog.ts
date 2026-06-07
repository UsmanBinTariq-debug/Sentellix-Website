// Lightweight frontmatter + body parser. No node deps.
export interface BlogFrontmatter {
  title: string;
  description: string;
  date: string;
  author: string;
  tags: string[];
  cover?: string;
}

export interface BlogPost {
  slug: string;
  frontmatter: BlogFrontmatter;
  body: string;
}

function parseFrontmatter(raw: string): { fm: Record<string, unknown>; body: string } {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) return { fm: {}, body: raw };
  const fm: Record<string, unknown> = {};
  for (const line of match[1].split("\n")) {
    const idx = line.indexOf(":");
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    let val = line.slice(idx + 1).trim();
    if (val.startsWith("[") && val.endsWith("]")) {
      fm[key] = val
        .slice(1, -1)
        .split(",")
        .map((s) => s.trim().replace(/^["']|["']$/g, ""))
        .filter(Boolean);
    } else {
      fm[key] = val.replace(/^["']|["']$/g, "");
    }
  }
  return { fm, body: match[2] };
}

const modules = import.meta.glob("/src/content/blog/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

const posts: BlogPost[] = Object.entries(modules)
  .map(([path, raw]) => {
    const slug = path.split("/").pop()!.replace(/\.md$/, "");
    const { fm, body } = parseFrontmatter(raw);
    return {
      slug,
      frontmatter: {
        title: (fm.title as string) ?? slug,
        description: (fm.description as string) ?? "",
        date: (fm.date as string) ?? "",
        author: (fm.author as string) ?? "Sentellix",
        tags: (fm.tags as string[]) ?? [],
        cover: (fm.cover as string) ?? "",
      },
      body,
    };
  })
  .sort((a, b) => (a.frontmatter.date < b.frontmatter.date ? 1 : -1));

export function getAllPosts(): BlogPost[] {
  return posts;
}

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}
