import type { Metadata } from "next";
import { personalInfo, siteConfig } from "@/data/profile";

export function createMetadata(): Metadata {
  const title = `${personalInfo.name} | ${personalInfo.title}`;
  const description = personalInfo.tagline;

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: title,
      template: `%s | ${personalInfo.name}`,
    },
    description,
    keywords: siteConfig.keywords,
    authors: [{ name: personalInfo.name }],
    creator: personalInfo.name,
    openGraph: {
      type: "website",
      locale: "en_IN",
      url: siteConfig.url,
      title,
      description,
      siteName: personalInfo.name,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: `${personalInfo.name} - QA Automation Engineer Portfolio`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteConfig.ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: siteConfig.url,
    },
  };
}
