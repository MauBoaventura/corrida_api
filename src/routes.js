const express = require('express')
const routes = express.Router()

// const OngsController = require('./controllers/OngController')
// const IncidentsController = require('./controllers/IncidentsController')
// const ProfileController = require('./controllers/ProfileController')
// const SessionController = require('./controllers/SessionController')

//Atletas
routes.get('/atleta', SessionController.create)
routes.post('/atleta', SessionController.create)
routes.post('/atualiza/:id', SessionController.create)
routes.delete('/atleta/:id', SessionController.create)


//Corrida
routes.post('/inicio', SessionController.create)
routes.post('/config', SessionController.create)
routes.post('/chegada', SessionController.create)
routes.post('/zerar', SessionController.create)
routes.post('/desqualifica/:id', SessionController.create)

//Relatorios
routes.get('/relatorio/geral', OngsController.index)
routes.get('/relatorio/competidores', OngsController.index)
routes.get('/relatorio/categoria', OngsController.index)



routes.get('/incidents', IncidentsController.index)
routes.post('/incidents', IncidentsController.create)
routes.delete('/incidents/:id', IncidentsController.delete)

routes.get('/profile', ProfileController.index)

module.exports = routes