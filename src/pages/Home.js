import React from 'react';
import Notification from '../components/Notification';
import Summaries from '../components/Summaries';
import ProposedLaws from '../components/ProposedLaws';
import LocationIssues from '../components/LocationIssues';
import SmartFeedbackForm from '../components/SmartFeedbackForm';
import CommunityOrganizer from '../components/CommunityOrganizer';
import Voting from '../components/Voting';
import VotingChart from '../components/VotingChart';
import ImpactVisualizer from '../components/ImpactVisualizer';
import RaiseQuery from '../components/RaiseQuery';

function Home() {
  return (
    <div className="home-page">
      {/* 1. Compact Notification banner at top (only on home) */}
      <Notification compact={true} />

      {/* 2. Issues Summaries section with comments */}
      <Summaries />

      {/* 3. Location-specific Issues section */}
      <LocationIssues />

      {/* 4. Legislation / Proposed Laws section */}
      <ProposedLaws />

      {/* 5. Voting section (perhaps for polls or issue voting) */}
      <Voting />

      {/* 6. Voting results chart section */}
      <VotingChart />

      {/* 7. Impact visualization section */}
      <ImpactVisualizer />

      {/* 8. Community Organizer info/interaction section */}
      <CommunityOrganizer />

      {/* 9. Feedback form section */}
      <SmartFeedbackForm />

      {/* 10. Raise Query form section */}
      <RaiseQuery />
    </div>
  );
}

export default Home;
