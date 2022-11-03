import React from "react";
import Footer from "../../components/footer";
import NavBarTop from "../../components/navbar";

const UnAuthLayout = ({ children }) => {
  return (
    <div className="h-screen w-screen overflow-x-hidden overflow-y-auto flex flex-col gap-0 justify-between  ">
      <NavBarTop />
      {children}
      <Footer />
    </div>
  );
};

export default UnAuthLayout;
