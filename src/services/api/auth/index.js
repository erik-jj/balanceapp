import axios from "axios";
import endPoints from "../index";

const login = async (body) => {
  const response = await axios.post(endPoints.auth.login, body);
  return response.data;
};

export { login };
