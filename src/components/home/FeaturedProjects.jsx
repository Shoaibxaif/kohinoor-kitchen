import { ArrowRight } from "lucide-react";

import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";

import project1 from "@/assets/images/projects/project-1.jpg";

const projects = [
    {
        title: "Contemporary Residence",
        location: "South Delhi",
        type: "L-Shaped Kitchen",
        image: project1,
    },
    {
        title: "Luxury Apartment",
        location: "Gurgaon",
        type: "Island Kitchen",
        image: project1,
    },
    {
        title: "Modern Family Home",
        location: "Noida",
        type: "Parallel Kitchen",
        image: project1,
    },
];

function FeaturedProjects() {
    return (
        <section className="py-24 lg:py-32 bg-white">
            <Container>
                {/* Heading */}
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                    <SectionHeading
                        tag="Featured Projects"
                        title="Spaces We've"
                        italicWord="Crafted"
                    />

                    <button
                        className="
              flex items-center gap-2
              text-sm
              uppercase
              tracking-[0.15em]
              text-[#1a1a18]
            "
                    >
                        View All Projects
                        <ArrowRight size={16} />
                    </button>
                </div>

                {/* Projects */}
                <div className="grid lg:grid-cols-3 gap-8 mt-16">
                    {projects.map((project) => (
                        <article
                            key={project.title}
                            className="group cursor-pointer"
                        >
                            {/* Image */}
                            <div className="overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="
                    w-full
                    h-[450px]
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                                />
                            </div>

                            {/* Content */}
                            <div className="pt-6">
                                <p
                                    className="
                    text-xs
                    uppercase
                    tracking-[0.18em]
                    text-[#c8a97a]
                  "
                                >
                                    {project.location}
                                </p>

                                <h3
                                    className="
                    mt-3
                    text-2xl
                    text-[#1a1a18]
                  "
                                    style={{
                                        fontFamily: "Playfair Display",
                                    }}
                                >
                                    {project.title}
                                </h3>

                                <div className="flex items-center justify-between mt-5">
                                    <span className="text-[#4a4a46]">
                                        {project.type}
                                    </span>

                                    <ArrowRight
                                        size={18}
                                        className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                                    />
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </Container>
        </section>
    );
}

export default FeaturedProjects;