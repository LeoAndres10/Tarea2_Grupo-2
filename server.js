const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

const productos = [{
    "id" : 1,
    "nombre" : "Laptop",
    "precio" : 1200
}];


app.get('/api/productos', (req, res) => {
     return res.json(productos);
});

app.listen(PORT, () =>{
console.log("Servidor Escuchando...")
});