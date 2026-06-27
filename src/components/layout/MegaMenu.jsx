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
      <div className="w-[650px] bg-white border border-[#e8e4dc] shadow-2xl">
        <div className="h-[2px] bg-[#C8A97A]" />

        <div className="grid grid-cols-2">
          {/* Left */}

          <div className="p-8 border-r border-[#e8e4dc]">
            <p className="text-xs uppercase tracking-[0.18em] text-[#C8A97A] mb-6">
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
                    hover:text-[#1a1a18]
                    transition-colors
                  "
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Right */}

          <div className="p-8 flex flex-col">
            <p className="text-xs uppercase tracking-[0.18em] text-[#C8A97A] mb-6">
              Why Kohinoor
            </p>

            <div className="space-y-4 text-[#6b6b66]">
              <p>✓ Premium Materials</p>

              <p>✓ German Hardware</p>

              <p>✓ Factory Finished Precision</p>

              <p>✓ Expert Installation</p>

              <p>✓ Dedicated After Sales Support</p>
            </div>

            <NavLink
              to={ROUTES.MODULAR_KITCHEN}
              className="
                mt-auto
                inline-flex
                items-center
                gap-2
                pt-8
                uppercase
                tracking-[0.15em]
                text-sm
                text-[#C8A97A]
                hover:gap-3
                transition-all
              "
            >
              View All Kitchens
              <ArrowRight size={18} />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MegaMenu;
