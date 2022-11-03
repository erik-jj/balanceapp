import React from "react";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <>
      <footer className="bottom-0 w-full  ">
        <div className=" py-4 px-1 flex flex-col items-center md:flex md:justify-between md:flex-row md:py-4 md:px-16  rounded-t-lg ">
          <span className="text-sm text-gray-700 sm:text-center">
            © 2022{" "}
            <button
              onClick={() => navigate("/")}
              className="hover:underline hover:text-blue-600"
            >
              Balance
            </button>
            . Todos los derechos reservados.
          </span>
          <ul className="text-gray-700 flex flex-wrap items-center mt-3 text-sm  dark:text-gray-400 sm:mt-0">
            <li>
              <button
                onClick={() => navigate("/")}
                className="mr-4 hover:underline md:mr-6 "
              >
                Acerca de
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("/")}
                className="mr-4 hover:underline md:mr-6"
              >
                Política de privacidad
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("/")}
                className="mr-4 hover:underline md:mr-6"
              >
                Licencia
              </button>
            </li>
            <li>
              <button onClick={() => navigate("/")} className="hover:underline">
                Contacto
              </button>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
