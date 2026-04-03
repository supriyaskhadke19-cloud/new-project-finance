import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

function Chart() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr"],
    datasets: [
      {
        label: "Balance",
        data: [1000, 2000, 1500, 3000],
        borderColor: "blue",
      },
    ],
  };

  return (
    <div style={{ width: "500px", margin: "20px" }}>
      <Line data={data} />
    </div>
  );
}

export default Chart;