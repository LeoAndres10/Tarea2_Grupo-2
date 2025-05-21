const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

const productos = [{
    "id" : 1,
    "nombre" : "Laptop",
    "precio" : 1200
}];

const usuarios = [{
    "id" : 1,
    "nombre" : "Juan",
    "email" : "juan@email.com"
}];

const categorias = [{
    "id" : 1,
    "nombre" : "Electronica"
}];

const pedidos = [{
    "id" : 1,
    "usuario" : "Juan",
    "total" : 500
}];

app.get('/api/productos', (req, res) => {
     return res.json(productos);
});

app.get('/api/usuarios', (req, res) => {
     return res.json(usuarios);
});

app.get('/api/categorias', (req, res) => {
     return res.json(categorias);
});

app.get('/api/pedidos', (req, res) => {
     return res.json(pedidos);
});

app.listen(PORT, () =>{
console.log(`Servidor Escuchando... en el puerto: ${PORT}`);
});