import { Alert } from "flowbite-react";
import React from "react";
import { InformationCircleIcon } from "@heroicons/react/20/solid";
const AlertError = () => {
  return (
    <Alert
      color="failure"
      icon={InformationCircleIcon}
      className="relative rounded-t-none shadow-md "
    >
      <span className="font-medium">Ha ocurrido un error.</span>
    </Alert>
  );
};

export default AlertError;
