import React, { Fragment } from "react";
import { useRef } from "react";
import useModalRegister from "../../../hooks/useModalRegister";
import { useState } from "react";
import { deleteRegister } from "../../../services/api/registers/index";
import Cookies from "js-cookie";
import useDataStore from "../../../hooks/useDataStore";
import LoadingSpinner from "../../misc/loading-spinner";
import AlertView from "../../alertview";
const DeleteRegisterModal = () => {
  const token = Cookies.get("token");
  const { fetchCurrentMonthRegisters } = useDataStore();
  const { setModalDelete, currentRegister, setCurrentRegister } =
    useModalRegister();
  const [alert, setAlert] = useState(null);
  const [loading, setLoading] = useState(false);
  const confirmButtonRef = useRef(null);
  const confirmHandler = (event) => {
    event.preventDefault();
    confirmButtonRef.current.setAttribute("disabled", "disabled");
    setAlert(null);
    setLoading(true);
    const id = currentRegister.id;
    deleteRegister(id, token)
      .then((res) => {
        fetchCurrentMonthRegisters(token);
        setLoading(false);
        setModalDelete(false);
        setCurrentRegister({});
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
            Eliminar Registro
          </h3>
          <button
            onClick={() => setModalDelete(false)}
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
        {/* Modal body */}
        <div className="p-6 space-y-6">
          <div className="flex flex-col gap-5">
            <span className="text-gray-700 font-semibold">
              El siguiente registro sera eliminado:
            </span>
            <span className=" ">{currentRegister.name}</span>
            <span className="italic text-gray-500 text-sm ">
              Id:{currentRegister.id}
            </span>
          </div>
        </div>
        {/* Modal footer */}
        <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
          <button
            ref={confirmButtonRef}
            onClick={confirmHandler}
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
      </div>
    </>
  );
};

export default DeleteRegisterModal;
