# Editing site content

All content for this site lives in plain files you can edit in GitHub. Push to your main branch and Vercel (or wherever you deploy) will rebuild automatically.

## Pages driven by JSON

Edit these files to update copy, lists, services, etc:

- `src/data/site.json` - site name, contact email, EmailJS keys
- `src/data/landing.json` - homepage hero, services, process, values
- `src/data/faq.json` - FAQ questions and answers
- `src/data/testimonials.json` - testimonial cards
- `src/data/portfolio.json` - portfolio case studies

Add, remove, or reorder items in the `items` arrays. The site picks up the change on the next build.

## Blog (markdown)

Blog posts live in `src/content/blog/` as `.md` files. The filename (minus `.md`) becomes the URL slug.

Each file needs a frontmatter block at the top:

```
---
title: "Your post title"
description: "One sentence summary for SEO and the card view."
date: "2026-06-07"
author: "Sentellix Team"
tags: ["tag-one", "tag-two"]
cover: ""
---

Your post content in markdown.
```

Add a new `.md` file -> new blog post appears automatically.
Delete a file -> the post disappears.

## Contact form (EmailJS)

The contact form uses EmailJS. To wire it up:

1. Create a free account at https://www.emailjs.com
2. Add an email service and template
3. Copy the Service ID, Template ID, and Public Key
4. Paste them into `src/data/site.json` under the `emailjs` block

The template should accept these variables: `from_name`, `reply_to`, `whatsapp`, `challenge`, `tried`, `timing`.
