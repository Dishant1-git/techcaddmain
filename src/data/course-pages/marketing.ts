import type { CoursePage } from "./types";
import { shopify } from "./shopify";
import { aeo } from "./aeo";
import { aiPoweredMarketing } from "./ai-powered-marketing";
import { digitalMarketing } from "./digital-marketing";
import { dropshippingEcommerce } from "./dropshipping-ecommerce";
import { geo } from "./geo";
import { googleAds } from "./google-ads";
import { graphicDesigning } from "./graphic-designing";
import { seo } from "./seo";
import { socialMediaMarketing } from "./social-media-marketing";
import { uiUxDesign } from "./ui-ux-design";
import { wordpress } from "./wordpress";

export const marketingCourses: CoursePage[] = [
  digitalMarketing,
  socialMediaMarketing,
  googleAds,
  seo,
  dropshippingEcommerce,
  geo,
  aeo,
  graphicDesigning,
  uiUxDesign,
  aiPoweredMarketing,
  wordpress,
  shopify,
];
