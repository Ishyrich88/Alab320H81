// StarshipCard.js
import React from 'react';

function StarshipCard({ starship }) {
  return (
    <div className="starship-card">
      <h2>{starship.name}</h2>
      {/* <p>Model: {starship.model}</p>
      <p>Manufacturer: {starship.manufacturer}</p>
      <p>Cost in Credits: {starship.cost_in_credits}</p>
      <p>Length: {starship.length}</p>
      <p>Max Atmosphering Speed: {starship.max_atmosphering_speed}</p>
      <p>Crew: {starship.crew}</p>
      <p>Passengers: {starship.passengers}</p>
      <p>Cargo Capacity: {starship.cargo_capacity}</p> */}
    </div>
  );
}

export default StarshipCard;