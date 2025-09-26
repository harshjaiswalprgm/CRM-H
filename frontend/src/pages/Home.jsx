import React, { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/hello") // backend on port 5000
      .then((res) => setMessage(res.data.message))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Welcome to Glowlogics CRM</h1>
      <p>Backend says: {message}</p>
    </div>
  );
}

export default Home;
