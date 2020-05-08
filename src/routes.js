const express = require('express')
const routes = express.Router()

const RunnerController = require('./controllers/RunnerController')
const StageController = require('./controllers/StageController')

//Corredores
routes.get('/corredor', RunnerController.index)
routes.get('/corredor/:id', RunnerController.get)
routes.post('/corredor', RunnerController.create)
routes.put('/corredor/:id', RunnerController.update)
routes.delete('/corredor/:id', RunnerController.delete)

//Etapas
routes.get('/etapa', StageController.index)
routes.get('/etapa/:id', StageController.get)
routes.post('/etapa', StageController.create)
routes.put('/etapa/:id', StageController.update)
routes.delete('/etapa/:id', StageController.delete)


routes.get('/time/:id', StageController.time)
routes.post('/inicio/:id', StageController.inicio)
routes.post('/zerar/:id', StageController.zerar)

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