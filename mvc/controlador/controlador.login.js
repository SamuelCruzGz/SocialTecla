const login = require ('../modelo/modelo.login')
const jwt = require ('jsonwebtoken')

module.exports = class Usuario {

    constructor(datos) {
        this.datos = datos
    }

    static async perfilUsuario(){
        try {
            let resultado = await login.listar()
            return resultado
        } catch (e) {
            console.log(e);
        }
    }

    static async obtenerId(dato){
        try {
            let resultado = await login.obtId(dato)
            return resultado
        } catch (e) {
            console.log(e);
        }
    }

    static async eliminarUsuario (dato){
        try {
            let resultado = await login.eliminarUsuario(dato)
            return 'Baja correcta'
        } catch (e) {
            console.log(e);
        }
    }

    static async verificacionUsuario (req,res,next){
        let token = req.headers['authorization']
        if (token != undefined){
            let tokenchk = token.split(' ')[1]
            let resultado = jwt.verify(tokenchk, process.env.SECRET_KEY)
            if (resultado){
                return next ()
            }else {
                throw new Error ('Token no valido')
            }
        }else {
            res.status(400).json('Este sistema es privado y seguro, necesita un Token para ingresar')
        }
    }

    static async revisarUSuario (usr){
        let usrRev = usr
        try {
            let resultado = await login.usuarioExistente(usrRev)
            console.log(resultado);
            if (resultado){
                return resultado
            }else{
                throw new Error ('No existe el usuario')
            }
        } catch (e) {
            console.log(e);
            throw new Error ('Ocurrio un error inesperado')
        }
    }

    static async generaToken (data){
        try {
            let resultado = jwt.sign({
                data}, process.env.SECRET_KEY
            )
            return resultado
        } catch (e) {
            console.log(e);
            throw new Error ('Ocurrio un error inesperado')
        }
    }

    static async crearUsuario (dato){
        try {
            await login.crearUsuario(dato)
            return 'Alta correcta'
        } catch (e) {
            console.log(e);
        }
    }

    

}

