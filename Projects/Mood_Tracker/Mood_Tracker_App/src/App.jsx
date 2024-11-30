import React, { useState } from 'react';
import './App.css';

const moodSuggestions = {
  Happy: ["🎵 Listen to upbeat songs", "📸 Take some photos", "🕺 Dance your heart out!"],
  Sad: ["📖 Read an uplifting book", "🎥 Watch a comedy movie", "📝 Write down your thoughts"],
  Stressed: ["🧘‍♂️ Meditate for 10 minutes", "🌿 Go for a walk in nature", "🎧 Listen to calm music"],
  Bored: ["🎨 Try sketching", "🎮 Play a new game", "👨‍🍳 Experiment with cooking"],
};

const App = () => {
  const [mood, setMood] = useState('');
  const [suggestion, setSuggestion] = useState('');
  const handleMoodChange = (mood) => {
    setMood(mood);
    const randomSuggestion = 
      moodSuggestions[mood][Math.floor(Math.random() * moodSuggestions[mood].length)];
    setSuggestion(randomSuggestion);
  };

  return (
    <div className="app">
      <h1 className='heading'>Mood Tracker App</h1>
      <div className="mood-buttons">
        {Object.keys(moodSuggestions).map((moodOption) => (
          <button 
            key={moodOption} 
            onClick={() => handleMoodChange(moodOption)}
            className="mood-btn"
          >
            {moodOption}
          </button>
        ))}
      </div>
      {mood && (
        <div className="suggestion-box">
          <h2>Your Mood: {mood}</h2>
          <p>Suggested Activity: {suggestion}</p>
        </div>
      )}
    </div>
  );
};

export default App;
