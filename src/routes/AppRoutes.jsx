import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import { ROUTES } from "@/constants/routes";

import Home from "@/pages/Home";
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
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;