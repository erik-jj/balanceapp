import React from "react";
import useModalReason from "../../../hooks/useModalReason";

const TableRow = ({ props }) => {
  const { setModalEdit, setModalDelete, setCurrentReason } = useModalReason();

  return (
    <>
      <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
        <td className="py-4 pl-4 pr-4">{props?.index + 1}</td>
        <th
          scope="row"
          className="py-4 pr-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {props?.reason?.name}
        </th>
        <td className="py-4 pr-4">
          {" "}
          {props?.reason?.isIncome ? "Positivo" : "Negativo"}
        </td>
        <td className="py-4 pr-4">
          <button
            onClick={() => {
              setModalEdit(true);
              setCurrentReason(props?.reason);
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
              setCurrentReason(props?.reason);
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
