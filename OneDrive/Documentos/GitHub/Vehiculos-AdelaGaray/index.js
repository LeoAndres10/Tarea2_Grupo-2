const express = require('express');
const connection = require('./db');

const app = express();
app.use(express.json());

// Obtener todos los vehículos
app.get('/vehiculos', (req, res) => {
  connection.query("SELECT * FROM vehiculos", (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Registrar un nuevo vehículo
app.post('/vehiculos', (req, res) => {
  const { marca, modelo, año_fabricacion, estado } = req.body;
  const query = "INSERT INTO vehiculos (marca, modelo, año_fabricacion, estado) VALUES (?, ?, ?, ?)";
  
  connection.query(query, [marca, modelo, año_fabricacion, estado], (err) => {
    if (err) throw err;
    res.json({ message: "Vehículo registrado exitosamente" });
  });
});

// Actualizar un vehículo por ID
app.put('/vehiculos/:id', (req, res) => {
  const { id } = req.params;
  const { marca, modelo, año_fabricacion, estado } = req.body;
  const query = "UPDATE vehiculos SET marca = ?, modelo = ?, año_fabricacion = ?, estado = ? WHERE id = ?";

  connection.query(query, [marca, modelo, año_fabricacion, estado, id], (err) => {
    if (err) throw err;
    res.json({ message: "Vehículo actualizado exitosamente" });
  });
});

app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});
