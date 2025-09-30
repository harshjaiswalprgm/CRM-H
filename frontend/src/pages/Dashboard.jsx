import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import axios from "axios";

export default function Dashboard() {
  const [employeeCount, setEmployeeCount] = useState(0);
  const [customerCount, setCustomerCount] = useState(0);

  useEffect(() => {
    fetchCounts();
  }, []);

  async function fetchCounts() {
    try {
      const empRes = await axios.get("http://localhost:5000/employees");
      setEmployeeCount(empRes.data.length);

      const custRes = await axios.get("http://localhost:5000/customers");
      setCustomerCount(custRes.data.length);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Navbar />

        <div style={{ padding: "20px" }}>
          <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
          <p className="mb-6 text-gray-700">
            Welcome to Glowlogics CRM! Here’s a quick overview of your data.
          </p>

          {/* Dashboard cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 bg-blue-100 rounded shadow">
              <h2 className="text-xl font-semibold">Employees</h2>
              <p className="text-lg">{employeeCount} Employees</p>
            </div>
            <div className="p-4 bg-green-100 rounded shadow">
              <h2 className="text-xl font-semibold">Customers</h2>
              <p className="text-lg">{customerCount} Customers</p>
            </div>
            <div className="p-4 bg-yellow-100 rounded shadow">
              <h2 className="text-xl font-semibold">Announcements</h2>
              <p className="text-lg">Welcome to your CRM dashboard!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
