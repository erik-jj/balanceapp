import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import AddReasonModal from "../../../components/modals-reasons/add";
import DeleteReasonModal from "../../../components/modals-reasons/delete";
import EditReasonModal from "../../../components/modals-reasons/edit";
import useModalReason from "../../../hooks/useModalReason";
import useUserStore from "../../../hooks/useUserStore";
import AuthLayout from "../../../layouts/auth-layout/index.jsx";
import ModalLayout from "../../../layouts/modal-layout";
import useDataStore from "../../../hooks/useDataStore";
import LoadingSpinner from "../../../components/misc/loading-spinner";
import TableReasons from "../../../components/table-reasons";
const Reasons = () => {
  const { modalAdd, modalEdit, modalDelete, setModalAdd } = useModalReason();
  const { user } = useUserStore();
  const { reasons, fetchReasons } = useDataStore();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const tokenLoaded = Cookies.get("token");
    if (reasons.length === 0) {
      setLoading(true);
      fetchReasons(tokenLoaded);
      setLoading(false);
    }
  }, []);

  return (
    <>
      <AuthLayout>
        <div className="w-full flex justify-center flex-col md:py-8 md:px-8  py-4 px-2 ">
          <div className="flex justify-center">
            <h1 className="text-2xl font-bold text-gray-700">Razones</h1>
          </div>
          <div className="flex items-center mt-8">
            <button
              onClick={() => setModalAdd(true)}
              className="w-36 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-blue-600 hover:bg-blue-800 px-4 py-2 text-base font-medium text-white shadow-sm "
            >
              <p className="text-base font-medium">Agregar Razón</p>
            </button>
          </div>
          <div className="mt-4 ">
            {loading ? <LoadingSpinner /> : <TableReasons reasons={reasons} />}
          </div>
        </div>
        {modalAdd ? (
          <ModalLayout>
            <AddReasonModal />
          </ModalLayout>
        ) : (
          <></>
        )}
        {modalEdit ? (
          <ModalLayout>
            <EditReasonModal />
          </ModalLayout>
        ) : (
          <></>
        )}
        {modalDelete ? (
          <ModalLayout>
            <DeleteReasonModal />
          </ModalLayout>
        ) : (
          <></>
        )}
      </AuthLayout>
    </>
  );
};

export default Reasons;
