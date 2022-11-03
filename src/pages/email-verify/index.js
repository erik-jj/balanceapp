import React from "react";
import EmailTokenVerify from "../../components/email-token-verify/index";
import UnAuthLayout from "../../layouts/unauth-layout";
const EmailVerify = () => {
  return (
    <>
      <UnAuthLayout>
        <EmailTokenVerify />
      </UnAuthLayout>
    </>
  );
};

export default EmailVerify;
