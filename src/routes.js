const express = require('express')
const routes = express.Router()
const validator = require('express-validator')

const RunnerController = require('./controllers/RunnerController')
const StageController = require('./controllers/StageController')
const RaceController = require('./controllers/RaceController')
const MileageController = require('./controllers/MileageController')
const ReportController = require('./controllers/ReportController')

// Corredores
routes.get('/corredor', RunnerController.index)
routes.get('/corredor/:id', RunnerController.get)
routes.post('/corredor', [
    validator.check('email').isEmail().withMessage('Is not a valid format!'),
    validator.check('age').isISO8601().toDate(),
    validator.check('gender').isIn(['Female', 'Male']),
    validator.check('whatsapp').customSanitizer(value => {
        return value.split("").filter(n => (Number(n) || n == 0)).join("");
    }),

], RunnerController.create)
routes.put('/corredor/:id', RunnerController.update)
routes.delete('/corredor/:id', RunnerController.delete)

// Etapas
routes.get('/etapa', StageController.index)
routes.get('/etapa/:id', StageController.get)
routes.post('/etapa', StageController.create)
routes.put('/etapa/:id', StageController.update)
routes.delete('/etapa/:id', StageController.delete)

// Configurações
routes.get('/quilometragem', MileageController.index)
routes.get('/quilometragem/:stage_id', MileageController.get)
routes.post('/quilometragem', MileageController.create)
routes.delete('/quilometragem/:stage_id', MileageController.delete)


// Tempo
routes.get('/time/:id', StageController.time)
routes.put('/inicio/:id', StageController.inicio)
routes.put('/zerar/:id', StageController.zerar)

// Corrida
/*
    Header: idStage, idRunner
*/
routes.get('/corrida/:id', RaceController.get)
routes.post('/corrida', RaceController.cadastrar)
routes.put('/qualifica', RaceController.qualifica)
routes.put('/desqualifica', RaceController.desqualifica)
routes.put('/chegada/:number', RaceController.chegada)

// Relatorios
/*
    Header: idStage, idRunner
*/
routes.get('/relatoriogeral', ReportController.geral)
routes.get('/relatoriogeralquilometragem', ReportController.geral_quilometragem)
// routes.get('/relatoriocompetidores', OngsController.index)
// routes.get('/relatoriocategoria', OngsController.index)

// routes.get('/profile', ProfileController.index)

module.exports = routes