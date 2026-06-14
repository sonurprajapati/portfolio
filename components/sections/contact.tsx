"use client";

import { Mail, MapPin } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/social";
import { personalInfo, socialLinks } from "@/data/profile";
import { ScrollReveal } from "@/components/scroll-reveal";

const iconMap = {
  linkedin: LinkedInIcon,
  github: GitHubIcon,
  email: Mail,
  location: MapPin,
};

export function Contact() {
  const row1 = socialLinks.filter(
    (l) => l.icon === "linkedin" || l.icon === "github"
  );
  const row2 = socialLinks.filter(
    (l) => l.icon === "email" || l.icon === "location"
  );

  const renderCard = (link: (typeof socialLinks)[number]) => {
    const Icon = iconMap[link.icon];
    const subtitle =
      link.icon === "email"
        ? personalInfo.email
        : link.icon === "location"
        ? personalInfo.location
        : link.url.replace("https://", "");

    return (
      <a
        key={link.name}
        href={link.url}
        target={link.icon === "email" ? undefined : "_blank"}
        rel={link.icon === "email" ? undefined : "noopener noreferrer"}
        className="glass flex items-center gap-4 rounded-2xl p-6 w-full transition-all duration-300 hover:shadow-md"
      >
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Icon className="h-6 w-6" aria-hidden="true" />
        </div>
        <div className="min-w-0">
          <p className="text-sm font-medium">{link.name}</p>
          <p className="text-xs text-muted-foreground truncate">{subtitle}</p>
        </div>
      </a>
    );
  };

  return (
    <section
      id="contact"
      className="section-padding"
      aria-labelledby="contact-heading"
    >
      <div className="container-max">
        <ScrollReveal>
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              Get in Touch
            </p>
            <h2
              id="contact-heading"
              className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Let&apos;s Connect
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Open to QA Automation, SDET, and quality engineering opportunities.
              Reach out for collaborations or to discuss your testing needs.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="mx-auto mt-12 w-full max-w-2xl">
          {/* Row 1: LinkedIn & GitHub */}
          <div className="grid grid-cols-2 gap-6">
            {row1.map(renderCard)}
          </div>
          {/* Row 2: Email & Location */}
          <div className="grid grid-cols-2 gap-6 mt-6">
            {row2.map(renderCard)}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
