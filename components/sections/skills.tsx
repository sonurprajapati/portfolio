"use client";

import { skillCategories } from "@/data/profile";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/scroll-reveal";

export function Skills() {
  return (
    <section
      id="skills"
      className="section-padding"
      aria-labelledby="skills-heading"
    >
      <div className="container-max">
        <ScrollReveal>
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              Expertise
            </p>
            <h2
              id="skills-heading"
              className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Skills & Technologies
            </h2>
          </div>
        </ScrollReveal>

        <StaggerContainer className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category) => (
            <StaggerItem key={category.name}>
              <div className="glass h-full rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                <h3 className="text-sm font-semibold text-primary">
                  {category.name}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2" role="list">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-lg bg-secondary/60 px-3 py-1.5 text-xs font-medium text-secondary-foreground"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
