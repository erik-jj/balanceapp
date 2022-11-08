import React, { useEffect } from "react";
import useUserStore from "../../../hooks/useUserStore";

const Reasons = () => {
  const { user } = useUserStore();

  useEffect(() => {
    //
  }, []);

  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center">
        <h1 className="block">Reasons Hello:{user.username} </h1>
      </div>
    </>
  );
};

export default Reasons;
