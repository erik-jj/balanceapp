import React, { useRef, useState } from "react";
import Cookie from "js-cookie";
import { useNavigate } from "react-router-dom";
import useUserStore from "../../hooks/useUserStore";
import { login } from "../../services/api/auth/index";
import AlertView from "../alertview";
import LoadingSpinner from "../misc/loading-spinner";

const LoginForm = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();
  const submitButtonRef = useRef(null);
  const recoveryButtonRef = useRef(null);

  const [alert, setAlert] = useState(null);
  const [loading, setLoading] = useState(false);
  const { setUser } = useUserStore();

  const SubmitHandler = (event) => {
    event.preventDefault();
    submitButtonRef.current.setAttribute("disabled", "disabled");
    recoveryButtonRef.current.setAttribute("disabled", "disabled");
    setAlert(null);
    setLoading(true);
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const formData = {
      email: email,
      password: password,
    };

    login(formData)
      .then((res) => {
        if (res.message === "mail sent") {
          setAlert({
            message: "Se te ha enviado un correo de verificación",
            color: "info",
          });
          setLoading(false);
          submitButtonRef.current.removeAttribute("disabled");
          recoveryButtonRef.current.removeAttribute("disabled");
        } else {
          setUser(res.user);
          Cookie.set("token", res.token, { expires: 1 });
          navigate("/home");
        }
      })
      .catch((error) => {
        if (error.message === "Network Error") {
          setAlert({
            message: "Error de conexión, intente mas tarde.",
            color: "failure",
          });
        } else {
          setAlert({
            message: "No autorizado, comprueba tus credenciales de inicio.",
            color: "failure",
          });
        }
        setLoading(false);
        submitButtonRef.current.removeAttribute("disabled");
        recoveryButtonRef.current.removeAttribute("disabled");
      });
  };

  return (
    <>
      <div className="h-full md:mb-12 mb-2 flex flex-col gap-2 sm:gap-4 items-center justify-center relative ">
        <div className="mt-2 w-full lg:px-12 md:px-12 px-6 lg:w-2/3 lg:max-w-2xl md:w-2/3 ">
          <form onSubmit={SubmitHandler}>
            <div className="overflow-hidden shadow-md rounded-md ">
              <div className="pt-4 md:pt-8">
                <h2 className="md:text-3xl text-2xl font-bold  text-gray-900 text-center">
                  Iniciar sesión
                </h2>
              </div>
              <div className="bg-white px-8 py-5 ">
                <div className="flex flex-col gap-5">
                  <div className="">
                    <label
                      htmlFor="email-address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Correo electrónico:
                    </label>
                    <input
                      ref={emailRef}
                      maxLength="30"
                      type="email"
                      required
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
                      ref={passwordRef}
                      maxLength="15"
                      required
                      type="password"
                      name="password"
                      placeholder="••••••••"
                      id="password"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-50"
                    />
                  </div>
                </div>
              </div>
              <div className="pt-0 pb-5 flex flex-col justify-center items-center gap-4">
                <button
                  ref={submitButtonRef}
                  type="submit"
                  className="rounded-md  bg-blue-600 hover:bg-blue-800 w-2/4 py-2 text-base font-semibold text-white shadow-sm "
                >
                  {loading ? (
                    <LoadingSpinner message={"Procesando..."} />
                  ) : (
                    "Iniciar sesión"
                  )}
                </button>
                <button
                  ref={recoveryButtonRef}
                  onClick={() => navigate("/password-recovery")}
                  className="text-sm font-medium text-blue-600 hover:underline dark:text-primary-500"
                >
                  ¿Olvidaste tu contraseña?
                </button>
              </div>
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

export default LoginForm;
