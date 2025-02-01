import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Skills from "./pages/skills";
import Header from "./components/header";
import Footer from "./components/footer";
import Contact from "./pages/contact";
import MyPortfolio from "./pages/portfolio/project-pages/portfolio";
import AdminDashboard from "./pages/portfolio/project-pages/dashboard";
import ReduxToolKit from "./pages/portfolio/project-pages/redux-toolkit";
import TwitterClone from "./pages/portfolio/project-pages/twitter-clone";
import StudyCase from "./pages/portfolio/project-pages/study-case";
import WeaterApp from "./pages/portfolio/project-pages/weater-app";

import Portfolio from "./pages/portfolio";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/my-portfolio" element={<MyPortfolio />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/redux-toolkit" element={<ReduxToolKit />} />
        <Route path="/twitter-clone" element={<TwitterClone />} />
        <Route path="/study-case" element={<StudyCase />} />
        <Route path="/weather-app" element={<WeaterApp />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
