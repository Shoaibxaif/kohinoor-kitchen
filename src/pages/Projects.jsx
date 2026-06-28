import MainLayout from "@/layouts/MainLayout";
import HeroSection from "@/components/projects/ProjectsHero";
import ProjectFilters from "@/components/projects/ProjectFilters";
import { useState } from "react";
import { projects } from "@/data/projects";
import ProjectGrid from "@/components/projects/ProjectGrid";
import ProjectStats from "@/components/projects/ProjectStats";
import ProcessTimeline from "@/components/projects/ProcessTimeline";
import Testimonials from "@/components/projects/Testimonials";
import ProjectFAQ from "@/components/projects/ProjectFAQ";
import CTA from "@/components/Home/CTASection";


function ProjectsPage() {
    const [activeFilter, setActiveFilter] = useState("All");

  return (
    <MainLayout>

      <HeroSection />

      <ProjectFilters
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />

      <ProjectGrid
        projects={projects}
        activeFilter={activeFilter}
      />
      <ProjectStats />
      <ProcessTimeline />
      <Testimonials />
      <ProjectFAQ />
      <CTA />
    </MainLayout>
  );
}

export default ProjectsPage;