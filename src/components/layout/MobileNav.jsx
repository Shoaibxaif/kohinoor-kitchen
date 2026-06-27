import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ChevronDown } from "lucide-react";

import { ROUTES } from "@/constants/routes";
import { SITE } from "@/constants/siteConfig";

const kitchenLinks = [
  {
    label: "Modular Kitchen",
    path: ROUTES.MODULAR_KITCHEN,
  },
  {
    label: "L-Shaped Kitchen",
    path: ROUTES.L_SHAPED_KITCHEN,
  },
  {
    label: "U-Shaped Kitchen",
    path: ROUTES.U_SHAPED_KITCHEN,
  },
  {
    label: "Parallel Kitchen",
    path: ROUTES.PARALLEL_KITCHEN,
  },
  {
    label: "Island Kitchen",
    path: ROUTES.ISLAND_KITCHEN,
  },
  {
    label: "Straight Kitchen",
    path: ROUTES.STRAIGHT_KITCHEN,
  },
  {
    label: "Peninsula Kitchen",
    path: ROUTES.PENINSULA_KITCHEN,
  },
];

const navLinks = [
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

function MobileNav({ isOpen, setIsOpen }) {
  const [openKitchen, setOpenKitchen] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="lg:hidden border-t border-[#e8e4dc] bg-white">
      <div className="py-6">
        {/* Home */}

        <NavLink
          to={ROUTES.HOME}
          onClick={() => setIsOpen(false)}
          className={({ isActive }) =>
            `
              block
              px-6
              py-4
              uppercase
              tracking-[0.15em]
              text-sm
              ${isActive ? "text-[#1a1a18]" : "text-[#4a4a46]"}
            `
          }
        >
          Home
        </NavLink>

        {/* Kitchen Accordion */}

        <button
          onClick={() => setOpenKitchen(!openKitchen)}
          className="
            w-full
            flex
            justify-between
            items-center
            px-6
            py-4
            uppercase
            tracking-[0.15em]
            text-sm
            text-[#4a4a46]
          "
        >
          Modular Kitchens
          <ChevronDown
            size={18}
            className={`
              transition-transform
              duration-300
              ${openKitchen ? "rotate-180" : ""}
            `}
          />
        </button>

        <div
          className={`
            overflow-hidden
            transition-all
            duration-300
            ${openKitchen ? "max-h-[500px]" : "max-h-0"}
          `}
        >
          <div className="pl-10 pb-2">
            {kitchenLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `
                    block
                    py-3
                    text-sm
                    ${isActive ? "text-[#1a1a18]" : "text-[#6b6b66]"}
                  `
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>

        {/* Remaining Links */}

        {navLinks.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `
                block
                px-6
                py-4
                uppercase
                tracking-[0.15em]
                text-sm
                ${isActive ? "text-[#1a1a18]" : "text-[#4a4a46]"}
              `
            }
          >
            {item.label}
          </NavLink>
        ))}

        {/* Phone */}

        <div className="mt-6 border-t border-[#e8e4dc] pt-6 px-6">
          <a
            href={`tel:${SITE.phone}`}
            className="
              font-medium
              text-[#1a1a18]
            "
          >
            {SITE.phone}
          </a>
        </div>
      </div>
    </div>
  );
}

export default MobileNav;
