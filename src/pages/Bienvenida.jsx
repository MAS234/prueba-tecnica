import box from "../assets/box-removebg-preview.png";
import { Link } from "react-router-dom";
import Logo from "../components/logo/Logo";

function Bienvenida() {
  return (
    <>

    <Logo/>

      <h1 className="lg:text-5xl text-3xl mt-20 font-bold text-center text-[#48D390]" data-aos="zoom-in">
        Bienvenido a su aplicación de pedidos
      </h1>

      <div
        type="button"
        className="flex flex-col md:flex-row  justify-center items-center mt-16 gap-5"
        data-aos="zoom-in"
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

      <div className="fixed bottom-0 w-full flex justify-between items-center" data-aos="fade-up">
        <img src={box} alt="box1" className="w-28 h-28 m-5" />
        <img src={box} alt="box1" className="w-28 h-28 m-5 scale-x-[-1]" />
      </div>
    </>
  );
}

export default Bienvenida;
