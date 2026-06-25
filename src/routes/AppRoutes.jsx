import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import ModularKitchen from "@/pages/ModularKitchen";
import { ROUTES } from "@/constants/routes"


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path={ROUTES.MODULAR_KITCHEN}
        element={<ModularKitchen />}
      />
    </Routes>
  );
}

export default AppRoutes;