import AppRoutes from "@/routes/AppRoutes";
import ScrollToTop from "@/components/common/ScrollToTop";
import PageMeta from "@/components/common/PageMeta";


function App() {
  return (
    <>
      <ScrollToTop />
      <PageMeta />
      <AppRoutes />
    </>
  );
}

export default App;
