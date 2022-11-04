import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../../components/login-form/index";
import useAuthStore from "../../hooks/useAuthStore";
import UnAuthLayout from "../../layouts/unauth-layout";

const Login = () => {
  let auth = useAuthStore((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (auth.token) {
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
