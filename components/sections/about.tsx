"use client";

import { aboutContent } from "@/data/profile";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Badge } from "@/components/ui/badge";

export function About() {
  return (
    <section
      id="about"
      className="section-padding"
      aria-labelledby="about-heading"
    >
      <div className="container-max">
        <ScrollReveal>
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              About
            </p>
            <h2
              id="about-heading"
              className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Quality Engineer with{" "}
              <span className="gradient-text">5+ Years</span> of Experience
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="glass mx-auto mt-10 max-w-3xl rounded-2xl p-8 md:p-10">
            <p className="text-center text-base leading-relaxed text-muted-foreground md:text-lg">
              {aboutContent.summary}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {aboutContent.highlights.map((item) => (
                <Badge key={item} variant="secondary" className="px-4 py-1.5">
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
