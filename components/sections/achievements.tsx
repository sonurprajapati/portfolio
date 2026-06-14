"use client";

import {
  Calendar,
  Bug,
  Code2,
  Award,
  Building2,
} from "lucide-react";
import { achievements } from "@/data/profile";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/scroll-reveal";

const iconMap = {
  calendar: Calendar,
  bug: Bug,
  code: Code2,
  award: Award,
  building: Building2,
};

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
              Impact
            </p>
            <h2
              id="achievements-heading"
              className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Key Achievements
            </h2>
          </div>
        </ScrollReveal>

        <StaggerContainer className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 lg:gap-6">
          {achievements.map((item) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap] ?? Award;
            return (
              <StaggerItem key={item.label}>
                <div className="glass group rounded-2xl p-6 text-center transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <p className="text-2xl font-bold gradient-text sm:text-3xl">
                    {item.value}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                    {item.label}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
