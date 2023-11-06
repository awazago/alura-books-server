const { Router } = require('express')
const { getLivros } = require('../controller/livros')

const router = Router()

router.get('/', getLivros)

router.post('/', (req, res) => {
    res.send('Chamada em POST')
})

router.put('/', (req, res) => {
    res.send('Chamada em PUT')
})

router.delete('/', (req, res) => {
    res.send('Chamada em DELETE')
})

module.exports = router