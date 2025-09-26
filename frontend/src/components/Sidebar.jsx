import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div style={styles.sidebar}>
      <h2 style={styles.title}>Menu</h2>
      <Link to="/dashboard" style={styles.link}>Dashboard</Link>
      <Link to="/employees" style={styles.link}>Employees</Link>
      <Link to="/customers" style={styles.link}>Customers</Link>
      <Link to="/login" style={styles.link}>Login</Link>
    </div>
  );
}

const styles = {
  sidebar: {
    width: "200px",
    height: "100vh",
    backgroundColor: "#111827", // dark blue-gray
    color: "#fff",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  title: {
    fontSize: "20px",
    marginBottom: "20px",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "16px",
  },
};

export default Sidebar;
