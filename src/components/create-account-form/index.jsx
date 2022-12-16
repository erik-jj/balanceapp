import React, { useRef, useState } from "react";
import AlertView from "../alertview/index";
import LoadingSpinner from "../misc/loading-spinner";
import { createUser } from "../../services/api/users/index";
import { useNavigate } from "react-router-dom";

const CreateAccountForm = () => {
  const navigate = useNavigate();
  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const rePasswordRef = useRef(null);
  const submitButtonRef = useRef(null);
  const [alert, setAlert] = useState(null);
  const [loading, setLoading] = useState(false);
  const [login, setLogin] = useState(false);
  
  const submitHandler = (event) => {
    event.preventDefault();
    submitButtonRef.current.setAttribute("disabled", "disabled");
    setAlert(null);
    setLoading(true);
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const rePassword = rePasswordRef.current.value;
    const username = usernameRef.current.value;
    if (username.trim() === "" || username.trim().length < 3) {
      setAlert({ message: "Nombre de usuario invalido", color: "failure" });
      setLoading(false);
      submitButtonRef.current.removeAttribute("disabled");
      return;
    }
    if (password !== rePassword) {
      setAlert({ message: "La contraseñas no coinciden ", color: "failure" });
      setLoading(false);
      submitButtonRef.current.removeAttribute("disabled");
      return;
    }
    const formData = {
      email: email,
      password: password,
      username: username,
    };
    createUser(formData)
      .then((res) => {
        setAlert({
          message: "Se te ha enviado un correo de verificación",
          color: "info",
        });
        setLoading(false);
        setLogin(true);
        submitButtonRef.current.removeAttribute("disabled");
      })
      .catch((error) => {
        setAlert({
          message: "Ha ocurrido un error, intenta nuevamente.",
          color: "failure",
        });
        setLoading(false);
        submitButtonRef.current.removeAttribute("disabled");
      });
  };

  return (
    <>
      <div className="h-full flex flex-col sm:gap-4 items-center justify-center relative md:mb-12 mb-2  ">
        <div className="mt-2 w-full lg:px-12 md:px-12 px-6 lg:w-2/3 lg:max-w-2xl md:w-2/3 relative">
          <form onSubmit={submitHandler}>
            <div className="overflow-hidden shadow-md rounded-md ">
              <div className="pt-4 md:pt-8">
                <h2 className="md:text-3xl text-2xl font-bold  text-gray-900 text-center">
                  Crea tu cuenta
                </h2>
              </div>
              <div className="bg-white px-8 py-5 ">
                <div className="flex flex-col gap-5">
                  <div className="">
                    <label
                      htmlFor="username"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Nombre de usuario:
                    </label>
                    <input
                      ref={usernameRef}
                      required
                      maxLength="15"
                      minLength="3"
                      type="text"
                      name="username"
                      placeholder="Usuario"
                      id="username"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-50"
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
                      required
                      ref={emailRef}
                      maxLength="30"
                      type="email"
                      name="email"
                      id="email"
                      placeholder="correo@mail.com"
                      autoComplete="email"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-50"
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
                      required
                      ref={passwordRef}
                      maxLength="15"
                      minLength="8"
                      type="password"
                      name="password"
                      placeholder="••••••••"
                      id="password"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-50"
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
                      required
                      ref={rePasswordRef}
                      maxLength="15"
                      minLength="8"
                      type="password"
                      placeholder="••••••••"
                      name="re-password"
                      id="re-password"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-50 "
                    />
                  </div>
                </div>
              </div>
              {login ? (
                <div className="pt-0 pb-5 flex justify-center">
                  <button
                    onClick={() => navigate("/login")}
                    className="rounded-md  bg-blue-600 hover:bg-blue-800 w-2/4 py-2 text-base font-semibold text-white shadow-sm "
                  >
                    Ir a inicio de sesión
                  </button>
                </div>
              ) : (
                <div className="pt-0 pb-5 flex justify-center">
                  <button
                    ref={submitButtonRef}
                    type="submit"
                    className="rounded-md  bg-blue-600 hover:bg-blue-800 w-2/4 py-2 text-base font-semibold text-white shadow-sm "
                  >
                    {loading ? (
                      <LoadingSpinner message={"Procesando..."} />
                    ) : (
                      "Crear cuenta"
                    )}
                  </button>
                </div>
              )}
            </div>
            <div className="h-12">
              {alert ? <AlertView props={alert} /> : <></>}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateAccountForm;
