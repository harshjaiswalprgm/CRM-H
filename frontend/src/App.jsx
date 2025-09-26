import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import Customers from "./pages/Customers";

// Components (if you want a global navbar)
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      {/* Global Navbar */}
      {/* <Navbar /> */}

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/customers" element={<Customers />} />
      </Routes>
    </Router>
  );
}

export default App;
