import MainLayout from "@/layouts/MainLayout";
import HeroSection from "@/components/about/AboutHero";
import CTA from "@/components/Home/CTASection";
import OurStory from "@/components/about/OurStory";
import CoreValues from "@/components/about/CoreValues";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import Expertise from "@/components/about/Expertise";
import ProcessTimeline from "@/components/projects/ProcessTimeline";
import QualityPromise from "@/components/about/QualityPromise";
import Stats from "@/components/projects/ProjectStats";
import FAQ from "@/components/projects/ProjectFAQ";

function AboutPage() {

  return (
    <MainLayout>
    <HeroSection />
    <OurStory />
    <CoreValues />
    <WhyChooseUs />
    <Expertise />
    <ProcessTimeline />
    <QualityPromise />
    <Stats />
    <FAQ />
    <CTA />
    </MainLayout>
  );
}

export default AboutPage;