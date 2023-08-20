import React from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import {CategoryScale} from 'chart.js'; 
Chart.register(CategoryScale);

interface LineGraphProps {
  data: {
    cases: Record<string, number>;
    deaths: Record<string, number>;
    recovered: Record<string, number>;
  };
}

const LineGraph: React.FC<LineGraphProps> = ({ data }) => {
  const chartData = {
    labels: Object.keys(data.cases || {}),
    datasets: [
      {
        label: 'Cases',
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.4)',
        data: Object.values(data.cases || []),
      },
      {
        label: 'Deaths',
        borderColor: 'rgba(255,0,0,1)',
        backgroundColor: 'rgba(255,0,0,0.4)',
        data: Object.values(data.deaths || []),
      },
      {
        label: 'Recovered',
        borderColor: 'rgba(0,255,0,1)',
        backgroundColor: 'rgba(0,255,0,0.4)',
        data: Object.values(data.recovered || []),
      },
    ],
  };

  return (
    <div className="w-full h-80">
      <Line data={chartData} />
    </div>
  );
};

export default LineGraph;
