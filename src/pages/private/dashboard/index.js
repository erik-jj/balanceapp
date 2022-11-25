import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import LineChart from "../../../components/line-chart/index.jsx";
import Stat from "../../../components/stat";
import useDataStore from "../../../hooks/useDataStore.js";
import useUserStore from "../../../hooks/useUserStore";
import AuthLayout from "../../../layouts/auth-layout/index.jsx";

const Dashboard = () => {
  const { cardsInfo, currentMonthRegisters, fetchCurrentMonthRegisters } =
    useDataStore();
  const { user } = useUserStore();
  const [graphWidth, setGraphWidth] = useState("70%");
  useEffect(() => {
    const tokenLoaded = Cookies.get("token");
    if (currentMonthRegisters.length === 0) {
      fetchCurrentMonthRegisters(tokenLoaded);
    }
    window
      .matchMedia("(min-width: 640px)")
      .addEventListener("change", (e) =>
        e.matches ? setGraphWidth("75%") : setGraphWidth("100%")
      );
  }, []);

  return (
    <>
      <AuthLayout>
        <div className="w-auto h-full grid grid-cols-3 grid-rows-6 ">
          <div className="col-span-3  md:px-12 py-4 ">
            <div className="h-full w-full flex flex-row q justify-center md:gap-8 gap-4 items-center   ">
              <Stat
                props={{
                  title: "Ingresos",
                  value: `$${
                    cardsInfo?.current?.monthIncome
                      ? cardsInfo?.current?.monthIncome
                      : "- - - -"
                  }`,
                  description: "20% ↘ ",
                  color: "text-green-500",
                }}
              ></Stat>
              <Stat
                props={{
                  title: "Gastos",
                  value: `$${
                    cardsInfo?.current?.monthExpense
                      ? cardsInfo?.current?.monthExpense
                      : "- - - -"
                  }`,
                  description: "20% ↘ ",
                  color: "text-red-500",
                }}
              ></Stat>{" "}
              <Stat
                props={{
                  title: "Balance",
                  value: `$${
                    cardsInfo?.current?.monthBalance
                      ? cardsInfo?.current?.monthBalance
                      : "- - - -"
                  }`,
                  description: "20% →",
                  color: "text-gray-500",
                }}
              ></Stat>
            </div>
          </div>
          <div className=" col-span-6 row-span-4 mt-4  ">
            {graphWidth === "100%" ? (
              <LineChart
                props={{
                  registers: currentMonthRegisters,
                  view: { width: "100%" },
                }}
              />
            ) : (
              <LineChart
                props={{
                  registers: currentMonthRegisters,
                  view: { width: "75%" },
                }}
              />
            )}
          </div>
        </div>
      </AuthLayout>
    </>
  );
};

export default Dashboard;
