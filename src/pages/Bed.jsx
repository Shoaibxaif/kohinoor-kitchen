import MainLayout from "@/layouts/MainLayout";

import { bedData } from "@/data/bed";

import LayoutHero from "@/components/page-layout/LayoutHero";
import AboutSection from "@/components/page-layout/AboutSection";
import GallerySection from "@/components/page-layout/GallerySection";

import CTA from "@/components/Home/CTASection";

import bedImage from "@/assets/images/beds/hero.jpg";

function Bed() {
    const {
        hero,
        gallery,
    } = bedData;

    return (
        <MainLayout>
            <LayoutHero {...hero} />

            <AboutSection
                tag="Premium Beds"
                title="Designed For"
                italicWord="Better Living"
                description="Our premium beds are thoughtfully designed to combine exceptional comfort, elegant aesthetics, and practical storage solutions. From minimalist platform beds to hydraulic storage beds, every design is customized to suit your bedroom style and everyday lifestyle."

                image={bedImage}

                imageAlt="Premium Wooden Bed"

                points={[
                    "Hydraulic Storage Beds",
                    "King & Queen Size Designs",
                    "Premium Wooden Finishes",
                    "Custom Headboard Designs",
                    "Durable Engineered Construction",
                    "Professional Installation",
                ]}
            />

            <GallerySection {...gallery} />

            <CTA />
        </MainLayout>
    );
}

export default Bed;