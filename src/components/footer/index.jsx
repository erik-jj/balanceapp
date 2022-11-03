import React from "react";
const Footer = () => {
  return (
    <>
      <footer className=" absolute bottom-0 w-full py-4 px-1 flex flex-col items-center md:flex md:justify-between md:flex-row md:py-4 md:px-16  rounded-t-lg shadow ">
        <span className="text-sm text-gray-700 sm:text-center">
          © 2022{" "}
          <a href="/" className="hover:underline hover:text-blue-600">
            Balance
          </a>
          . Todos los derechos reservados.
        </span>
        <ul className="text-gray-700 flex flex-wrap items-center mt-3 text-sm  dark:text-gray-400 sm:mt-0">
          <li>
            <a href="/" className="mr-4 hover:underline md:mr-6 ">
              Acerca de
            </a>
          </li>
          <li>
            <a href="/" className="mr-4 hover:underline md:mr-6">
              Política de privacidad
            </a>
          </li>
          <li>
            <a href="/" className="mr-4 hover:underline md:mr-6">
              Licencia
            </a>
          </li>
          <li>
            <a href="/" className="hover:underline">
              Contacto
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
