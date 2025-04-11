// src/components/Summaries.js
import React, { useState, useEffect } from 'react';
import SummaryComments from './SummaryComments';

function Summaries() {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    // Extended list of dummy issues
    setIssues([
      { id: 1, title: 'Water Supply Problem', description: 'No water in sector 11 for the past 3 days' },
      { id: 2, title: 'Garbage Overflow', description: 'Bins not emptied regularly in sector 4' },
      { id: 3, title: 'Streetlight Failure', description: 'Lane 3 is completely dark after 7pm' },
      { id: 4, title: 'Potholes on Main Road', description: 'Huge potholes near the bus stop causing traffic' },
      { id: 5, title: 'Noise Pollution at Night', description: 'Some local shops playing loud music late' },
      { id: 6, title: 'Illegal Parking Issues', description: 'Cars parked on sidewalks in sector 8' },
    ]);
  }, []);

  return (
    <div>
      <h3>Issue Summaries</h3>
      {issues.map(issue => (
        <div
          key={issue.id}
          style={{
            border: '1px solid #ccc',
            marginBottom: '1rem',
            padding: '0.5rem'
          }}
        >
          <h4>{issue.title}</h4>
          <p>{issue.description}</p>

          {/* Comments for each issue */}
          <SummaryComments issueId={issue.id} />
        </div>
      ))}
    </div>
  );
}

export default Summaries;
