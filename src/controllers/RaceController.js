const crypto = require('crypto')
const moment = require('moment')
const connection = require('../database/connection')

module.exports = {
    async index(req, res) {
        const {
            page = 1
        } = req.query

        const [count] = await connection('stages').count()
        const dados = await connection('stages')
            .limit(5)
            .offset((page - 1) * 5)
            .select("*")
        res.header('X-Total-Count', count['count(*)'])

        res.json(dados)
    },

    async get(req, res) {
        const id = req.params.id;

        const dados = await connection('race')
            .select("*")
            .where("id", id)

        res.json(dados)
    },

    async cadastrar(req, res) {

        const stage_id = req.header('idStage');
        const runner_id = req.header('idRunner');

        var { km } = req.body


        //Verifica se o id da etapa existe
        const stage = await connection('stages')
            .select("*")
            .where("id", stage_id)
            .first()

        if (stage == undefined)
            return res.status(401).json({
                error: "Stage not exist"
            })

        //Verifica se o id do corredor existe
        const runner = await connection('runners')
            .select("*")
            .where("id", runner_id)
            .first()

        if (runner == undefined)
            return res.status(401).json({
                error: "Runner not exist"
            })


        const [id] = await connection('race').insert({
            stage_id,
            runner_id,
            km,
        })


        res.json({
            id,
            stage_id,
            runner_id,
            km,
            number
        })
    },

    async delete(req, res) {
        const id = req.params.id;

        const stage = await connection('stages')
            .select("*")
            .where("id", id)
            .first()

        if (stage == undefined)
            return res.status(401).json({
                error: "Stage not exist"
            })

        await connection('stages').where("id", id).delete()

        res.status(204).send()
    },

    async update(req, res) {
        const id = req.params.id;

        const stage = await connection('stages')
            .select("*")
            .where("id", id)
            .first()

        if (stage == undefined)
            return res.status(401).json({
                error: "Stage not exist"
            })

        await connection('stages').where("id", id).update(req.body)

        res.status(204).send()

    },

    async time(req, res) {
        const id = req.params.id;

        const stage = await connection('stages')
            .select("*")
            .where("id", id)
            .first()

        if (stage == undefined)
            return res.status(401).json({
                error: "Stage not exist"
            })

        stage.created_at
        res.status(200).json(stage)

    },

    async inicio(req, res) {
        const id = req.params.id;

        const stage = await connection('stages')
            .select("*")
            .where("id", id)
            .first()

        if (stage == undefined)
            return res.status(401).json({
                error: "Stage not exist"
            })

        await connection('stages').where("id", id).update({ start: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss') })

        res.status(200).json({
            start: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')
        })
    },

    async zerar(req, res) {
        const id = req.params.id;

        const stage = await connection('stages')
            .select("*")
            .where("id", id)
            .first()

        if (stage == undefined)
            return res.status(401).json({
                error: "Stage not exist"
            })

        await connection('stages').where("id", id).update({ start: null })

        res.status(200).send()

    }

};