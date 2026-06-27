import MainLayout from "@/layouts/MainLayout";

import { kitchenLayouts } from "@/data/kitchenLayouts";

import LayoutHero from "@/components/kitchen-layout/LayoutHero";
import QuickFacts from "@/components/kitchen-layout/QuickFacts";
import KitchenBlueprint from "@/components/kitchen-layout/KitchenBlueprint";
import FeatureGrid from "@/components/kitchen-layout/FeatureGrid";
import FAQSection from "@/components/kitchen-layout/FAQSection";
import GallerySection from "@/components/kitchen-layout/GallerySection";
import StorageSolutions from "@/components/kitchen-layout/StorageSolutions";

import CTA from "@/components/Home/CTASection";

function LShapedKitchen() {
  const {
    hero,
    quickFacts,
    blueprint,
    benefits,
    storage,
    gallery,
    faq,
  } = kitchenLayouts.lShaped;

  return (
    <MainLayout>
      <LayoutHero {...hero} />

      <QuickFacts {...quickFacts} />

      <KitchenBlueprint {...blueprint} />

      <FeatureGrid {...benefits} />

      <StorageSolutions {...storage}/>

      <GallerySection {...gallery} />

      <FAQSection {...faq} />

      <CTA />
    </MainLayout>
  );
}

export default LShapedKitchen;
