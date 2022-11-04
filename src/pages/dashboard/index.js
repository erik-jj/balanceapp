import React, { useEffect } from "react";
import useAuthStore from "../../hooks/useAuthStore";

const Dashboard = () => {
  const { auth } = useAuthStore();

  useEffect(() => {
    console.log("llamada a la api");
  }, []);

  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center">
        <h1 className="block"> DASHBOARD Hello:{auth.user.username} </h1>
      </div>
    </>
  );
};

export default Dashboard;
