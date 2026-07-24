import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/content";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Post not found" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <article className="section-pad mx-auto max-w-3xl pt-28 md:pt-32">
      <div className="mb-8 flex flex-wrap gap-4 text-xs">
        <Link href="/#blog" className="text-[var(--cyan)] hover:underline">
          ← portfolio
        </Link>
        <Link href="/blog" className="text-[var(--text-dim)] hover:text-[var(--green)]">
          all writeups
        </Link>
      </div>

      <p className="mb-2 text-xs tracking-widest text-[var(--text-dim)] uppercase">
        <span className="text-[var(--green)]">$</span> cat {post.slug}.md
      </p>

      <header className="mb-8 border-b border-[var(--border)] pb-6">
        <time className="text-xs text-[var(--text-dim)]">{post.date}</time>
        <h1 className="mt-2 text-3xl font-semibold leading-tight glow-text text-[var(--text)] md:text-4xl">
          {post.title}
        </h1>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {post.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
        <p className="mt-4 text-sm text-[var(--text-muted)]">{post.excerpt}</p>
      </header>

      <div className="prose-terminal panel p-5 md:p-8">
        {post.content.map((paragraph) => (
          <p key={paragraph.slice(0, 40)}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-10 panel p-5 text-sm text-[var(--text-dim)]">
        <p>
          <span className="text-[var(--green)]">EOF</span> — want to discuss this
          topic?{" "}
          <Link href="/#contact" className="text-[var(--cyan)] hover:underline">
            open a channel
          </Link>
          .
        </p>
      </div>
    </article>
  );
}
