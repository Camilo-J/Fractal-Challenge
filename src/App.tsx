import "./App.css";
import { Route, Routes } from "react-router-dom";
import { SideBar } from "./components/sidebar/sidebar";
import { Countries } from "./pages/countries/countries";
import { useState } from "react";
import navbarIcon from "../public/navbar.svg";

function App() {
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen(!open);
  }
  return (
    <section className="container">
      <img
        onClick={handleOpen}
        className="navbarIcon"
        src={navbarIcon}
        alt=""
      />
      <SideBar open={open} />
      <div className="container__pages">
        <Routes>
          <Route path="/countries" element={<Countries />} />
          <Route path="/" element={<Countries />} />
          <Route path="*" element={<Countries />} />
        </Routes>
      </div>
    </section>
  );
}

export default App;
