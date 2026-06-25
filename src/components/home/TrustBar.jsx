import Container from "@/components/common/Container";

const trustItems = [
    {
        value: "500+",
        label: "Projects Delivered",
    },
    {
        value: "10+",
        label: "Years Experience",
    },
    {
        value: "5 Years",
        label: "Warranty",
    },
    {
        value: "100%",
        label: "Custom Design",
    },
];

function TrustBar() {
    return (
        <section className="border-y border-[#e8e4dc] bg-white">
            <Container>
                <div className="grid grid-cols-2 lg:grid-cols-4">
                    {trustItems.map((item) => (
                        <div
                            key={item.label}
                            className="
                py-8
                text-center
                border-r border-[#e8e4dc]
                last:border-r-0
              "
                        >
                            <h3
                                className="text-3xl text-[#1a1a18]"
                                style={{ fontFamily: "Playfair Display" }}
                            >
                                {item.value}
                            </h3>

                            <p className="mt-2 text-sm text-[#9a9a92]">
                                {item.label}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}

export default TrustBar;