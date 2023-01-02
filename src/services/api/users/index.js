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

const updateUser = async (body, token) => {
  const config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  const response = await axios.patch(endPoints.users.updateUser, body, config);
  return response.data;
};
export { createUser, confirmEmail, updateUser };
