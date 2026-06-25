import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

import Container from "@/components/common/Container";
import { ROUTES } from "@/constants/routes";
import { SITE } from "@/constants/siteConfig";

const navLinks = [
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

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#e8e4dc]">
      <Container>
        <nav className="h-20 flex items-center justify-between">
          
          {/* Logo */}
          <NavLink
            to={ROUTES.HOME}
            className="font-serif text-2xl font-medium tracking-wide text-[#1a1a18]"
            style={{ fontFamily: "Playfair Display" }}
          >
            Kohinoor
          </NavLink>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `
                    text-sm
                    uppercase
                    tracking-[0.15em]
                    transition-colors
                    ${
                      isActive
                        ? "text-[#1a1a18]"
                        : "text-[#4a4a46] hover:text-[#1a1a18]"
                    }
                  `
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            
            {/* Desktop Phone */}
            <a
              href={`tel:${SITE.phone}`}
              className="hidden lg:block text-sm tracking-wider text-[#1a1a18] font-medium"
            >
              {SITE.phone}
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-[#1a1a18]"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden border-t border-[#e8e4dc] bg-white">
            <div className="py-4 flex flex-col">

              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `
                    px-2
                    py-4
                    text-sm
                    uppercase
                    tracking-[0.15em]
                    transition-colors
                    ${
                      isActive
                        ? "text-[#1a1a18]"
                        : "text-[#4a4a46]"
                    }
                  `
                  }
                >
                  {link.label}
                </NavLink>
              ))}

              <div className="mt-4 pt-4 border-t border-[#e8e4dc]">
                <a
                  href={`tel:${SITE.phone}`}
                  className="px-2 text-[#1a1a18] font-medium"
                >
                  {SITE.phone}
                </a>
              </div>

            </div>
          </div>
        )}
      </Container>
    </header>
  );
}

export default Navbar;