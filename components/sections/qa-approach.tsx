"use client";

import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/scroll-reveal";
import { ChevronDown } from "lucide-react";

const flowSteps = [
  { icon: "🔭", label: "Understand" },
  { icon: "🗺️", label: "Plan" },
  { icon: "🧪", label: "Test" },
  { icon: "🤖", label: "Automate" },
  { icon: "📊", label: "Analyze" },
  { icon: "🔁", label: "Improve" },
];

const principles = [
  {
    emoji: "🔍",
    title: "Test Smart",
    body: "Risk-based and requirement-driven testing. Focus effort where it matters most — critical paths, edge cases, and high-impact flows.",
  },
  {
    emoji: "🤖",
    title: "Automate Wisely",
    body: "Automate repetitive, stable, and high-value scenarios. Manual testing handles exploratory and context-heavy cases where automation adds less value.",
  },
  {
    emoji: "📊",
    title: "Analyze Failures",
    body: "Use logs, traces, screenshots, and reports to identify root causes quickly. A failing test is a signal — not just a red mark.",
  },
  {
    emoji: "🔄",
    title: "Integrate",
    body: "Run automated tests continuously through CI/CD. Fast feedback loops mean faster fixes and higher confidence in every release.",
  },
];

export function QAApproach() {
  return (
    <section
      id="qa-approach"
      className="section-padding"
      aria-labelledby="qa-approach-heading"
    >
      <div className="container-max">
        <ScrollReveal>
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              Mindset
            </p>
            <h2
              id="qa-approach-heading"
              className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl"
            >
              🧠 How I Approach Quality
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Quality isn&apos;t just about finding bugs — it&apos;s a continuous engineering practice built into every stage of development.
            </p>
          </div>
        </ScrollReveal>

        {/* Flow diagram */}
        <ScrollReveal delay={0.1}>
          <div className="mx-auto mt-12 flex max-w-xs flex-col items-center">
            {flowSteps.map((step, i) => (
              <div key={step.label} className="flex flex-col items-center">
                <div className="glass flex items-center gap-3 rounded-2xl px-6 py-3 shadow-sm transition-all duration-300 hover:shadow-md hover:shadow-primary/10">
                  <span className="text-xl" aria-hidden="true">{step.icon}</span>
                  <span className="text-sm font-semibold tracking-tight">{step.label}</span>
                </div>
                {i < flowSteps.length - 1 && (
                  <ChevronDown className="my-1 h-5 w-5 text-primary/50" aria-hidden="true" />
                )}
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Principles */}
        <StaggerContainer className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((p) => (
            <StaggerItem key={p.title}>
              <div className="glass group h-full rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                <span className="text-3xl" aria-hidden="true">{p.emoji}</span>
                <h3 className="mt-4 text-base font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.body}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
