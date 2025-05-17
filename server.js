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


app.get('/api/productos', (req, res) => {
     return res.json(productos);
});

app.get('/api/usuarios', (req, res) => {
     return res.json(usuarios);
});

app.listen(PORT, () =>{
console.log(`Servidor Escuchando... en el puerto: ${PORT}`);
});