import React, { useEffect } from "react";
import useUserStore from "../../../hooks/useUserStore";

const Dashboard = () => {
  const { user } = useUserStore();
  const { removeUser } = useUserStore();

  useEffect(() => {
    console.log("remove user");
    removeUser();
  }, []);

  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center">
        <h1 className="block">DASHBOARD Hello:{user.username} </h1>
      </div>
    </>
  );
};

export default Dashboard;
