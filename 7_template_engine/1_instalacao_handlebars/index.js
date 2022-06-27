const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

const user = {
    name: "Miguel",
    surname: "Ramos"
}

const palavra = 'Teste'

app.get('/', (req, res) => {
    res.render('home',{ user: user, palavra })
})

app.listen(3000, () => {
    console.log('App funcionando!')
})