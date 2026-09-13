"use client";

import { ArrowRight, CheckCircle2, ChevronDown, Images } from "lucide-react";
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
      className="section-padding"
      aria-labelledby="projects-heading"
    >
      <div className="container-max">
        <ScrollReveal>
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              Core Work
            </p>
            <h2
              id="projects-heading"
              className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Automation Frameworks
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Production-grade frameworks I&apos;ve built — covering web, API, and mobile — designed to scale, integrate into CI/CD, and ship quality fast.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="mt-14 flex flex-col gap-10">
          {projects.map((project) => (
            <StaggerItem key={project.id}>
              <article className="glass group overflow-hidden rounded-3xl transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">

                {/* Header */}
                <div className="flex flex-col gap-4 border-b border-border/50 p-7 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex items-center gap-4">
                    {project.logoUrl ? (
                      <img
                        src={project.logoUrl}
                        alt={`${project.name} logo`}
                        className="h-12 w-12 shrink-0 object-contain drop-shadow transition-transform duration-300 group-hover:scale-110"
                      />
                    ) : (
                      <span className="text-4xl leading-none">{project.emoji}</span>
                    )}
                    <div>
                      <h3 className="text-xl font-bold tracking-tight">
                        {project.emoji} {project.name}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {project.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex shrink-0 flex-wrap gap-2 self-start">
                    {project.screenshotsFolderUrl && (
                      <Button asChild variant="outline" size="sm">
                        <a
                          href={project.screenshotsFolderUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Images className="h-4 w-4" />
                          View Screenshots
                        </a>
                      </Button>
                    )}
                    <Button asChild variant="secondary" size="sm">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <GitHubIcon className="h-4 w-4" />
                        View GitHub
                        <ArrowRight className="h-3.5 w-3.5" />
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Body */}
                <div className="grid gap-0 md:grid-cols-3">

                  {/* What I built */}
                  <div className="border-b border-border/50 p-7 md:border-b-0 md:border-r">
                    <h4 className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
                      What I Built
                    </h4>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {project.whatIBuilt}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {project.techStack.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="border-b border-border/50 p-7 md:border-b-0 md:border-r">
                    <h4 className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {project.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" aria-hidden="true" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Architecture */}
                  <div className="p-7">
                    <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">
                      Architecture
                    </h4>
                    <ol className="flex flex-col items-start gap-1">
                      {project.architecture.map((layer, i) => (
                        <li key={layer} className="flex flex-col items-start">
                          <span className="rounded-lg bg-secondary/60 px-3 py-1.5 text-sm font-medium">
                            {layer}
                          </span>
                          {i < project.architecture.length - 1 && (
                            <ChevronDown className="ml-3 h-4 w-4 text-muted-foreground/50" aria-hidden="true" />
                          )}
                        </li>
                      ))}
                    </ol>
                  </div>

                </div>

                {/* Screenshots / Demo pipeline strip */}
                {project.screenshotsFolderUrl && (
                  <div className="border-t border-border/50 bg-secondary/10 px-7 py-5">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="mr-2 text-xs font-semibold uppercase tracking-widest text-primary">
                        Demo &amp; Screenshots
                      </p>
                      {["Framework Structure", "Test Execution", "Allure Report", "CI/CD Pipeline"].map((step, i, arr) => (
                        <span key={step} className="flex items-center gap-2">
                          <a
                            href={project.screenshotsFolderUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-md border border-border/60 bg-background/50 px-3 py-1 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                          >
                            {step}
                          </a>
                          {i < arr.length - 1 && (
                            <ArrowRight className="h-3 w-3 shrink-0 text-muted-foreground/40" aria-hidden="true" />
                          )}
                        </span>
                      ))}
                      <a
                        href={project.screenshotsFolderUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-auto flex items-center gap-1.5 text-xs font-medium text-primary hover:underline"
                      >
                        <Images className="h-3.5 w-3.5" />
                        Open folder →
                      </a>
                    </div>
                  </div>
                )}
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
