import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import moment from "moment";
import "moment/locale/es";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
  },
  layout: {
    padding: {
      left: 50,
      right: 50,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: `Registros del mes de ${moment()
        .subtract("month")
        .format("MMMM")} `,
    },
  },
};
const lastDayInMonth = moment().daysInMonth();
console.log(lastDayInMonth);

const labels = [1,5,10,15,20,lastDayInMonth];

export const data = {
  labels,
  datasets: [
    {
      label: "Ingresos",
      data: ["1000", "2000", "3000", "5000", "6000"],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Gastos",
      data: ["100", "1500", "3000", "4000", "4800"],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
    {
      label: "Balance",
      data: ["900", "500", "0", "1000", "1200"],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export default function LineChart() {
  return (
    <div className="mx-auto" style={{ width: "80%" }}>
      <Line options={options} data={data} />
    </div>
  );
}
