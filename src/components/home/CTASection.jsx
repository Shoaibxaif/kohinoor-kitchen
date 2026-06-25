import Container from "@/components/common/Container";
import Button from "@/components/common/Button";

function CTASection() {
    return (
        <section className="bg-[#1a1a18] py-24 lg:py-32">
            <Container>
                <div className="max-w-4xl mx-auto text-center">

                    <p
                        className="
              text-[11px]
              uppercase
              tracking-[0.18em]
              text-[#c8a97a]
              mb-6
            "
                    >
                        Free Consultation
                    </p>

                    <h2
                        className="
              text-white
              text-4xl
              md:text-5xl
              lg:text-6xl
              leading-tight
            "
                        style={{
                            fontFamily: "Playfair Display",
                        }}
                    >
                        Ready To Create
                        <br />
                        Your Dream Kitchen?
                    </h2>

                    <p
                        className="
              mt-8
              text-white/60
              max-w-2xl
              mx-auto
              leading-8
            "
                    >
                        Schedule a free consultation with our design experts
                        and discover a kitchen tailored to your lifestyle,
                        space, and aesthetic preferences.
                    </p>

                    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                        <Button>
                            Get Free Consultation
                        </Button>

                        <Button
                            variant="outline-light"
                            href="tel:+919876543210"
                        >
                            Call Now
                        </Button>
                    </div>

                </div>
            </Container>
        </section>
    );
}

export default CTASection;