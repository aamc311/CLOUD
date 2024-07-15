const express = require('express'); //llamado a fromework
//llamar a handlers del api
const clienteHandlers = require('./app/handlers/cliente.handlers');
const empleadoHandlers = require('./app/handlers/empleado.handlers');
const pedidoHandlers = require('./app/handlers/pedido.handlers');
const productoHandlers = require('./app/handlers/producto.handlers');
const proveedorHandlers = require('./app/handlers/proveedor.handlers');
// variable para encapsular rutas
const router = express.Router();
// registrar las rutas
//rutas de cliente
router.get('/cliente', clienteHandlers.listCliente)// obtener cliente
router.post('/cliente', clienteHandlers.insertCliente)// ontener
router.patch('/cliente/:id', clienteHandlers.updataCliente)
router.delete('/cliente/:id', clienteHandlers.deleteCliente)

module.exports = router;


//Empleado
// registrar las rutas
//rutas de cliente
router.get('/empleado', empleadoHandlers.listEmpleado)// obtener cliente
router.post('/empleado', empleadoHandlers.insertEmpleado)// ontener
router.patch('/empleado/:id', empleadoHandlers.updataEmpleado)
router.delete('/empleado/:id', empleadoHandlers.deleteEmpleado)

//Pedido
// registrar las rutas
//rutas de cliente
router.get('/pedido', pedidoHandlers.listPedido)// obtener cliente
router.post('/pedido', pedidoHandlers.insertPedido)// ontener
router.patch('/pedido/:id', pedidoHandlers.updataPedido)
router.delete('/pedido/:id', pedidoHandlers.deletePedido)

//Producto
// registrar las rutas
//rutas de cliente
router.get('/producto', productoHandlers.listProducto)// obtener cliente
router.post('/producto', productoHandlers.insertProducto)// ontener
router.patch('/producto/:id', productoHandlers.updataProducto)
router.delete('/producto/:id', productoHandlers.deleteProducto)

//Proveedor
// registrar las rutas
//rutas de cliente
router.get('/proveedor', proveedorHandlers.listProveedor)// obtener cliente
router.post('/proveedor', proveedorHandlers.insertProveedor)// ontener
router.patch('/proveedor/:id', proveedorHandlers.updataProveedor)
router.delete('/proveedor/:id', proveedorHandlers.deleteProveedor)