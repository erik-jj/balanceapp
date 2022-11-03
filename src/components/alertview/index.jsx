import { Alert } from "flowbite-react";
import React from "react";

const AlertView = ({ props }) => {
  return (
    <Alert color={props.color} className={`rounded-t-none shadow-md `}>
      <span className="font-medium">{props.message}</span>
    </Alert>
  );
};

export default AlertView;
