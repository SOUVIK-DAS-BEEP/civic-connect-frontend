import React, { useState } from 'react';

function RaiseQuery() {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('New query raised: ' + query);
    setQuery('');
  };

  return (
    <div>
      <h4>Raise a Query</h4>
      <form onSubmit={handleSubmit}>
        <textarea
          rows="3"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Describe your issue..."
          style={{ width: '100%', marginBottom: '0.5rem' }}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default RaiseQuery;
