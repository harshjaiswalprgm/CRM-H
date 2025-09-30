import axios from "axios";
const API_BASE = "http://localhost:5000";

// Employees
export async function getEmployees() {
  const res = await axios.get(`${API_BASE}/employees`);
  return res.data;
}

export async function addEmployee(data) {
  const res = await axios.post(`${API_BASE}/employees`, data);
  return res.data;
}

// Add these two exports
export async function updateEmployee(id, data) {
  const res = await axios.put(`${API_BASE}/employees/${id}`, data);
  return res.data;
}

export async function deleteEmployee(id) {
  const res = await axios.delete(`${API_BASE}/employees/${id}`);
  return res.data;
}

// Customers
export async function getCustomers() {
  const res = await axios.get(`${API_BASE}/customers`);
  return res.data;
}

export async function addCustomer(data) {
  const res = await axios.post(`${API_BASE}/customers`, data);
  return res.data;
}

export async function updateCustomer(id, data) {
  const res = await axios.put(`${API_BASE}/customers/${id}`, data);
  return res.data;
}

export async function deleteCustomer(id) {
  const res = await axios.delete(`${API_BASE}/customers/${id}`);
  return res.data;
}
