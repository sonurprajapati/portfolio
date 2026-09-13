"use client";

import { Mail, FileDown } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/social";
import { personalInfo } from "@/data/profile";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Button } from "@/components/ui/button";

const links = [
  {
    label: "GitHub",
    href: "https://github.com/sonurprajapati",
    icon: GitHubIcon,
    variant: "secondary" as const,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/sonuprajapati",
    icon: LinkedInIcon,
    variant: "secondary" as const,
  },
  {
    label: "Resume",
    href: personalInfo.resumeUrl,
    icon: FileDown,
    variant: "outline" as const,
  },
  {
    label: "Email",
    href: `mailto:${personalInfo.email}`,
    icon: Mail,
    variant: "outline" as const,
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="section-padding gradient-bg"
      aria-labelledby="contact-heading"
    >
      <div className="container-max">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              Contact
            </p>
            <h2
              id="contact-heading"
              className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Let&apos;s Build Quality Together
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Interested in QA automation, SDET opportunities, or testing engineering? I&apos;d love to connect.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              {links.map(({ label, href, icon: Icon, variant }) => (
                <Button key={label} asChild variant={variant} size="lg">
                  <a
                    href={href}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                    {label}
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
