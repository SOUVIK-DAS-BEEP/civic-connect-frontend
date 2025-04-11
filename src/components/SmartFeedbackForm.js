import React, { useState } from 'react';

function SmartFeedbackForm() {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Feedback submitted: ' + feedback);
    setFeedback('');
  };

  return (
    <div>
      <h4>Smart Feedback</h4>
      <form onSubmit={handleSubmit}>
        <textarea
          rows="3"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Your feedback..."
          style={{ width: '100%', marginBottom: '0.5rem' }}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SmartFeedbackForm;
