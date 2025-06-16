import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./navbar";
import "./App.css";
import Home from "./Home";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
