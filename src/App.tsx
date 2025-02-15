import { Routes, Route } from "react-router-dom";
import BodyPartHome from "./components/body-part-home";
import HireMe from "./components/hireMe";
import "./App.css";
import Menu from "./components/menu";
import AboutMe from "./components/aboutMe";
import Projects from "./components/projects";
import Products from "./components/products";
function App() {
  return (
    <div className="main-container">
      <Menu />
      <Routes>
        <Route path="/" element={<BodyPartHome />} />
        <Route path="/hireMe" element={<HireMe />} />
        <Route path="/aboutMe" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
