import { Outlet } from "react-router";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

function Layout() {
  return (
    <div
      className="
     min-h-screen bg-linear-to-br from-sky-50 via-blue-50 to-cyan-50
      dark:from-slate-900 dark:via-blue-950 dark:to-slate-900"
    >
      <div className="container mx-auto px-4">
        <Navbar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
