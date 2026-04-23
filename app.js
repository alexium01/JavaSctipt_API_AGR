const express = require('express');
const app = express();
const port = 3306;
const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'alexgarros',
  password: '689965954aA',
  database: 'productos',
});

app.use(express.json())

app.get('/api/products', (req, res) => {
  db.query('SELECT * FROM products', (err, results) => {
    if (err) {
      console.error('Error al obtener productos:', err);
      res.status(500).json({ error: 'Error al obtener productos' });
    } else {
      res.json({ products: results });
    }
  });
});

app.listen(port, () => {
  console.log(`El servidor esta escuchando en el puerto ${port}`);
});