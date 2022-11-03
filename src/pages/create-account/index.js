import React from "react";
import NavBarTop from "../../components/navbar/index";
import CreateAccountForm from "../../components/create-account-form/index";
import Footer from "../../components/footer";

const CreateAccount = () => {
  return (
    <>
      <div className="h-screen w-screen overflow-hidden ">
        <NavBarTop />
        <CreateAccountForm />
        <Footer />
      </div>
    </>
  );
};

export default CreateAccount;
