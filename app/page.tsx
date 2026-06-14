import { Navbar } from "@/components/navbar";
import { ScrollProgressBar } from "@/components/scroll-progress";
import { BackToTop } from "@/components/back-to-top";
import { PageTransition } from "@/components/page-transition";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Achievements } from "@/components/sections/achievements";
import { Skills } from "@/components/sections/skills";
import { Certifications } from "@/components/sections/certifications";
import { ExperienceTimeline } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Education } from "@/components/sections/education";
import { Blog } from "@/components/sections/blog";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to main content
      </a>
      <ScrollProgressBar />
      <Navbar />
      <main id="main-content">
        <PageTransition>
          <div className="mesh-gradient min-h-screen">
            <Hero />
            <About />
            <Achievements />
            <Skills />
            <Certifications />
            <ExperienceTimeline />
            <Projects />
            <Education />
            <Blog />
            <Contact />
          </div>
        </PageTransition>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
