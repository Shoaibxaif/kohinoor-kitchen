import MainLayout from "@/layouts/MainLayout";
import HeroSection from "@/components/contact/ContactHero";
import ContactOptions from "@/components/contact/ContactOptions";
import ContactForm from "@/components/contact/ContactForm";
import FAQ from "@/components/projects/ProjectFAQ";
import CTA from "@/components/Home/CTASection";


function ContactPage() {

  return (
    <MainLayout>
    <HeroSection />
    <ContactOptions />
    <ContactForm />

    <FAQ />
    <CTA />
    </MainLayout>
  );
}

export default ContactPage;