// api.ts
const API_BASE_URL = 'https://disease.sh/v3/covid-19';

export const fetchWorldwideData = async () => {
  const response = await fetch(`${API_BASE_URL}/all`);
  return response.json();
};

export const fetchCountryData = async () => {
  const response = await fetch(`${API_BASE_URL}/countries`);
  return response.json();
};

export const fetchGraphData = async () => {
  const response = await fetch(`${API_BASE_URL}/historical/all?lastdays=all`);
  return response.json();
};
