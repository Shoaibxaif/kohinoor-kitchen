import PageHero from "@/components/common/PageHero";
import heroImage from "@/assets/images/hero-kitchen.jpg";
import MainLayout from "@/layouts/MainLayout";
import WhyKohinoor from "@/components/modular-kitchen/WhyKohinoor";
import KitchenLayouts from "@/components/modular-kitchen/KitchenLayouts";
import MaterialOptions from "@/components/modular-kitchen/MaterialOptions";
import Accessories from "@/components/modular-kitchen/Accessories";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/modular-kitchen/FAQ";
import CTASection from "@/components/home/CTASection";

function ModularKitchen() {
  return (
    <MainLayout>
      <PageHero
        tag="Modular Kitchens"
        title="Luxury Modular Kitchens"
        description="Designed for modern homes with premium materials, intelligent storage, and timeless aesthetics."
        image={heroImage}
        primaryAction={{
          label: "Get Free Consultation",
          onClick: () => console.log("CTA"),
        }}
        secondaryAction={{
          label: "View Projects",
          onClick: () => console.log("Projects"),
        }}
      />
      <WhyKohinoor />
      <KitchenLayouts />
      <MaterialOptions />
      <Accessories />
      <FeaturedProjects />
      <Testimonials />
      <FAQ />
      <CTASection />
    </MainLayout>
  );
}

export default ModularKitchen;
