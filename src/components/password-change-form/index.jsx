import React, { useRef, useState } from "react";
import { changePassword } from "../../services/api/auth";
import AlertView from "../alertview";
import LoadingSpinner from "../misc/loading-spinner";

const PasswordChangeForm = () => {
  const passwordRef = useRef(null);
  const rePasswordRef = useRef(null);
  const [alert, setAlert] = useState(null);
  const [loading, setLoading] = useState(false);
  const [disable, setDisable] = useState(false);

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
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    const formData = {
      token,
      password,
    };
    changePassword(formData)
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
      <div className="h-full md:mb-12 mb-2 flex flex-col gap-2 sm:gap-4 items-center justify-center relative ">
        <div className="mt-2 w-full lg:px-12 md:px-12 px-6 lg:w-2/3 lg:max-w-2xl md:w-2/3 ">
          <form onSubmit={submitHandler}>
            <div className="overflow-hidden shadow-md rounded-md ">
              <div className="pt-4 md:pt-8">
                <h2 className="md:text-3xl text-2xl font-bold  text-gray-900 text-center">
                  Cambio de contraseña
                </h2>
              </div>
              <div className="bg-white px-8 py-5 ">
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
              <div className="pt-4 pb-8 flex flex-col justify-center items-center gap-4">
                <button
                  disabled={disable}
                  type="submit"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-blue-600 hover:bg-blue-800 w-2/4 px-4 py-2 text-base font-semibold text-white shadow-sm "
                >
                  {loading ? (
                    <LoadingSpinner message={"Procesando..."} />
                  ) : (
                    <p className="text-base font-semibold">
                      Cambiar contraseña
                    </p>
                  )}
                </button>
              </div>
              {alert ? <AlertView props={alert} /> : <></>}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default PasswordChangeForm;
