import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Events from "./components/Events";
import HomePage from "./homePage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
