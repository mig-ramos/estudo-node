const express = require('express')
const app = express()
const port = 3000 // variável de abiente

app.get('/', (req, res) => {
    res.send('olá mundo!')
})

app.listen(port, () => {
    console.log(`App rodando no porta ${port}`)
})