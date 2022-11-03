import React from "react";
import PasswordChangeForm from "../../components/password-change-form";
import UnAuthLayout from "../../layouts/unauth-layout";

const PasswordChange = () => {
  return (
    <>
      <UnAuthLayout>
        <PasswordChangeForm />
      </UnAuthLayout>
    </>
  );
};

export default PasswordChange;
