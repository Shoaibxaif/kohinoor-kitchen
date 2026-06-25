import PageHero from "@/components/common/PageHero";
import heroImage from "@/assets/images/hero-kitchen.jpg";
import MainLayout from "@/layouts/MainLayout";


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
        </MainLayout>
    );
}

export default ModularKitchen;