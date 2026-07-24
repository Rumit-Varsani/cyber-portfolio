import type { Metadata } from "next";
import Link from "next/link";
import { translations } from "@/i18n/translations";

export const metadata: Metadata = {
  title: "Blog & Writeups",
  description: "Networking and security writeups by Rumit Varsani.",
};

export default function BlogIndexPage() {
  const posts = translations.de.blog.posts;

  return (
    <div className="section-pad mx-auto max-w-4xl pt-28 md:pt-32">
      <p className="mb-2 text-xs tracking-widest text-[var(--text-dim)] uppercase">
        <span className="text-[var(--green)]">$</span> ls ~/writeups
      </p>
      <h1 className="glow-text mb-3 text-3xl font-semibold text-[var(--green)]">
        Blog & Writeups
      </h1>
      <div className="mb-8">
        <Link href="/#blog" className="text-xs text-[var(--cyan)] hover:underline">
          ← portfolio
        </Link>
      </div>
      <div className="grid gap-4">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="panel group block p-5 transition hover:-translate-y-0.5"
          >
            <time className="text-xs text-[var(--text-dim)]">{post.date}</time>
            <h2 className="mt-2 text-lg text-[var(--text)] group-hover:text-[var(--green)]">
              {post.title}
            </h2>
            <p className="mt-2 text-sm text-[var(--text-muted)]">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
