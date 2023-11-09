import PropTypes from "prop-types";

function Modal({ closeModal, handleInputChange, handleAddOrder, newOrder }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-[#48D390] p-8 rounded-md">
          <span
            className="  text-4xl cursor-pointer font-bold text-white hover:text-red-600 duration-200"
            onClick={closeModal}
          >
            &times;
          </span>
        <h2 className="text-white text-2xl mb-4">Agregar Nuevo Pedido</h2>
        <form>
          <label className="text-white">
            Nombre de Usuario:
            <input
              className="rounded-md p-2 block w-full mb-4 text-[#48D390]"
              type="text"
              name="nombreUser"
              value={newOrder.nombreUser}
              onChange={handleInputChange}
            />
          </label>
          <label className="text-white">
            Nombre del Cliente:
            <input
              className="rounded-md p-2 block w-full mb-4 text-[#48D390]"
              type="text"
              name="nombreCliente"
              value={newOrder.nombreCliente}
              onChange={handleInputChange}
            />
          </label>
          <label className="text-white">
            Producto:
            <input
              className="rounded-md p-2 block w-full mb-4 text-[#48D390]"
              type="text"
              name="producto"
              value={newOrder.producto}
              onChange={handleInputChange}
            />
          </label>
          <button
          type="button"
            className="bg-[#48D390] hover:bg-white  hover:text-[#48D390] text-white  rounded-md p-2 duration-200 font-bold"
            onClick={handleAddOrder}
          >
            Agregar Pedido
          </button>
        </form>
      </div>
    </div>
  );
}

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleAddOrder: PropTypes.func.isRequired,
  newOrder: PropTypes.object.isRequired,
};

export default Modal;
