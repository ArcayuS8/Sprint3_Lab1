//Aqui proporciono la estructura general para las paginas de mi ecommerce,
//esta incluye el header, el banner y el footer, ya que deberian de aparecer en todas las paginas

import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";
import Banner from "../../components/Banner.jsx";
import { useTheme } from "../../hooks/useTheme.jsx";
import { Outlet } from "react-router";

function Layout() {
  const { darkMode } = useTheme();

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <Header />
      <Banner />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
