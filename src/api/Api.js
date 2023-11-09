import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

// ARRAY DE PEDIDOS
const pedidos = [
  {
    id: 1,
    nombreUser: "Leandro",
    nombreCliente: "Juan",
    producto: "Bateria",
    estado: true,
  },
  {
    id: 2,
    nombreUser: "Leandro",
    nombreCliente: "Pedro",
    producto: "Motor",
    estado: true,
  },
  {
    id: 3,
    nombreUser: "Leandro",
    nombreCliente: "Jorge",
    producto: "Rueda",
    estado: true,
  },
  {
    id: 4,
    nombreUser: "Jose",
    nombreCliente: "Daniel",
    producto: "vidrio",
    estado: true,
  },
];

// ARRAY DE USUARIOS
const users = [
  {
    username: "Miguel",
    password: "1234",
    rol: "Admin",
  },
  {
    username: "Leandro",
    password: "1234",
    rol: "User",
  },
];

// AUTENTICACION DE USUARIOS

// VER TODOS LOS USUARIOS
app.get("/api/usuarios", (req, res) => {
  res.send(users);
});

// LOGUEO
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find((user) => user.username === username);

  if (!user) {
    return res
      .status(401)
      .json({ error: "Usuario no encontrado", username, password });
  }

  if (user.password !== password) {
    return res.status(401).json({ error: "Contraseña incorrecta" });
  }

  res.json({ message: "Inicio exitoso", user: { ...user, role: user.rol } });
});

// REGISTRO
app.post("/api/register", (req, res) => {
  const { username, password, rol } = req.body;

  const existingUser = users.find((user) => user.username === username);

  if (existingUser) {
    return res.status(400).send("El usuario ya existe");
  }

  const newUser = { username, password, rol };
  users.push(newUser);

  res.status(201).send("Usuario registrado exitosamente");
});

// PEDIDOS

app.get("/", (req, res) => {
  res.send("NODE JS AP");
});

// ENDPOINTS

// AGREGAR PEDIDO
app.post("/api/pedidos/agregar", (req, res) => {
  const { nombreUser, nombreCliente, producto } = req.body;

  const pedido = {
    id: pedidos.length + 1,
    nombreUser: nombreUser,
    nombreCliente: nombreCliente,
    producto: producto,
    estado: true,
  };

  pedidos.push(pedido);
  res.send(pedido);
});

// VER PEDIDOS DE USUARIO
app.get("/api/pedidos/:username", (req, res) => {
  const username = req.params.username;

  // Buscar el usuario en la lista por el nombre de usuario
  const user = users.find((user) => user.username === username);

  var pedidoFinal = pedidos

  if (user) {
    if (user.rol === "Admin") {
      // Si el usuario es un administrador, devolver todos los pedidos
      
      res.json({ message: "Estos son todos los pedidos", pedidoFinal});
    } else {
      // Si el usuario es un usuario regular, devolver solo sus pedidos
      pedidoFinal = pedidos.filter(
        (pedido) => pedido.nombreUser === username
      );
      res.json({
        message: "Estos son los pedidos del usuario",
        pedidoFinal,
      });
    }
  } else {
    res.status(404).json({ message: "Usuario no encontrado" });
  }
});

// ELIMINAR PEDIDO DE USUARIO 
app.delete("/api/pedidos/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const pedido = pedidos.find(
    (pedido) => pedido.id === id 
  );

  if (!pedido) return res.status(404).send("Pedido no encontrado");

  const index = pedidos.indexOf(pedido);
  pedidos.splice(index, 1);
  res.send(pedido);
});

const port = 80;
app.listen(port, () => console.log(`Escuchando en el puerto ${port}`));
