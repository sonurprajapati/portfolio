"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  FileDown,
  FolderKanban,
  Mail,
  Award,
} from "lucide-react";
import { personalInfo } from "@/data/profile";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center section-padding pt-32"
      aria-labelledby="hero-heading"
    >
      <div className="container-max w-full">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="featured" className="mb-6 gap-1.5 px-4 py-1.5">
              <Award className="h-3.5 w-3.5" aria-hidden="true" />
              {personalInfo.istqbBadge.label} — {personalInfo.istqbBadge.version}
            </Badge>
          </motion.div>

          <motion.h1
            id="hero-heading"
            className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="gradient-text">{personalInfo.name}</span>
          </motion.h1>

          <motion.p
            className="mt-4 max-w-2xl text-lg text-muted-foreground sm:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {personalInfo.title}
          </motion.p>

          <motion.div
            className="mt-3 flex items-center gap-1.5 text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <MapPin className="h-4 w-4" aria-hidden="true" />
            <a
              href="https://maps.google.com/?q=Mumbai,India"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              {personalInfo.location}
            </a>
          </motion.div>

          <motion.p
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {personalInfo.tagline}
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Button asChild size="lg">
              <a href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer">
                <FileDown className="h-4 w-4" aria-hidden="true" />
                Resume
              </a>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <a href="#projects">
                <FolderKanban className="h-4 w-4" aria-hidden="true" />
                Projects
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#contact">
                <Mail className="h-4 w-4" aria-hidden="true" />
                Contact
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
