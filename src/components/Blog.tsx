"use client";

import Link from "next/link";
import { useI18n } from "@/i18n/LanguageContext";
import SectionHeading from "./SectionHeading";

export default function Blog() {
  const { t } = useI18n();
  const b = t.blog;

  return (
    <section id="blog" className="section-pad">
      <div className="mx-auto max-w-6xl">
        <SectionHeading command={b.command} title={b.title} subtitle={b.subtitle} />
        <div className="grid gap-4">
          {b.posts.map((post, i) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="panel group animate-fade-up block p-5 transition hover:-translate-y-0.5"
              style={{ animationDelay: `${i * 70}ms` }}
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
              <h3 className="mb-2 text-lg text-[var(--text)] group-hover:text-[var(--green)]">
                {post.title}
              </h3>
              <p className="text-sm leading-relaxed text-[var(--text-muted)]">{post.excerpt}</p>
              <p className="mt-3 text-xs text-[var(--cyan)]">{b.read}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
