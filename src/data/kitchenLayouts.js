import { kitchenImages } from "./kitchenImages";
import {
  Home,
  LayoutGrid,
  Ruler,
  Boxes,
  Workflow,
  IndianRupee,
} from "lucide-react";

export const kitchenLayouts = {
  lShaped: {
    hero: {
      subtitle: "Luxury Modular Kitchens",
      title: "L-Shaped Kitchen",
      description:
        "Elegant L-shaped modular kitchens designed to maximize corner space while delivering a seamless cooking experience.",
      image: kitchenImages.lShaped.hero,
      buttonText: "Get Free Consultation",
      buttonLink: "/contact",
    },

    quickFacts: {
      tag: "Quick Overview",
      title: "Everything At",
      italicWord: "A Glance",

      facts: [
        {
          icon: Home,
          label: "Best For",
          value: "Small to Large Homes",
          description: "Ideal for apartments, villas, and open kitchens.",
        },
        {
          icon: LayoutGrid,
          label: "Layout Type",
          value: "L-Shaped",
          description: "Efficient corner configuration.",
        },
        {
          icon: Ruler,
          label: "Space Required",
          value: "80–150 sq.ft",
          description: "Comfortable working area.",
        },
        {
          icon: Boxes,
          label: "Storage",
          value: "High",
          description: "Maximum cabinet utilization.",
        },
        {
          icon: Workflow,
          label: "Workflow",
          value: "Excellent",
          description: "Optimized work triangle.",
        },
        {
          icon: IndianRupee,
          label: "Starting Price",
          value: "₹2.5 Lakhs*",
          description: "Custom pricing based on requirements.",
        },
      ],
    },
    blueprint: {
      tag: "Kitchen Blueprint",

      title: "Understanding The",

      italicWord: "Layout",

      description:
        "The L-Shaped kitchen follows the classic work triangle, ensuring smooth movement between the sink, hob, and refrigerator while maximizing corner storage.",

      image: kitchenImages.lShaped.blueprint,

      points: [
        {
          title: "Efficient Work Triangle",
          description:
            "Sink, hob, and refrigerator are positioned to reduce unnecessary movement while cooking.",
        },
        {
          title: "Smart Corner Utilization",
          description:
            "Dead corners can be converted into highly functional storage using Magic Corner or Carousel units.",
        },
        {
          title: "Open & Spacious Feel",
          description:
            "The layout naturally creates an open kitchen that connects beautifully with dining or living spaces.",
        },
        {
          title: "Flexible Appliance Placement",
          description:
            "Tall units, refrigerators, ovens, and pantry cabinets can be positioned without interrupting workflow.",
        },
      ],
    },

    intro: {
      tag: "Why L-Shaped",
      title: "Designed For Better",
      italicWord: "Living",
      image: kitchenImages.lShaped.intro,
      description:
        "L-Shaped kitchens combine efficient workflow, intelligent storage, and timeless aesthetics for modern homes.",

      features: [
        "Efficient Work Triangle",
        "Maximum Corner Utilization",
        "Open Layout",
        "Premium Storage",
        "Easy Movement",
        "Future Ready",
      ],
    },

    benefits: {
      tag: "Benefits",
      title: "Why Homeowners",
      italicWord: "Love It",
      description:
        "Designed to maximize functionality without compromising aesthetics.",

      items: [
        {
          title: "Efficient Workflow",
          description:
            "The classic work triangle minimizes movement while cooking.",
        },
        {
          title: "Maximum Storage",
          description:
            "Smart corner cabinets and overhead units maximize every inch.",
        },
        {
          title: "Open & Spacious",
          description:
            "Keeps the kitchen visually open while providing ample workspace.",
        },
        {
          title: "Flexible Layout",
          description: "Perfect for apartments, villas, and open-plan homes.",
        },
        {
          title: "Modern Aesthetics",
          description:
            "A timeless layout that complements contemporary interiors.",
        },
        {
          title: "Future Ready",
          description: "Can easily accommodate an island or breakfast counter.",
        },
      ],
    },

    idealFor: {
      tag: "Perfect For",
      title: "Ideal For",
      italicWord: "Every Home",
      description:
        "A versatile kitchen layout suitable for different lifestyles and home sizes.",

      items: [
        {
          title: "Apartments",
          description: "Ideal for compact urban homes with limited space.",
        },
        {
          title: "Independent Houses",
          description: "Creates an efficient and elegant cooking environment.",
        },
        {
          title: "Open Kitchens",
          description: "Blends seamlessly with dining and living areas.",
        },
        {
          title: "Growing Families",
          description: "Provides comfortable cooking space for daily use.",
        },
      ],
    },

    gallery: {
      tag: "Featured Projects",
      title: "Inspired",
      italicWord: "Spaces",

      projects: [
        {
          title: "Luxury Matte Kitchen",
          location: "Delhi",
          image: kitchenImages.lShaped.gallery1,
        },
        {
          title: "Minimal White Kitchen",
          location: "Noida",
          image: kitchenImages.lShaped.gallery2,
        },
        {
          title: "Premium Wooden Kitchen",
          location: "Gurugram",
          image: kitchenImages.lShaped.gallery3,
        },
        {
          title: "Open Concept Kitchen",
          location: "Faridabad",
          image: kitchenImages.lShaped.gallery4,
        },
      ],
    },
    storage: {
      tag: "Smart Storage",

      title: "Intelligent",

      italicWord: "Solutions",

      description:
        "Every Kohinoor kitchen is equipped with premium storage accessories that maximize space, improve organization, and enhance everyday convenience.",

      items: [
        {
          title: "Magic Corner",
          image: kitchenImages.storage.magicCorner,
          description:
            "Transform blind corner cabinets into fully accessible storage with smooth pull-out shelves.",
        },
        {
          title: "Tall Pantry Unit",
          image: kitchenImages.storage.pantry,
          description:
            "A spacious vertical pantry that keeps groceries, jars, and dry ingredients neatly organized.",
        },
        {
          title: "Bottle Pull-Out",
          image: kitchenImages.storage.bottlePullout,
          description:
            "Store oils, spices, sauces, and condiments in a slim pull-out unit for quick access.",
        },
        {
          title: "Cutlery Organizer",
          image: kitchenImages.storage.cutlery,
          description:
            "Custom drawer organizers keep cutlery and kitchen tools neatly arranged.",
        },
        {
          title: "Soft Close Drawers",
          image: kitchenImages.storage.softClose,
          description:
            "Premium soft-close channels ensure silent, smooth, and long-lasting drawer operation.",
        },
        {
          title: "Carousel Corner Unit",
          image: kitchenImages.storage.carousel,
          description:
            "Rotating shelves provide effortless access to cookware stored deep inside corner cabinets.",
        },
      ],
    },
    faq: {
      tag: "Frequently Asked Questions",
      title: "Everything You Need",
      italicWord: "To Know",

      items: [
        {
          question: "Is an L-Shaped kitchen suitable for small homes?",
          answer:
            "Yes. It efficiently utilizes corner space while maintaining an open and spacious feel.",
        },
        {
          question: "Can I add an island to an L-Shaped kitchen?",
          answer:
            "Absolutely. If there is sufficient floor space, an island enhances both functionality and aesthetics.",
        },
        {
          question: "Which material is best for an L-Shaped modular kitchen?",
          answer:
            "HDHMR and Marine Plywood are excellent choices because of their durability and moisture resistance.",
        },
        {
          question: "How much does an L-Shaped kitchen cost?",
          answer:
            "The final cost depends on size, materials, finishes, hardware, and accessories. We provide customized quotations after consultation.",
        },
      ],
    },
  },
};
