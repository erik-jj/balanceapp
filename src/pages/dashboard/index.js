import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    console.log("llamada a la api");
  }, []);

  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center">
        <h1 className="block"> DASHBOARD</h1>
      </div>
    </>
  );
};

export default Dashboard;
