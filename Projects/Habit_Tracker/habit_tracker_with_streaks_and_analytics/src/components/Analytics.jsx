import React from "react";
import { Line } from "react-chartjs-2";

function Analytics({ habits }) {
  const chartData = {
    labels: habits.map((habit) => habit.name),
    datasets: [
      {
        label: "Streaks",
        data: habits.map((habit) => habit.streak),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="analytics">
      <h2>Habit Streaks</h2>
      <Line data={chartData} />
    </div>
  );
}

export default Analytics;
