const express = require('express')
const app = express()
const bodyParse = require('body-parser')
const buscaCep = require('./src/functions/buscaCep')


app.use(bodyParse.json())
app.use(bodyParse.urlencoded({extended:true}))

app.set('view engine','ejs')
//declarando que voou usar p ejs
app.set('views', './src/views')
// mosntrando para o express onde esta minha view
app.get('/',(req,res)=>{
   
   //chamando...
    res.render('index')
})

// pegando os dados da minha view
app.post('/envia-cep',async(req,res) => {
const {cep} = req.body
const resultado = await buscaCep(cep)

    res.render('resultado', {dado:resultado})
}) 
app.listen(3333)

