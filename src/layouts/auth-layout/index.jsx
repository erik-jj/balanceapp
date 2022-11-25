import React from "react";
import SideNavbar from "../../components/side-navbar";

const AuthLayout = ({ children }) => {
  return (
    <div className="w-screen h-screen flex flex-row justify-start gap-1  ">
      <SideNavbar className="" />
      <div className="grow ">{children}</div>
    </div>
  );
};

export default AuthLayout;
