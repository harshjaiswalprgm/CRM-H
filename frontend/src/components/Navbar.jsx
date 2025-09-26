import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>Glowlogics CRM</div>
      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/dashboard" style={styles.link}>Dashboard</Link>
        <Link to="/employees" style={styles.link}>Employees</Link>
        <Link to="/customers" style={styles.link}>Customers</Link>
        <Link to="/login" style={styles.link}>Login</Link>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#1f2937", // dark gray
    color: "#fff",
  },
  logo: {
    fontWeight: "bold",
    fontSize: "18px",
  },
  links: {
    display: "flex",
    gap: "15px",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
  },
};

export default Navbar;
