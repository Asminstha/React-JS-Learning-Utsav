import React from "react";
import Streak from "./Streak";

function HabitList({ habits, updateHabit }) {
  const today = new Date().toISOString().split("T")[0]; // Format date as YYYY-MM-DD

  return (
    <div>
      {habits.map((habit, index) => (
        <div key={index} className="habit-item">
          <span>{habit.name}</span>
          <button onClick={() => updateHabit(index, today)}>
            {habit.dates.includes(today) ? "✔️" : "Mark Today"}
          </button>
          <Streak habit={habit} />
        </div>
      ))}
    </div>
  );
}

export default HabitList;
