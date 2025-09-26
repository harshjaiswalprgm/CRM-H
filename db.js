const sqlite3 = require("sqlite3").verbose();
const path = require("path");

// Create/connect to SQLite database file
const dbPath = path.resolve(__dirname, "crm.db");
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error("❌ Error opening database:", err.message);
  } else {
    console.log("✅ Connected to SQLite database.");
  }
});

// Create employees table if it doesn't exist
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

module.exports = db;
