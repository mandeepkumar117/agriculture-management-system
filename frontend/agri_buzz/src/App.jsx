import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Fertilizer from "./pages/Fertilizer";
import Organic from "./pages/Organic"; // Import Organic page
import Layout from "./Layout";
import Chemical from "./pages/Chemical";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="fertilizer" element={<Fertilizer />} />
          <Route path="fertilizer/organic" element={<Organic />} />
          <Route path="fertilizer/chemical" element={<Chemical />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
