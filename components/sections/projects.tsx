"use client";

import { ExternalLink, ImageIcon } from "lucide-react";
import { GitHubIcon } from "@/components/icons/social";
import { projects } from "@/data/profile";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/scroll-reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function Projects() {
  return (
    <section
      id="projects"
      className="section-padding gradient-bg"
      aria-labelledby="projects-heading"
    >
      <div className="container-max">
        <ScrollReveal>
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              Portfolio
            </p>
            <h2
              id="projects-heading"
              className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Automation Frameworks
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Production-ready test automation frameworks built for scalability,
              maintainability, and CI/CD integration.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <StaggerItem key={project.id}>
              <article className="glass group flex h-full flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                <div className="relative flex h-44 items-center justify-center bg-secondary/30">
                  <div className="flex flex-col items-center gap-2 text-muted-foreground">
                    <ImageIcon className="h-10 w-10 opacity-40" aria-hidden="true" />
                    <span className="text-xs">Screenshot Placeholder</span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-semibold">{project.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="mt-5 flex gap-2">
                    <Button asChild variant="secondary" size="sm" className="flex-1">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <GitHubIcon className="h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="sm" className="flex-1">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" aria-hidden="true" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
