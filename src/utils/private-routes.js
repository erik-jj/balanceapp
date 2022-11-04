import React, { useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import useAuthStore from "../hooks/useAuthStore";
import { refresh } from "../services/api/auth";

const PrivateRoutes = () => {
  const { setAuth } = useAuthStore();
  let auth = useAuthStore((state) => state.auth);
  useEffect(() => {
    if (auth.token) {
      refresh({ token: auth.token })
        .then((data) => {
          setAuth(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  return auth.token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
