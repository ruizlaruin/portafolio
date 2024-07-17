import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import GlobalContextProvider from "../../context/GlobalContext";

function PaginaBase() {
  return (
    <main>
      <GlobalContextProvider>
        <Navbar />
        <Outlet />
        <Footer />
      </GlobalContextProvider>
    </main>
  );
}

export default PaginaBase;
