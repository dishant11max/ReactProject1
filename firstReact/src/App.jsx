import React from 'react';
import useFetch from './useFetch.jsx'; 
import './App.css'; 

const App = () => {

  const { data, loading, error } = useFetch('https://api.escuelajs.co/api/v1/products');
  console.log(data)
  return (
    <div className="app-container">
      <h1 className="header">Photos</h1>

      {loading && <div className="loading">Loading data...</div>}

      {error && <div className="error">Error: {error}</div>}
      {data && Array.isArray(data) ? (
        <div className="grid-container">
          {data.slice(0, 20).map((item) => (
            <div key={item.id} className="card">
              <div className="image-container">
                <img 
                  src={item.images ? item.images[0] : ''} 
                  alt={item.title} 
                  onError={(e) => { e.target.src = 'https://via.placeholder.com/300' }} 
                />
              </div>
              <div className="card-content">
                <p>{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        !loading && <div>No data found or data format incorrect. Check Console.</div>
      )}
    </div>
  );
};
export default App;