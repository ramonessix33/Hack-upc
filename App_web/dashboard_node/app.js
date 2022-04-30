const express = require('express')
const path = require ('path')
const expressLayouts = require('express-ejs-layouts')

const app = express()

app.set('view engine', 'ejs')
app.use(expressLayouts)

app.use(express.static(path.join(__dirname,'public')))

// utilizamos router
const router = require('./routes/router')
app.use(router.routes)

/*
app.get('/', (req, res)=>{
    res.send('Dashboard con Node Js')
}) */

app.listen(3000, ()=> {
    console.log('Server up running in http://localhost:3000')
})