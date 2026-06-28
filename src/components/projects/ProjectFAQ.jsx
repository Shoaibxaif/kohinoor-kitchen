import FAQSection from "@/components/kitchen-layout/FAQSection";
import { projectFaq } from "@/data/projectFaq";

function ProjectFAQ() {
  return (
    <FAQSection
      {...projectFaq}
      faqs={projectFaq.items}
    />
  );
}

export default ProjectFAQ;