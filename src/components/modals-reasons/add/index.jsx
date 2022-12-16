import React, { Fragment } from "react";
import { useRef } from "react";
import useModalReason from "../../../hooks/useModalReason";
import { useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { createReason } from "../../../services/api/reasons/index";
import Cookies from "js-cookie";
import useDataStore from "../../../hooks/useDataStore";
import LoadingSpinner from "../../misc/loading-spinner";
import AlertView from "../../alertview";
const AddReasonModal = () => {
  const arrayTypes = [
    { id: 1, name: "Positivo", isIncome: true },
    { id: 2, name: "Negativo", isIncome: false },
  ];
  const { fetchReasons } = useDataStore();
  const tokenLoaded = Cookies.get("token");
  const [alert, setAlert] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedType, setSelectedType] = useState(arrayTypes[0]);
  const { setModalAdd } = useModalReason();
  const nameRef = useRef(null);
  const confirmButtonRef = useRef(null);
  const submitHandler = (event) => {
    event.preventDefault();
    confirmButtonRef.current.setAttribute("disabled", "disabled");
    setAlert(null);
    setLoading(true);
    const name = nameRef.current.value;
    const type = selectedType;
    if (name.trim() === "" || name.trim().length < 3) {
      setAlert({ message: "Nombre invalido", color: "failure" });
      setLoading(false);
      confirmButtonRef.current.removeAttribute("disabled");
      return;
    }
    const formData = {
      name: name,
      isIncome: type.isIncome,
    };
    createReason(formData, tokenLoaded)
      .then((res) => {
        fetchReasons(tokenLoaded);
        setModalAdd(false);
      })
      .catch((error) => {
        setAlert({
          message: "Ha ocurrido un error, intentalo nuevamente",
          color: "failure",
        });
        setLoading(false);
        confirmButtonRef.current.removeAttribute("disabled");
      });
  };

  return (
    <>
      {/* Modal content */}
      <div className="relative bg-gray-50 rounded-lg shadow dark:bg-gray-700 ">
        {/* Modal header */}
        <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Agregar Razón
          </h3>
          <button
            onClick={() => setModalAdd(false)}
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
            <div className="flex flex-col gap-5">
              <div className="">
                <label
                  htmlFor="email-address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nombre:
                </label>
                <input
                  ref={nameRef}
                  maxLength="20"
                  minLength="3"
                  type="text"
                  required
                  name="name"
                  id="name"
                  placeholder="Gastos"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-50"
                />
              </div>
              <div className="col-span-6">
                <label
                  htmlFor="email-address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Tipo de saldo:
                </label>
                <div>
                  <Listbox value={selectedType} onChange={setSelectedType}>
                    <div className="relative mt-1">
                      <Listbox.Button className="relative w-full cursor-default rounded-md shadow-sm  border border-gray-300  bg-gray-50 py-2 pl-3 pr-10 text-left  focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-300 ">
                        <span className="block truncate">
                          {selectedType.name}
                        </span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                          <ChevronUpDownIcon
                            className="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                        </span>
                      </Listbox.Button>
                      <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white  py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                          {arrayTypes.map((type, typeId) => (
                            <Listbox.Option
                              key={typeId}
                              className={({ active }) =>
                                `relative cursor-default select-none py-2 pl-4 pr-4 ${
                                  active
                                    ? "bg-blue-100 text-gray-900"
                                    : "text-gray-900"
                                }`
                              }
                              value={type}
                            >
                              {({ selected }) => (
                                <>
                                  <span
                                    className={`block truncate ${
                                      selected ? "font-medium" : "font-normal"
                                    }`}
                                  >
                                    {type.name}
                                  </span>
                                </>
                              )}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </Listbox>
                </div>
              </div>
            </div>
          </div>
          {/* Modal footer */}
          <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
            <button
              ref={confirmButtonRef}
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

export default AddReasonModal;
