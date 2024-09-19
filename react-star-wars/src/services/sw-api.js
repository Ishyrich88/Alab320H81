// services/sw-api.js

const BASE_URL = 'https://swapi.dev/api';

export async function fetchStarships() {
  try {
    const response = await fetch(`${BASE_URL}/starships/`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch starships:', error);
    throw error;
  }
}