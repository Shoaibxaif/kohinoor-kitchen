import MainLayout from "@/layouts/MainLayout";

import { sofaData } from "@/data/sofa";

import LayoutHero from "@/components/page-layout/LayoutHero";
import AboutSection from "@/components/page-layout/AboutSection";
import GallerySection from "@/components/page-layout/GallerySection";

import CTA from "@/components/Home/CTASection";

import sofaImage from "@/assets/images/sofas/hero.jpg";

function Sofa() {
    const {
        hero,
        gallery,
    } = sofaData;

    return (
        <MainLayout>
            <LayoutHero {...hero} />

            <AboutSection
                tag="Premium Sofas"
                title="Designed For"
                italicWord="Everyday Comfort"
                description="Transform your living room with premium sofas crafted for exceptional comfort, durability, and timeless style. From compact seating solutions to luxurious sectional sofas, every piece is customized to complement your home and lifestyle."

                image={sofaImage}

                imageAlt="Luxury Living Room Sofa"

                points={[
                    "L-Shaped & Sectional Sofas",
                    "Premium Fabric & Leather Upholstery",
                    "Solid Wood Frame Construction",
                    "Custom Sizes & Configurations",
                    "High-Density Foam Cushioning",
                    "Expert Delivery & Installation",
                ]}
            />

            <GallerySection {...gallery} />

            <CTA />
        </MainLayout>
    );
}

export default Sofa;