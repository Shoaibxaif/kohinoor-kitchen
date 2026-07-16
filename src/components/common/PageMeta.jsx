import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

import { SITE } from "@/constants/siteConfig";

const PAGE_TITLES = {
  "/": "Luxury Modular Kitchens & Furniture", "/modular-kitchen": "Modular Kitchens",
  "/l-shaped-kitchen": "L-Shaped Kitchens", "/u-shaped-kitchen": "U-Shaped Kitchens",
  "/parallel-kitchen": "Parallel Kitchens", "/island-kitchen": "Island Kitchens",
  "/straight-kitchen": "Straight Kitchens", "/peninsula-kitchen": "Peninsula Kitchens",
  "/projects": "Our Projects", "/about": "About Us", "/contact": "Contact Us",
  "/wardrobes": "Custom Wardrobes", "/beds": "Custom Beds", "/sofas": "Custom Sofas",
  "/tv-panels": "TV Panels", "/dining-furniture": "Dining Furniture",
};

function PageMeta() {
  const { pathname } = useLocation();
  const pageTitle = PAGE_TITLES[pathname] ?? "Page Not Found";
  const title = `${pageTitle} | ${SITE.name}`;
  const description = "Kohinoor Kitchens designs premium modular kitchens and custom furniture for modern homes across Delhi NCR.";

  return <Helmet><title>{title}</title><meta name="description" content={description} /><meta name="robots" content="index, follow" /><meta property="og:title" content={title} /><meta property="og:description" content={description} /><meta property="og:type" content="website" /></Helmet>;
}

export default PageMeta;
