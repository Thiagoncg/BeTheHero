const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

//Session Login Ong,  create session login
routes.post('/sessions', SessionController.create);

//List All Ongs
routes.get('/ongs', OngController.index);
//Create Ongs
routes.post('/ongs', OngController.create);

//List especific incidents
routes.get('/profile', ProfileController.index);

//List All Incidents
routes.get('/incidents', IncidentController.index);
//create Incidents
routes.post('/incidents', IncidentController.create);
//Delete Incidents
routes.delete('/incidents/:id',IncidentController.delete);


module.exports = routes;