import { lazy, Suspense } from "react";
import { Navigate, Routes, Route } from "react-router-dom";

import { ROUTES } from "@/constants/routes";

const Home = lazy(() => import("@/pages/Home"));
const ModularKitchen = lazy(() => import("@/pages/ModularKitchen"));
const LShapedKitchen = lazy(() => import("@/pages/LShapedKitchen"));
const UShapedKitchen = lazy(() => import("@/pages/UShapedKitchen"));
const ParallelKitchen = lazy(() => import("@/pages/ParallelKitchen"));
const IslandKitchen = lazy(() => import("@/pages/IslandKitchen"));
const StraightKitchen = lazy(() => import("@/pages/StraightKitchen"));
const PeninsulaKitchen = lazy(() => import("@/pages/PeninsulaKitchen"));
const ProjectsPage = lazy(() => import("@/pages/Projects"));
const AboutPage = lazy(() => import("@/pages/About"));
const ContactPage = lazy(() => import("@/pages/Contact"));
const Wardrobe = lazy(() => import("@/pages/Wardrobe"));
const Beds = lazy(() => import("@/pages/Bed"));
const Sofa = lazy(() => import("@/pages/Sofa"));
const TVPanels = lazy(() => import("@/pages/TVPanel"));
const DiningFurniture = lazy(() => import("@/pages/DiningFurniture"));


import PageLoader from "@/components/common/PageLoader";

function AppRoutes() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path={ROUTES.MODULAR_KITCHEN}
          element={<ModularKitchen />}
        />

        <Route
          path={ROUTES.L_SHAPED_KITCHEN}
          element={<LShapedKitchen />}
        />

        <Route
          path={ROUTES.U_SHAPED_KITCHEN}
          element={<UShapedKitchen />}
        />

        <Route
          path={ROUTES.PARALLEL_KITCHEN}
          element={<ParallelKitchen />}
        />

        <Route
          path={ROUTES.ISLAND_KITCHEN}
          element={<IslandKitchen />}
        />

        <Route
          path={ROUTES.STRAIGHT_KITCHEN}
          element={<StraightKitchen />}
        />

        <Route
          path={ROUTES.PENINSULA_KITCHEN}
          element={<PeninsulaKitchen />}
        />

        <Route
          path={ROUTES.PROJECTS}
          element={<ProjectsPage />}
        />

        <Route
          path={ROUTES.ABOUT}
          element={<AboutPage />}
        />

        <Route
          path={ROUTES.CONTACT}
          element={<ContactPage />}
        />

        <Route
          path={ROUTES.WARDROBES}
          element={<Wardrobe />}
        />

        <Route
          path={ROUTES.BEDS}
          element={<Beds />}
        />

        <Route
          path={ROUTES.SOFAS}
          element={<Sofa />}
        />

        <Route
          path={ROUTES.TV_PANELS}
          element={<TVPanels />}
        />

        <Route
          path={ROUTES.DINING_FURNITURE}
          element={<DiningFurniture />}
        />
        <Route path="*" element={<Navigate to={ROUTES.HOME} replace />} />
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;
