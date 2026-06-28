import {
  MapPin,
  Phone,
  Mail,
  Clock3,
} from "lucide-react";

import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import Button from "@/components/common/Button";

function ContactForm() {
  return (
    <section
      id="contact-form"
      className="bg-[#f7f5f0] py-24 lg:py-32"
    >
      <Container>
        <div className="grid gap-16 lg:grid-cols-[1fr_0.9fr]">
          {/* ================= FORM ================= */}

          <div>
            <SectionHeading
              align="left"
              tag="Free Consultation"
              title="Tell Us About"
              italicWord="Your Project"
            />

            <p className="mt-6 max-w-xl text-[#6b6b66] leading-8">
              Fill out the form below and our design team will contact you to
              schedule a free consultation and discuss your dream kitchen.
            </p>

            <form className="mt-12 space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="border border-[#e8e4dc] bg-white px-5 py-4 outline-none focus:border-[#C8A97A]"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="border border-[#e8e4dc] bg-white px-5 py-4 outline-none focus:border-[#C8A97A]"
                />
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="border border-[#e8e4dc] bg-white px-5 py-4 outline-none focus:border-[#C8A97A]"
                />

                <input
                  type="text"
                  placeholder="City"
                  className="border border-[#e8e4dc] bg-white px-5 py-4 outline-none focus:border-[#C8A97A]"
                />
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <select className="border border-[#e8e4dc] bg-white px-5 py-4 outline-none focus:border-[#C8A97A]">
                  <option>Select Kitchen Layout</option>
                  <option>L-Shaped</option>
                  <option>U-Shaped</option>
                  <option>Parallel</option>
                  <option>Island</option>
                  <option>Straight</option>
                  <option>Peninsula</option>
                </select>

                <select className="border border-[#e8e4dc] bg-white px-5 py-4 outline-none focus:border-[#C8A97A]">
                  <option>Estimated Budget</option>
                  <option>₹2L - ₹4L</option>
                  <option>₹4L - ₹6L</option>
                  <option>₹6L - ₹10L</option>
                  <option>₹10L+</option>
                </select>
              </div>

              <textarea
                rows={6}
                placeholder="Tell us about your requirements..."
                className="w-full border border-[#e8e4dc] bg-white px-5 py-4 outline-none resize-none focus:border-[#C8A97A]"
              />

              <Button variant="primary">
                Book Free Consultation
              </Button>
            </form>
          </div>

          {/* ================= RIGHT ================= */}

          <div>
            {/* Google Map */}

            <div className="overflow-hidden border border-[#e8e4dc] bg-white">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.4023010851697!2d77.3354214!3d28.67761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5e9e1ba4c9%3A0x17296668bdcc9822!2sKohinoor%20Modular%20Kitchen%20-%20Interior%20Designer%2C%20Modular%20Kitchen%2C%20Wardrobe%2C%20and%20Bed%20Manufacturer%20in%20Ghaziabad!5e0!3m2!1sen!2sin!4v1782674839635!5m2!1sen!2sin"
                width="400"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                className="h-[340px] w-full border-0"
              />
            </div>

            {/* Showroom Info */}

            <div className="mt-8 border border-[#e8e4dc] bg-white p-8">
              <h3
                className="text-3xl text-[#1a1a18]"
                style={{
                  fontFamily: "Playfair Display",
                }}
              >
                Visit Our Showroom
              </h3>

              <div className="mt-8 space-y-6">
                <div className="flex gap-4">
                  <MapPin
                    className="mt-1 text-[#C8A97A]"
                    size={20}
                  />

                  <div>
                    <h4 className="font-medium text-[#1a1a18]">
                      Address
                    </h4>

                    <p className="mt-1 text-[#6b6b66] leading-7">
                      Your Showroom Address,
                      <br />
                      Jaipur, Rajasthan
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone
                    className="mt-1 text-[#C8A97A]"
                    size={20}
                  />

                  <div>
                    <h4 className="font-medium text-[#1a1a18]">
                      Phone
                    </h4>

                    <p className="mt-1 text-[#6b6b66]">
                      +91 XXXXX XXXXX
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Mail
                    className="mt-1 text-[#C8A97A]"
                    size={20}
                  />

                  <div>
                    <h4 className="font-medium text-[#1a1a18]">
                      Email
                    </h4>

                    <p className="mt-1 text-[#6b6b66]">
                      hello@kohinoorkitchens.com
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock3
                    className="mt-1 text-[#C8A97A]"
                    size={20}
                  />

                  <div>
                    <h4 className="font-medium text-[#1a1a18]">
                      Working Hours
                    </h4>

                    <p className="mt-1 text-[#6b6b66]">
                      Monday – Saturday
                      <br />
                      10:00 AM – 7:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visit Card */}

            <div className="mt-8 bg-[#1a1a18] p-8 text-white">
              <p className="text-xs uppercase tracking-[0.2em] text-[#C8A97A]">
                Why Visit Us?
              </p>

              <h3
                className="mt-4 text-3xl"
                style={{
                  fontFamily: "Playfair Display",
                }}
              >
                Experience Before
                <br />
                You Decide
              </h3>

              <p className="mt-6 leading-8 text-white/80">
                Explore real kitchen displays, compare materials and finishes,
                test premium accessories, and receive expert guidance from our
                designers before making your decision.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ContactForm;