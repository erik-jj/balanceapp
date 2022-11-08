import React, { useEffect } from "react";
import useUserStore from "../../../hooks/useUserStore";

const Profile = () => {
  const { user } = useUserStore();

  useEffect(() => {
    //
  }, []);

  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center">
        <h1 className="block">Profile Hello:{user.username} </h1>
      </div>
    </>
  );
};

export default Profile;
