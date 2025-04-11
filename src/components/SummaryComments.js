// src/components/SummaryComments.js
import React, { useState } from 'react';

function SummaryComments({ issueId }) {
  const [comments, setComments] = useState([]);
  const [input, setInput] = useState('');

  const handleAddComment = () => {
    if (!input.trim()) return;
    const newComment = {
      text: input,
      date: new Date().toLocaleString()
    };
    setComments([...comments, newComment]);
    setInput('');
  };

  return (
    <div style={{ marginTop: '0.5rem', paddingLeft: '1rem' }}>
      <h5>Comments for Issue #{issueId}</h5>
      {comments.length === 0 && <p style={{ fontStyle: 'italic' }}>No comments yet.</p>}
      {comments.map((c, i) => (
        <p key={i}>
          <strong>{c.date}:</strong> {c.text}
        </p>
      ))}
      <div style={{ marginTop: '0.5rem' }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a comment..."
          style={{ marginRight: '0.5rem' }}
        />
        <button onClick={handleAddComment}>Add Comment</button>
      </div>
    </div>
  );
}

export default SummaryComments;
