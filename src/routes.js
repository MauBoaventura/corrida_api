const express = require('express')
const routes = express.Router()

// const OngsController = require('./controllers/OngController')
// const IncidentsController = require('./controllers/IncidentsController')
// const ProfileController = require('./controllers/ProfileController')
// const SessionController = require('./controllers/SessionController')

//Corredores
routes.get('/corredor', SessionController.index)
routes.get('/corredor/:id', SessionController.index)
routes.post('/corredor', SessionController.create)
routes.put('/corredor/:id', SessionController.create)
routes.delete('/corredor/:id', SessionController.create)

//Etapas
routes.get('/etapa', SessionController.index)
routes.get('/etapa/:id', SessionController.index)
routes.post('/etapa', SessionController.create)
routes.put('/etapa/:id', SessionController.create)
routes.post('/inicio/:id', SessionController.create)
routes.post('/zerar/:id', SessionController.create)

//Corrida
routes.post('/chegada/:id', SessionController.create)
routes.post('/qualifica/:id', SessionController.create)
routes.post('/desqualifica/:id', SessionController.create)

//Relatorios
routes.get('/relatorio/geral', OngsController.index)
routes.get('/relatorio/competidores', OngsController.index)
routes.get('/relatorio/categoria', OngsController.index)


// routes.get('/profile', ProfileController.index)

module.exports = routes