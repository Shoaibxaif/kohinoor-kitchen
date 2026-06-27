import { Routes, Route } from "react-router-dom";
import { ROUTES } from "@/constants/routes"
import Home from "@/pages/Home";
import ModularKitchen from "@/pages/ModularKitchen";
import LShapedKitchen from "@/pages/LShapedKitchen";
import UShapedKitchen from "@/pages/UShapedKitchen";
import ParallelKitchen from "@/pages/ParallelKitchen";


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path={ROUTES.MODULAR_KITCHEN} element={<ModularKitchen />} />
      <Route path={ROUTES.L_SHAPED_KITCHEN} element={<LShapedKitchen />} />
      <Route path={ROUTES.U_SHAPED_KITCHEN} element={<UShapedKitchen />} />
      <Route path={ROUTES.PARALLEL_KITCHEN} element={<ParallelKitchen />} />
    </Routes>
  );
}

export default AppRoutes;