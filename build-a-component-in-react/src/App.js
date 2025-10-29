import React from 'react';
import UserProfiles from './components/UserProfile'; // Make sure the filename matches
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Employee Introduction Data Dashboard</h1>
      <UserProfiles />
    </div>
  );
}

export default App;