import MainLayout from "@/layouts/MainLayout";

import { wardrobeData } from "@/data/wardrobe";

import LayoutHero from "@/components/page-layout/LayoutHero";
import GallerySection from "@/components/page-layout/GallerySection";
import AboutSection from "@/components/page-layout/AboutSection";
import wardrobeImage from "@/assets/images/wardrobe/hero.jpg";

import CTA from "@/components/Home/CTASection";

function Wardrobe() {
    const {
        hero,
        gallery,
    } = wardrobeData;

    return (
        <MainLayout>
            <LayoutHero {...hero} />

            <AboutSection
                tag="Premium Wardrobes"
                title="Designed For"
                italicWord="Modern Living"
                description="Our modular wardrobes are thoughtfully crafted to maximize storage while complementing your bedroom interiors. Every wardrobe is customized to match your lifestyle, room dimensions, and preferred finishes."

                image={wardrobeImage}

                imageAlt="Luxury Modular Wardrobe"

                points={[
                    "Sliding & Hinged Wardrobes",
                    "Customized Internal Storage",
                    "Premium Laminates & Acrylic Finishes",
                    "Soft-Close Hardware",
                    "Expert Installation",
                ]}
            />

            <GallerySection {...gallery} />

            <CTA />
        </MainLayout>
    );
}

export default Wardrobe;