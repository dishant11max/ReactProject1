import React from 'react';
import useFetch from './useFetch'; 
import './App.css'; 

const App = () => {
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/photos');

  return (
    <div className="app-container">
      <h1 className="header">Photos</h1>

      {loading && <div className="loading">Loading data...</div>}

      {error && <div className="error">Error: {error}</div>}

      {data && (
        <div className="grid-container">
          {data.slice(0, 20).map((item) => (
            <div key={item.id} className="card">
              <div className="image-container">
                <img 
                  src={`https://picsum.photos/600/600?random=${item.id}`} 
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