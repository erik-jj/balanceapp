import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className="flex items-center h-full p-16 dark:bg-gray-900 dark:text-gray-100">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-md text-center">
            <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
              <span className="sr-only">Error</span>404
            </h2>
            <p className="text-2xl font-semibold md:text-3xl">
              Lo sentimos, no se pudo encontrar la pagina.
            </p>
            <p className="mt-4 mb-8 dark:text-gray-400">
              La pagina que estas buscando no existe o no se encuentra
              disponible por el momento.
            </p>
            <button
              onClick={() => navigate("/home")}
              className="rounded-md  bg-blue-600 hover:bg-blue-800 w-2/4 py-2 text-base font-semibold text-white shadow-sm "
            >
              Regresar
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
