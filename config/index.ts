import { site } from "@/constants/site";

const config = {
  websiteName: `${site.name}: a Decentraland garden its visitors plant`,
  websiteUrl: (process.env.NEXT_PUBLIC_WEBSITE_URL || "https://trellis.0xo.in").replace(/\/$/, ""),
  websiteDescription: site.description,
};

export default config;
