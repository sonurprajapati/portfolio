"use client";

import { GraduationCap } from "lucide-react";
import { education } from "@/data/profile";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/scroll-reveal";

export function Education() {
  return (
    <section
      id="education"
      className="section-padding"
      aria-labelledby="education-heading"
    >
      <div className="container-max">
        <ScrollReveal>
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              Background
            </p>
            <h2
              id="education-heading"
              className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Education
            </h2>
          </div>
        </ScrollReveal>

        <StaggerContainer className="mx-auto mt-12 grid max-w-2xl gap-4">
          {education.map((item) => (
            <StaggerItem key={item.degree}>
              <div className="glass flex items-start gap-4 rounded-2xl p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <GraduationCap className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold">{item.degree}</h3>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    {item.institution}
                  </p>
                  {item.period && (
                    <p className="mt-1 text-xs text-muted-foreground">
                      {item.period}
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
