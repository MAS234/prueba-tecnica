# AppPedidos

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
  
App Pedidos
La aplicación "Pedidos" es un sistema de gestión que opera en base a las funcionalidades CRUD (Crear, Leer, Actualizar y Eliminar). Esta app cuenta con dos roles diferentes a la hora de registrarse: Usuario y Administrador. Cada uno tiene distintas capacidades y niveles de acceso.

Funcionalidades por rol:
Usuario
Ver Pedidos: Los usuarios pueden visualizar únicamente los pedidos que ellos mismos han realizado.

Eliminar Pedidos: Tienen la opción de eliminar sus propios pedidos.

Agregar Pedidos: Pueden incluir nuevos pedidos a su historial.

Administrador
Ver Todos los Pedidos: Acceso total a la lista de pedidos de todos los usuarios registrados en el sistema.

Eliminar Pedidos: Capacidad para eliminar cualquier pedido, independientemente del usuario que lo haya creado.

Agregar:agregar nuevos pedidos.

# EJECUTAR LA APLICACION
El proceso para ejecutar la aplicación implica dos pasos principales, uno para el frontend y otro para el backend. Aquí te proporciono las instrucciones detalladas para iniciar ambas partes:

Para el Frontend:
Abre la Terminal:
Dirígete a la carpeta raíz del proyecto.
Ejecuta el Comando: npm run dev

Para el Backend:
Ubícate en la Ruta del Backend:
Accede a la ruta prueba-tecnica\src\api desde la Terminal.
Ejecuta el Servidor Backend: node Api.js

Una vez que ambos servidores estén en ejecución, podrás acceder y utilizar la aplicación. Asegúrate de haber iniciado tanto el servidor del frontend como el del backend para poder aprovechar todas las funcionalidades proporcionadas por la app.

# Credenciales para Acceder
La aplicación dispone de dos usuarios precargados, con las siguientes credenciales para iniciar sesión:

Usuario: Leandro
Contraseña: 1234


Administrador: Miguel
Contraseña: 1234


