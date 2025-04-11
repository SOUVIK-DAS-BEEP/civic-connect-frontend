// src/App.js
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Notification from './components/Notification';
import Summaries from './components/Summaries';
import ProposedLaws from './components/ProposedLaws';
import Voting from './components/Voting';
import VotingChart from './components/VotingChart';
import ImpactVisualizer from './components/ImpactVisualizer';
import CommunityOrganizer from './components/CommunityOrganizer';
import LocationIssues from './components/LocationIssues';
import SmartFeedbackForm from './components/SmartFeedbackForm';
import RaiseQuery from './components/RaiseQuery';
import Footer from './components/Footer';

function App() {
  // Voting real-time: store votes in state
  const [votes, setVotes] = useState({ optionA: 10, optionB: 7 });

  // Handler for Voting component
  const handleVote = (option) => {
    setVotes(prev => ({
      ...prev,
      [option]: prev[option] + 1
    }));
  };

  // Impact data for ImpactVisualizer (Pie chart)
  const [impactData] = useState([
    { group: 'Rich', count: 10 },
    { group: 'Poor', count: 25 },
    { group: 'Middle CLass', count: 15 }
  ]);

  return (
    <div style={{ fontFamily: 'Arial', padding: '1rem' }}>
      <Navbar />

      <Notification />

      <h1 style={{ marginTop: '1rem' }}>🗳️ Civic Connect</h1>

      <div className="component-box">
        <h2>Issue Summaries + Comments</h2>
        <Summaries />
      </div>

      <div className="component-box">
        <h2>Proposed Laws</h2>
        <ProposedLaws />
      </div>

      <div className="component-box">
        <h2>Voting</h2>
        {/* Pass votes + handler so user can vote => updates votes in App */}
        <Voting votes={votes} onVote={handleVote} />
      </div>

      <div className="component-box">
        <h2>Voting Chart</h2>
        <VotingChart votes={votes} />
      </div>

      <div className="component-box">
        <h2>Impact Visualizer</h2>
        {/* Pass array to ImpactVisualizer for PieChart */}
        <ImpactVisualizer impactData={impactData} />
      </div>

      <div className="component-box">
        <h2>Community Organizer</h2>
        <CommunityOrganizer />
      </div>

      <div className="component-box">
        <h2>Location Issues</h2>
        <LocationIssues />
      </div>

      <div className="component-box">
        <h2>Smart Feedback Form</h2>
        <SmartFeedbackForm />
      </div>

      <div className="component-box">
        <h2>Raise Query</h2>
        <RaiseQuery />
      </div>

      <Footer />
    </div>
  );
}

export default App;
