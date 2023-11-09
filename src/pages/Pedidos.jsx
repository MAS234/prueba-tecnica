import Logo from "../components/logo/Logo"
import { Link } from "react-router-dom"
import PedidosC from "../components/pedidos/PedidosC"

function Pedidos() {
  return (
    <>
    {/* Navbar de la app  */}
    <div className="flex justify-around items-center">
    <Logo/>

    <h1 className="text-center text-[#48D390] text-3xl font-bold">Admin Miguel</h1>
    
    <Link to={"/"} className="bg-[#48D390] p-2 rounded-md hover:bg-[#208554] duration-200">
      <p className="text-white font-semibold text-xl uppercase">cerrar sesion</p>
    </Link>
    </div>

    <div className="flex justify-center items-center">
    <PedidosC/>
    </div>
    </>
  )
}

export default Pedidos
