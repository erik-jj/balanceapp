import React, { Fragment } from "react";
import { useRef } from "react";
import { useState } from "react";
import Cookies from "js-cookie";
import LoadingSpinner from "../../components/misc/loading-spinner";
import AlertView from "../../components/alertview";
import useModalPassword from "../../hooks/useModalPassword";
import { updateUser } from "../../services/api/users/index";
const PasswordModal = () => {
  const tokenLoaded = Cookies.get("token");
  const [alert, setAlert] = useState(null);
  const [loading, setLoading] = useState(false);
  const [disable, setDisable] = useState(false);
  const { setModalPassword } = useModalPassword();
  const passwordRef = useRef(null);
  const rePasswordRef = useRef(null);

  const submitHandler = (event) => {
    event.preventDefault();
    setDisable(true);
    setAlert(null);
    setLoading(true);
    const password = passwordRef.current.value;
    const rePassword = rePasswordRef.current.value;
    if (password !== rePassword) {
      setAlert({
        message: "Las contraseñas deben ser iguales",
        color: "failure",
      });
      setLoading(false);
      setDisable(false);
      return;
    }

    const formData = {
      password,
    };
    updateUser(formData, tokenLoaded)
      .then((res) => {
        setAlert({
          message: "La contraseña ha sido cambiada",
          color: "info",
        });
        setLoading(false);
      })
      .catch((error) => {
        setAlert({
          message: "Ha ocurrido un error, intentalo nuevamente",
          color: "failure",
        });
        setLoading(false);
        setDisable(false);
      });
  };

  return (
    <>
      {/* Modal content */}
      <div className="relative bg-gray-50 rounded-lg shadow dark:bg-gray-700 ">
        {/* Modal header */}
        <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Cambiar contraseña
          </h3>
          <button
            onClick={() => setModalPassword(false)}
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-toggle="staticModal"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <form onSubmit={submitHandler}>
          {/* Modal body */}
          <div className="p-6 space-y-6">
            <div className=" px-8 py-5 ">
              <div className="flex flex-col gap-5">
                <div className="col-span-6">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Nueva contraseña:
                  </label>
                  <input
                    disabled={disable}
                    ref={passwordRef}
                    required
                    maxLength="15"
                    minLength="8"
                    type="password"
                    name="password"
                    placeholder="••••••••"
                    id="password"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-50"
                  />
                </div>
                <div className="col-span-6">
                  <label
                    htmlFor="re-password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Confirmar contraseña:
                  </label>
                  <input
                    disabled={disable}
                    ref={rePasswordRef}
                    required
                    maxLength="15"
                    minLength="8"
                    type="password"
                    name="password"
                    placeholder="••••••••"
                    id="re-password"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-50"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Modal footer */}
          <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
            <button
              disabled={disable}
              type="submit"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-blue-600 hover:bg-blue-800 px-4 py-2 text-base font-medium text-white shadow-sm "
            >
              {loading ? (
                <LoadingSpinner message={"Procesando..."} />
              ) : (
                <p className="text-base font-medium">Confirmar</p>
              )}
            </button>
          </div>
          {alert ? <AlertView props={alert} /> : <></>}
        </form>
      </div>
    </>
  );
};

export default PasswordModal;
