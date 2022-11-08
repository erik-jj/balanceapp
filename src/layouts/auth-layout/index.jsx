import React from "react";
import SideNavBar from "../../components/side-navbar";

const AuthLayout = ({ children }) => {
  return (
    <div className="h-screen w-screen overflow-x-hidden  flex flex-row gap-0  ">
      <SideNavBar />
      {children}
    </div>
  );
};

export default AuthLayout;
