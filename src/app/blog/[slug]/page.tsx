import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { translations } from "@/i18n/translations";

type Props = {
  params: Promise<{ slug: string }>;
};

const postsDe = translations.de.blog.posts;
const postsEn = translations.en.blog.posts;

export async function generateStaticParams() {
  return postsDe.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = postsDe.find((p) => p.slug === slug) || postsEn.find((p) => p.slug === slug);
  if (!post) return { title: "Not found" };
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const postDe = postsDe.find((p) => p.slug === slug);
  const postEn = postsEn.find((p) => p.slug === slug);
  if (!postDe && !postEn) notFound();

  const post = postDe || postEn!;
  const alt = post === postDe ? postEn : postDe;

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
        <h1 className="glow-text mt-2 text-3xl font-semibold leading-tight text-[var(--text)] md:text-4xl">
          {post.title}
        </h1>
        {alt && alt.title !== post.title ? (
          <p className="mt-2 text-sm text-[var(--text-dim)]">{alt.title}</p>
        ) : null}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {post.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
        <p className="mt-4 text-sm text-[var(--text-muted)]">{post.excerpt}</p>
      </header>

      <div className="prose-terminal panel space-y-6 p-5 md:p-8">
        <div>
          <p className="mb-3 text-[10px] tracking-widest text-[var(--cyan)] uppercase">DE</p>
          {(postDe || post).content.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>
        {postEn ? (
          <div className="border-t border-[var(--border)] pt-6">
            <p className="mb-3 text-[10px] tracking-widest text-[var(--cyan)] uppercase">EN</p>
            {postEn.content.map((paragraph) => (
              <p key={`en-${paragraph.slice(0, 40)}`}>{paragraph}</p>
            ))}
          </div>
        ) : null}
      </div>

      <div className="panel mt-10 p-5 text-sm text-[var(--text-dim)]">
        <p>
          <span className="text-[var(--green)]">EOF</span> —{" "}
          <Link href="/#contact" className="text-[var(--cyan)] hover:underline">
            contact
          </Link>
        </p>
      </div>
    </article>
  );
}
