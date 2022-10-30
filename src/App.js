import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Events from "./components/Events";
import HomePage from "./homePage";
import NavBar from "./components/navBar/navBar";
import Contact from "./components/Contact";
import LastBlackpart from "./components/lastBlackPart/lastBlackPart";
import "./App.css";
import AboutUs from "./components/AboutUs";
import { AnimatePresence } from "framer-motion"
function App() {
  const location = useLocation();

  return (
    <>
        <NavBar />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname} >
          <Route exact path="/" element={<HomePage />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
        <LastBlackpart />
        </AnimatePresence>
    </>
  );
}

export default App;
