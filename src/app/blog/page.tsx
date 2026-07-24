import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/content";

export const metadata: Metadata = {
  title: "Blog & Writeups",
  description:
    "Networking notes, packet analysis, and security learning writeups by Rumit Varsani.",
};

export default function BlogIndexPage() {
  return (
    <div className="section-pad mx-auto max-w-4xl pt-28 md:pt-32">
      <p className="mb-2 text-xs tracking-widest text-[var(--text-dim)] uppercase">
        <span className="text-[var(--green)]">$</span> ls ~/writeups
      </p>
      <h1 className="mb-3 text-3xl font-semibold glow-text text-[var(--green)]">
        Blog & Writeups
      </h1>
      <p className="mb-8 max-w-2xl text-sm text-[var(--text-muted)]">
        Field notes from networking labs and security practice. More posts as the
        labs grow.
      </p>

      <div className="mb-8">
        <Link
          href="/#blog"
          className="text-xs text-[var(--cyan)] hover:underline"
        >
          ← back to portfolio
        </Link>
      </div>

      <div className="grid gap-4">
        {blogPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="panel group block p-5 transition hover:-translate-y-0.5"
          >
            <div className="mb-2 flex flex-wrap items-center gap-3">
              <time className="text-xs text-[var(--text-dim)]">{post.date}</time>
              <div className="flex flex-wrap gap-1.5">
                {post.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <h2 className="mb-2 text-lg text-[var(--text)] group-hover:text-[var(--green)]">
              {post.title}
            </h2>
            <p className="text-sm leading-relaxed text-[var(--text-muted)]">
              {post.excerpt}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
