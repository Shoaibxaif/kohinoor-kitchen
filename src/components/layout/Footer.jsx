import { NavLink } from "react-router-dom";

import Container from "@/components/common/Container";
import { ROUTES } from "@/constants/routes";
import { SITE } from "@/constants/siteConfig";

const links = [
    {
        label: "Home",
        path: ROUTES.HOME,
    },
    {
        label: "Kitchens",
        path: ROUTES.KITCHENS,
    },
    {
        label: "Projects",
        path: ROUTES.GALLERY,
    },
    {
        label: "About",
        path: ROUTES.ABOUT,
    },
    {
        label: "Contact",
        path: ROUTES.CONTACT,
    },
];

function Footer() {
    return (<footer className="bg-[#f7f5f0] border-t border-[#e8e4dc]"> <Container> <div className="py-20">

        <div className="grid lg:grid-cols-[2fr_1fr_1fr] gap-16">

            {/* Brand */}
            <div>
                <h2
                    className="text-4xl text-[#1a1a18]"
                    style={{
                        fontFamily: "Playfair Display",
                    }}
                >
                    KOHINOOR
                </h2>

                <p
                    className="
              mt-6
              max-w-md
              text-[#6b6b66]
              leading-8
            "
                >
                    Crafting premium modular kitchens for modern homes
                    across Delhi NCR with thoughtful design, premium
                    materials, and expert craftsmanship.
                </p>
            </div>

            {/* Navigation */}
            <div>
                <h3
                    className="
              text-xs
              uppercase
              tracking-[0.18em]
              text-[#c8a97a]
              mb-6
            "
                >
                    Navigation
                </h3>

                <ul className="space-y-4">
                    {links.map((link) => (
                        <li key={link.path}>
                            <NavLink
                                to={link.path}
                                className="
                    text-[#6b6b66]
                    hover:text-[#1a1a18]
                    transition-colors
                  "
                            >
                                {link.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Contact */}
            <div>
                <h3
                    className="
              text-xs
              uppercase
              tracking-[0.18em]
              text-[#c8a97a]
              mb-6
            "
                >
                    Contact
                </h3>

                <div className="space-y-4 text-[#6b6b66]">
                    <p>{SITE.phone}</p>
                    <p>{SITE.email}</p>
                    <p>Delhi NCR</p>

                    <div className="pt-4">
                        <p>Mon – Sat</p>
                        <p>10:00 AM – 7:00 PM</p>
                    </div>
                </div>
            </div>

        </div>

        <div
            className="
          mt-16
          pt-8
          border-t
          border-[#e8e4dc]
          flex
          flex-col
          md:flex-row
          justify-between
          gap-4
        "
        >
            <p className="text-[#9a9a92] text-sm">
                © 2026 Kohinoor Kitchens. All rights reserved.
            </p>

            <p className="text-[#9a9a92] text-sm">
                Designed by{" "}
                <a
                    href="https://www.linkedin.com/in/mohammad-shoaib-0a8298223/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
      text-[#6b6b66]
      hover:text-[#1a1a18]
      underline-offset-4
      hover:underline
      transition-all
    "
                >
                    Mohammad Shoaib
                </a>
            </p>
        </div>

    </div>
    </Container>
    </footer>

    );
}

export default Footer;
