import React from "react";

const ModalLayout = ({ children }) => {
  return (
    <>
      <div
        tabIndex={-1}
        aria-hidden="true"
        className="flex justify-center items-center overflow-y-auto overflow-x-hidden fixed z-50 p-4  w-full top-12 right-0 md:-mt-20 md:inset-0 h-modal md:h-full "
      >
        <div className="relative w-full max-w-2xl h-full md:h-auto ">
          {children}
        </div>
      </div>
    </>
  );
};

export default ModalLayout;
