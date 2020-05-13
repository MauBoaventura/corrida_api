// const setTZ = require('set-tz');
// setTZ('Bahia Standard Time')

const express = require('express')
const cors = require('cors')
const routes = require('./routes')

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(3030, () => {
    console.log("Servidor rodando");
    d = new Date();
    console.log("" +d)
})