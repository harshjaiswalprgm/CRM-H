import express from "express";
import cors from "cors";
import employeesRoutes from "./routes/employees.js";
import customersRoutes from "./routes/customers.js";

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/hello", (req, res) => {
  res.json({ message: "Hello from backend!" });
});

// Routes
app.use("/employees", employeesRoutes);
app.use("/customers", customersRoutes);

// Start server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
