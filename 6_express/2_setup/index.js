const express = require('express')
const app = express()
const port = 3000 // variável de abiente

// render html
const path = require('path')

const basePath = path.join(__dirname, 'templates')

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {
    console.log(`App rodando no porta ${port}`)
})