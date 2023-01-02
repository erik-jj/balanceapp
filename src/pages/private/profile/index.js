import React, { useState } from "react";
import useModalPassword from "../../../hooks/useModalPassword";
import useUserStore from "../../../hooks/useUserStore";
import AuthLayout from "../../../layouts/auth-layout/index.jsx";
import PasswordModal from "../../../components/password-modal";
import ModalLayout from "../../../layouts/modal-layout";

const Profile = () => {
  const { user } = useUserStore();
  const { setModalPassword, modalPassword } = useModalPassword();

  return (
    <>
      <AuthLayout>
        <div className=" w-full flex justify-center items-center flex-col md:py-8 md:px-8 py-4 px-2 gap-8  ">
          <div className="flex justify-center">
            <h1 className="text-2xl font-bold text-gray-700 ">Perfil</h1>
          </div>
          <div className="grid  grid-flow-row justify-center  px-16 py-4 bg-gray-200  rounded-md shadow-md">
            <p className=" py-2  font-semibold text-gray-700">
              Usuario:
              <span className="py-2 px-4 ml-4  rounded-md bg-white font-normal">
                {user.username}
              </span>
            </p>
            <p className=" py-2  font-semibold text-gray-700">
              Correo:
              <span className="py-2 px-4 ml-6  rounded-md bg-white font-normal">
                {user.email}
              </span>
            </p>
          </div>
          <div className="flex items-center mt-8 ">
            <button
              onClick={() => setModalPassword(true)}
              className="w-full inline-flex items-center justify-center  rounded-md border border-transparent bg-blue-600 hover:bg-blue-800 px-8 py-2 text-base font-medium text-white shadow-sm "
            >
              <p className=" text-base font-medium ">Cambiar contraseña</p>
            </button>
          </div>
        </div>
        {modalPassword ? (
          <ModalLayout>
            <PasswordModal />
          </ModalLayout>
        ) : (
          <></>
        )}{" "}
      </AuthLayout>
    </>
  );
};

export default Profile;
