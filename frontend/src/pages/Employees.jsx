import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useEffect, useState } from "react";
import { getEmployees, addEmployee, updateEmployee, deleteEmployee } from "../services/api";

export default function Employees() {
  const [employees, setEmployees] = useState([]);
  const [form, setForm] = useState({ name: "", email: "", role: "" });
  const [editId, setEditId] = useState(null); // Track editing employee

  useEffect(() => {
    loadEmployees();
  }, []);

  async function loadEmployees() {
    try {
      const data = await getEmployees();
      setEmployees(data);
    } catch (err) {
      console.error(err);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.email || !form.role) return alert("Please fill all fields");

    try {
      if (editId) {
        // Update existing employee
        await updateEmployee(editId, form);
        setEditId(null);
      } else {
        // Add new employee
        await addEmployee(form);
      }

      setForm({ name: "", email: "", role: "" });
      loadEmployees();
    } catch (err) {
      console.error(err);
      alert("Failed to save employee");
    }
  }

  function handleEdit(emp) {
    setForm({ name: emp.name, email: emp.email, role: emp.role });
    setEditId(emp.id);
  }

  async function handleDelete(id) {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      try {
        await deleteEmployee(id);
        loadEmployees();
      } catch (err) {
        console.error(err);
        alert("Failed to delete employee");
      }
    }
  }

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />

      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Navbar />

        <div style={{ padding: "20px" }}>
          <h2 className="text-2xl font-bold mb-4">Employees</h2>

          {/* Employee Form */}
          <form onSubmit={handleSubmit} className="space-y-2 mb-4">
            <input
              className="border p-2 w-full rounded"
              placeholder="Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <input
              className="border p-2 w-full rounded"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <input
              className="border p-2 w-full rounded"
              placeholder="Role"
              value={form.role}
              onChange={(e) => setForm({ ...form, role: e.target.value })}
            />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
              {editId ? "Update Employee" : "Add Employee"}
            </button>
          </form>

          {/* Employee List */}
          <ul className="list-disc ml-5 space-y-2">
            {employees.map((emp) => (
              <li key={emp.id} className="flex justify-between items-center">
                <span>
                  <strong>{emp.name}</strong> - {emp.email} - <em>{emp.role}</em>
                </span>
                <span>
                  <button
                    onClick={() => handleEdit(emp)}
                    className="text-yellow-600 mr-2 hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(emp.id)}
                    className="text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
