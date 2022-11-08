import React, { useRef } from "react";

const PasswordChangeForm = () => {
  const passwordRef = useRef(null);
  const rePasswordRef = useRef(null);

  const submitHandler = (event) => {
    event.preventDefault();
    const password = passwordRef.current.value;
    const rePassword = rePasswordRef.current.value;

    //llamada a la api de crear usuario
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
                      maxLength="15"
                      minlength="8"
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
                      maxLength="15"
                      minlength="8"
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
                  type="submit"
                  className="rounded-md  bg-blue-600 hover:bg-blue-800 w-2/4 py-2 text-base font-semibold text-white shadow-sm "
                >
                  Cambiar contraseña
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default PasswordChangeForm;
