import React from "react";
import CreateAccountForm from "../../components/create-account-form/index";
import UnAuthLayout from "../../layouts/unauth-layout";

const CreateAccount = () => {
  return (
    <>
      <UnAuthLayout>
        <CreateAccountForm />
      </UnAuthLayout>
    </>
  );
};

export default CreateAccount;
