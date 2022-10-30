import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Events from "./components/Events";
import HomePage from "./homePage";
import NavBar from "./components/navBar/navBar";
import Contact from "./components/Contact";
import LastBlackpart from "./components/lastBlackPart/lastBlackPart";
import "./App.css";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
        <LastBlackpart />
      </Router>
    </>
  );
}

export default App;
