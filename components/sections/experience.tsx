"use client";

import { Briefcase } from "lucide-react";
import { experience } from "@/data/profile";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Badge } from "@/components/ui/badge";

export function ExperienceTimeline() {
  return (
    <section
      id="experience"
      className="section-padding"
      aria-labelledby="experience-heading"
    >
      <div className="container-max">
        <ScrollReveal>
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              Career
            </p>
            <h2
              id="experience-heading"
              className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Experience
            </h2>
          </div>
        </ScrollReveal>

        <div className="relative mx-auto mt-12 max-w-3xl">
          <div
            className="absolute left-6 top-0 hidden h-full w-px bg-border md:block"
            aria-hidden="true"
          />

          <ol className="space-y-8">
            {experience.map((job, index) => (
              <ScrollReveal key={`${job.company}-${job.period}`} delay={index * 0.1}>
                <li className="relative md:pl-16">
                  <div
                    className="absolute left-4 top-6 hidden h-4 w-4 rounded-full border-2 border-primary bg-background md:block"
                    aria-hidden="true"
                  />

                  <div className="glass rounded-2xl p-6 md:p-8">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex items-start gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary md:hidden">
                          <Briefcase className="h-5 w-5" aria-hidden="true" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold">{job.company}</h3>
                          <p className="text-sm text-primary">{job.role}</p>
                        </div>
                      </div>
                      <time
                        className="shrink-0 text-sm text-muted-foreground"
                        dateTime={`${job.startDate}/${job.endDate ?? "present"}`}
                      >
                        {job.period}
                      </time>
                    </div>

                    <ul className="mt-4 flex flex-wrap gap-2" role="list">
                      {job.highlights.map((item) => (
                        <li key={item}>
                          <Badge variant="secondary">{item}</Badge>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ScrollReveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
