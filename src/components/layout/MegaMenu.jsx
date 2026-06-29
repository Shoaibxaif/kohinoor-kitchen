import { NavLink } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import { ROUTES } from "@/constants/routes";

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

const services = [
  {
    label: "Modular Kitchens",
    path: ROUTES.MODULAR_KITCHEN,
  },
  {
    label: "Wardrobes",
    path: "#",
  },
  {
    label: "Beds",
    path: "#",
  },
  {
    label: "Sofas",
    path: "#",
  },
  {
    label: "TV Panels",
    path: "#",
  },
  {
    label: "Chairs",
    path: "#",
  },
];

function MegaMenu() {
  return (
    <div
      className="
      absolute
      left-1/2
      top-full
      -translate-x-1/2
      pt-5
      opacity-0
      invisible
      translate-y-3
      group-hover:opacity-100
      group-hover:visible
      group-hover:translate-y-0
      transition-all
      duration-300
      z-50
    "
    >
      <div className="w-[920px] bg-white border border-[#e8e4dc] shadow-2xl">
        <div className="h-[2px] bg-[#C8A97A]" />

        <div className="grid grid-cols-3">
          {/* Left */}

          <div className="p-8 border-r border-[#e8e4dc] flex flex-col">
            <p className="mb-6 text-xs uppercase tracking-[0.18em] text-[#C8A97A]">
              Kitchen Layouts
            </p>

            <div className="space-y-4">
              {kitchenLinks.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className="
          block
          text-[#4a4a46]
          transition-colors
          hover:text-[#C8A97A]
        "
                >
                  {item.label}
                </NavLink>
              ))}
            </div>

            <NavLink
              to={ROUTES.MODULAR_KITCHEN}
              className="
      mt-8
      inline-flex
      items-center
      gap-2
      text-sm
      uppercase
      tracking-[0.15em]
      text-[#C8A97A]
      transition-all
      hover:gap-3
    "
            >
              View All Kitchens
              <ArrowRight size={18} />
            </NavLink>
          </div>

          <div className="p-8 border-r border-[#e8e4dc]">
            <p className="mb-6 text-xs uppercase tracking-[0.18em] text-[#C8A97A]">
              Our Services
            </p>

            <div className="space-y-4">
              {services.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.path}
                  className="
          block
          text-[#4a4a46]
          transition-colors
          hover:text-[#C8A97A]
        "
                >
                  {item.label}
                </NavLink>
              ))}
            </div>

            <NavLink
              to={ROUTES.CONTACT}
              className="
      mt-8
      inline-flex
      items-center
      gap-2
      text-sm
      uppercase
      tracking-[0.15em]
      text-[#C8A97A]
      transition-all
      hover:gap-3
    "
            >
              Get Quote
              <ArrowRight size={18} />
            </NavLink>
          </div>

          {/* Right */}

          <div className="p-8 flex flex-col">
            <p className="mb-6 text-xs uppercase tracking-[0.18em] text-[#C8A97A]">
              Why Kohinoor
            </p>

            <div className="space-y-4 text-[#6b6b66]">
              <p>✓ 20+ Years Experience</p>

              <p>✓ Factory Manufactured</p>

              <p>✓ Premium Materials</p>

              <p>✓ German Hardware</p>

              <p>✓ Expert Installation</p>

              <p>✓ After-Sales Support</p>
            </div>

            <NavLink
              to={ROUTES.ABOUT}
              className="
              mt-8
      inline-flex
      items-center
      gap-2
      text-sm
      uppercase
      tracking-[0.15em]
      text-[#C8A97A]
      transition-all
      hover:gap-3
    "
            >
              About Us
              <ArrowRight size={18} />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MegaMenu;
