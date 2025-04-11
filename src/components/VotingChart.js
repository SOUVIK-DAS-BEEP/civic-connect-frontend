// src/components/VotingChart.js
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function VotingChart({ votes }) {
  if (!votes) {
    return <p>No vote data</p>;
  }

  const data = [
    { name: 'Option A', value: votes.optionA },
    { name: 'Option B', value: votes.optionB },
  ];

  return (
    <div style={{ textAlign: 'center' }}>
      <h4>Voting Chart</h4>
      <BarChart
        width={400}
        height={250}
        data={data}
        style={{ margin: '0 auto' }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis allowDecimals={false} />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </div>
  );
}

export default VotingChart;
