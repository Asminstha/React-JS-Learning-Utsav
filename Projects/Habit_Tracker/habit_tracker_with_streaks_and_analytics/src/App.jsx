import React, { useState, useEffect } from "react";
import HabitList from "./components/HabitList";
import AddHabitForm from "./components/AddHabitForm";
import Analytics from "./components/Analytics";
import "./index.css";

function App() {
  const [habits, setHabits] = useState(
    JSON.parse(localStorage.getItem("habits")) || []
  );

  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
  }, [habits]);

  const addHabit = (habitName) => {
    setHabits([...habits, { name: habitName, streak: 0, dates: [] }]);
  };

  const updateHabit = (index, date) => {
    const updatedHabits = habits.map((habit, i) =>
      i === index
        ? {
            ...habit,
            dates: habit.dates.includes(date)
              ? habit.dates
              : [...habit.dates, date],
            streak: habit.streak + 1,
          }
        : habit
    );
    setHabits(updatedHabits);
  };

  return (
    <div className="App">
      <h1>Habit Tracker 📈</h1>
      <AddHabitForm addHabit={addHabit} />
      <HabitList habits={habits} updateHabit={updateHabit} />
      <Analytics habits={habits} />
    </div>
  );
}

export default App;
