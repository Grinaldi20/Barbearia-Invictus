require('dotenv').config()

const express = require('express')
const cors = require('cors')

const app = express()

const agendamentosRoutes = require('./routes/agendamentos')

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('API funcionando')
})

app.use('/agendamentos', agendamentosRoutes)

// 🔥 CORREÇÃO AQUI
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})