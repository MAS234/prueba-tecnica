import { useState } from "react";

function RegisterC() {
  const [nombre, setNombre] = useState("");
  const [password, setPassword] = useState("");
  const [confirmarPassword, setConfimarPassword] = useState("");
  const [open, setOpen] = useState(false);

  console.log(open);

  // VALIDACIONES
  const validarFormulario = (e) => {
    e.preventDefault();

    if (nombre === "" || password === "" || confirmarPassword === "") {
      setOpen(true);
    } else {
      setOpen(false);
      if (password === confirmarPassword) {
        setOpen(true);
      } else {
        setOpen(false);
      }
    }
  };

  //   BTN SLIDER
  const [selectedOption, setSelectedOption] = useState("user");

  const handleUserClick = (e) => {
    e.preventDefault();
    setSelectedOption("user");
  };

  const handleAdminClick = (e) => {
    e.preventDefault();
    setSelectedOption("admin");
  };

  return (
    <>
      <div className="w-full md:w-96 h-full flex items-center justify-center">
        <div className="w-[22rem] md:w-96 bg-white rounded-md shadow-lg shadow-gray-900 p-5">
          <h1 className="text-4xl font-bold text-center text-[#48D390] mb-5">
            Registro
          </h1>
          <form action="">
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
                onChange={(e) => setNombre(e.target.value)}
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
                onChange={(e) => setConfimarPassword(e.target.value)}
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
                  selectedOption === "user" ? 'bg-[#48D390]' : 'bg-[#E5E7EB]'
                }`}
                onClick={handleUserClick}
              >
                Usuario
              </button>
              <button
                className={`bg-[#48D390] hover:bg-[#2ca76c] text-white px-3 py-2 text-xl font-semibold rounded-md transition duration-200 ${
                  selectedOption === "admin" ? 'bg-[#48D390]' : 'bg-[#E5E7EB]'
                }`}
                onClick={handleAdminClick}
              >
                Administrador
              </button>
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                className="bottom-0 bg-[#48D390] hover:bg-[#2ca76c] text-white mt-5 text-xl font-semibold rounded-md p-3 duration-200"
                onClick={validarFormulario}
              >
                Registrarse
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default RegisterC;
