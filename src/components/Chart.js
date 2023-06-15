import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = ({ userStats }) => {
  const data = {
    labels: userStats.map((language) => language.label),
    datasets: [
      {
        data: userStats.map((language) => language.value),
        backgroundColor: userStats.map(
          ({ color }) =>
            `#${color.length > 4 ? color.slice(1) : color.slice(1).repeat(2)}B3`
        ),
      },
    ],
  };

  return (
    <div className="flex flex-col justify-content-center text-center mt-10">
      <p className="font-bold">Most used languages</p>
      <Pie data={data} />
    </div>
  );
};

export default Chart;
