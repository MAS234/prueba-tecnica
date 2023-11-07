import express from "express";
const app = express();

app.use(express.json());


// ARRAY DE PEDIDOS 
const pedidos = [
  {
    id: 1,
    nombreUser: "Leandro",
    nombreCliente: "Juan",
    producto: "Bateria",
    estado: true
  },
];

// ARRAY DE USUARIOS 
const users = [
  {
    username: "Miguel",
    password: "1234",
    rol: "admin"
  },
  {
    username: "Leandro",
    password: "1234",
    rol: "user"

  }
]

// AUTENTICACION DE USUARIOS 

// VER TODOS LOS USUARIOS 
app.get("/api/usuarios", (req, res) => {
  res.send(users);
})

// LOGUEO
app.post("/api/login", (req, res) => {

  const {username, password} = req.body;

  const user = users.find(user => user.username === username)

  if(!user) return res.status(401).send("usuario no encontrado");

  if(user.password !== password) return res.status(401).send("Contraseña incorrecta");

  res.json({message:"Inicio exitoso"})
  res.send(users)
})

// REGISTRO
app.post("/api/register", (req, res) => {

  const {username, password, rol} = req.body

  const existingUser = users.find(user => user.username === username)

  if(existingUser){
    return res.status(400).send("El usuario ya existe")
  }

  const newUser = {username, password, rol}
  users.push(newUser);

  res.status(201).send("Usuario registrado exitosamente");

})

// PEDIDOS 

app.get("/", (req, res) => {
  res.send("NODE JS AP")
})


// ENDPOINTS DEL USUARIO

// AGREGAR PEDIDO
app.post("/api/pedidos/agregar", (req, res) => {

  const { nombreUser,nombreCliente, producto } = req.body;

    const pedido = {
        id: pedidos.length + 1,
        nombreUser: nombreUser,
        nombreCliente: nombreCliente,
        producto: producto,
        estado: true 
    }

    pedidos.push(pedido);
    res.send(pedido);
})

// VER PEDIDOS DE USUARIO 
app.get("/api/pedidos/:username", (req, res) => {
  const username = req.params.username;
  const pedidosUsuario = pedidos.filter(pedido => pedido.nombreUser === username);
  res.send(pedidosUsuario)
})

// ELIMINAR PEDIDO DE USUARIO 
app.delete("/api/pedidos//:username/:id", (req, res) => {
  const username = req.params.username;
  const id = parseInt(req.params.id);

  const pedido = pedidos.find(pedido => pedido.id === id && pedido.nombreUser === username);

  if(!pedido) return res.status(404).send("Pedido no encontrado");

  const index = pedidos.indexOf(pedido);
  pedidos.splice(index, 1);
  res.send(pedido);
})

// ENDPOINTS DEL ADMIN

// VER TODOS LOS PEDIDOS 
app.get("/api/admin/:username", (req, res) => {
    res.send(pedidos);
});

// ELIMINAR PEDIDOS 
app.delete("/api/pedidos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const pedido = pedidos.find(pedido => pedido.id === id);

  if(!pedido) return res.status(404).send("Pedido no encontrado");

  const index = pedidos.indexOf(pedido);
  pedidos.splice(index, 1);
  res.send(pedido);
})


const port = 80;
app.listen(port, () => console.log(`Escuchando en el puerto ${port}`))