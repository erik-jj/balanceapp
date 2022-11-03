import { Alert } from "flowbite-react";
import React, { useRef, useState } from "react";
import AlertEmailSend from "./alerts/email-send";
import AlertError from "./alerts/error";

const CreateAccountForm = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const usernameRef = useRef(null);
  const [alertEmail, setAlertEmail] = useState(false);
  const [alertError, setAlertError] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
    setAlertError(!alertError);
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const usernameRef = usernameRef.current.value;
    //llamada a la api de crear usuario
  };

  return (
    <>
      <div className="h-2/3 mt-8 flex flex-col gap-2 sm:gap-4 items-center justify-center relative ">
        <div className="mt-2 w-full px-6 lg:w-1/3 md:w-2/3 ">
          <form onSubmit={submitHandler}>
            <div className="overflow-hidden shadow-lg rounded-md ">
              <div className="px-4 pt-4 md:pt-8 ">
                <h2 className="md:text-3xl text-2xl font-bold leading-6 text-gray-900">
                  Crea tu cuenta
                </h2>
              </div>
              <div className="bg-white px-4 py-5 ">
                <div className="flex flex-col gap-5">
                  <div className="">
                    <label
                      htmlFor="username"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Nombre de usuario:
                    </label>
                    <input
                      maxlength="15"
                      minlength="3"
                      type="text"
                      name="username"
                      id="username"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 "
                    />
                  </div>
                  <div className="">
                    <label
                      htmlFor="email-address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Correo electrónico:
                    </label>
                    <input
                      maxlength="30"
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 "
                    />
                  </div>
                  <div className="col-span-6">
                    <label
                      htmlFor="email-address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Contraseña:
                    </label>
                    <input
                      maxlength="15"
                      minlength="8"
                      type="password"
                      name="password"
                      id="password"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 "
                    />
                  </div>
                  <div className="">
                    <label
                      htmlFor="re-password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Confirmar contraseña:
                    </label>
                    <input
                      maxlength="15"
                      minlength="8"
                      type="password"
                      name="re-password"
                      id="re-password"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 "
                    />
                  </div>
                </div>
              </div>
              <div className="pt-4 pb-8 text-center ">
                <button
                  type="submit"
                  className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-blue-600 hover:bg-blue-800 px-4 py-2 text-base font-medium text-white shadow-sm "
                >
                  Confirmar
                </button>
              </div>
            </div>
          </form>
          {alertEmail ? <AlertEmailSend /> : <></>}
          {alertError ? <AlertError /> : <></>}
        </div>
      </div>
    </>
  );
};

export default CreateAccountForm;
