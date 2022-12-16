import Cookie from "js-cookie";
import React, { useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import useDataStore from "../hooks/useDataStore";
import useModalReason from "../hooks/useModalReason";
import useModalRegister from "../hooks/useModalRegister";
import useUserStore from "../hooks/useUserStore";
import { refresh } from "../services/api/auth";

const PrivateRoutes = () => {
  const { setUser, removeUser } = useUserStore();
  const { resetModalReason } = useModalReason();
  const { resetModalRegister } = useModalRegister();
  const { resetData } = useDataStore();
  const tokenLoaded = Cookie.get("token");
  useEffect(() => {
    console.log('cambio la ruta');

    if (tokenLoaded) {
      refresh({ token: tokenLoaded })
        .then((res) => {
          setUser(res.user);
          Cookie.set("token", res.token, { expires: 15 });
        })
        .catch((err) => {
          logout();
        });
    } else {
      logout();
    }
  }, []);

  const logout = () => {
    removeUser();
    resetModalReason();
    resetModalRegister();
    resetData();
    Cookie.remove("token");
    console.log("Invalid session");
  };
  return tokenLoaded ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
