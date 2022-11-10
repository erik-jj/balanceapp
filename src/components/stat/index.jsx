import React from "react";

const Stat = ({ props }) => {


  return (
    <div className="stats shadow bg-gray-100 ">
      <div className="stat">
        <div className="stat-title font-semibold ">{props.title}</div>
        <div className={`stat-value ${props.color}`}>{props.value}</div>
        <div className="stat-desc mt-1">{props.description}</div>
      </div>
    </div>
  );
};

export default Stat;
