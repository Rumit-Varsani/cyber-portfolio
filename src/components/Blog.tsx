import Link from "next/link";
import { blogPosts } from "@/data/content";
import SectionHeading from "./SectionHeading";

export default function Blog() {
  return (
    <section id="blog" className="section-pad">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          command="grep -R 'writeup' ~/notes"
          title="Blog & Writeups"
          subtitle="Short notes from the wire — networking, analysis, and the path into security ops."
        />

        <div className="grid gap-4">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="panel group block p-5 transition hover:-translate-y-0.5"
            >
              <div className="mb-2 flex flex-wrap items-center gap-3">
                <time className="text-xs text-[var(--text-dim)]">
                  {post.date}
                </time>
                <div className="flex flex-wrap gap-1.5">
                  {post.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <h3 className="mb-2 text-lg text-[var(--text)] group-hover:text-[var(--green)]">
                {post.title}
              </h3>
              <p className="text-sm leading-relaxed text-[var(--text-muted)]">
                {post.excerpt}
              </p>
              <p className="mt-3 text-xs text-[var(--cyan)]">
                read writeup →
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
