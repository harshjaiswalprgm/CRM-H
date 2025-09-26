const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();
const PORT = 5000; // backend port changed to avoid conflict

// Middleware
app.use(express.json());
app.use(cors());

// Test routes
app.get("/", (req, res) => {
  res.send("Hello Glowlogics System API!");
});

app.get("/hello", (req, res) => {
  res.json({ message: "Hello from backend" });
});

// Add employee
app.post("/employees", (req, res) => {
  const { name, email, role } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: "Name and email are required" });
  }

  db.run(
    `INSERT INTO employees (name, email, role) VALUES (?, ?, ?)`,
    [name, email, role || "Employee"],
    function (err) {
      if (err) {
        return res.status(400).json({ error: err.message });
      }
      res.json({ id: this.lastID, name, email, role: role || "Employee" });
    }
  );
});

// Get all employees
app.get("/employees", (req, res) => {
  db.all(`SELECT * FROM employees`, [], (err, rows) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    res.json(rows);
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Backend running at http://localhost:${PORT}`);
});
