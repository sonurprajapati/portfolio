"use client";

import Link from "next/link";
import { FileDown, Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/social";
import { personalInfo, socialLinks } from "@/data/profile";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  const linkedin = socialLinks.find((l) => l.icon === "linkedin");
  const github = socialLinks.find((l) => l.icon === "github");

  return (
    <footer className="border-t border-border bg-secondary/20" role="contentinfo">
      <div className="container-max section-padding py-12">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div className="text-center md:text-left">
            <p className="text-lg font-semibold gradient-text">
              {personalInfo.name}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              {personalInfo.title}
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap items-center justify-center gap-4">
              <li>
                <a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <FileDown className="h-4 w-4" aria-hidden="true" />
                  Resume
                </a>
              </li>
              {linkedin && (
                <li>
                  <a
                    href={linkedin.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <LinkedInIcon className="h-4 w-4" />
                    LinkedIn
                  </a>
                </li>
              )}
              {github && (
                <li>
                  <a
                    href={github.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <GitHubIcon className="h-4 w-4" />
                    GitHub
                  </a>
                </li>
              )}
              <li>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  Email
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-4 text-center text-xs text-muted-foreground sm:flex-row sm:text-left">
          <p>
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights
            reserved.
          </p>

        </div>
      </div>
    </footer>
  );
}
