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

        const dados = await connection('stages')
            .select("*")
            .where("id", id)

        res.json(dados)
    },

    async create(req, res) {
        const {
            name,
            city,
            uf,
        } = req.body

        const [id] = await connection('stages').insert({
            name,
            city,
            uf,
        })

        res.json({
            id
        })
    },

    async delete(req, res) {
        const id = req.params.id;

        const stage = await connection('stages')
            .select("*")
            .where("id", id)
            .first()
        console.log("Entrou aqui :" + stage)

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

        res.status(200).json({ start: stage.start })

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

        await connection('stages').where("id", id).update({ start: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss.SSS') })

        res.status(200).json({
            start: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss.SSS')
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