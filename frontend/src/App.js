import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; 
// import About from "./pages/About";
// import Recipes from "./pages/Recipes";
 import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
       <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />  
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/recipes" element={<Recipes />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
