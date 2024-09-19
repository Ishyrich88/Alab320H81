// App.js
import React, { useEffect, useState } from 'react';
import { fetchStarships } from './services/sw-api';
import StarshipCard from './StarshipCard';
import './App.css';

function App() {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    async function getStarships() {
      try {
        const data = await fetchStarships();
        setStarships(data.results);
      } catch (error) {
        console.error('Error fetching starships:', error);
      }
    }

    getStarships();
  }, []);

  return (
    <div>
      <h1>Starships</h1>
      <div className="starship-list">
        {starships.map((starship) => (
          <StarshipCard key={starship.name} starship={starship} />
        ))}
      </div>
    </div>
  );
}

export default App;