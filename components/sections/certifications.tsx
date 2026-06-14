"use client";

import { Award, Star } from "lucide-react";
import { certifications } from "@/data/profile";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/scroll-reveal";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function Certifications() {
  const featured = certifications.find((c) => c.featured);
  const others = certifications.filter((c) => !c.featured);

  return (
    <section
      id="certifications"
      className="section-padding gradient-bg"
      aria-labelledby="certifications-heading"
    >
      <div className="container-max">
        <ScrollReveal>
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              Credentials
            </p>
            <h2
              id="certifications-heading"
              className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Certifications
            </h2>
          </div>
        </ScrollReveal>

        {featured && (
          <ScrollReveal delay={0.1}>
            <div className="glass mx-auto mt-10 max-w-lg rounded-2xl border border-primary/20 p-8 text-center shadow-lg shadow-primary/10">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                <Star className="h-7 w-7" aria-hidden="true" />
              </div>
              <Badge variant="featured" className="mb-3">
                Featured
              </Badge>
              <h3 className="text-xl font-bold">{featured.name}</h3>
              {featured.issuer && (
                <p className="mt-1 text-sm text-muted-foreground">
                  {featured.issuer}
                </p>
              )}
              {featured.year && (
                <p className="mt-2 text-xs text-muted-foreground">
                  {featured.year}
                </p>
              )}
            </div>
          </ScrollReveal>
        )}

        <StaggerContainer className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((cert) => (
            <StaggerItem key={cert.name}>
              <div className="glass flex items-start gap-4 rounded-2xl p-5 transition-all duration-300 hover:shadow-md">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Award className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold">{cert.name}</h3>
                  {cert.issuer && (
                    <p className="mt-0.5 text-sm text-muted-foreground">
                      {cert.issuer}
                    </p>
                  )}
                  {cert.year && (
                    <p
                      className={cn(
                        "mt-1 text-xs text-muted-foreground"
                      )}
                    >
                      {cert.year}
                    </p>
                  )}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
