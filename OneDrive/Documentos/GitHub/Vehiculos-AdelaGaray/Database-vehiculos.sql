CREATE DATABASE flota_vehiculos;
USE flota_vehiculos;

CREATE TABLE vehiculos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  marca VARCHAR(255),
  modelo VARCHAR(255),
  año_fabricacion INT,
  estado VARCHAR(50)
);