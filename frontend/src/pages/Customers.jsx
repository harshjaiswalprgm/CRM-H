import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useEffect, useState } from "react";
import { getCustomers, addCustomer, updateCustomer, deleteCustomer } from "../services/api";

export default function Customers() {
  const [customers, setCustomers] = useState([]);
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [editId, setEditId] = useState(null); // Track editing customer

  useEffect(() => {
    loadCustomers();
  }, []);

  async function loadCustomers() {
    try {
      const data = await getCustomers();
      setCustomers(data);
    } catch (err) {
      console.error(err);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) return alert("Please fill all fields");

    try {
      if (editId) {
        // Update existing customer
        await updateCustomer(editId, form);
        setEditId(null);
      } else {
        // Add new customer
        await addCustomer(form);
      }

      setForm({ name: "", email: "", phone: "" });
      loadCustomers();
    } catch (err) {
      console.error(err);
      alert("Failed to save customer");
    }
  }

  function handleEdit(cust) {
    setForm({ name: cust.name, email: cust.email, phone: cust.phone });
    setEditId(cust.id);
  }

  async function handleDelete(id) {
    if (window.confirm("Are you sure you want to delete this customer?")) {
      try {
        await deleteCustomer(id);
        loadCustomers();
      } catch (err) {
        console.error(err);
        alert("Failed to delete customer");
      }
    }
  }

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />

      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Navbar />

        <div style={{ padding: "20px" }}>
          <h2 className="text-2xl font-bold mb-4">Customers</h2>

          {/* Customer Form */}
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
              placeholder="Phone"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
            <button type="submit" className="bg-green-500 text-white p-2 rounded hover:bg-green-600">
              {editId ? "Update Customer" : "Add Customer"}
            </button>
          </form>

          {/* Customer List */}
          <ul className="list-disc ml-5 space-y-2">
            {customers.map((c) => (
              <li key={c.id} className="flex justify-between items-center">
                <span>
                  <strong>{c.name}</strong> - {c.email} - <em>{c.phone}</em>
                </span>
                <span>
                  <button
                    onClick={() => handleEdit(c)}
                    className="text-yellow-600 mr-2 hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(c.id)}
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
