import SectionHeading from "@/components/common/SectionHeading";
import Container from "@/components/common/Container";
import img1 from "@/assets/images/layouts/l-shaped/gallery-1.jpg";
import img2 from "@/assets/images/layouts/u-shaped/gallery-1.png";
import img3 from "@/assets/images/layouts/parallel/gallery-1.png";
import img4 from "@/assets/images/layouts/island/gallery-1.png";
import img5 from "@/assets/images/layouts/peninsula/gallery-1.png";
import img6 from "@/assets/images/layouts/straight/gallery-1.png";



const kitchens = [
    {
        title: "L-Shaped Kitchen",
        image: img1,
    },
    {
        title: "U-Shaped Kitchen",
        image: img2,
    },
    {
        title: "Parallel Kitchen",
        image: img3,
    },
    {
        title: "Island Kitchen",
        image: img4,
    },
    {
        title: "Peninsula Kitchen",
        image: img5,
    },
    {
        title: "Straight Kitchen",
        image: img6,
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