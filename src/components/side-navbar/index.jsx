import {
  TableCellsIcon,
  UserCircleIcon,
  ListBulletIcon,
  ArrowLeftOnRectangleIcon,
  PresentationChartLineIcon,
} from "@heroicons/react/24/outline";
import logo from "../../assets/logos/logo-icon-transparent.png";
import { useNavigate } from "react-router-dom";

export default function SideNavbar() {
  const navigate = useNavigate();
  const logoutHandler = () => {
    //logout
  };
  return (
    <aside className="w-48 h-screen bg-gray-100" aria-label="Sidebar">
      <div className=" overflow-y-auto py-2 px-3  rounded ">
        <div>
          <span className="sr-only">Balance App</span>
          <img className=" h-auto w-full mt-2 px-4 " src={logo} alt="logo" />
        </div>
        <ul className="space-y-2 mt-12">
          <li className="hover:bg-gray- 00 rounded-lg">
            <button
              onClick={() => navigate("/home")}
              className="flex items-center p-2 text-base font-normal text-gray-700    "
            >
              <PresentationChartLineIcon className="w-6 h-6" />
              <span className="ml-3">Dashboard</span>
            </button>
          </li>
          <li className="hover:bg-gray-200 rounded-lg">
            <button
              onClick={() => navigate("/registers")}
              className="flex items-center p-2 text-base font-normal text-gray-700 rounded-lg   "
            >
              <TableCellsIcon className="h-6 w-6" />
              <span className="ml-3">Registros</span>
            </button>
          </li>
          <li className="hover:bg-gray-200 rounded-lg">
            <button
              onClick={() => navigate("/reasons")}
              className="flex items-center p-2 text-base font-normal text-gray-700 rounded-lg   "
            >
              <ListBulletIcon className="w-6 h-6" />
              <span className="ml-3">Rasones</span>
            </button>
          </li>
          <li className="hover:bg-gray-200 rounded-lg">
            <button
              onClick={() => navigate("/profile")}
              className="flex items-center p-2 text-base font-normal text-gray-700 rounded-lg   "
            >
              <UserCircleIcon className="h-6 w-6" />
              <span className="ml-3">Perfil</span>
            </button>
          </li>
        </ul>
        <ul className="pt-4 mt-4 space-y-2 border-t border-gray-200 dark:border-gray-700 bottom-2/4 absolute">
          <li className="hover:bg-gray-200 rounded-lg">
            <button
              onClick={logoutHandler}
              className="flex items-center p-2 text-base font-normal text-gray-700 rounded-lg   "
            >
              <ArrowLeftOnRectangleIcon className="w-6 h-6 " />
              <span className="ml-3">Cerrar sesión</span>
            </button>
          </li>
        </ul>
      </div>
    </aside>
  );
}
