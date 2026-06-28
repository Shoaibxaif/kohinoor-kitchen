import MainLayout from "@/layouts/MainLayout";

import { kitchenLayouts } from "@/data/kitchenLayouts";

import LayoutHero from "@/components/kitchen-layout/LayoutHero";
import QuickFacts from "@/components/kitchen-layout/QuickFacts";
import KitchenBlueprint from "@/components/kitchen-layout/KitchenBlueprint";
import FeatureGrid from "@/components/kitchen-layout/FeatureGrid";
import StorageSolutions from "@/components/kitchen-layout/StorageSolutions";
import GallerySection from "@/components/kitchen-layout/GallerySection";
import FAQSection from "@/components/kitchen-layout/FAQSection";

import CTA from "@/components/Home/CTASection";

function StraightKitchen() {
    const {
        hero,
        quickFacts,
        blueprint,
        benefits,
        storage,
        gallery,
        faq,
    } = kitchenLayouts.straight;

    return (
        <MainLayout>
            <LayoutHero {...hero} />

            <QuickFacts {...quickFacts} />

            <KitchenBlueprint {...blueprint} />

            <FeatureGrid {...benefits} />

            <StorageSolutions {...storage} />

            <GallerySection {...gallery} />

            <FAQSection {...faq} />

            <CTA />
        </MainLayout>
    );
}

export default StraightKitchen;