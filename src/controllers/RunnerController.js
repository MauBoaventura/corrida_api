const crypto = require('crypto')
const connection = require('../database/connection')
const express_validator = require('express-validator')

module.exports = {
    async index(req, res) {       
        const [count] = await connection('runners').count()
        const dados = await connection('runners')
            .select("*")
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
        const errors = express_validator.validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        const {
            name,
            age,
            gender,
            email,
            whatsapp,
            city,
            uf,
            password
        } = req.body

        try {

            const [id] = await connection('runners').insert({
                name,
                age,
                gender,
                email,
                whatsapp,
                city,
                uf,
                password
            })

            res.json({
                id
            })
        } catch (error) {
            res.json({
                error
            })
        }

    },

    async delete(req, res) {
        const id = req.params.id;

        const runner = await connection('runners')
            .select("*")
            .where("id", id)
            .first()

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
        try {
            await connection('runners').where("id", id).update(req.body)
            res.status(204).send()
        } catch (error) {
            res.json({
                error
            })
        }
    }

};