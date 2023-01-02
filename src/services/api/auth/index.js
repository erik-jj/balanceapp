import axios from "axios";
import endPoints from "../index";

const login = async (body) => {
  const response = await axios.post(endPoints.auth.login, body);
  return response.data;
};

const refresh = async (body) => {
  const response = await axios.post(endPoints.auth.refresh, body);
  return response.data;
};

const recovery = async (body) => {
  const response = await axios.post(endPoints.auth.recovery, body);
  return response.data;
};

const changePassword = async (body, token) => {
  const config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  const response = await axios.post(endPoints.auth.changePassword, body,config);
  return response.data;
};

export { login, refresh, recovery,changePassword};
