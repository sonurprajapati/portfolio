import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock } from "lucide-react";
import type { Metadata } from "next";
import { getBlogPost, getBlogContent } from "@/lib/blog";
import { blogPosts, personalInfo, siteConfig } from "@/data/profile";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/sections/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollProgressBar } from "@/components/scroll-progress";
import { BackToTop } from "@/components/back-to-top";

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [personalInfo.name],
      url: `${siteConfig.url}/blog/${post.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

function renderContent(content: string[]) {
  return content.map((block, index) => {
    if (block.startsWith("## ")) {
      return (
        <h2
          key={index}
          className="mt-8 mb-4 text-xl font-semibold tracking-tight"
        >
          {block.replace("## ", "")}
        </h2>
      );
    }
    if (block.startsWith("`") && block.endsWith("`")) {
      return (
        <pre
          key={index}
          className="my-4 overflow-x-auto rounded-xl bg-secondary/60 p-4 text-sm"
        >
          <code>{block.replace(/`/g, "")}</code>
        </pre>
      );
    }
    return (
      <p key={index} className="leading-relaxed text-muted-foreground">
        {block}
      </p>
    );
  });
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  const content = getBlogContent(slug);

  if (!post || !content) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: personalInfo.name,
    },
    url: `${siteConfig.url}/blog/${post.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <ScrollProgressBar />
      <Navbar />
      <main id="main-content" className="mesh-gradient min-h-screen pt-28 pb-20">
        <article className="container-max section-padding">
          <Button asChild variant="ghost" size="sm" className="mb-8">
            <Link href="/#blog">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back to Blog
            </Link>
          </Button>

          <header className="max-w-3xl">
            <div className="flex items-center gap-3">
              <Badge variant="outline">{post.category}</Badge>
              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                {post.readTime}
              </span>
            </div>
            <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              {post.title}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">{post.excerpt}</p>
            <div className="mt-4 flex items-center gap-3 text-sm text-muted-foreground">
              <span>{personalInfo.name}</span>
              <span aria-hidden="true">&middot;</span>
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("en-IN", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
          </header>

          <div className="glass prose-custom mx-auto mt-12 max-w-3xl space-y-4 rounded-2xl p-8 md:p-10">
            {renderContent(content.content)}
          </div>
        </article>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
