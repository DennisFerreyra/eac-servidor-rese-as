const express = require('express');
const app = express();

app.get('/', (_, res) => {
  res.send("Hola mundo");
});

app.get('/:nombre/:apellido', (req, res) => {
  const nombre = req.params.nombre;
  const apellido = req.params.apellido;
  res.send(`Tu nombre es ${nombre} ${apellido}`);
});

app.listen(3000); 