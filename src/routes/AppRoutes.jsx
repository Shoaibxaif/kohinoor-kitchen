import { Routes, Route } from "react-router-dom";
import { ROUTES } from "@/constants/routes"
import Home from "@/pages/Home";
import ModularKitchen from "@/pages/ModularKitchen";
import LShapedKitchen from "@/pages/LShapedKitchen";


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path={ROUTES.MODULAR_KITCHEN} element={<ModularKitchen />} />
      <Route path={ROUTES.L_SHAPED_KITCHEN} element={<LShapedKitchen />} />
    </Routes>
  );
}

export default AppRoutes;