import React, { useState, useEffect } from 'react';
import './App.css'; 

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(response => response.json())
      .then(result => {
        setData(result);
        setLoading(false);
      });
  }, []);

  return (
    <div className="app-container">
      <h1 className="header">Photos</h1>
      {loading && <div className="loading">Loading...</div>}
      
      <div className="grid-container">
        {data.slice(0, 20).map((item) => (
          <div key={item.id} className="card">
            <div className="image-container">
              <img src={item.images[0]} alt={item.title} />
            </div>
            <div className="card-content">
              <p>{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;