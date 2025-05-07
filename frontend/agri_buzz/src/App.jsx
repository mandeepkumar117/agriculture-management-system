import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Fertilizer from "./pages/Fertilizer";
import Organic from "./pages/Organic"; // Import Organic page
import Layout from "./Layout";
import Chemical from "./pages/Chemical";
import Registration from "./pages/Ragistration";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashbord";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="fertilizer" element={<Fertilizer />} />
          <Route path="fertilizer/organic" element={<Organic />} />
          <Route path="fertilizer/chemical" element={<Chemical />} />
          <Route path="registration" element={<Registration/>} />
          <Route path="login" element={<Login/>} />
          <Route path="dashboard" element={<Dashboard/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
