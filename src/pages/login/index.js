import Cookie from "js-cookie";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../../components/login-form/index";
import UnAuthLayout from "../../layouts/unauth-layout";

const Login = () => {
  const token = Cookie.get("token");
  const navigate = useNavigate();
  useEffect(() => {
    if (token) {
      navigate("/home");
    }
  }, []);

  return (
    <>
      <UnAuthLayout>
        <LoginForm />
      </UnAuthLayout>
    </>
  );
};

export default Login;
