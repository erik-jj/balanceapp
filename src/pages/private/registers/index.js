import React, { useEffect } from "react";
import useUserStore from "../../../hooks/useUserStore";

const Registers = () => {
  const { user } = useUserStore();

  useEffect(() => {
    //
  }, []);

  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center">
        <h1 className="block">Registers Hello:{user.username} </h1>
      </div>
    </>
  );
};

export default Registers;
