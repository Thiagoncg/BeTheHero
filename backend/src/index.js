const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

// app.use(cors(
//     origin: 'http://meuapp.com.br'// endereço de onde esta o front end
// ));
app.use(cors()); // todas as aplicações front de qualquer endereço pode acessar esta aplicação
app.use(express.json());
app.use(routes);



app.listen(3333);