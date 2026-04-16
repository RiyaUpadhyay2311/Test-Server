import { useState } from "react";
import Quiz from "../components/Quiz";

function AdminDashboard() {
  const [start, setStart] = useState(false);

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      
      {/* Sidebar */}
      <div style={{
        width: "250px",
        background: "#2c2c2c",
        color: "white",
        padding: "20px"
      }}>
        <h2>Student Panel</h2>
        <p style={{ background: "#007bff", padding: "5px" }}>MCQ Tests</p>
        <p>Results</p>
        <p>Coding Test</p>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: "40px" }}>
        
        {!start ? (
          <>
            <h2>MCQ Tests</h2>
            <button onClick={() => setStart(true)}>
              Start MCQ Test
            </button>
          </>
        ) : (
          <Quiz />
        )}

      </div>
    </div>
  );
}

export default AdminDashboard;