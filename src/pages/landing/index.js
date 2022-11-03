import React from "react";
import NavBarTop from "../../components/navbar/index";
import LandingContent from "../../components/landing-content/index";
import Footer from "../../components/footer";

const LandingPage = () => {
  return (
    <>
      <div className="h-screen w-screen overflow-hidden " >
        <NavBarTop />
        <LandingContent />
        <Footer/>
      </div>
    </>
  );
};

export default LandingPage;
