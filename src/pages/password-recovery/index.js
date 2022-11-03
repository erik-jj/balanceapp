import React from "react";
import PasswordRecoveryForm from "../../components/password-recovery-form/index";
import UnAuthLayout from "../../layouts/unauth-layout";
const PasswordRecovery = () => {
  return (
    <>
      <UnAuthLayout>
        <PasswordRecoveryForm />
      </UnAuthLayout>
    </>
  );
};

export default PasswordRecovery;
