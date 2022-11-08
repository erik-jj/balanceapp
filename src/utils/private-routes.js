import Cookie from "js-cookie";
import React, { useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import useUserStore from "../hooks/useUserStore";
import { refresh } from "../services/api/auth";

const PrivateRoutes = () => {
  const { setUser, removeUser } = useUserStore();
  const tokenLoaded = Cookie.get("token");
  useEffect(() => {
    if (tokenLoaded) {
      refresh({ token: tokenLoaded })
        .then((res) => {
          setUser(res.user);
          Cookie.set("token", res.token, { expires: 5 });
        })
        .catch((err) => {
          removeUser();
          Cookie.remove("token");
          console.log("Invalid session");
        });
    } else {
      removeUser();
    }
  }, []);

  return true ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
