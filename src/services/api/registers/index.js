import axios from "axios";
import endPoints from "../index";

const createRegister = async (body, token) => {
  const config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  
  const response = await axios.post(
    endPoints.registers.createRegister,
    body,
    config
  );
  return response.data;
};

const getRegisters = async (token) => {
  const config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  const response = await axios.get(endPoints.registers.getRegisters, config);
  return response.data;
};

const getDashboardData = async (token) => {
  const config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  const response = await axios.get(
    endPoints.registers.getDashboardData,
    config
  );
  return response.data;
};

const updateRegister = async (body, id, token) => {
  const config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  const response = await axios.patch(
    endPoints.registers.updateRegister(id),
    body,
    config
  );
  return response.data;
};

const deleteRegister = async (id, token) => {
  const config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  const response = await axios.delete(
    endPoints.registers.deleteRegister(id),
    config
  );
  return response.data;
};

export {
  createRegister,
  getRegisters,
  updateRegister,
  deleteRegister,
  getDashboardData,
};
