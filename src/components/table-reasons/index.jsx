import React, { useEffect } from "react";
import TableRow from "./table-row";

const TableReasons = ({ reasons }) => {
  useEffect(() => {}, []);

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
                Nombre
              </th>
              <th scope="col" className="py-3 pr-4">
                Balance
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
            {reasons.map((reason, index) => (
              <TableRow
                key={"reasonsrow-" + reason.id}
                props={{ reason, index }}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableReasons;
