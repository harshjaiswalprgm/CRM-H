const sqlite3 = require("sqlite3").verbose();
const path = require("path");

// Path for SQLite database file
const dbPath = path.resolve(__dirname, "crm.db");

// Connect to database
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error("❌ Error opening database:", err.message);
  } else {
    console.log("✅ Connected to SQLite database at", dbPath);
  }
});

// Create Employees table
db.run(
  `CREATE TABLE IF NOT EXISTS employees (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    role TEXT,
    attendance INTEGER DEFAULT 0,
    performance INTEGER DEFAULT 0
  )`,
  (err) => {
    if (err) {
      console.error("❌ Error creating employees table:", err.message);
    } else {
      console.log("✅ Employees table ready.");
    }
  }
);
// Create customers table if it doesn't exist
db.run(
  `CREATE TABLE IF NOT EXISTS customers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    phone TEXT,
    company TEXT
  )`,
  (err) => {
    if (err) {
      console.error("❌ Error creating customers table:", err.message);
    } else {
      console.log("✅ Customers table ready.");
    }
  }
);

// Seed customers if table is empty
db.get("SELECT COUNT(*) as count FROM customers", (err, row) => {
  if (row.count === 0) {
    const seedCustomers = [
      ["John Doe", "john@example.com", "9876543210", "Tech Corp"],
      ["Jane Smith", "jane@example.com", "9123456780", "Design Studio"],
      ["Michael Lee", "michael@example.com", "9988776655", "Marketing Ltd"],
    ];

    seedCustomers.forEach(cust => {
      db.run(
        `INSERT INTO customers (name, email, phone, company) VALUES (?, ?, ?, ?)`,
        cust
      );
    });

    console.log("🌱 Seed data inserted into customers table.");
  }
});


module.exports = db;
