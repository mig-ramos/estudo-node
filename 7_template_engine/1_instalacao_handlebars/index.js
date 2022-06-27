const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

const hbs = exphbs.create({
    partialsDir: ['views/partials'],
})

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.get('/dashboard', (req, res) => {

    const items = ["item a", "item b", "item c"]
    res.render('dashboard', {items})
})

app.get('/post', (req, res) => {
    const post = {
        title: 'Aprender Node JS',
        category: 'JavaScript',
        body: 'Este artigo vai te ajudar a aprender Node.js...',
        comments: 4
    }
    res.render('blogpost', { post })
})

app.get('/blog', (req, res) => {
    const posts = [
        {
        title: 'Aprender Node JS',
        category: 'JavaScript',
        body: 'Teste',
        comments: 4
    },
    {
        title: 'Aprender PHP',
        category: 'PHP',
        body: 'Teste',
        comments: 4
    },
    {
        title: 'Aprender Pyton',
        category: 'Pyton',
        body: 'Teste',
        comments: 4
    }]
    res.render('blog', { posts})
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