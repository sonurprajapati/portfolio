"use client";

import { achievements } from "@/data/profile";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/scroll-reveal";

export function Achievements() {
  return (
    <section
      id="achievements"
      className="section-padding gradient-bg"
      aria-labelledby="achievements-heading"
    >
      <div className="container-max">
        <ScrollReveal>
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              Value
            </p>
            <h2
              id="achievements-heading"
              className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl"
            >
              What I Bring
            </h2>
          </div>
        </ScrollReveal>

        <StaggerContainer className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((item) => (
            <StaggerItem key={item.label}>
              <div className="glass group flex flex-col items-center rounded-2xl p-8 text-center transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                <span className="text-4xl" aria-hidden="true">
                  {item.value}
                </span>
                <p className="mt-4 text-lg font-semibold">{item.label}</p>
                {item.description && (
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                )}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
