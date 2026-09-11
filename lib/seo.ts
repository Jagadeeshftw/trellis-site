import config from "@/config";
import { Metadata } from "next";

interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrlRelative?: string;
  keywords?: string[];
}

export function getSEOTags({
  title,
  description,
  canonicalUrlRelative,
  keywords = [],
}: SEOProps = {}): Metadata {
  const seoTitle = title || config.websiteName;
  const seoDescription = description || config.websiteDescription;
  const canonicalUrl = `${config.websiteUrl}${canonicalUrlRelative || ""}`;
  const ogImage = "/images/og.png";

  return {
    title: seoTitle,
    description: seoDescription,
    keywords,
    metadataBase: new URL(config.websiteUrl),
    alternates: {
      canonical: canonicalUrlRelative || "/",
    },
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      url: canonicalUrl,
      siteName: "Trellis",
      locale: "en_GB",
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: seoTitle,
      description: seoDescription,
      images: [{ url: ogImage }],
    },
  };
}
