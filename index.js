const express = require('express')
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const appRoutes = require('./routes/routes')
const app = express()
const PORT = 3000


app.listen(PORT, function () {
    console.log(`servidor iniciado na porta ${PORT}`)
})

//template engine
app.engine('handlebars', handlebars.engine())
app.set('view engine', 'handlebars')
app.set('views', './views')

//body-parser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/', appRoutes)

