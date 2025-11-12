const express = require('express')
const professorRouter = require('./route/professores')

const res = require('express/lib/response')
const app = express()
app.use(express.json())

app.use('/professores', professorRouter)

app.listen(3000, () => console.log('Servidor rodando'))