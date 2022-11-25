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
      left: 0,
      right: 0,
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

export default function LineChart({ props }) {
  const { registers, view } = props;
  const lastDayInMonth = moment().daysInMonth();
  const labels = [];
  const gastos = [];
  const ingresos = [];
  const balance = [];
  let ingresoTmp = 0;
  let gastoTmp = 0;
  let balanceTmp = 0;
  for (let i = 1; i <= lastDayInMonth; i++) {
    const filteredRegisters = registers.filter(
      (register) => moment(register.createdAt).date() === i
    );
    if (filteredRegisters.length > 0) {
      labels.push(i);
      ingresoTmp = 0;
      gastoTmp = 0;
      for (let j = 0; j < filteredRegisters.length; j++) {
        if (filteredRegisters[j].reason.isIncome) {
          ingresoTmp += parseInt(filteredRegisters[j].amount);
        } else {
          gastoTmp += parseInt(filteredRegisters[j].amount);
        }
      }
      balanceTmp += ingresoTmp - gastoTmp;
      balance.push(balanceTmp);
      ingresos.push(ingresoTmp);
      gastos.push(gastoTmp);
    }
  }

  const data = {
    labels,
    datasets: [
      {
        label: "Ingresos",
        data: ingresos,
        borderColor: "rgb(14, 102, 85 )",
        backgroundColor: "rgba(14, 102, 85 , 0.5)",
      },
      {
        label: "Gastos",
        data: gastos,
        borderColor: "rgb(192, 57, 43)",
        backgroundColor: "rgba(192, 57, 43, 0.5)",
      },
      {
        label: "Balance",
        data: balance,
        borderColor: "rgb(43, 57, 192)",
        backgroundColor: "rgba(43, 57, 192, 0.5)",
      },
    ],
  };

  return (
    <div className="mx-auto" style={{ width: view.width }}>
      <Line options={options} data={data} />
    </div>
  );
}
