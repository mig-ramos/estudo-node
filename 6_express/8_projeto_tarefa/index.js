const express = require('express')
const app = express()
const port = 5000
const path = require('path')

//rotas
const projectsRoutes = require('./projects')

// arquivos estáticos
app.use(express.static('public'))

const basePath = path.join(__dirname, 'templates')

app.use(express.static('public'))
app.use('/projects', projectsRoutes)

app.get('/', (req, res) =>{
    res.sendFile(`${basePath}/index.html`)
})

app.use(function(req, res, next) {
    res.status(404).sendFile(`${basePath}/404.html`)
})

app.listen(port, () => {
    console.log(`O servidor está rodando no porta ${port}`)
})