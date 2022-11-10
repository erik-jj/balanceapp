import React from "react";
import SideNavbar from "../../components/side-navbar";

const AuthLayout = ({ children }) => {
  return (
    <div className="w-screen h-screen flex flex-row justify-start ">
      <SideNavbar />
      {children}
    </div>
  );
};

export default AuthLayout;
