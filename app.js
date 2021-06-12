var express = require ('express')
const { fchown } = require('fs')
var app = express()
require('dotenv').config()
const sequelize = require('./db/db.conexion')

app.use(express.json())


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