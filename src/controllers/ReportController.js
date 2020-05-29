const crypto = require('crypto')
const moment = require('moment')
const connection = require('../database/connection')

module.exports = {
    async geral(req, res) {
        const stage_id = req.header('idStage');
        const runner_id = req.header('idRunner');

        const todos_corredores = await connection('race')
            .where({ stage_id, isQualify: true })
            .join('runners', 'race.runner_id', '=', 'runners.id')
            .join('stages', 'race.stage_id', '=', 'stages.id')
            .select('runners.name as name_runner', 'stages.name as name_stage', 'race.number', 'race.km', 'race.totaltime')


        res.json(todos_corredores)
    },

    async geral_quilometragem(req, res) {
        const stage_id = req.header('idStage');
        const runner_id = req.header('idRunner');

        let km = await connection('race')
            .select("km")
            .where({ runner_id, stage_id })
            .first()

        km = JSON.parse(JSON.stringify(km)).km

        const todos_corredores = await connection('race')
            .where({ stage_id, km, isQualify: true })
            .join('runners', 'race.runner_id', '=', 'runners.id')
            .join('stages', 'race.stage_id', '=', 'stages.id')
            .select('runners.name as name_runner', 'stages.name as name_stage', 'race.number', 'race.km', 'race.totaltime')


        res.json(todos_corredores)
    },

    async geral_gender(req, res) {
        const stage_id = req.header('idStage');
        const runner_id = req.header('idRunner');

        let gender = await connection('runners')
            .select("gender")
            .where({ id: runner_id })
            .first()

        gender = JSON.parse(JSON.stringify(gender)).gender

        const todos_corredores = await connection('race')
            .where({ stage_id, "runners.gender": gender, isQualify: true })
            .join('runners', 'race.runner_id', '=', 'runners.id')
            .join('stages', 'race.stage_id', '=', 'stages.id')
            .select('runners.name as name_runner', 'stages.name as name_stage', 'race.number', 'race.km', 'race.totaltime')


        res.json(todos_corredores)
    },

};