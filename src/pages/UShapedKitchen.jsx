import MainLayout from "@/layouts/MainLayout";

import { kitchenLayouts } from "@/data/kitchenLayouts";

import LayoutHero from "@/components/page-layout/LayoutHero";
import QuickFacts from "@/components/page-layout/QuickFacts";
import KitchenBlueprint from "@/components/page-layout/KitchenBlueprint";
import FeatureGrid from "@/components/page-layout/FeatureGrid";
import StorageSolutions from "@/components/page-layout/StorageSolutions";
import GallerySection from "@/components/page-layout/GallerySection";
import FAQSection from "@/components/page-layout/FAQSection";

import CTA from "@/components/Home/CTASection";

function UShapedKitchen() {
    const {
        hero,
        quickFacts,
        blueprint,
        benefits,
        storage,
        gallery,
        faq,
    } = kitchenLayouts.uShaped;

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

export default UShapedKitchen;