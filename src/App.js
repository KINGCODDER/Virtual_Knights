
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Events from "./components/Events";
import HomePage from "./homePage";

import './App.css';
import Contact from './components/Contact';
import Events from './components/Events';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </Router>
    <Events />
    <Contact />
    </>
  );
}

export default App;
