import React from "react";

function Streak({ habit }) {
  return (
    <div>
      <p>Current Streak: {habit.streak}</p>
      <p>Longest Streak: {/* Calculate longest streak here */}</p>
    </div>
  );
}

export default Streak;
