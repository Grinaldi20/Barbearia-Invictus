require('dotenv').config()

const express = require('express')
const cors = require('cors')

const app = express()

// IMPORTAR ROTAS
const agendamentosRoutes = require('./routes/agendamentos')

app.use(cors())
app.use(express.json())

// ROTA TESTE
app.get('/', (req, res) => {
  res.send('API funcionando')
})

// USAR ROTAS
app.use('/agendamentos', agendamentosRoutes)

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000')
})