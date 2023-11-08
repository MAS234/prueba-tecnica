import orden from "../assets/orden.png";
import box from "../assets/box-removebg-preview.png";
import { Link } from "react-router-dom";

function Bienvenida() {
  return (
    <>
      <div className="lg:m-5 m-2 flex items-center justify-start">
        <h2 className="font-bold text-2xl text-[#48D390]">AppPedilo</h2>
        <img src={orden} alt="orden" className="w-20 h-20" />
      </div>

      <h1 className="lg:text-5xl text-3xl mt-20 font-bold text-center text-[#48D390]">
        Bienvenido a su aplicación de pedidos
      </h1>

      <div
        type="button"
        className="flex flex-col md:flex-row  justify-center items-center mt-16 gap-5"
      >
        <Link
        to={"/register"}
        className="bg-[#48D390] hover:bg-white border-2 border-[#48D390] border-solid p-3 shadow-md shadow-gray-400 text-white hover:text-[#48D390] font-semibold text-2xl rounded-md duration-200">
          Registrarse
        </Link>
        <Link
          to={"/login"}
          className="bg-[#48D390] hover:bg-white border-2 border-[#48D390] border-solid p-3 shadow-md shadow-gray-400 text-white hover:text-[#48D390] font-semibold text-2xl rounded-md duration-200"
        >
          Loguearse
        </Link>
      </div>

      <div className="fixed bottom-0 w-full flex justify-between items-center">
        <img src={box} alt="box1" className="w-28 h-28 m-5" />
        <img src={box} alt="box1" className="w-28 h-28 m-5 scale-x-[-1]" />
      </div>
    </>
  );
}

export default Bienvenida;
