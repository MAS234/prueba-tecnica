import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchUserOrders } from "../../redux/actions/useOrdensActions";
import { BsFillTrashFill } from "react-icons/bs";
import { deleteUserOrder } from "../../redux/actions/useOrdensActions";

function PedidosC({ fetchUserOrdersAction, userOrders, deleteUserOrder }) {
  const [username, setUsername] = useState("");
  const [userRol, setUserRol] = useState("");

  
  const [orders, setOrders] = useState([]);

  // HACE LA PETICION 
  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    const storedRole = localStorage.getItem("rol");

    if (storedUsername) {
      setUsername(storedUsername);
      fetchUserOrdersAction(storedUsername);
      setUserRol(storedRole);
    }
  }, [fetchUserOrdersAction]);

  // GUARDA EN EL ESTADO ORDERS 
  useEffect(() => {
    const pedidosUsuario  = userOrders.pedidoFinal;
      setOrders(pedidosUsuario);
  }, [userOrders]);

  useEffect(() => {}, [userRol]);

  // ELIMINAR PEDIDO
  const handleDeleteOrder = async (orderId) => {
    const prevOrders = [...orders];

    const updatedOrders = orders.filter(order => order.id !== orderId);
    setOrders(updatedOrders);
    try {
      await deleteUserOrder(orderId);
      console.log("ELIMINADO")
    } catch (error) {
      setOrders(prevOrders);
      console.log("ERROR AL ELIMINAR")

    }
  };

  return (
    <div>
      <h1 className="text-2xl text-[#48D390] font-bold">
        {userRol}: {username}
      </h1>

      {/* Mostrar los pedidos */}
      {Array.isArray(orders) ? (
  <div className="w-full mt-10 lg:flex lg:flex-wrap flex-row justify-center gap-5" data-aos="zoom-in">
    {orders.map((order) => (
      <div
        key={order.id}
        className="max-w-sm w-full lg:max-w-md rounded-lg overflow-hidden shadow-lg hover:shadow-[#48D390] duration-200"
        
      >
        <h3 className="text-center mt-5 text-[#48D390] font-bold text-xl">Pedido</h3>
        <div className="p-5 font-medium text-gray-600">
          <p>ID del pedido: {order.id}</p>
          <p>Producto: {order.producto}</p>
          <p>Nombre del cliente: {order.nombreCliente}</p>
        </div>
        <div className="flex justify-center p-5">
          <BsFillTrashFill
            className="text-2xl text-red-600 hover:text-red-700 duration-200 cursor-pointer"
            onClick={() => handleDeleteOrder(order.id)}
          />
        </div>
      </div>
    ))}
  </div>
) : (
  <p className="text-center text-xl font-bold text-red-500">Recargue la pagina</p>
)}
    </div>
  );
}

PedidosC.propTypes = {
  fetchUserOrdersAction: PropTypes.func.isRequired,
  userOrders: PropTypes.object.isRequired,
  deleteUserOrder: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    userOrders: state.userOrders.orders,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserOrdersAction: (username) => dispatch(fetchUserOrders(username)),
    deleteUserOrder: (orderId) => dispatch(deleteUserOrder(orderId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PedidosC);
