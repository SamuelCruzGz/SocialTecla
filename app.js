var express = require ('express')
const { fchown } = require('fs')
var app = express()
require('dotenv').config()
const sequelize = require('./db/db.conexion')
const vistaLogin = require ('./mvc/vista/vista.login')

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//settings
app.use(express.static(__dirname + '/public'))
app.set('view engine','ejs')
app.set('views',__dirname+'/views')  

async function inicioServer(){
    try {
        await sequelize.authenticate()
        app.listen(process.env.PORT, function(){
            console.log(`Sistema iniciado en http://${process.env.HOST}:${process.env.PORT}`);
        })
    } catch (e) {
        console.log("Conexion fallida", e);
    }
}

inicioServer()

vistaLogin(app)