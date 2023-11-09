import Logo from "../components/logo/Logo";
import { Link } from "react-router-dom";
import PedidosC from "../components/pedidos/PedidosC";
import { useState } from "react";
import Modal from "../components/modal/Modal";
import { connect } from 'react-redux';
import { addNewOrder } from '../redux/actions/useOrdensActions';
import PropTypes from "prop-types";


function Pedidos({  addUserOrderAction  }) {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newOrder, setNewOrder] = useState({
    nombreUser: "",
    nombreCliente: "",
    producto: "",
  });

    // LOGICA DEL MODAL 
    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setNewOrder({ ...newOrder, [name]: value });
    };
  
    const handleAddOrder = (e) => {
      e.preventdefault
      addUserOrderAction(newOrder)
      closeModal();
    };

  return (
    <>
      {/* Navbar de la app  */}
      <div className="flex justify-between pl-5 pr-5 items-center">
        <Logo />

        <div className="w-96 flex justify-center items-center gap-5">
          <div className= "cursor-pointer bg-[#48D390] p-2 rounded-md hover:bg-[#208554] duration-200" onClick={openModal}>
          <p className="text-white font-semibold text-xl uppercase">
              AGREGAR PEDIDO
            </p>
          </div>
          <Link
            to={"/"}
            className="bg-[#48D390] p-2 rounded-md hover:bg-red-500 duration-200"
          >
            <p className="text-white font-semibold text-xl uppercase">
              cerrar sesion
            </p>
          </Link>
        </div>
      </div>

      {isModalOpen && (
        <Modal
          closeModal={closeModal}
          handleInputChange={handleInputChange}
          handleAddOrder={handleAddOrder}
          newOrder={newOrder}
        />
      )}

      <div className="flex justify-center items-center">
        <PedidosC />
      </div>


    </>
  );
}

Pedidos.propTypes = {
  userOrders: PropTypes.func.isRequired,
  addUserOrderAction: PropTypes.object.isRequired,

};

const mapStateToProps = (state) => {
  return {
    userOrders: state.userOrders.orders,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addUserOrderAction: (newOrder) => dispatch(addNewOrder(newOrder))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Pedidos);
