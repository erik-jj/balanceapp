import { Alert } from "flowbite-react";
import React from "react";

const AlertEmailSend = () => {
  return (
    <Alert color="info" className="relative rounded-t-none shadow-md">
      <span className="font-medium">
        Te hemos enviado un correo para la activación de tu cuenta.
      </span>
    </Alert>
  );
};

export default AlertEmailSend;
