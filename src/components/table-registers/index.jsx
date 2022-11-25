import React, { useEffect, useState } from "react";
import useDataStore from "../../hooks/useDataStore";
import TableRow from "./table-row";

const TableRegisters = () => {
  const [registers, setRegisters] = useState([]);
  const { currentMonthRegisters } = useDataStore();
  const handleQuery = () => {
    setRegisters([]);
  };

  useEffect(() => {
    setRegisters(currentMonthRegisters);
  }, [currentMonthRegisters]);

  return (
    <>
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-sm text-gray-900  bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 pl-4 pr-4">
                #
              </th>
              <th scope="col" className="py-3  pr-4">
                Razón
              </th>
              <th scope="col" className="py-3 pr-4">
                Balance
              </th>
              <th scope="col" className="py-3 pr-4">
                Monto
              </th>
              <th scope="col" className="py-3 pr-4">
                Fecha
              </th>
              <th scope="col" className="py-3 pr-4">
                Editar
              </th>
              <th scope="col" className="py-3 pr-4">
                Eliminar
              </th>
            </tr>
          </thead>
          <tbody>
            {registers.map((register, index) => (
              <TableRow props={{ register, index }} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableRegisters;
