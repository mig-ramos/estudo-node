const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/dashboard', (req, res) => {
    res.render('dashboard')
})

// exemplos de dados
const user = {
    name: "Miguel",
    surname: "Ramos"
}

const palavra = 'Teste'

const auth = true
const approved = true

app.get('/', (req, res) => {
    res.render('home',{ user: user, palavra, auth, approved })
})

app.listen(3000, () => {
    console.log('App funcionando!')
})