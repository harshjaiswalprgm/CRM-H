import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Dashboard() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1 }}>
        <Navbar />
        <div style={{ padding: "20px" }}>
          <h1>Dashboard</h1>
          <p>Overview of CRM data will go here.</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
