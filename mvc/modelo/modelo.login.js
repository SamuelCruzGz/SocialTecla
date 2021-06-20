const sequelize = require ('../../db/db.conexion')

module.exports  = class Login {
    constructor (datos){
        this.datos = datos
    }

    static async listar(){
   
        try {
            let resultado = await sequelize.query(`SELECT * FROM usuario`)
    
            return resultado   
        } catch (e) {
            console.log("Error aqui");
        }
    }

    static async obtId(data){
        let user = [
            data
        ]
        try {
            let resultado = await sequelize.query(`SELECT * FROM usuario WHERE id_usuario = ?`,
                {
                    replacements : user, type : sequelize.QueryTypes.SELECT
                }
            )
            return resultado
        } catch (e) {
            console.log(e);
        }
    }

    static async eliminarUsuario (data){
        let eliminarUsr = [
            data
        ]
        try {
            let resultado = await sequelize.query(`DELETE FROM usuario WHERE id_usuario = ?` ,{
                replacements : eliminarUsr, type :sequelize.QueryTypes.SELECT
            })
        } catch (e) {
            
        }
    }

    static async usuarioExistente (dato){
        let usuarioExiste = [
            dato.usuario,
            dato.pass
        ]
        try {
            let resultado = await sequelize.query(`SELECT * FROM usuario WHERE usuario = ? and pass = ?`,
            {
                replacements : usuarioExiste , type: sequelize.QueryTypes.SELECT
            })
            if (resultado[0] === undefined ){
                return false
            } else {
                return true 
            }
        } catch (e) {
            throw new Error ('Ocurrio un error inesperado')
            console.log(e);
        }
    }

    static async crearUsuario (dato){
        let crearUsr = [
            dato.nombres, 
            dato.apellidos,
            dato.usuario, 
            dato.pass, 
            dato.edad, 
            dato.linkedin
        ]
        try {
            let resultado = await sequelize.query(`insert into usuario (nombres, apellidos, usuario, pass, edad, linkedin) values (?,?,?,?,?,?)`,
            {
                replacements : crearUsr , type: sequelize.QueryTypes.SELECT
            })
        } catch (e) {
            console.log(e); 
        }

    }
}