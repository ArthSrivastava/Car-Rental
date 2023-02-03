import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ReadListing from "./pages/ReadListing";
import AddListing from "./pages/AddListing";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="home" />} />
        <Route path="home" element={<Home />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="listing/:listingId" element={<ReadListing />} />
        <Route path="list-vehicle" element={<AddListing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
