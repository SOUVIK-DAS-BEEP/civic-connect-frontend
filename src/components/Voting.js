// src/components/Voting.js
import React from 'react';

function Voting({ votes, onVote }) {
  // votes = {optionA, optionB}, onVote is a function => onVote('optionA')
  if (!votes || !onVote) {
    return <p>Voting data missing!</p>;
  }

  return (
    <div>
      <h4>Community Poll</h4>
      <button onClick={() => onVote('optionA')}>
        Option A ({votes.optionA})
      </button>
      <button onClick={() => onVote('optionB')} style={{ marginLeft: '0.5rem' }}>
        Option B ({votes.optionB})
      </button>
    </div>
  );
}

export default Voting;
