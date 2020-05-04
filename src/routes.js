const express = require('express')
const routes = express.Router()

const CorredorController = require('./controllers/CorredorController')
// const IncidentsController = require('./controllers/IncidentsController')
// const ProfileController = require('./controllers/ProfileController')
// const SessionController = require('./controllers/SessionController')

//Corredores
routes.get('/corredor', CorredorController.index)
routes.get('/corredor/:id', CorredorController.get)
routes.post('/corredor', CorredorController.create)
routes.put('/corredor/:id', CorredorController.update)
routes.delete('/corredor/:id', CorredorController.delete)

//Etapas
// routes.get('/etapa', SessionController.index)
// routes.get('/etapa/:id', SessionController.index)
// routes.post('/etapa', SessionController.create)
// routes.put('/etapa/:id', SessionController.create)
// routes.post('/inicio/:id', SessionController.create)
// routes.post('/zerar/:id', SessionController.create)

// //Corrida
// routes.post('/chegada/:id', SessionController.create)
// routes.post('/qualifica/:id', SessionController.create)
// routes.post('/desqualifica/:id', SessionController.create)

// //Relatorios
// routes.get('/relatorio/geral', OngsController.index)
// routes.get('/relatorio/competidores', OngsController.index)
// routes.get('/relatorio/categoria', OngsController.index)


// routes.get('/profile', ProfileController.index)

module.exports = routes