import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useEffect, useState } from "react";
import axios from "axios";

function Employees() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/employees")
      .then(res => setEmployees(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1 }}>
        <Navbar />
        <div style={{ padding: "20px" }}>
          <h1>Employees</h1>
          <ul>
            {employees.map(emp => (
              <li key={emp.id}>{emp.name} - {emp.email} - {emp.role}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Employees;
