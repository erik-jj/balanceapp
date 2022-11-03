import axios from "axios";
import endPoints from "../index";

const createUser = async (body) => {
  const response = await axios.post(endPoints.users.createUser, body);
  return response.data;
};

const confirmEmail = async (body) => {
  const response = await axios.post(endPoints.users.confirmEmail, body);
  return response.data;
};

export { createUser, confirmEmail };
