import React from "react";
import useModalRegister from "../../../hooks/useModalRegister";
import moment from "moment";
import "moment/locale/es";

const TableRow = ({ props }) => {
  const { setModalEdit, setModalDelete, setCurrentRegister } =
    useModalRegister();

  return (
    <>
      <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
        <td className="py-4 pl-4 pr-4">{props?.index + 1}</td>
        <th
          scope="row"
          className="py-4 pr-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {props?.register?.reason?.name}
        </th>
        <td className="py-4 pr-4">
          {props?.register?.reason?.isIncome ? "Positivo" : "Negativo"}
        </td>
        <td className="py-4 pr-4">${props?.register?.amount}</td>
        <td className="py-4 pr-4">
          {moment(props?.register?.createdAt).format("DD-MM-YYYY")}
        </td>
        <td className="py-4 pr-4">
          <button
            onClick={() => {
              setModalEdit(true);
              setCurrentRegister(props?.register);
            }}
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            Editar
          </button>
        </td>
        <td className="py-4 pr-4">
          <button
            onClick={() => {
              setModalDelete(true);
              setCurrentRegister(props?.register);
            }}
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            Eliminar
          </button>
        </td>
      </tr>
    </>
  );
};

export default TableRow;
