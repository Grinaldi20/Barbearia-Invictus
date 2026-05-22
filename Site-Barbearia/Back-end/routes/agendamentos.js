const express = require('express')
const router = express.Router()

const supabase = require('../supabase')

// CRIAR AGENDAMENTO
router.post('/', async (req, res) => {

  try {

   const { nome, telefone, servico, data, horario } = req.body

    // VERIFICAR SE HORÁRIO JÁ EXISTE
   const { data: horarioExistente, error: erroBusca } = await supabase
  .from('agendamentos')
  .select('*')
  .eq('data', data)
  .eq('horario', horario)

if (erroBusca) {
  throw erroBusca
}

if (horarioExistente.length > 0) {
  return res.status(400).json({
    mensagem: 'Esse horário já está ocupado'
  })
}
    // INSERIR NO BANCO
    const { error } = await supabase
      .from('agendamentos')
      .insert([
       {
        nome,
        telefone,
        servico,
        data,
        horario
       }
      ])

    if (error) {
      throw error
    }

    res.status(201).json({
      mensagem: 'Agendamento realizado com sucesso'
    })

  } catch (error) {

    console.log(error)

    res.status(500).json({
      mensagem: 'Erro no servidor'
    })

  }

})

// LISTAR AGENDAMENTOS
router.get('/', async (req, res) => {

  try {

    const { data, error } = await supabase
      .from('agendamentos')
      .select('*')
      .order('data', { ascending: true })

    if (error) {
      throw error
    }

    res.status(200).json(data)

  } catch (error) {

    console.log(error)

    res.status(500).json({
      mensagem: 'Erro ao buscar agendamentos'
    })

  }

})

// DELETAR AGENDAMENTO
router.delete('/:id', async (req, res) => {

  try {

    const { id } = req.params

    const { error } = await supabase
      .from('agendamentos')
      .delete()
      .eq('id', id)

    if (error) {
      throw error
    }

    res.status(200).json({
      mensagem: 'Agendamento removido com sucesso'
    })

  } catch (error) {

    console.log(error)

    res.status(500).json({
      mensagem: 'Erro ao deletar agendamento'
    })

  }

})

module.exports = router
