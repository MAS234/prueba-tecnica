import { useState } from "react";
import { register } from "../../redux/actions/userActions";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";

function RegisterC({ register }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("User");
  const [errorMessage, setErrorMessage] = useState("");

  const handleUserClick = (e) => {
    e.preventDefault();
    setSelectedOption("User");
  };

  const handleAdminClick = (e) => {
    e.preventDefault();
    setSelectedOption("Admin");
  };

  const validarFormulario = (e) => {
    e.preventDefault();
  
    if (username === "" || password === "" || confirmPassword === "") {
      setOpen(true);
      setErrorMessage("Por favor, complete todos los campos.");
    } else if (password !== confirmPassword) {
      setOpen(true);
      setErrorMessage("Las contraseñas no coinciden");
    } else {
      setOpen(false);
      register({ username, password, rol: selectedOption })
        .then((response) => {
          if (response) {
            setErrorMessage("");
            localStorage.setItem('username', username);
            localStorage.setItem('rol', selectedOption);
            navigate("/pedidos");
          } else {
            setErrorMessage("Error al registrar. Usuario ya existente u otro problema.");
          }
        })
        .catch((error) => {
          if (error.response && error.response.status === 400) {
            setErrorMessage("Usuario ya existente.");
          } else {
            setErrorMessage("Error al registrar. Inténtelo de nuevo.");
          }
        });
    }
  };
  

  return (
    <>
      <div className="w-full md:w-96 h-full flex items-center justify-center" data-aos="zoom-in">
        <div className="w-[22rem] md:w-96 bg-white rounded-md shadow-lg shadow-gray-900 p-5">
          <h1 className="text-4xl font-bold text-center text-[#48D390] mb-5">
            Registro
          </h1>
          <form action="">
            {/* Nombre */}
            <div className="flex flex-col space-y-3">
              {/* Nombre */}
            <div className="flex flex-col space-y-3">
              <label htmlFor="nombre" className="text-[#48D390] font-semibold text-xl">
                Nombre
              </label>
              <input
                type="text"
                id="nombre"
                className="w-full h-10 p-2 rounded-md border-2 border-solid border-gray-400 text-[#48D390] font-semibold"
                placeholder="Ingrese su nombre"
                onChange={(e) => setUsername(e.target.value)}
              />
              <div className="h-5">
                {open && (
                  <p className="text-red-500 font-semibold">Ingrese su nombre</p>
                )}
              </div>
            </div>

            {/* Contraseña */}
            <div className="flex flex-col space-y-3">
              <label htmlFor="Contraseña" className="text-[#48D390] font-semibold text-xl">
                Contraseña
              </label>
              <input
                type="password"
                id="Contraseña"
                className="w-full h-10 p-2 rounded-md border-2 border-solid border-gray-400 text-[#48D390]"
                placeholder="Ingrese su contraseña"
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="h-5">
                {open && (
                  <p className="text-red-500 font-semibold">Ingrese su contraseña</p>
                )}
              </div>
            </div>

            {/* Confirmar contraseña */}
            <div className="flex flex-col space-y-3">
              <label htmlFor="confirmar" className="text-[#48D390] font-semibold text-xl">
                Confirme su contraseña
              </label>
              <input
                type="password"
                id="confirmar"
                className="w-full h-10 p-2 rounded-md border-2 border-solid border-gray-400 text-[#48D390]"
                placeholder="Confirme su contraseña"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <div className="h-5">
                {open && (
                  <p className="text-red-500 font-semibold">Las contraseñas no coinciden</p>
                )}
              </div>
            </div>

            {/* BTN SLIDER */}
            <div className="flex justify-between items-center mb-5 mt-5">
              <button
                className={`bg-[#48D390] hover:bg-[#2ca76c] text-white px-3 py-2 text-xl font-semibold rounded-md transition duration-200 ${
                  selectedOption === "User" ? 'bg-[#48D390]' : 'bg-[#E5E7EB]'
                }`}
                onClick={handleUserClick}
              >
                Usuario
              </button>
              <button
                className={`bg-[#48D390] hover:bg-[#2ca76c] text-white px-3 py-2 text-xl font-semibold rounded-md transition duration-200 ${
                  selectedOption === "Admin" ? 'bg-[#48D390]' : 'bg-[#E5E7EB]'
                }`}
                onClick={handleAdminClick}
              >
                Administrador
              </button>
            </div>

            </div>

            {/* Botón de registro */}
            <div className="flex justify-end">
              <button
                type="button"
                className="bottom-0 bg-[#48D390] hover:bg-[#2ca76c] text-white mt-5 text-xl font-semibold rounded-md p-3 duration-200"
                onClick={validarFormulario}
              >
                Registrarse
              </button>
            </div>

            {errorMessage && (
              <div className="text-red-500 text-center mt-3 font-semibold">
                {errorMessage}
              </div>
            )}

          </form>
        </div>
      </div>
    </>
  );
}

RegisterC.propTypes = {
  register: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  register: (userData) => dispatch(register(userData)),
});

export default connect(null, mapDispatchToProps)(RegisterC);
