const crypto = require('crypto')
const connection = require('../database/connection')

module.exports = {
    async index(req, res) {
        const {
            page = 1
        } = req.query

        const [count] = await connection('runners').count()
        const dados = await connection('runners')
            .limit(5)
            .offset((page - 1) * 5)
            .select("*")
        res.header('X-Total-Count', count['count(*)'])
        console.log(dados)
        res.json(dados)
    },

    async get(req, res) {
        const id = req.params.id;

        const dados = await connection('runners')
            .select("*")
            .where("id", id)

        res.json(dados)
    },

    async create(req, res) {
        const {
            name,
            age,
            gender,
            email,
            whatsapp,
            city,
            uf,
        } = req.body

        const [id] = await connection('runners').insert({
            name,
            age,
            gender,
            email,
            whatsapp,
            city,
            uf,
        })

        res.json({
            id
        })
    },

    async delete(req, res) {
        const id = req.params.id;

        const runner = await connection('runners')
            .select("*")
            .where("id", id)
            .first()
        console.log(runner)

        if (runner == undefined)
            return res.status(401).json({
                error: "Runner not exist"
            })

        await connection('runners').where("id", id).delete()

        res.status(204).send()
    },

    async update(req, res) {
        const id = req.params.id;

        const runner = await connection('runners')
            .select("*")
            .where("id", id)
            .first()

        if (runner == undefined)
            return res.status(401).json({
                error: "Runner not exist"
            })

        await connection('runners').where("id", id).update(req.body)

        res.status(204).send()

    }

};