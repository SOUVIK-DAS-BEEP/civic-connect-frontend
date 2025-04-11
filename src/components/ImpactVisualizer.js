// src/components/ImpactVisualizer.js
import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend
} from 'recharts';

function ImpactVisualizer({ impactData = [] }) {
  // If no data passed from parent, let's default to Rich/Poor/Middle Class
  if (impactData.length === 0) {
    // We'll define an internal default here
    impactData = [
      { group: 'Rich', count: 10 },
      { group: 'Poor', count: 25 },
      { group: 'Middle Class', count: 15 }
    ];
  }

  // Build up the Recharts data
  const pieData = impactData.map((item) => ({
    name: item.group,
    value: item.count
  }));

  const COLORS = ['#8884d8', '#82ca9d', '#ffc658']; // 3 colors for 3 slices

  return (
    <div style={{ textAlign: 'center' }}>
      <h4>Impact Visualizer (PieChart)</h4>
      <PieChart width={400} height={300} style={{ margin: '0 auto' }}>
        <Pie
          data={pieData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
          label
        >
          {pieData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
}

export default ImpactVisualizer;
