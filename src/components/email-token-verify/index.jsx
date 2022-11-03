import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { confirmEmail } from "../../services/api/users/index";

const EmailTokenVerify = () => {
  const [info, setInfo] = useState("Esperando información...");
  const navigate = useNavigate();
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    confirmEmail({ token: token })
      .then(() => {
        setInfo(
          "Tu correo ha sido verificado con éxito, ya puedes iniciar sesión"
        );
      })
      .catch(() => {
        setInfo(
          "El token de confirmación no es válido o ha expirado, ingrese a su cuenta para recibir un nuevo token."
        );
      });
  }, []);

  return (
    <>
      <div className="h-full md:mb-12 mb-2 flex flex-col gap-2 sm:gap-4 items-center justify-center relative ">
        <div className="mt-2 w-full lg:px-12 md:px-12 px-6 lg:w-2/3 lg:max-w-2xl md:w-2/3 ">
          <div className="overflow-hidden shadow-md rounded-md ">
            <div className="pt-4 md:pt-8">
              <h2 className="md:text-3xl text-2xl font-bold  text-gray-900 text-center">
                Confirmación de correo
              </h2>
            </div>
            <div className="bg-white px-8 py-5 ">
              <div className="flex flex-col gap-5">
                <div className="">
                  <label
                    htmlFor="email-address"
                    className="block text-sm font-medium text-gray-700 text-center"
                  >
                    {info}
                  </label>
                </div>
              </div>
            </div>
            <div className="pt-4 pb-8 flex flex-col justify-center items-center gap-4">
              <button
                onClick={() => navigate("/login")}
                className="rounded-md  bg-blue-600 hover:bg-blue-800 w-2/4 py-2 text-base font-semibold text-white shadow-sm "
              >
                Ir a inicio de sesión
              </button>
            </div>
          </div>
          {}
        </div>
      </div>
    </>
  );
};

export default EmailTokenVerify;
