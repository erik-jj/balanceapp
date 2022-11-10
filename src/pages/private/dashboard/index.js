import React, { useEffect } from "react";
import LineChart from "../../../components/line-chart/index.jsx";
import Stat from "../../../components/stat";
import useUserStore from "../../../hooks/useUserStore";
import AuthLayout from "../../../layouts/auth-layout/index.jsx";
const Dashboard = () => {
  const { user } = useUserStore();
  const { removeUser } = useUserStore();

  useEffect(() => {
    console.log("remove user");
    removeUser();
  }, []);

  return (
    <>
      <AuthLayout>
        <div className="w-full h-full grid grid-cols-3 grid-rows-6  px-12 py-4 ">
          <div className="col-span-3">
            <div className="h-full w-full flex flex-row justify-center gap-8 items-center ">
              <Stat
                props={{
                  title: "Ingresos",
                  value: "$8500",
                  description: "20% ↗ Respecto el mes anterior",
                  color: "text-green-500",
                }}
              ></Stat>
              <Stat
                props={{
                  title: "Gastos",
                  value: "$3500",
                  description: "20% ↘ Respecto el mes anterior",
                  color: "text-red-500",
                }}
              ></Stat>{" "}
              <Stat
                props={{
                  title: "Balance",
                  value: "$5000",
                  description: "20% → Respecto el mes anterior",
                  color: "text-gray-500",
                }}
              ></Stat>
            </div>
          </div>
          <div className="col-span-6 row-span-4 mt-4">
             <LineChart/> 
          </div>
          
        </div>
      </AuthLayout>
    </>
  );
};

export default Dashboard;
