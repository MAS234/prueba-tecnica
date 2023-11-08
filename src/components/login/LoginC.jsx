import { useState } from "react";

function LoginC() {
  const [nombre, setNombre] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);

  // VALIDACIONES
  const validarFormulario = (e) => {
    e.preventDefault();

    if (nombre === "" || password === "") {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  return (
    <div className="w-full md:w-96 h-[70vh] flex items-center justify-center">
      <div className="w-[22rem] md:w-96 h-full bg-white rounded-md shadow-lg shadow-gray-900 p-5">
        <h1 className="text-4xl font-bold text-center text-[#48D390] mb-5">Login</h1>
        <form action="">
          {/* Nombre */}
          <div className="flex flex-col space-y-3">
            <label htmlFor="nombre" className="text-[#48D390] font-semibold text-xl">
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              className="w-full h-10 p-2 rounded-md border-2 border-solid border-gray-400 text-[#48D390]"
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

          <div className="flex flex-col justify-end">
            <button
              type="button"
              className="bottom-0 bg-[#48D390] hover:bg-[#2ca76c] text-white mt-5 text-xl font-semibold rounded-md p-3 duration-200"
              onClick={validarFormulario}
            >
              Loguearse
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginC;
