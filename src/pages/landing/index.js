import React from "react";
import LandingContent from "../../components/landing-content/index";
import UnAuthLayout from "../../layouts/unauth-layout";

const LandingPage = () => {
  return (
    <>
      <UnAuthLayout>
        <LandingContent />
      </UnAuthLayout>
    </>
  );
};

export default LandingPage;
