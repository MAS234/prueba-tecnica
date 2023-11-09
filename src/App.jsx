import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Bienvenida from "./pages/Bienvenida";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Pedidos from "./pages/Pedidos";


function App() {

  return (
    <>
      <Router>
        <Routes>
        <Route path="/" element={<Bienvenida/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/pedidos" element={<Pedidos/>}/>

            
        </Routes>
      </Router>
    </>
  )
}

export default App
