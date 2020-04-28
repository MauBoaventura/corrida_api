const express = require('express')
const routes = express.Router()

// const OngsController = require('./controllers/OngController')
// const IncidentsController = require('./controllers/IncidentsController')
// const ProfileController = require('./controllers/ProfileController')
// const SessionController = require('./controllers/SessionController')

//Atletas
routes.post('/atleta', SessionController.create)
routes.delete('/apagar', SessionController.create)

//Corrida
routes.post('/inicio', SessionController.create)
routes.post('/config', SessionController.create)

//Relatorios
routes.get('/relatorio/competidores', OngsController.index)
routes.get('/relatorio/categoria', OngsController.index)
routes.get('/relatorio/geral', OngsController.index)



routes.get('/incidents', IncidentsController.index)
routes.post('/incidents', IncidentsController.create)
routes.delete('/incidents/:id', IncidentsController.delete)

routes.get('/profile', ProfileController.index)

module.exports = routes