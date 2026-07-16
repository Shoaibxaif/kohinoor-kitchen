import Button from "@/components/common/Button";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";

function IntroSection({
  tag,
  title,
  italicWord,
  description,
  image,
  features = [],
}) {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <Container>
        <SectionHeading tag={tag} title={title} italicWord={italicWord} />

        {/* Image */}
        <div className="mt-16 overflow-hidden rounded-sm">
          <img
            src={image}
            alt={title}
            className="
              w-full
              h-[550px]
              object-cover
            "
          />
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto mt-16 text-center">
          <p
            className="
              text-[#6b6b66]
              leading-8
              text-lg
            "
          >
            {description}
          </p>

          {/* Features */}

          <div className="grid md:grid-cols-2 gap-5 mt-12 text-left">
            {features.map((item) => (
              <div
                key={item}
                className="
                  flex
                  items-center
                  gap-4
                "
              >
                <span
                  className="
                    w-2
                    h-2
                    rounded-full
                    bg-[#C8A97A]
                  "
                />

                <p className="text-[#4a4a46]">{item}</p>
              </div>
            ))}
          </div>

          <Button variant="accent" className="mt-12">
            Get Free Consultation
          </Button>
        </div>
      </Container>
    </section>
  );
}

export default IntroSection;
