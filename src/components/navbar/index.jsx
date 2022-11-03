import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../../assets/logos/logo-horizontal.png";
import { useNavigate } from "react-router-dom";

export default function NavBarTop() {
  const navigate = useNavigate();
  return (
    <Popover className="relative bg-white  ">
      <div className="mx-auto md:px-12 px-2 ">
        <div className="flex items-center justify-between border-b-2 md:border-b-0 border-gray-100 md:h-20 h-16 md:mt-1 md:justify-start md:space-x-10 md:px-8 px-2 ">
          <div className="flex justify-start lg:w-0 lg:flex-1 ">
            <button onClick={() => navigate("/")}>
              <span className="sr-only">Balance App</span>
              <img className="md:h-14 h-8 w-auto " src={logo} alt="logo" />
            </button>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>

          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            <button
              onClick={() => navigate("/login")}
              className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Iniciar Sesión
            </button>
            <button
              onClick={() => navigate("/create-account")}
              className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-blue-600 hover:bg-blue-800 px-4 py-2 text-base font-medium text-white shadow-sm "
            >
              Crear cuenta
            </button>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
        >
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-4">
              <div className="flex items-center justify-between ">
                <div>
                  <img className="h-10 w-auto " src={logo} alt="logo" />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                    <span className="sr-only">Cerrar</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="space-y-6 py-6 px-5">
              <div>
                <button
                  onClick={() => navigate("/create-account")}
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 hover:bg-blue-800  px-4 py-2 text-base font-medium text-white shadow-sm "
                >
                  Crear cuenta
                </button>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  ¿Estás registrado?{" "}
                  <button
                    onClick={() => navigate("/login")}
                    className="text-blue-600 hover:text-sky-500 "
                  >
                    Inicia sesión
                  </button>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
