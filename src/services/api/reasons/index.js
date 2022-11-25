import axios from "axios";
import endPoints from "../index";

const createReason = async (body, token) => {
  const config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  const response = await axios.post(
    endPoints.reasons.createReason,
    body,
    config
  );
  return response.data;
};

const getReasons = async (token) => {
  const config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  const response = await axios.get(endPoints.reasons.getReasons, config);
  return response.data;
};

const updateReason = async (body, id, token) => {
  const config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  const response = await axios.patch(
    endPoints.reasons.updateReason(id),
    body,
    config
  );
  return response.data;
};

const deleteReason = async (id, token) => {
  const config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  const response = await axios.delete(
    endPoints.reasons.deleteReason(id),
    config
  );
  return response.data;
};

export { createReason, getReasons, updateReason, deleteReason };
