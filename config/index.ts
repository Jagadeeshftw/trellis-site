import { site } from "@/constants/site";

const config = {
  websiteName: `${site.name}: a Decentraland garden its visitors plant`,
  websiteUrl: process.env.NEXT_PUBLIC_WEBSITE_URL || "http://localhost:3000",
  websiteDescription: site.description,
};

export default config;
