import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState("Connecting...");

  useEffect(() => {
    // Note: Use 127.0.0.1 instead of localhost if localhost fails
    fetch("http://127.0.0.1:5123/") 
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((json) => setData(json.data))
      .catch((err) => {
        console.error("Fetch error:", err);
        setData("Backend Unreachable");
      });
  }, []);

  return (
    <div style={{ textAlign: 'center', fontFamily: 'Arial' }}>
      <h1>Harness Demo</h1>
      <p>Backend Message: <strong>{data}</strong></p>
    </div>
  );
}

export default App;
