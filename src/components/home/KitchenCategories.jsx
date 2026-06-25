import SectionHeading from "@/components/common/SectionHeading";
import Container from "@/components/common/Container";
import img1 from "@/assets/images/kitchens/kitchen-1.jpg";

const kitchens = [
    {
        title: "L-Shaped Kitchen",
        image: img1,
    },
    {
        title: "U-Shaped Kitchen",
        image: img1,
    },
    {
        title: "Parallel Kitchen",
        image: img1,
    },
    {
        title: "Island Kitchen",
        image: img1,
    },
    {
        title: "Open Kitchen",
        image: img1,
    },
    {
        title: "Straight Kitchen",
        image: img1,
    },
];

function KitchenCategories() {
    return (
        <section className="py-24">
            <Container>
                <SectionHeading
                    tag="Kitchen Collection"
                    title="Explore Kitchen"
                    italicWord="Styles"
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                    {kitchens.map((kitchen) => (
                        <article
                            key={kitchen.title}
                            className="group cursor-pointer"
                        >
                            <div className="overflow-hidden">
                                <img
                                    src={kitchen.image}
                                    alt={kitchen.title}
                                    className="
                    h-[380px]
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                                />
                            </div>

                            <div className="pt-5">
                                <h3
                                    className="text-2xl text-[#1a1a18]"
                                    style={{
                                        fontFamily: "Playfair Display",
                                    }}
                                >
                                    {kitchen.title}
                                </h3>
                            </div>
                        </article>
                    ))}
                </div>
            </Container>
        </section>
    );
}

export default KitchenCategories;