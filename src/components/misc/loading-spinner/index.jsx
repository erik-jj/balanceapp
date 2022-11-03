import React from "react";

const LoadingSpinner = ({ message }) => {
  return (
    <div className="flex justify-center items-center">
      <div
        className="spinner-border animate-spin inline-block w-6 h-6 border-[3px] rounded-full"
        role="status"
      ></div>
      <p className="ml-3">{message}</p>
    </div>
  );
};

export default LoadingSpinner;
