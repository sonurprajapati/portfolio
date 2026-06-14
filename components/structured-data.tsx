import {
  personalInfo,
  siteConfig,
  socialLinks,
  experience,
  education,
  certifications,
  skillCategories,
} from "@/data/profile";

export function StructuredData() {
  const linkedin = socialLinks.find((l) => l.icon === "linkedin");
  const github = socialLinks.find((l) => l.icon === "github");

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personalInfo.name,
    jobTitle: "QA Automation Engineer / SDET",
    description: personalInfo.tagline,
    email: personalInfo.email,
    url: siteConfig.url,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mumbai",
      addressCountry: "IN",
    },
    sameAs: [linkedin?.url, github?.url].filter(Boolean),
    knowsAbout: skillCategories.flatMap((c) => c.skills),
    hasCredential: certifications.map((cert) => ({
      "@type": "EducationalOccupationalCredential",
      name: cert.name,
      credentialCategory: "certification",
    })),
    alumniOf: education.map((edu) => ({
      "@type": "EducationalOrganization",
      name: edu.institution,
    })),
    worksFor: experience
      .filter((exp) => exp.endDate === null)
      .map((exp) => ({
        "@type": "Organization",
        name: exp.company,
      })),
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${personalInfo.name} Portfolio`,
    url: siteConfig.url,
    description: personalInfo.tagline,
    author: {
      "@type": "Person",
      name: personalInfo.name,
    },
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: personalInfo.name,
    description: personalInfo.tagline,
    url: siteConfig.url,
    areaServed: "Worldwide",
    serviceType: [
      "QA Automation",
      "SDET",
      "API Testing",
      "Mobile Testing",
      "Test Automation",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceSchema),
        }}
      />
    </>
  );
}
