const express = require('express');
const app = express(); 
const port = 3000;
import db from './db.js';
const routes = require('./Router/routes.js');

app.use(express.json());
app.use('/api', routes);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});