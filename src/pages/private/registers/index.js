import React, { useEffect } from "react";
import useUserStore from "../../../hooks/useUserStore";
import AuthLayout from "../../../layouts/auth-layout/index.jsx";

const Registers = () => {
  const { user } = useUserStore();

  useEffect(() => {
    //
  }, []);

  return (
    <>
      <AuthLayout>
        <div className="w-full flex justify-center">
          <h1 className="block">Registers Hello:{user.username} </h1>
        </div>
      </AuthLayout>
    </>
  );
};

export default Registers;
