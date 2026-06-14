"use client";

import Link from "next/link";
import { ArrowRight, Clock, BookOpen } from "lucide-react";
import { blogPosts } from "@/data/profile";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/scroll-reveal";
import { Badge } from "@/components/ui/badge";

export function Blog() {
  return (
    <section
      id="blog"
      className="section-padding gradient-bg"
      aria-labelledby="blog-heading"
    >
      <div className="container-max">
        <ScrollReveal>
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              Insights
            </p>
            <h2
              id="blog-heading"
              className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Blog & Articles
            </h2>
          </div>
        </ScrollReveal>

        <StaggerContainer className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <StaggerItem key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="glass group flex h-full flex-col rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-xs">
                    {post.category}
                  </Badge>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" aria-hidden="true" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="mt-4 text-base font-semibold leading-snug group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <time
                    className="text-xs text-muted-foreground"
                    dateTime={post.date}
                  >
                    {new Date(post.date).toLocaleDateString("en-IN", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <span className="flex items-center gap-1 text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                    Read
                    <ArrowRight className="h-3 w-3" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal delay={0.2}>
          <div className="mt-8 flex justify-center">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <BookOpen className="h-4 w-4" aria-hidden="true" />
              More articles coming soon
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
