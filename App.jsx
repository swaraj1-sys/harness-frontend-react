import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState("Connecting to backend...");

  useEffect(() => {
    fetch("http://localhost:8000/")
      .then(res => res.json())
      .then(json => setData(json.data))
      .catch(() => setData("Backend Unreachable"));
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Harness Fullstack Demo</h1>
      <div style={{ padding: '20px', border: '1px solid #ccc' }}>
        <h3>Backend Response:</h3>
        <p>{data}</p>
      </div>
    </div>
  );
}
export default App;
