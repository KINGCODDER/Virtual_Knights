// import { ReactComponent as WorldSVG } from "./images/world.svg";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./homePage/homePage";
import LoginPage from "./login/loginPage";
import PortFolio from "./portfolio/portfolio";
import Signup from "./signup/signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/portfolio" element={<PortFolio />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
function NotFound() {
  return <div>Not found</div>;
}

export default App;
