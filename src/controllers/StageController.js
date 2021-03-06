const crypto = require('crypto')
const moment = require('moment')
const connection = require('../database/connection')
const MileageController = require('../controllers/MileageController')

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

    async create(req, res, next) {
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

        await salvar(req, res, id)

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

async function salvar(req, res, id) {
    const stage_id = id;
    const { distance, mileage = "km" } = req.body
    for (let i = 0; i < distance.length; i++) {
        let km = (distance[i])
        let resp = await connection('mileage').insert({
            stage_id,
            distance: km,
            mileage
        })
    }

}
