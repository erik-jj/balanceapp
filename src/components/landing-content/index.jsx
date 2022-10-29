import React from "react";
import { Button } from "flowbite-react";

const LandingContent = () => {
  return (
    <>
      <div className="h-4/6 w-full overflow-hidden  grid grid-cols-1 lg:grid-cols-2 bg-no-repeat bg-bottom lg:px-12 gap-5 mt-6 md:mt-12">
        <div className="flex items-center justify-center flex-col ">
          <p className="md:text-6xl text-5xl lg:max-w-xl font-extrabold text-center md:text-start ">
            Gestiona tu <span className=" text-blue-600">economía</span>
          </p>
          <br />
          <p className="text-lg text-gray-500 md:text-2xl max-w-xl lg:max-w-xl text-center md:text-start px-2 md:px-0 ">
            Obtén herramientas para el control de tus{" "}
            <span className=" text-blue-600 font-bold">gastos e ingresos</span>,
            únete ahora y comienza a llevar el control de tu economía.
          </p>
          <br />
          <Button class="inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-blue-600 hover:bg-blue-800 px-2 py-1  text-white shadow-sm  ">
            <p className="text-base font-medium">Crear cuenta</p>
          </Button>
          <br />
        </div>
        <div className="md:flex lg:items-center md:items-end items-center justify-center  ">
          <img
            className="h-auto w-full drop-shadow-xl bottom-0"
            src={`https://images.pexels.com/photos/6347719/pexels-photo-6347719.jpeg?cs=srgb&dl=pexels-liza-summer-6347719.jpg&fm=jpg&_gl=1*4avz2b*_ga*MTg0MTMzMjkwMi4xNjYwMjg1NDQ1*_ga_8JE65Q40S6*MTY2NjkzNzk3Ny43LjEuMTY2NjkzNzk5NC4wLjAuMA..`}
            alt="main"
          ></img>
        </div>
      </div>
    </>
  );
};

export default LandingContent;
