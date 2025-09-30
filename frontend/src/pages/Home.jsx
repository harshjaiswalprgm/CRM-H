import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import axios from "axios";

export default function Home() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/hello") // your backend route
      .then((res) => setMessage(res.data.message))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />

      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Navbar />

        <div style={{ padding: "20px" }}>
          <h1 className="text-3xl font-bold mb-4">Welcome to Glowlogics CRM</h1>
          <p className="text-lg mb-6">
            Backend says: <strong>{message || "Loading..."}</strong>
          </p>

          {/* Optional dashboard cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 bg-blue-100 rounded shadow">
              <h2 className="text-xl font-semibold">Employees</h2>
              <p>Total Employees: {/* fetch or count */} 10</p>
            </div>
            <div className="p-4 bg-green-100 rounded shadow">
              <h2 className="text-xl font-semibold">Customers</h2>
              <p>Total Customers: {/* fetch or count */} 25</p>
            </div>
            <div className="p-4 bg-yellow-100 rounded shadow">
              <h2 className="text-xl font-semibold">Announcements</h2>
              <p>Welcome to your CRM dashboard!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
