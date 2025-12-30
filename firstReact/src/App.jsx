import React from 'react';
import useFetch from './useFetch.jsx'; 
import './App.css'; 

const App = () => {
  const { data, loading, error } = useFetch('https://api.escuelajs.co/api/v1/products');
  
  console.log(data); // checking what data looks like
  
  return (
    <div className="app-container">
      <h1 className="header">Photos</h1>
      
      {loading && <div className="loading">Loading...</div>}
      
      {error && <div className="error">Error loading products</div>}
      
      {data && data.length > 0 && (
        <div className="grid-container">
          {data.slice(0, 20).map((item) => (
            <div key={item.id} className="card">
              <div className="image-container">
                <img 
                  src={item.images[0]} 
                  alt={item.title} 
                />
              </div>
              <div className="card-content">
                <p>{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;