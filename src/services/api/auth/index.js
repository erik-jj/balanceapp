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

export { login,refresh };

