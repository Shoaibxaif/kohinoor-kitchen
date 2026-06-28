import { Routes, Route } from "react-router-dom";
import { ROUTES } from "@/constants/routes"
import Home from "@/pages/Home";
import ModularKitchen from "@/pages/ModularKitchen";
import LShapedKitchen from "@/pages/LShapedKitchen";
import UShapedKitchen from "@/pages/UShapedKitchen";
import ParallelKitchen from "@/pages/ParallelKitchen";
import IslandKitchen from "@/pages/IslandKitchen";
import StraightKitchen from "@/pages/StraightKitchen";
import PeninsulaKitchen from "@/pages/PeninsulaKitchen";
import ProjectsPage from "@/pages/Projects";
import AboutPage from "@/pages/About";
import ContactPage from "@/pages/Contact";


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path={ROUTES.MODULAR_KITCHEN} element={<ModularKitchen />} />
      <Route path={ROUTES.L_SHAPED_KITCHEN} element={<LShapedKitchen />} />
      <Route path={ROUTES.U_SHAPED_KITCHEN} element={<UShapedKitchen />} />
      <Route path={ROUTES.PARALLEL_KITCHEN} element={<ParallelKitchen />} />
      <Route path={ROUTES.ISLAND_KITCHEN} element={<IslandKitchen />} />
      <Route path={ROUTES.STRAIGHT_KITCHEN} element={<StraightKitchen />} />
      <Route path={ROUTES.PENINSULA_KITCHEN} element={<PeninsulaKitchen />} />
      <Route path={ROUTES.PROJECTS} element={<ProjectsPage />} />
      <Route path={ROUTES.ABOUT} element={<AboutPage />} />
      <Route path={ROUTES.CONTACT} element={<ContactPage />} />
    </Routes>
  );
}

export default AppRoutes;