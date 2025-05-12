import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Fertilizer1 from "./pages/Fertilizer1";
import Organic from "./pages/Organic"; // Import Organic page
import Layout from "./Layout";
import Chemical from "./pages/Chemical";
import Registration from "./pages/Ragistration";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashbord";
import Irrigation from "./pages/irrigation";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="fertilizer1" element={<Fertilizer1 />} />
          <Route path="fertilizer/organic" element={<Organic />} />
          <Route path="fertilizer/chemical" element={<Chemical />} />
          <Route path="registration" element={<Registration/>} />
          <Route path="login" element={<Login/>} />
          <Route path="dashboard" element={<Dashboard/>} />
          <Route path="irrigation" element={<Irrigation/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
