import { Route, Routes } from "react-router-dom";
import { SideBar } from "./components/sidebar/sidebar";
import { Countries } from "./pages/countries/countries";
import { useState } from "react";
import navbarIcon from "../public/navbar.svg";
import { AsiaPage } from "./pages/asia/asia";
import { AmericaPage } from "./pages/america/page";

function App() {
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen(!open);
  }
  return (
    <section className="container bg-blue-150 w-full sm:max-w-full xl:flex">
      <div className="fixed top-0 w-full p-1 z-40 bg-black/750 bg-gray-500/50 backdrop-blur-2xl xl:hidden">
        <img onClick={handleOpen} className="w-12" src={navbarIcon} alt="" />
      </div>
      <SideBar open={open} handleOpen={handleOpen} />
      <div className="pt-12 w-full xl:pt-0">
        <Routes>
          <Route path="/" element={<Countries />} />
          <Route path="/countries" element={<Countries />} />
          <Route path="/asia" element={<AsiaPage />} />
          <Route path="/america" element={<AmericaPage />} />
          <Route path="/europe" element={<AsiaPage />} />
          <Route path="/africa" element={<AsiaPage />} />
          <Route path="/oceania" element={<AsiaPage />} />
          <Route path="*" element={<Countries />} />
        </Routes>
      </div>
    </section>
  );
}

export default App;
