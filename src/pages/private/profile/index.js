import React, { useEffect } from "react";
import useUserStore from "../../../hooks/useUserStore";
import AuthLayout from "../../../layouts/auth-layout/index.jsx";

const Profile = () => {
  const { user } = useUserStore();

  useEffect(() => {
    //
  }, []);

  return (
    <>
       <AuthLayout>
        <div className="w-full flex justify-center">
          <h1 className="block">Profile Hello:{user.username} </h1>
        </div>
      </AuthLayout>
    </>
  );
};

export default Profile;
