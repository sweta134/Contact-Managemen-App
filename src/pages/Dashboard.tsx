// DashboardPage.tsx
import React from 'react';
import { useQuery } from 'react-query';
import LineGraph from '../charts/LineGraph';
import MapComponent from '../charts/MapComponent';
import { fetchWorldwideData, fetchCountryData, fetchGraphData } from '../utils/api';

const DashboardPage: React.FC = () => {
  const { data: worldwideData } = useQuery('worldwide', fetchWorldwideData);
  const { data: countryData } = useQuery('countries', fetchCountryData);
  const { data: graphData } = useQuery('graph', fetchGraphData);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-semibold mb-6">Dashboard</h1>
      {graphData && <LineGraph data={graphData} />}
      {countryData && <MapComponent countries={countryData} />}
    </div>
  );
};

export default DashboardPage;
