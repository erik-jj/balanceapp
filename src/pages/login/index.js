import React from "react";
import LoginForm from "../../components/login-form/index";
import UnAuthLayout from "../../layouts/unauth-layout";

const Login = () => {
  return (
    <>
      <UnAuthLayout>
        <LoginForm />
      </UnAuthLayout>
    </>
  );
};

export default Login;
