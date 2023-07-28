import "./App.css";
import { Route, Routes } from "react-router-dom";
import { SideBar } from "./components/sidebar/sidebar";
import { Countries } from "./pages/countries/countries";

function App() {
  return (
    <section className="container">
      <SideBar />
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
