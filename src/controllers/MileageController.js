const crypto = require('crypto')
const moment = require('moment')
const connection = require('../database/connection')

module.exports = {
    async index(req, res, next) {

        const dados = await connection('mileage')
            .select("*")

        res.json(dados)
    },

    async get(req, res) {
        const stage_id = req.params.stage_id;

        const dados = await connection('mileage')
            .select("*")
            .where("stage_id", stage_id)

        res.json(dados)
    },

    async create(req, res, next) {
        const stage_id = req.header('idStage');
        console.log(stage_id)
        const { distance, mileage = "km" } = req.body
        for (let i = 0; i < distance.length; i++) {
            let km = (distance[i])
            let resp = await connection('mileage').insert({
                stage_id,
                distance: km,
                mileage
            })
            console.log("Mileage: " + resp)
        }
        res.status(200).send()

    },

    async delete(req, res) {
        const stage_id = req.params.stage_id;

        const mileage = await connection('mileage')
            .select("*")
            .where("stage_id", stage_id)
            .first()

        if (mileage == undefined)
            return res.status(401).json({
                error: "Mileage not exist"
            })

        await connection('mileage').where("stage_id", stage_id).delete()

        res.status(204).send()
    },

};