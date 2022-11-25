import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import AddRegisterModal from "../../../components/modals-registers/add";
import DeleteRegisterModal from "../../../components/modals-registers/delete";
import EditRegisterModal from "../../../components/modals-registers/edit";
import TableRegisters from "../../../components/table-registers";
import useModalRegister from "../../../hooks/useModalRegister";
import useUserStore from "../../../hooks/useUserStore";
import AuthLayout from "../../../layouts/auth-layout/index.jsx";
import ModalLayout from "../../../layouts/modal-layout";
import LoadingSpinner from "../../../components/misc/loading-spinner";
import useDataStore from "../../../hooks/useDataStore";

const Reasons = () => {
  const {
    fetchCurrentMonthRegisters,
    currentMonthRegisters,
    fetchReasons,
    reasons,
  } = useDataStore();
  const { modalAdd, modalEdit, modalDelete, setModalAdd } = useModalRegister();
  const { user } = useUserStore();
  const [loading, setLoading] = useState(false);
  const tokenLoaded = Cookies.get("token");

  useEffect(() => {
    const tokenLoaded = Cookies.get("token");
    if (currentMonthRegisters.length === 0) {
      fetchCurrentMonthRegisters(tokenLoaded);
    }
    if (reasons.length === 0) {
      fetchReasons(tokenLoaded);
    }
  }, []);

  return (
    <>
      <AuthLayout>
        <div className="w-full flex justify-center flex-col md:py-8 md:px-8  py-4 px-2 ">
          <div className="flex justify-center">
            <h1 className="text-2xl font-bold text-gray-700">Registros</h1>
          </div>
          <div className="flex items-center mt-8">
            <button
              onClick={() => setModalAdd(true)}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-blue-600 hover:bg-blue-800 px-4 py-2 text-base font-medium text-white shadow-sm "
            >
              <p className="text-base font-medium">Agregar Registro</p>
            </button>
          </div>
          <div className="mt-4 ">
            {loading ? <LoadingSpinner /> : <TableRegisters />}
          </div>
        </div>
        {modalAdd ? (
          <ModalLayout>
            <AddRegisterModal />
          </ModalLayout>
        ) : (
          <></>
        )}
        {modalEdit ? (
          <ModalLayout>
            <EditRegisterModal />
          </ModalLayout>
        ) : (
          <></>
        )}
        {modalDelete ? (
          <ModalLayout>
            <DeleteRegisterModal />
          </ModalLayout>
        ) : (
          <></>
        )}
      </AuthLayout>
    </>
  );
};

export default Reasons;
